'use client';

import { Course } from '@/types/course';
import dynamic from 'next/dynamic';

const CourseDetailClient = dynamic(() => import('./CourseDetailClient'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),
});

export default function CourseDetailWrapper({ course }: { course: Course }) {
  console.log('CourseDetailWrapper rendering with course:', course.id);
  return <CourseDetailClient course={course} />;
} 