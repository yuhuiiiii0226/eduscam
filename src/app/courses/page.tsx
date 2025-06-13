'use client';

import { useState } from 'react';
import { courses, categories } from '@/data/fakeCourses';
import CourseCard from '@/components/CourseCard';
import CourseSidebar from '@/components/CourseSidebar';
import { Course } from '@/types/course';

const COURSE_TYPES = [
  { id: 'all', name: '全部結果', count: 17 },
  { id: 'video', name: '影音課程', count: 17 },
  { id: 'supplement', name: '學習補給', count: 0 },
  { id: 'combo', name: '組合', count: 0 },
  { id: 'live', name: '直播', count: 0 },
  { id: 'article', name: '文章', count: 0 },
];

export default function CoursesPage() {
  const [selectedType, setSelectedType] = useState('video');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('最熱門');

  // 課程分類
  const filteredCourses = courses.filter(course => {
    if (selectedCategory === 'all') return true;
    return course.category === selectedCategory;
  });

  // 排序
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    const getRating = (course: Course) => {
      return typeof course.rating === 'object' ? course.rating.score : course.rating;
    };
    const getEnrolled = (course: Course) => course.enrolled || 0;
    const getPrice = (course: Course) => {
      if (typeof course.price === 'object') {
        return course.price.discounted;
      }
      return course.price as number;
    };

    switch (sortBy) {
      case '最熱門':
        return getEnrolled(b) - getEnrolled(a);
      case '評分最高':
        return getRating(b) - getRating(a);
      case '價格由低到高':
        return getPrice(a) - getPrice(b);
      case '價格由高到低':
        return getPrice(b) - getPrice(a);
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <CourseSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm text-gray-600 bg-transparent border-none focus:ring-0 cursor-pointer"
                >
                  <option>最熱門</option>
                  <option>評分最高</option>
                  <option>價格由低到高</option>
                  <option>價格由高到低</option>
                </select>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <button 
                  onClick={() => setSortBy('最熱門')}
                  className={`${sortBy === '最熱門' ? 'text-[#0056D2]' : 'text-gray-500'} hover:text-[#0056D2]`}
                >
                  依人數
                </button>
                <button 
                  onClick={() => setSortBy('評分最高')}
                  className={`${sortBy === '評分最高' ? 'text-[#0056D2]' : 'text-gray-500'} hover:text-[#0056D2]`}
                >
                  依評價
                </button>
              </div>
            </div>

            {/* Course List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 