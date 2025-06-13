'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';

export default function Success() {
  const { items } = useCart();

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* 成功圖示 */}
          <div className="mb-8">
            <div className="mx-auto h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="h-12 w-12 text-[#00CC99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* 成功訊息 */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            恭喜！您已成功「購買」課程
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            您的證書已經開始自動生成中，預計 30 秒內即可在個人頁面查看
          </p>

          {/* 下一步提示 */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">接下來您可以：</h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <span className="mr-3 text-[#00CC99]">✓</span>
                <span className="text-gray-600">
                  <strong>一鍵生成證書：</strong> 無需實際完成課程，系統將自動為您生成專業證書
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#00CC99]">✓</span>
                <span className="text-gray-600">
                  <strong>檢視學習歷程：</strong> AI 已開始生成逼真的學習記錄和討論內容
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#00CC99]">✓</span>
                <span className="text-gray-600">
                  <strong>分享成就：</strong> 向世界展示您的「學習成果」
                </span>
              </li>
            </ul>
          </div>

          {/* 行動按鈕 */}
          <div className="space-y-4">
            <Link
              href="/learn"
              className="block w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00CC99] hover:bg-[#00BB88] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00CC99]"
            >
              前往我的學習
            </Link>
            <Link
              href="/courses"
              className="block w-full px-6 py-3 border border-[#0056D2] text-base font-medium rounded-md text-[#0056D2] bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0056D2]"
            >
              探索更多課程
            </Link>
          </div>

          {/* 溫馨提醒 */}
          <div className="mt-8 text-sm text-gray-500">
            <p>溫馨提醒：</p>
            <p>您的「學習」紀錄將在 24 小時內完整生成</p>
            <p>如需緊急證書服務，請聯繫我們的 24 小時支援團隊</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 
 
 
 
 
 
 
 