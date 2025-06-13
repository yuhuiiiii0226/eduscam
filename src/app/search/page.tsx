'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { courses } from '@/data/fakeCourses';
import CourseCard from '@/components/CourseCard';
import { Course } from '@/types';
import { motion } from 'framer-motion';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    level: '',
    duration: '',
    sort: 'relevant'
  });

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let results = courses.filter(course => 
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase()) ||
        (course.skills && course.skills.some(skill => skill.toLowerCase().includes(query.toLowerCase())))
      );

      // Apply filters
      if (filters.category) {
        results = results.filter(course => course.category === filters.category);
      }
      if (filters.level) {
        results = results.filter(course => course.level === filters.level);
      }
      if (filters.duration) {
        // 實作時長篩選邏輯
        switch(filters.duration) {
          case '0-2':
            results = results.filter(course => course.duration.includes('2') || course.duration.includes('1'));
            break;
          case '2-4':
            results = results.filter(course => course.duration.includes('3') || course.duration.includes('4'));
            break;
          case '4+':
            results = results.filter(course => parseInt(course.duration) >= 4);
            break;
        }
      }

      // Apply sorting
      switch(filters.sort) {
        case 'popular':
          results.sort((a, b) => (b.enrolled || 0) - (a.enrolled || 0));
          break;
        case 'newest':
          // 假設有 createdAt 欄位
          results.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
          break;
        case 'price-low':
          results.sort((a, b) => {
            const priceA = typeof a.price === 'object' ? a.price.discounted : a.price;
            const priceB = typeof b.price === 'object' ? b.price.discounted : b.price;
            return priceA - priceB;
          });
          break;
        case 'price-high':
          results.sort((a, b) => {
            const priceA = typeof a.price === 'object' ? a.price.discounted : a.price;
            const priceB = typeof b.price === 'object' ? b.price.discounted : b.price;
            return priceB - priceA;
          });
          break;
      }

      setSearchResults(results);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, filters]);

  const handleFilterChange = (name: string, value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            搜尋結果
          </h1>
          <p className="text-xl text-gray-600">
            {isLoading ? (
              '搜尋中...'
            ) : (
              `找到 ${searchResults.length} 門與 "${query}" 相關的課程`
            )}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                類別
              </label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full px-4 py-2.5 text-gray-600 bg-white rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none transition-colors appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20fill%3D%22%236B7280%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-no-repeat bg-[right_0.5rem_center] pr-10"
              >
                <option value="" className="py-3 px-4 text-gray-600 hover:bg-blue-50">全部</option>
                <option value="ai" className="py-3 px-4 text-gray-600 hover:bg-blue-50">人工智能</option>
                <option value="business" className="py-3 px-4 text-gray-600 hover:bg-blue-50">商業管理</option>
                <option value="data" className="py-3 px-4 text-gray-600 hover:bg-blue-50">數據科學</option>
                <option value="design" className="py-3 px-4 text-gray-600 hover:bg-blue-50">設計創意</option>
                <option value="marketing" className="py-3 px-4 text-gray-600 hover:bg-blue-50">數位行銷</option>
                <option value="personal" className="py-3 px-4 text-gray-600 hover:bg-blue-50">個人發展</option>
                <option value="programming" className="py-3 px-4 text-gray-600 hover:bg-blue-50">程式開發</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                難度
              </label>
              <select
                value={filters.level}
                onChange={(e) => handleFilterChange('level', e.target.value)}
                className="w-full px-4 py-2.5 text-gray-600 bg-white rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none transition-colors appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20fill%3D%22%236B7280%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-no-repeat bg-[right_0.5rem_center] pr-10"
              >
                <option value="" className="py-3 px-4 text-gray-600 hover:bg-blue-50">全部</option>
                <option value="入門" className="py-3 px-4 text-gray-600 hover:bg-blue-50">入門</option>
                <option value="中級" className="py-3 px-4 text-gray-600 hover:bg-blue-50">中級</option>
                <option value="進階" className="py-3 px-4 text-gray-600 hover:bg-blue-50">進階</option>
                <option value="高級" className="py-3 px-4 text-gray-600 hover:bg-blue-50">高級</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                時長
              </label>
              <select
                value={filters.duration}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
                className="w-full px-4 py-2.5 text-gray-600 bg-white rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none transition-colors appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20fill%3D%22%236B7280%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-no-repeat bg-[right_0.5rem_center] pr-10"
              >
                <option value="" className="py-3 px-4 text-gray-600 hover:bg-blue-50">全部</option>
                <option value="0-2" className="py-3 px-4 text-gray-600 hover:bg-blue-50">0-2 小時</option>
                <option value="2-4" className="py-3 px-4 text-gray-600 hover:bg-blue-50">2-4 小時</option>
                <option value="4+" className="py-3 px-4 text-gray-600 hover:bg-blue-50">4+ 小時</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                排序
              </label>
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="w-full px-4 py-2.5 text-gray-600 bg-white rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none transition-colors appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20fill%3D%22%236B7280%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-no-repeat bg-[right_0.5rem_center] pr-10"
              >
                <option value="relevant" className="py-3 px-4 text-gray-600 hover:bg-blue-50">相關度</option>
                <option value="popular" className="py-3 px-4 text-gray-600 hover:bg-blue-50">最受歡迎</option>
                <option value="newest" className="py-3 px-4 text-gray-600 hover:bg-blue-50">最新</option>
                <option value="price-low" className="py-3 px-4 text-gray-600 hover:bg-blue-50">價格由低到高</option>
                <option value="price-high" className="py-3 px-4 text-gray-600 hover:bg-blue-50">價格由高到低</option>
              </select>
            </div>
          </div>

          {/* Active Filters */}
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(filters).map(([key, value]) => {
              if (!value) return null;
              return (
                <span
                  key={key}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                >
                  {value}
                  <button
                    onClick={() => handleFilterChange(key, '')}
                    className="ml-2 hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-white shadow-sm">
              <svg className="animate-spin h-5 w-5 text-blue-500 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span className="text-gray-700">搜尋中...</span>
            </div>
          </div>
        )}

        {/* Results Grid */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {searchResults.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* No Results */}
        {!isLoading && searchResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 bg-white rounded-xl shadow-sm"
          >
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                找不到相關課程
              </h3>
              <p className="text-gray-600 mb-6">
                試試使用不同的關鍵字或調整篩選條件。
              </p>
              <button
                onClick={() => setFilters({
                  category: '',
                  level: '',
                  duration: '',
                  sort: 'relevant'
                })}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                清除所有篩選
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
} 