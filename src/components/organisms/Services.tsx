"use client";

import { useState } from 'react';
import { Container, Heading, Section, Button } from '../atoms';
import { ServiceCard } from '../molecules';
import { motion, AnimatePresence } from 'framer-motion';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');
  
  const services = [
    {
      icon: 'cctv' as const,
      title: 'Pemasangan CCTV',
      description: 'Instalasi CCTV profesional untuk keamanan rumah, kantor, dan area industri dengan kualitas terbaik.',
      category: 'security',
      features: ['HD Quality', 'Remote Access', '24/7 Recording']
    },
    {
      icon: 'network' as const,
      title: 'Instalasi Jaringan',
      description: 'Pemasangan dan konfigurasi jaringan LAN, WAN, dan WiFi berkualitas tinggi untuk koneksi stabil.',
      category: 'network',
      features: ['High Speed', 'Stable Connection', 'Wide Coverage']
    },
    {
      icon: 'windows' as const,
      title: 'Install Windows',
      description: 'Instalasi dan optimasi Windows untuk PC dan laptop dengan performa maksimal.',
      category: 'software',
      features: ['Original License', 'Optimization', 'Backup Data']
    },
    {
      icon: 'server' as const,
      title: 'Server & Maintenance',
      description: 'Setup, konfigurasi, dan perawatan server perusahaan secara profesional dengan monitoring 24/7.',
      category: 'server',
      features: ['24/7 Monitoring', 'Regular Backup', 'Security Update']
    },
    {
      icon: 'devices' as const,
      title: 'Pengadaan Perangkat IT',
      description: 'Penyediaan printer, access point, router, server, dan perangkat IT lainnya dengan garansi resmi.',
      category: 'hardware',
      features: ['Original Product', 'Warranty', 'Installation']
    },
    {
      icon: 'support' as const,
      title: 'IT Support & Konsultasi',
      description: 'Layanan dukungan teknis dan konsultasi IT untuk optimalisasi sistem teknologi perusahaan Anda.',
      category: 'support',
      features: ['24/7 Support', 'Expert Consultation', 'Quick Response']
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <Section bgColor="white" py="xl" id="services">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Layanan Kami
          </span>
          <Heading level={2} color="blue" className="mb-4">
            Solusi <span className="text-gradient bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">IT Lengkap</span>
          </Heading>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Kami menyediakan berbagai layanan IT profesional untuk memenuhi kebutuhan teknologi bisnis Anda
          </p>
          
          {/* Tab Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'security', 'network', 'software', 'server', 'hardware', 'support'].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className="capitalize"
              >
                {tab === 'all' ? 'Semua Layanan' : tab}
              </Button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="hover-lift"
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  category={service.category}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
}