import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Container } from "../atoms";

const sectionLinks = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Keunggulan", href: "#benefits" },
  { label: "FAQ", href: "/faq" },
];

const serviceLinks = [
  { label: "Pemasangan CCTV", href: "#services" },
  { label: "Instalasi Jaringan", href: "#services" },
  { label: "Server & Maintenance", href: "#services" },
  { label: "Pengadaan Perangkat IT", href: "#services" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-14 text-gray-400">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm">
            <div className="relative h-12 w-12">
              <Image
                src="/icon-96.webp"
                alt="Digital Company Group"
                fill
                sizes="48px"
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Instalasi CCTV, jaringan, server, dan pengadaan perangkat IT untuk
              bisnis di Bandung dan sekitarnya.
            </p>
          </div>

          <nav aria-label="Navigasi situs">
            <h3 className="text-sm font-semibold text-white">Navigasi</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {sectionLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Layanan">
            <h3 className="text-sm font-semibold text-white">Layanan</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-white">Kontak</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/6281413216961"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4" />
                  +62 814-1321-6961
                </a>
              </li>
              <li>
                <a
                  href="mailto:Digital.companygroup@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  Digital.companygroup@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500">
          <p>&copy; {currentYear} Digital Company Group.</p>
        </div>
      </Container>
    </footer>
  );
}
