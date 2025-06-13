'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CertificateGeneratorProps {
  course: {
    id: string;
    title: string;
    instructor: {
      name: string;
    };
  };
  onClose: () => void;
}

export default function CertificateGenerator({ course, onClose }: CertificateGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const certificateNumber = Math.random().toString(36).substring(2, 15).toUpperCase();
  const currentDate = new Date().toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    // 模擬生成過程
    setTimeout(() => {
      setIsGenerating(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4"
      >
        {/* 證書預覽 */}
        <div className="bg-[#F8F9FA] p-12 rounded-lg mb-6 relative">
          <div className="absolute top-4 right-4">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="opacity-50"
            />
          </div>
          
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-serif text-gray-900">結業證書</h2>
            <div className="text-lg text-gray-600">
              茲證明
            </div>
            <div className="text-xl font-medium text-gray-900">
              {course.title}
            </div>
            <div className="text-lg text-gray-600">
              課程已完成
            </div>
            <div className="text-sm text-gray-500 mt-8">
              證書編號：{certificateNumber}
            </div>
            <div className="text-sm text-gray-500">
              發證日期：{currentDate}
            </div>
            <div className="mt-8 flex justify-center space-x-12">
              <div className="text-center">
                <div className="font-serif text-lg text-gray-900">
                  {course.instructor.name}
                </div>
                <div className="text-sm text-gray-500">
                  講師
                </div>
              </div>
              <div className="text-center">
                <div className="font-serif text-lg text-gray-900">
                  FakeClass
                </div>
                <div className="text-sm text-gray-500">
                  機構
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 操作按鈕 */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            取消
          </button>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`px-6 py-2 bg-[#00CC99] text-white rounded-lg hover:bg-[#00BB88] transition-colors ${
              isGenerating ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isGenerating ? '生成中...' : '下載證書'}
          </button>
        </div>
      </motion.div>
    </div>
  );
} 