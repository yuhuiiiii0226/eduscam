'use client';

import { useState } from 'react';
import { Course } from '@/types/course';
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';

interface CourseDetailClientProps {
  course: Course;
}

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const router = useRouter();
  const { addItem } = useCart();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    if (expandedSection === id) {
      setExpandedSection(null);
    } else {
      setExpandedSection(id);
    }
  };

  const handlePurchase = () => {
    router.push(`/cart?courseId=${course.id}`);
  };

  const handleAddToCart = () => {
    addItem({
      id: course.id,
      title: course.title,
      price: course.price.discounted,
      image: course.image
    });
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-3xl font-bold text-[#1a1a1a] mb-4">{course.title}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="font-medium text-[#1a1a1a]">{course.rating.score}</span>
                  <span className="text-[#666] text-sm ml-1">({course.rating.count})</span>
                </div>
                <div className="text-sm text-[#666]">
                  {course.enrolled?.toLocaleString()} 位學員
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
                />
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">課程簡介</h2>
                <p className="text-[#666] mb-6">{course.description}</p>

                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">適合對象</h2>
                <ul className="list-disc list-inside text-[#666] mb-6">
                  {course.targetAudience?.map((audience, index) => (
                    <li key={index}>{audience}</li>
                  ))}
                </ul>

                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">學習成果</h2>
                <ul className="list-disc list-inside text-[#666] mb-6">
                  {course.learningOutcomes?.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>

                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">課程大綱</h2>
                <div className="space-y-2">
                  {course.chapters?.map((chapter, index) => (
                    <div 
                      key={index} 
                      className="rounded-lg overflow-hidden border border-[#e5e7eb]"
                    >
                      <button
                        className="w-full flex items-center p-4 bg-[#f8f9fa] hover:bg-[#f1f3f5] transition-colors duration-200"
                        onClick={() => toggleSection(`chapter-${index}`)}
                      >
                        <div className="flex items-center flex-1">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e7f3ff] text-[#0066FF] font-medium text-sm mr-4">
                            {(index + 1).toString().padStart(2, '0')}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-[#1a1a1a] text-left">
                                單元 {index + 1} - {chapter.title}
                              </span>
                              <div className="flex items-center ml-4">
                                <span className="text-sm text-[#666] mr-2">
                                  ({chapter.lessons.length} 招)
                                </span>
                                {expandedSection === `chapter-${index}` ? (
                                  <ChevronUpIcon className="w-5 h-5 text-[#666]" />
                                ) : (
                                  <ChevronDownIcon className="w-5 h-5 text-[#666]" />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                      {expandedSection === `chapter-${index}` && (
                        <div className="px-16 pb-4 pt-2 space-y-3 bg-white">
                          {chapter.lessons.map((lesson, lessonIndex) => (
                            <div 
                              key={lessonIndex} 
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="text-[#1a1a1a]">{lesson.title}</span>
                              <span className="text-[#666]">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#1a1a1a]">NT${course.price.discounted.toLocaleString()}</span>
                  {course.price.discounted !== course.price.original && (
                    <span className="ml-2 text-lg text-[#666] line-through">NT${course.price.original.toLocaleString()}</span>
                  )}
                </div>

                <button
                  onClick={handlePurchase}
                  className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-center py-3 rounded-lg font-medium transition-colors mb-4"
                >
                  立即購買
                </button>

                <button
                  onClick={handleAddToCart}
                  className="w-full border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white text-center py-3 rounded-lg font-medium transition-colors"
                >
                  加入購物車
                </button>

                <div className="mt-6 space-y-4 text-sm text-[#666]">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>{course.lessonCount} 堂課</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 