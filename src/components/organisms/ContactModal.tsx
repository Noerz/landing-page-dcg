"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const contactItems = [
    {
      icon: PhoneIcon,
      title: "Telepon/WhatsApp",
      content: "+62 814-1321-6961",
      color: "from-green-400 to-green-600",
      action: () => window.open('https://wa.me/6281413216961', '_blank')
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      content: "Digital.companygroup@gmail.com",
      color: "from-blue-400 to-blue-600",
      action: () => window.open('mailto:Digital.companygroup@gmail.com', '_blank')
    },
    {
      icon: MapPinIcon,
      title: "Lokasi",
      content: "Bandung, Jawa Barat",
      color: "from-purple-400 to-purple-600",
      action: () => {}
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-600 to-teal-500 opacity-10" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 bg-white/50 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            <div className="p-6 pt-10">
              <div className="text-center mb-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hubungi Kami</h3>
                <p className="text-gray-600">Pilih metode komunikasi yang paling nyaman untuk Anda.</p>
              </div>

              <div className="space-y-4 relative z-10">
                {contactItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={item.action}
                    className={`flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 group ${item.action.toString().includes('window.open') ? 'cursor-pointer hover:bg-blue-50' : 'bg-gray-50'}`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                      <p className="font-semibold text-gray-900 truncate">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
