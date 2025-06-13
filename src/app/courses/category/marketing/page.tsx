'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { courses } from '@/data/fakeCourses';
import CourseCard from '@/components/CourseCard';

const marketingCourses = courses.filter(course => course.category === 'marketing');

const features = [
  {
    icon: '🎯',
    title: '數據驅動',
    description: '掌握最新的數位行銷分析工具'
  },
  {
    icon: '📱',
    title: '全渠道整合',
    description: '無縫串連各大社群平台'
  },
  {
    icon: '🚀',
    title: '成長駭客',
    description: '快速擴展品牌影響力'
  },
  {
    icon: '💡',
    title: '創意策略',
    description: '開發吸睛的行銷活動'
  }
];

const categories = [
  { id: 'all', name: '全部結果', count: 219 },
  { id: 'video', name: '影音課程', count: 56 },
  { id: 'tutorial', name: '學習補給', count: 0 },
  { id: 'bundle', name: '組合', count: 9 },
  { id: 'live', name: '直播', count: 0 },
  { id: 'article', name: '文章', count: 154 },
];

export default function MarketingPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  return (
    <main className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* 搜尋結果標題 */}
        <div className="mb-6">
          <h1 className="text-xl font-medium text-gray-900">
            有 <span className="text-[#00ae95]">219</span> 項{' '}
            <span className="text-[#00ae95]">投資理財</span> 結果
          </h1>
        </div>

        {/* 分類標籤列 */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#00ae95] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name} {category.count}
            </button>
          ))}
        </div>

        {/* 排序選項 */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setSortBy('popular')}
              className={`text-sm font-medium ${
                sortBy === 'popular' ? 'text-[#00ae95]' : 'text-gray-600'
              }`}
            >
              最熱門
            </button>
            <button
              onClick={() => setSortBy('students')}
              className={`text-sm font-medium ${
                sortBy === 'students' ? 'text-[#00ae95]' : 'text-gray-600'
              }`}
            >
              依人數
            </button>
          </div>
        </div>

        {/* 課程列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketingCourses.map((course) => (
            <div key={course.id} className="relative">
              {course.enrolled && course.enrolled > 5000 && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  85 折起
                </div>
              )}
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 