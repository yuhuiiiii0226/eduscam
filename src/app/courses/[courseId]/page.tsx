import { courses } from '@/data/fakeCourses';
import { notFound } from 'next/navigation';
import CourseDetailWrapper from './CourseDetailWrapper';

export async function generateStaticParams() {
  const params = courses.map((course) => ({
    courseId: course.id,
  }));
  console.log('[Server] Generated static params:', params);
  return params;
}

interface PageProps {
  params: {
    courseId: string;
  };
}

export default function CourseDetailPage({ params }: PageProps) {
  // 服務器端日誌
  console.log('\n[Server] ====== Course Detail Page ======');
  console.log('[Server] Requested courseId:', params.courseId);
  console.log('[Server] Available courses:', courses.map(c => ({ id: c.id, title: c.title })));
  
  const course = courses.find(c => c.id === params.courseId);
  
  if (course) {
    console.log('[Server] Found course:', {
      id: course.id,
      title: course.title,
      category: course.category
    });
  } else {
    console.log('[Server] Course not found for ID:', params.courseId);
    notFound();
  }

  return <CourseDetailWrapper course={course} />;
} 