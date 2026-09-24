"use client";

import { useEffect, useState, lazy, Suspense } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button, Container } from "../atoms";

const ContactModal = lazy(() => import("./ContactModal"));

const navLinks = [
  { name: "Beranda", href: "#" },
  { name: "Tentang", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Keunggulan", href: "#benefits" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const solidHeader = isScrolled || !isHomePage;

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    const handleOpenModal = () => setIsContactModalOpen(true);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("openContactModal", handleOpenModal);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("openContactModal", handleOpenModal);
    };
  }, [isHomePage]);

  const navigate = (href: string) => {
    setIsMobileMenuOpen(false);

    if (!isHomePage) {
      router.push(href === "#" ? "/" : `/${href}`);
      return;
    }

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const darkHeader = !solidHeader;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
          isScrolled
            ? "border-gray-200 bg-white/95 backdrop-blur-sm"
            : "border-transparent bg-transparent"
        }`}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between" aria-label="Navigasi utama">
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                navigate("#");
              }}
              className="relative h-12 w-12"
              aria-label="Digital Company Group — Beranda"
            >
              <Image
                src="/icon-96.webp"
                alt="Digital Company Group"
                fill
                priority
                sizes="48px"
                className={`object-contain ${darkHeader ? "brightness-0 invert" : ""}`}
              />
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(link.href);
                  }}
                  className={`text-sm font-medium transition-colors ${
                    darkHeader
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-950"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button onClick={() => setIsContactModalOpen(true)}>Hubungi Kami</Button>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className={`rounded-md p-2 lg:hidden ${darkHeader ? "text-white" : "text-gray-900"}`}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-lg border border-gray-200 bg-white p-3 shadow-lg lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                navigate(link.href);
              }}
              className="block rounded-md px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {link.name}
            </a>
          ))}
          <Button
            className="mt-2 w-full"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsContactModalOpen(true);
            }}
          >
            Hubungi Kami
          </Button>
        </div>
      )}

      {isContactModalOpen && (
        <Suspense fallback={null}>
          <ContactModal
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
}
