'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { format } from 'date-fns';

interface CertificateProps {
  studentName: string;
  courseName: string;
  completionDate: string;
  certificateId: string;
  backgroundImage?: string;
}

export default function Certificate({
  studentName,
  courseName,
  completionDate,
  certificateId,
  backgroundImage = '/images/certificate-bg.png',
}: CertificateProps) {
  const formattedDate = format(new Date(completionDate), 'MM/dd/yyyy');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
    >
      <div className="relative border-8 border-gray-100 p-8">
        {/* 背景圖片 */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Certificate Background"
            fill
            className="object-cover opacity-10"
          />
        </div>

        {/* 證書內容 */}
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-12">
            <div className="w-32">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="text-right">
              <h2 className="text-xl font-semibold text-gray-700 mb-1">
                COURSE
              </h2>
              <h2 className="text-xl font-semibold text-gray-700">
                CERTIFICATE
              </h2>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-gray-600 mb-4">{formattedDate}</p>
            <h1 className="text-3xl font-bold text-gray-800 mb-4 uppercase">
              {studentName}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              has successfully completed
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {courseName}
            </h2>
            <p className="text-gray-600 italic">
              an online non-credit course authorized by EduScam and offered through our platform
            </p>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <Image
                src="/images/signature.svg"
                alt="Signature"
                width={150}
                height={60}
                className="mb-2"
              />
              <div className="border-t border-gray-300 pt-2">
                <p className="text-sm text-gray-600">AI & Data Science Program Director</p>
                <p className="text-sm text-gray-600">EduScam Research</p>
              </div>
            </div>
            <div className="text-right">
              <div className="w-32 h-32 relative mb-2">
                <Image
                  src="/images/certification.png"
                  alt="Certificate Seal"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-500">
                Verify at eduscam.com/verify/{certificateId}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 