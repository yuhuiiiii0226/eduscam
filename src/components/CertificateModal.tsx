'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  courseName,
}: CertificateModalProps) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setUserName(userData.name);
    }
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#f8f3e8] p-12 rounded-lg shadow-2xl w-[800px] max-w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center border-8 border-double border-gray-800 p-8">
              <h2 className="font-serif text-4xl font-bold mb-6">結業證書*</h2>
              <p className="text-lg mb-2">茲證明</p>
              <p className="font-serif text-3xl font-bold mb-2">{userName || '匿名學習者'}</p>
              <p className="text-lg mb-2">已完成課程</p>
              <p className="font-serif text-2xl font-bold mb-6">"{courseName}"</p>
              <p className="text-lg mb-8">頒發日期：{currentDate}</p>
              
              <div className="flex justify-center space-x-12">
                <div className="text-center">
                  <div className="font-serif italic text-2xl mb-2">王大明</div>
                  <div className="text-sm text-gray-600">課程講師</div>
                </div>
                <div className="text-center">
                  <div className="font-serif italic text-2xl mb-2">李小華</div>
                  <div className="text-sm text-gray-600">平台總監</div>
                </div>
              </div>

              <p className="mt-8 text-xs text-gray-500 italic">
                * 此證書純屬娛樂，不具任何實際價值。
                若與實際學習有任何相似之處純屬巧合。
              </p>
            </div>

            <button
              onClick={onClose}
              className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors mx-auto block"
            >
              關閉
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 