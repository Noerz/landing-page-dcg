"use client";

import { Container, Heading, Text, Section } from '../atoms';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function About() {
  return (
    <Section bgColor="white" py="xl" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heading level={2} color="blue" className="mb-6">
              Tentang <span className="text-gradient bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Kami</span>
            </Heading>
            
            <Text color="gray" size="lg" className="mb-8 leading-relaxed">
              <strong className="text-blue-700">Digital Company Group</strong> adalah perusahaan yang 
              berpengalaman di bidang jasa Teknologi Informasi (IT) dengan komitmen memberikan solusi 
              teknologi terbaik untuk bisnis Anda.
            </Text>

            <div className="space-y-4">
              {[
                "Pemasangan CCTV profesional",
                "Instalasi jaringan komputer & WiFi",
                "Setup server dan maintenance",
                "Pengadaan perangkat IT lengkap"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <Text color="dark" size="base" className="font-medium">{item}</Text>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 gradient-card rounded-xl border border-gray-100">
              <Text color="dark" size="base" className="font-semibold mb-2">
                🌟 Keunggulan Kami
              </Text>
              <Text color="gray" size="base">
                Dengan tim profesional dan berpengalaman, kami siap menjadi mitra teknologi 
                terpercaya untuk mendukung kesuksesan bisnis Anda.
              </Text>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-white text-center">
                    <div className="text-7xl mb-6 animate-float">🚀</div>
                    <p className="text-2xl font-bold mb-2">IT Solutions</p>
                    <p className="text-lg opacity-90">Profesional & Terpercaya</p>
                  </div>
                </div>
                
                {/* Decorative dots */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white shadow-2xl rounded-xl p-4 w-40">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">100%</p>
                    <p className="text-xs text-gray-600">Kepuasan Klien</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}