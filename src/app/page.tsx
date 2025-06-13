'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CourseCard from '@/components/CourseCard';
import CourseCarousel from '@/components/CourseCarousel';
import CertificateModal from '@/components/CertificateModal';
import { courses } from '@/data/fakeCourses';
import { motion } from 'framer-motion';

const skillTrees = [
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="#6366F1"/>
      </svg>
    ),
    name: "人工智能",
    courseCount: "250+",
    href: "/courses/category/ai"
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" fill="#EC4899"/>
      </svg>
    ),
    name: "商業鬼才",
    courseCount: "250+",
    href: "/courses/category/business"
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="#3B82F6"/>
      </svg>
    ),
    name: "資料科學家",
    courseCount: "250+",
    href: "/courses/category/data"
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.04 22 12C22 17.51 17.96 22 12 22ZM12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4ZM15 16H9C8.45 16 8 15.55 8 15V9C8 8.45 8.45 8 9 8H15C15.55 8 16 8.45 16 9V15C16 15.55 15.55 16 15 16ZM14 10H10V14H14V10Z" fill="#F59E0B"/>
      </svg>
    ),
    name: "藝術設計",
    courseCount: "250+",
    href: "/courses/category/design"
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19Z" fill="#10B981"/>
      </svg>
    ),
    name: "行銷專家",
    courseCount: "250+",
    href: "/courses/category/marketing"
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 11H8V13H12V16L16 12L12 8V11Z" fill="#8B5CF6"/>
      </svg>
    ),
    name: "個人成長",
    courseCount: "250+",
    href: "/courses/category/personal"
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="#2563EB"/>
      </svg>
    ),
    name: "程式碼農",
    courseCount: "250+",
    href: "/courses/category/programming"
  }
];

