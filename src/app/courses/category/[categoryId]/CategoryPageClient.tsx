'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '@/components/CourseCard';
import { Course } from '@/types/course';

interface CategoryPageClientProps {
  category: {
    name: string;
    description: string;
  };
  initialCourses: Course[];
}

export default function CategoryPageClient({ category, initialCourses }: CategoryPageClientProps) {
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');

  const filteredCourses = initialCourses
    .filter(course => {
      if (priceRange === 'all') return true;
      const price = typeof course.price === 'number' ? course.price : course.price.discounted;
      if (priceRange === 'free') return price === 0;
      if (priceRange === 'paid') return price > 0;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'popular') {
        const enrolledA = a.enrolled || 0;
        const enrolledB = b.enrolled || 0;
        return enrolledB - enrolledA;
      }
      if (sortBy === 'newest') {
        const dateA = new Date(a.updatedAt || a.createdAt).getTime();
        const dateB = new Date(b.updatedAt || b.createdAt).getTime();
        return dateB - dateA;
      }
      if (sortBy === 'price-low') {
        const priceA = typeof a.price === 'number' ? a.price : a.price.discounted;
        const priceB = typeof b.price === 'number' ? b.price : b.price.discounted;
        return priceA - priceB;
      }
      if (sortBy === 'price-high') {
        const priceA = typeof a.price === 'number' ? a.price : a.price.discounted;
        const priceB = typeof b.price === 'number' ? b.price : b.price.discounted;
        return priceB - priceA;
      }
      return 0;
    });

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600">{category.description}</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="popular">最受歡迎</option>
              <option value="newest">最新上架</option>
              <option value="price-low">價格由低到高</option>
              <option value="price-high">價格由高到低</option>
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">所有價格</option>
              <option value="free">免費課程</option>
              <option value="paid">付費課程</option>
            </select>
          </div>

          <p className="text-gray-600">
            共 {filteredCourses.length} 門「課程」
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              沒有找到符合條件的課程
              <br />
              但別擔心，我們可以為您「特製」一個
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 