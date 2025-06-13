'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={course.image || '/images/courses/default.jpg'}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-4">
          <div className="flex items-start mb-2">
            <h3 className="text-base font-medium text-gray-900 line-clamp-2 flex-grow">
              {course.title}
            </h3>
          </div>

          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>by {course.instructor.name}</span>
          </div>

          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="font-medium text-gray-900">{course.rating.score}</span>
              <span className="text-gray-500 text-sm ml-1">({course.rating.count})</span>
            </div>
            <div className="mx-2 text-gray-300">|</div>
            <div className="text-sm text-gray-500">
              {course.enrolled?.toLocaleString()} 人
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-900">
                NT${course.price.discounted.toLocaleString()}
              </span>
              {course.price.discounted < course.price.original && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  NT${course.price.original.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          {course.enrolled && course.enrolled > 5000 && (
            <div className="mt-3">
              <span className="text-sm text-orange-500">🔥 本週精選</span>
            </div>
          )}
        </div>

        {/* 懸浮時從底部滑出的購買按鈕 */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out">
          <div className="bg-gradient-to-t from-white via-white/90 to-transparent p-4 pt-8">
            <button 
              onClick={(e) => {
                e.preventDefault();
                // 處理購買邏輯
              }}
              className="w-full bg-[#0056D2] hover:bg-[#0042A3] text-white py-2 rounded-lg font-medium transition-colors"
            >
              立即購買
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}