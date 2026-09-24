"use client";

import { useEffect } from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const contacts = [
  {
    icon: PhoneIcon,
    label: "WhatsApp",
    value: "+62 814-1321-6961",
    href: "https://wa.me/6281413216961",
  },
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "Digital.companygroup@gmail.com",
    href: "mailto:Digital.companygroup@gmail.com",
  },
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Kontak Digital Company Group"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Tutup modal kontak"
      />

      <div className="relative w-full max-w-md rounded-xl bg-white shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          aria-label="Tutup modal"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="p-6 pt-8">
          <h2 className="text-xl font-bold text-gray-900">Hubungi Kami</h2>
          <p className="mt-1 text-sm text-gray-600">
            Pilih kontak yang paling mudah untuk Anda.
          </p>

          <div className="mt-6 space-y-3">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-blue-500 hover:bg-blue-50"
                >
                  <Icon className="h-5 w-5 text-blue-600" />
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      {contact.label}
                    </p>
                    <p className="truncate text-sm font-semibold text-gray-900">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-lg bg-gray-50 p-4">
            <MapPinIcon className="mt-0.5 h-5 w-5 text-gray-500" />
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">Lokasi</p>
              <p className="text-sm text-gray-700">Bandung dan sekitarnya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
