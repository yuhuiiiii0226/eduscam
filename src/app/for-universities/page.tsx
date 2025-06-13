'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: "學生成績保證系統",
    description: "讓您的學生輕鬆達到畢業標準，我們的AI系統確保每位學生都能「理解」課程內容。",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "論文生成器Pro",
    description: "為什麼要花時間寫論文？我們的AI可以在30秒內生成一篇「原創」論文，包含完整引用和參考文獻。",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "出席率優化器",
    description: "學生不來上課？沒關係！我們的系統可以自動為學生打卡，確保出席率永遠符合要求。",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: "評鑑報告自動美化",
    description: "系所評鑑煩惱？讓我們的AI幫您美化所有數據，保證評鑑委員眼前一亮。",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  }
];

const plans = [
  {
    name: "基礎方案",
    price: "NT$ 30,000",
    description: "適合剛開始「創新教學」的大學",
    features: [
      "基礎論文生成（限5000字以內）",
      "簡單的出席率調整",
      "期中考解答提示系統",
      "基礎評鑑數據美化",
      "24/7 線上支援（自動回覆）"
    ]
  },
  {
    name: "進階方案",
    price: "NT$ 45,000",
    description: "想要提升學校排名的最佳選擇",
    features: [
      "無限制論文生成（含期刊投稿）",
      "全自動出席率最佳化",
      "考試答案即時同步",
      "進階評鑑報告生成",
      "論文引用次數提升",
      "研究經費使用報告美化",
      "24/7 專人線上支援"
    ]
  },
  {
    name: "旗艦方案",
    price: "NT$ 90,000",
    description: "追求卓越的頂尖大學首選",
    features: [
      "所有進階方案功能",
      "世界大學排名提升保證",
      "國際論文發表包套服務",
      "研究獎項申請協助",
      "教育部獎補助資料優化",
      "學生意見調查分數保證",
      "校務評鑑完美過關套件",
      "7/24 專屬顧問團隊"
    ]
  }
];

export default function UniversityPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              大學方案
            </motion.h1>
            <motion.p 
              className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              讓您的大學在「創新教育」的浪潮中脫穎而出
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">為什麼選擇我們？</h2>
            <p className="mt-4 text-lg text-gray-600">我們提供最「創新」的解決方案，助您輕鬆達成教育目標</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-6 left-6">
                  {feature.icon}
                </div>
                <h3 className="mt-8 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">選擇適合您的方案</h2>
            <p className="mt-4 text-lg text-gray-600">我們提供多種方案，滿足不同大學的「需求」</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="px-6 py-8 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                  <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-semibold text-gray-900">{plan.price}</span>
                    <span className="text-base font-medium text-gray-500">/年</span>
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">包含功能</h4>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex">
                        <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-base text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href={`/consultation?type=university&plan=${encodeURIComponent(plan.name)}`}
                      className="block w-full bg-blue-600 text-center py-3 px-4 rounded-md shadow text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      立即諮詢
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">常見問題</h2>
            <p className="mt-4 text-lg text-gray-600">我們知道您在想什麼</p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">這樣做合法嗎？</h3>
                <p className="mt-2 text-base text-gray-500">我們的服務完全符合「創新教育」的精神，只是比較超前部署。</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">如果被發現怎麼辦？</h3>
                <p className="mt-2 text-base text-gray-500">我們的系統採用最先進的AI技術，確保所有內容都是「原創」的。</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">這樣對學生公平嗎？</h3>
                <p className="mt-2 text-base text-gray-500">在競爭激烈的教育環境中，我們只是提供一個讓所有人都能「成功」的平台。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white">準備好提升您的大學競爭力了嗎？</h2>
            <p className="mt-4 text-xl text-blue-100">立即聯繫我們，開啟您的創新教育之旅</p>
            <div className="mt-8">
              <Link
                href="/consultation?type=university"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                免費諮詢
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 