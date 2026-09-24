"use client";

import { useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Button, Container, Heading, Input, Textarea } from "../atoms";

const contacts = [
  {
    icon: PhoneIcon,
    label: "WhatsApp / Telepon",
    value: "+62 814-1321-6961",
    href: "https://wa.me/6281413216961",
  },
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "Digital.companygroup@gmail.com",
    href: "mailto:Digital.companygroup@gmail.com",
  },
  {
    icon: MapPinIcon,
    label: "Area Layanan",
    value: "Bandung dan sekitarnya",
    href: null,
  },
];

export default function CTA() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      `Halo, saya ${formData.name}.`,
      `Nomor yang bisa dihubungi: ${formData.phone}.`,
      `Kebutuhan: ${formData.message}`,
    ].join("\n");

    window.open(
      `https://wa.me/6281413216961?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gray-900 py-24 text-white md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Kontak
            </p>
            <Heading level={2} color="white" className="mt-2 tracking-tight">
              Diskusikan kebutuhan CCTV, jaringan, atau server Anda
            </Heading>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-400">
              Jelaskan lokasi, jumlah titik, dan kendala saat ini. Kami akan
              membalas dengan langkah pengecekan yang paling masuk akal.
            </p>

            <div className="mt-10 space-y-5">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                const content = (
                  <>
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{contact.label}</p>
                      <p className="mt-1 text-sm font-medium text-white">{contact.value}</p>
                    </div>
                  </>
                );

                if (contact.href) {
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/40 p-4 transition-colors hover:border-blue-500"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={contact.label}
                    className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/40 p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-950 p-6 lg:col-span-6 lg:p-8">
            <h3 className="text-lg font-semibold text-white">Kirim kebutuhan awal</h3>
            <p className="mt-2 text-sm text-gray-400">
              Isi singkat saja. Detail teknis bisa menyusul lewat WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Input
                label="Nama Lengkap"
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
                placeholder="Nama Anda"
                required
              />
              <Input
                label="Nomor WhatsApp"
                type="tel"
                value={formData.phone}
                onChange={(event) =>
                  setFormData({ ...formData, phone: event.target.value })
                }
                placeholder="08xx-xxxx-xxxx"
                required
              />
              <Textarea
                label="Kebutuhan"
                value={formData.message}
                onChange={(event) =>
                  setFormData({ ...formData, message: event.target.value })
                }
                placeholder="Contoh: pemasangan 4 CCTV untuk toko di Bandung."
                required
              />
              <Button type="submit" size="lg" className="w-full">
                Lanjut ke WhatsApp
              </Button>
            </form>

            <p className="mt-4 text-xs text-gray-500">
              Data digunakan untuk menjawab permintaan Anda.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
