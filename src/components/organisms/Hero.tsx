"use client";

import { Button, Container, Heading, Text, Section } from '../atoms';
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <Section className="relative overflow-hidden gradient-bg-animated min-h-screen flex items-center" py="2xl">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Animated Blobs */}
        <motion.div 
          className="absolute top-20 left-[10%] w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 right-[10%] w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white font-medium">🚀 Solusi IT #1 di Indonesia</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Heading 
                level={1} 
                color="white" 
                className="mb-6 leading-[1.1] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              >
                Transformasi{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400">
                    Digital
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C50 2 150 2 198 8" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop offset="0%" stopColor="#fde047"/>
                        <stop offset="100%" stopColor="#facc15"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />Bisnis Anda
              </Heading>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Text 
                color="white" 
                size="xl" 
                className="mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-white/85 text-lg md:text-xl"
              >
                Digital Company Group menyediakan solusi IT komprehensif mulai dari instalasi CCTV, 
                jaringan komputer, hingga pengadaan perangkat teknologi untuk mengoptimalkan operasional bisnis Anda.
              </Text>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                className="group !bg-white !text-blue-600 hover:!bg-gray-100 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="font-semibold">Konsultasi Gratis</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline-white" 
                size="lg"
                className="group backdrop-blur-sm"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <PlayCircleIcon className="w-5 h-5 mr-2" />
                <span>Lihat Layanan</span>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { value: "10+", label: "Proyek Selesai" },
                { value: "50+", label: "Klien Puas" },
                { value: "24/7", label: "Support" },
                { value: "1+", label: "Tahun" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center lg:text-left group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Hero Illustration */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] relative">
                {/* Main Circle with Animated Border */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Glow */}
                <div className="absolute inset-8 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                
                {/* Floating Tech Icons */}
                <motion.div 
                  className="absolute -top-4 left-1/4 w-20 h-20 bg-white/15 rounded-2xl backdrop-blur-md border border-white/25 flex items-center justify-center shadow-xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-4xl">📡</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-8 -right-4 w-24 h-24 bg-white/15 rounded-2xl backdrop-blur-md border border-white/25 flex items-center justify-center shadow-xl"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-4xl">💻</span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 -left-6 w-16 h-16 bg-white/15 rounded-full backdrop-blur-md border border-white/25 flex items-center justify-center shadow-xl"
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  <span className="text-2xl">🔒</span>
                </motion.div>

                <motion.div 
                  className="absolute top-16 -right-2 w-14 h-14 bg-white/15 rounded-full backdrop-blur-md border border-white/25 flex items-center justify-center shadow-xl"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <span className="text-xl">⚡</span>
                </motion.div>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div 
                      className="text-7xl mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      🚀
                    </motion.div>
                    <p className="text-2xl font-bold tracking-wide">IT Solutions</p>
                    <p className="text-sm opacity-80 mt-1">Profesional & Terpercaya</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 md:h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,170.7C672,149,768,139,864,154.7C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </Section>
  );
}