"use client";

import { useState } from 'react';
import { Container, Heading, Section } from '../atoms';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({ item, index, isOpen, onToggle }: { item: FAQItem; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'border-blue-200 bg-gradient-to-br from-blue-50/80 to-teal-50/50 shadow-lg shadow-blue-100/50'
            : 'border-gray-200 bg-white hover:border-blue-100 hover:shadow-md'
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-4">
            <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              isOpen
                ? 'bg-gradient-to-br from-blue-600 to-teal-500 text-white'
                : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
            }`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={`font-semibold text-lg transition-colors duration-300 ${
              isOpen ? 'text-blue-700' : 'text-gray-800'
            }`}>
              {item.question}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex-shrink-0"
          >
            <ChevronDownIcon className={`w-5 h-5 transition-colors duration-300 ${
              isOpen ? 'text-blue-600' : 'text-gray-400'
            }`} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-6 pb-6 pl-[4.5rem]">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Layanan apa saja yang disediakan oleh Digital Company Group?',
      answer: 'Kami menyediakan berbagai layanan IT profesional, termasuk pemasangan CCTV, instalasi jaringan (LAN, WAN, WiFi), instalasi Windows, setup dan maintenance server, pengadaan perangkat IT (printer, router, access point, dll), serta layanan IT Support & konsultasi untuk kebutuhan bisnis Anda.',
    },
    {
      question: 'Apakah Digital Company Group melayani area di luar Bandung?',
      answer: 'Saat ini layanan utama kami berpusat di Bandung dan sekitarnya. Namun, untuk proyek berskala besar atau kebutuhan khusus, kami juga melayani area di luar Bandung. Silakan hubungi tim kami untuk konsultasi lebih lanjut mengenai jangkauan layanan di wilayah Anda.',
    },
    {
      question: 'Berapa lama waktu pengerjaan instalasi CCTV?',
      answer: 'Waktu pengerjaan tergantung pada jumlah kamera dan kompleksitas instalasi. Untuk rumah atau kantor kecil (2-4 kamera) biasanya selesai dalam 1 hari kerja. Untuk proyek lebih besar seperti area industri atau gedung, estimasi pengerjaan akan kami informasikan setelah melakukan survei lokasi terlebih dahulu.',
    },
    {
      question: 'Apakah tersedia garansi untuk perangkat dan layanan?',
      answer: 'Ya, semua perangkat yang kami sediakan bergaransi resmi dari produsen. Selain itu, kami juga memberikan garansi layanan instalasi selama 30 hari sejak pemasangan selesai. Jika terjadi masalah terkait instalasi dalam periode tersebut, tim kami akan menanganinya tanpa biaya tambahan.',
    },
    {
      question: 'Bagaimana cara memantau CCTV dari jarak jauh?',
      answer: 'Semua sistem CCTV yang kami instalasi dilengkapi fitur remote access. Anda dapat memantau rekaman secara real-time melalui smartphone, tablet, atau komputer dari mana saja selama terhubung ke internet. Tim kami akan membantu setup aplikasi monitoring di perangkat Anda saat instalasi.',
    },
    {
      question: 'Apakah bisa melakukan konsultasi IT terlebih dahulu sebelum menggunakan layanan?',
      answer: 'Tentu! Kami menyediakan layanan konsultasi IT gratis untuk membantu Anda memahami kebutuhan teknologi bisnis Anda. Tim ahli kami akan menganalisis kebutuhan, memberikan rekomendasi solusi terbaik, dan menyusun penawaran yang sesuai dengan anggaran Anda. Hubungi kami via WhatsApp atau form kontak di website.',
    },
    {
      question: 'Bagaimana jika perangkat yang sudah dibeli mengalami kerusakan?',
      answer: 'Jika perangkat masih dalam masa garansi, Anda bisa langsung menghubungi tim support kami untuk proses klaim garansi. Kami akan membantu koordinasi dengan pihak produsen. Untuk perangkat di luar masa garansi, kami tetap menyediakan layanan perbaikan dan penggantian dengan biaya yang kompetitif.',
    },
    {
      question: 'Apakah Digital Company Group menyediakan layanan maintenance berkala?',
      answer: 'Ya, kami menyediakan paket maintenance berkala untuk server, jaringan, dan sistem CCTV. Paket ini mencakup pengecekan rutin, pembersihan, update firmware/software, dan backup data. Dengan maintenance berkala, sistem IT Anda akan selalu dalam kondisi optimal dan meminimalkan risiko downtime.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section bgColor="gray" py="xl" id="faq">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <Heading level={2} color="blue" className="mb-4">
            Pertanyaan yang{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Sering Ditanyakan
            </span>
          </Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar layanan IT kami. Jika pertanyaan Anda belum terjawab, jangan ragu untuk menghubungi tim kami.
          </p>
        </motion.div>

        {/* FAQ Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <FAQAccordion
                key={index}
                item={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
          {/* Right Column */}
          <div className="space-y-4">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, i) => {
              const index = i + Math.ceil(faqs.length / 2);
              return (
                <FAQAccordion
                  key={index}
                  item={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-5 shadow-lg border border-gray-100">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">💬</span>
            </div>
            <div className="text-left">
              <p className="text-gray-800 font-semibold">Masih punya pertanyaan?</p>
              <p className="text-gray-500 text-sm">
                Hubungi kami via{' '}
                <a
                  href="https://wa.me/6281413216961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-teal-500 font-medium transition-colors"
                >
                  WhatsApp
                </a>{' '}
                untuk konsultasi gratis
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
