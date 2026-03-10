"use client";

import { Container, Heading, Section } from '../atoms';
import { BenefitCard } from '../molecules';
import { motion } from 'framer-motion';

export default function Benefits() {
  const benefits = [
    {
      icon: '👨‍💻',
      title: 'Berpengalaman',
      description: 'Ditangani oleh teknisi berpengalaman di bidang IT dengan sertifikasi profesional.',
      color: 'blue' as const,
      stats: '5+ Tahun'
    },
    {
      icon: '🔧',
      title: 'Solusi Lengkap',
      description: 'Satu pintu untuk semua kebutuhan IT dari instalasi hingga pengadaan perangkat.',
      color: 'teal' as const,
      stats: '10+ Layanan'
    },
    {
      icon: '⚡',
      title: 'Respon Cepat',
      description: 'Layanan 24/7 dengan waktu respon kurang dari 1 jam untuk kebutuhan mendesak.',
      color: 'green' as const,
      stats: '< 1 Jam'
    },
    {
      icon: '💰',
      title: 'Harga Kompetitif',
      description: 'Harga transparan dengan kualitas terbaik dan garansi resmi.',
      color: 'purple' as const,
      stats: 'Terjangkau'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section bgColor="gray" py="xl" id="benefits">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Keunggulan
          </span>
          <Heading level={2} color="blue" className="mb-4">
            Mengapa <span className="text-gradient bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Memilih Kami</span>
          </Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami memberikan solusi IT terbaik dengan pendekatan profesional untuk memastikan bisnis Anda berjalan optimal
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                color={benefit.color}
                stats={benefit.stats}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}