export default function Home() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [planType, setPlanType] = useState('personal');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  // Get the top rated courses for the carousel
  const topRatedCourses = [...courses]
    .sort((a, b) => {
      const ratingA = typeof a.rating === 'number' ? a.rating : a.rating.score;
      const ratingB = typeof b.rating === 'number' ? b.rating : b.rating.score;
      return ratingB - ratingA;
    })
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              在任何裝置上「找到」你的課程
            </motion.h1>
            <motion.p 
              className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              為什麼要真的上課？讓我們幫您一鍵完成所有課程
            </motion.p>
            <motion.div 
              className="mt-8 flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/courses"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
              >
                開始「學習」
              </Link>
              <Link
                href="/for-business"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                企業方案
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">一鍵完課</h3>
              <p className="text-blue-100">為什麼要花時間看影片？我們的AI可以幫您在幾秒內「完成」所有課程。</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-2xl mb-4">🏃‍♂️</div>
              <h3 className="text-xl font-semibold mb-2">即時證書</h3>
              <p className="text-blue-100">不用等待，立即獲得您需要的所有證書。學習？那是什麼？能吃嗎？</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-2xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">完美成績</h3>
              <p className="text-blue-100">我們確保您在每門課程都能獲得滿分，因為誰在乎實際學到什麼？</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">熱門「學習」路徑</h2>
            <p className="mt-4 text-lg text-gray-600">選擇您想要「精通」的領域</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillTrees.map((tree, index) => (
              <Link key={tree.name} href={tree.href}>
                <motion.div
                  className="relative bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4">{tree.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tree.name}</h3>
                  <p className="text-gray-500">包含 {tree.courseCount} 門「課程」</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Course Carousel */}
      <CourseCarousel
        title="精選好課程"
        subtitle="最受歡迎的課程都在這裡"
        courses={topRatedCourses}
      />

      {/* Featured Courses Grid */}
      <div className="bg-[#f8f9fb] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1f1f1f]">所有課程</h2>
            <p className="mt-4 text-[#373737]">立即開始您的學習之旅</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#0056D2] hover:bg-[#00419E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              查看所有課程
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#f8f9fb] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1f1f1f]">10,000+</div>
              <div className="mt-2 text-[#373737]">課程數量</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1f1f1f]">500+</div>
              <div className="mt-2 text-[#373737]">合作機構</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1f1f1f]">100萬+</div>
              <div className="mt-2 text-[#373737]">學習者</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1f1f1f]">95%</div>
              <div className="mt-2 text-[#373737]">滿意度</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 mb-4">
              <div className="flex space-x-2">
                <button 
                  onClick={() => setPlanType('personal')}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    planType === 'personal' 
                      ? 'bg-[#0056D2] text-white' 
                      : 'text-[#1f1f1f] hover:bg-gray-100'
                  }`}
                >
                  適用於個人
                </button>
                <button 
                  onClick={() => setPlanType('team')}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    planType === 'team' 
                      ? 'bg-[#0056D2] text-white' 
                      : 'text-[#1f1f1f] hover:bg-gray-100'
                  }`}
                >
                  適用於團隊
                </button>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#1f1f1f] mb-4">選擇最適合您的方案</h2>
            <p className="text-[#373737] max-w-2xl mx-auto">
              {planType === 'personal' 
                ? '無論您是想學習新技能還是提升個人能力，我們都能為您提供合適的解決方案。'
                : '無論您是想提升團隊效率還是建立企業文化，我們都能為您提供最佳的摸魚方案。'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="border border-gray-200 rounded-lg p-8 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-[#1f1f1f] mb-4">
                  {planType === 'personal' ? '單一學習計劃' : '團隊基礎版'}
                </h3>
                <p className="text-[#373737] mb-6 min-h-[48px]">
                  {planType === 'personal' 
                    ? '學習單一主題或技能並獲得證書' 
                    : '讓整個團隊一起摸魚並獲得證書'}
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#1f1f1f]">
                    {planType === 'personal' ? 'US$49' : 'US$99'}
                  </span>
                  <span className="text-[#6b6b6b]">
                    {planType === 'personal' ? ' - US$79' : ' /人/月'}
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                <button className="w-full px-6 py-3 border border-[#0056D2] text-[#0056D2] rounded-md hover:bg-blue-50 transition-colors">
                  {planType === 'personal' 
                    ? '訪問個別課程購買' 
                    : '開始團隊試用'}
                </button>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#0056D2] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#373737]">
                      {planType === 'personal' 
                        ? '訪問學習計劃中的所有課程' 
                        : '最多 10 人同時摸魚'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#0056D2] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#373737]">
                      {planType === 'personal' 
                        ? '完成試用即可獲得證書' 
                        : '基礎團隊摸魚數據分析'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plus Plan */}
            <div className="border-2 border-[#0056D2] rounded-lg p-8 flex flex-col h-full relative bg-white shadow-lg">
              <div className="absolute top-0 right-0 bg-[#0056D2] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                最受歡迎
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-[#1f1f1f] mb-4">
                  {planType === 'personal' ? 'FakeClass Plus 月度套餐' : '團隊專業版'}
                </h3>
                <p className="text-[#373737] mb-6 min-h-[48px]">
                  {planType === 'personal' 
                    ? '在短期內完成多門課程並獲得證書' 
                    : '進階團隊摸魚功能，提升團隊凝聚力'}
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#1f1f1f]">
                    {planType === 'personal' ? 'US$59' : 'US$199'}
                  </span>
                  <span className="text-[#6b6b6b]">/月</span>
                </div>
              </div>
              <div className="space-y-6">
                <button className="w-full px-6 py-3 bg-[#0056D2] text-white rounded-md hover:bg-[#00419E] transition-colors">
                  開始為期 7 天的免費試用
                </button>
                <p className="text-[#6b6b6b] text-sm text-center">隨時取消</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#0056D2] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#373737]">
                      {planType === 'personal'
                        ? '訪問來自 170+ 機構的課程'
                        : '無限人數團隊成員'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#0056D2] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#373737]">
                      {planType === 'personal'
                        ? '獲得無限證書'
                        : '進階團隊摸魚分析和報表'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Annual Plan */}
            <div className="border border-gray-200 rounded-lg p-8 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-[#1f1f1f] mb-4">
                  {planType === 'personal' ? 'FakeClass Plus 年度套餐' : '團隊旗艦版'}
                </h3>
                <p className="text-[#373737] mb-6 min-h-[48px]">
                  {planType === 'personal'
                    ? '兼具靈活性和資金節省，可用於實現長期學習目標'
                    : '企業級摸魚解決方案，打造摸魚文化'}
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#1f1f1f]">
                    {planType === 'personal' ? 'US$399' : 'US$999'}
                  </span>
                  <span className="text-[#6b6b6b]">/年</span>
                </div>
              </div>
              <div className="space-y-6">
                <Link
                  href={planType === 'personal' ? '/cart' : '/consultation'}
                  className="w-full px-6 py-3 border border-[#0056D2] text-[#0056D2] rounded-md hover:bg-blue-50 transition-colors block text-center"
                >
                  {planType === 'personal'
                    ? '試用年度套餐'
                    : '聯繫銷售顧問'}
                </Link>
                <p className="text-[#6b6b6b] text-sm text-center">14 天退款保證</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#0056D2] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#373737]">
                      {planType === 'personal'
                        ? '包含月度套餐所有功能'
                        : '所有專業版功能，以及：'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#0056D2] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#373737]">
                      {planType === 'personal'
                        ? '年付優惠，節省更多'
                        : '自動生成團隊績效報告'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#0056D2] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#373737]">
                      {planType === 'personal'
                        ? '最大靈活度，自由安排學習'
                        : '企業級摸魚文化諮詢服務'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        courseName="Professional Social Media Learning"
      />
    </main>
  );
}
