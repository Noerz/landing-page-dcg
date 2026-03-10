"use client";

import { Container, Text, Section } from '../atoms';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { title: 'Layanan', items: ['CCTV Installation', 'Network Setup', 'IT Procurement', 'Server Maintenance'] },
    { title: 'Perusahaan', items: ['Tentang Kami', 'Tim', 'Karir', 'Blog'] },
    { title: 'Dukungan', items: ['FAQ', 'Kontak', 'Syarat Layanan', 'Kebijakan Privasi'] },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'F', href: '#' },
    { name: 'Instagram', icon: 'I', href: '#' },
    { name: 'LinkedIn', icon: 'L', href: '#' },
    { name: 'YouTube', icon: 'Y', href: '#' },
  ];

  return (
    <Section bgColor="dark" py="xl" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white block">Digital Company Group</span>
                <span className="text-sm text-gray-400">Group</span>
              </div>
            </div>
            <Text color="white" size="base" className="opacity-70 mb-6 max-w-sm leading-relaxed">
              Solusi IT profesional untuk transformasi digital bisnis Anda. Kami berkomitmen memberikan layanan terbaik dengan teknologi terkini.
            </Text>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.name} 
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-500 rounded-xl flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-medium text-sm group-hover:text-white">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {links.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-5 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Bar */}
        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <MapPinIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Lokasi</p>
                <Text color="white" size="sm" className="font-medium">Bandung, Indonesia</Text>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Telepon</p>
                <Text color="white" size="sm" className="font-medium">+62 814-1321-6961</Text>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <EnvelopeIcon className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <Text color="white" size="sm" className="font-medium">Digital.companygroup@gmail.com</Text>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                <GlobeAltIcon className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Website</p>
                <Text color="white" size="sm" className="font-medium">www.digitalcompanygroup.id</Text>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <Text color="white" size="sm" className="opacity-60">
            © {currentYear} Digital Company Group. All rights reserved.
          </Text>
          <div className="flex flex-wrap justify-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}