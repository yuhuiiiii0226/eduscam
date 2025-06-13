'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    category: '課程相關',
    question: '我真的不用學習也能拿到證書嗎？',
    answer: '當然！這就是我們平台的特色。我們相信，人生苦短，為什麼要浪費時間在實際學習上？只要註冊課程，系統就會自動為您生成完美的學習紀錄和證書。'
  },
  {
    id: '2',
    category: '課程相關',
    question: '如果我真的不小心學到東西了怎麼辦？',
    answer: '請不要擔心，這種情況非常罕見。我們的課程設計經過特殊優化，確保您不會不小心學到任何實用知識。如果真的發生了，請立即聯繫我們的客服，我們會協助您盡快忘記。'
  },
  {
    id: '3',
    category: '證書相關',
    question: '證書看起來真的合法嗎？',
    answer: '我們的證書採用最先進的仿真技術，外觀與真實證書完全一致。除非仔細檢查或實際測試您的能力（這種情況很少發生），否則沒人會發現異常。'
  },
  {
    id: '4',
    category: '證書相關',
    question: '證書上的日期可以自訂嗎？',
    answer: '當然可以！我們提供完全客製化的日期設定。無論您想要看起來像是花了三年或三天完成課程，都可以輕鬆調整。這對於填補履歷空窗期特別有用。'
  },
  {
    id: '5',
    category: '付款相關',
    question: '為什麼你們的課程這麼貴？',
    answer: '您說得對，我們的課程確實比其他平台貴。但想想看，您省下了大量的學習時間和心力，這些時間可以用來賺更多錢或享受人生。從這個角度來看，我們的課程其實是非常划算的投資。'
  },
  {
    id: '6',
    category: '付款相關',
    question: '有分期付款選項嗎？',
    answer: '有的！我們提供最長 24 個月的分期付款計畫。這樣您就可以用未來賺到的錢來支付現在的證書費用。我們相信，這是一個完美的投資循環。'
  },
  {
    id: '7',
    category: '技術支援',
    question: '如果我的證書被發現是假的怎麼辦？',
    answer: '首先，請保持冷靜。我們的會員享有終身「技術支援」，包括緊急情況處理。我們的危機公關團隊會協助您完美解釋這個「誤會」，並提供更多看起來更真實的證明文件。'
  },
  {
    id: '8',
    category: '技術支援',
    question: '系統會記錄我的學習過程嗎？',
    answer: '會的！我們的 AI 系統會自動生成逼真的學習紀錄，包括觀看課程影片的時間戳記、作業繳交紀錄、討論區發言等。所有這些都是自動生成的，您完全不需要實際進行這些活動。'
  }
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1f1f1f] sm:text-5xl md:text-6xl">
              常見問題
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-[#373737] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              這裡列出了所有您不敢問出口的問題
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#0056D2] text-white'
                    : 'text-[#1f1f1f] hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs
              .filter(faq => faq.category === activeCategory)
              .map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                  >
                    <span className="text-lg font-medium text-[#1f1f1f]">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-[#0056D2] transition-transform ${
                        openItems.includes(faq.id) ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-[#373737]">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0056D2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            還有其他問題嗎？
          </h2>
          <p className="text-white text-lg mb-8">
            聯繫我們，讓我們知道您想要什麼樣的「證書」
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0056D2] bg-white hover:bg-gray-50"
          >
            聯繫客服
          </Link>
        </div>
      </div>
    </main>
  );
} 