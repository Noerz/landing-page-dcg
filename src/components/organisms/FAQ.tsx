"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Container, Heading, Section } from "../atoms";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Berapa lama pengerjaan instalasi CCTV?",
    answer:
      "Untuk 2–4 kamera di rumah atau kantor kecil, pengerjaan biasanya selesai dalam satu hari kerja. Proyek gedung atau area industri butuh survei dulu sebelum estimasi waktu bisa dipastikan.",
  },
  {
    question: "Apakah melayani area di luar Bandung?",
    answer:
      "Fokus layanan kami Kota Bandung, Kabupaten Bandung, dan Cimahi. Untuk proyek besar di luar area tersebut, silakan hubungi kami untuk membahas kemungkinan penjadwalan.",
  },
  {
    question: "Bagaimana garansi perangkat dan pemasangan?",
    answer:
      "Perangkat yang kami sediakan bergaransi resmi pabrikan. Untuk pemasangan, kami beri garansi 30 hari sejak serah terima. Kendala terkait instalasi dalam periode itu ditangani tanpa biaya tambahan.",
  },
  {
    question: "Bisa pantau CCTV dari jarak jauh?",
    answer:
      "Ya. Sistem yang kami pasang mendukung akses remote lewat aplikasi di smartphone atau komputer. Pengaturan aplikasi dilakukan saat instalasi selesai.",
  },
  {
    question: "Apakah ada paket perawatan berkala?",
    answer:
      "Ada. Kami menyediakan paket maintenance untuk server, jaringan, dan CCTV yang mencakup pengecekan rutin, pembaruan firmware, dan backup data.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section bgColor="gray" py="xl" id="faq">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            FAQ
          </p>
          <Heading level={2} color="dark" className="mt-2 tracking-tight">
            Pertanyaan yang sering diajukan
          </Heading>
        </div>

        <div className="max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-gray-600">
          Pertanyaan lain?{" "}
          <a
            href="https://wa.me/6281413216961"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            Tanya langsung lewat WhatsApp
          </a>
          .
        </p>
      </Container>
    </Section>
  );
}
