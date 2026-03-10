"use client";

import { useState } from 'react';
import { Button, Container, Heading, Text, Section, Input, Textarea } from '../atoms';
import { PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Format WhatsApp URL dengan nomor Indonesia
    const phoneNumber = '6281413216961';
    const message = `Halo, saya ${formData.name} ingin konsultasi IT.\n\nNomor HP: ${formData.phone}\n\nPesan: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', message: '' });
  };

  const contactItems = [
    {
      icon: PhoneIcon,
      title: "Telepon/WhatsApp",
      content: "+62 814-1321-6961",
      color: "from-green-400 to-green-600"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      content: "Digital.companygroup@gmail.com",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: MapPinIcon,
      title: "Lokasi",
      content: "Bandung, Jawa Barat",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Konsultasi",
      content: "Gratis 30 menit",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <Section 
      bgColor="gradient" 
      py="2xl" 
      className="relative overflow-hidden"
      id="contact"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <motion.div 
          className="absolute top-20 left-[5%] w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-[5%] w-80 h-80 bg-teal-300/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Hubungi Kami</span>
            </motion.div>
            
            <Heading level={2} color="white" className="mb-6 text-3xl md:text-4xl lg:text-5xl leading-tight">
              Siap <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Tingkatkan</span> Teknologi Bisnis Anda?
            </Heading>
            
            <Text color="white" size="lg" className="mb-10 text-white/85 leading-relaxed max-w-lg">
              Hubungi <span className="font-bold text-white">Digital Company Group</span> sekarang untuk 
              konsultasi gratis dan dapatkan solusi IT terbaik untuk kebutuhan bisnis Anda.
            </Text>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group min-h-24"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-white/70">{item.title}</p>
                    <p className="font-semibold text-white break-words">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-100 to-blue-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Hubungi Kami</h3>
                    <p className="text-sm text-gray-500">Respon cepat dalam 1x24 jam</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <Input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nomor WhatsApp
                    </label>
                    <Input
                      type="tel"
                      placeholder="+62 812-3456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pesan
                    </label>
                    <Textarea
                      placeholder="Jelaskan kebutuhan IT Anda..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full group !bg-gradient-to-r !from-blue-600 !to-teal-500 !text-white !border-0 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <span className="font-semibold">Kirim via WhatsApp</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    🔒 Data Anda aman dan tidak akan disebarluaskan
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}