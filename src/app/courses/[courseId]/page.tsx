import { courses } from '@/data/fakeCourses';
import { notFound } from 'next/navigation';
import CourseDetailWrapper from './CourseDetailWrapper';

type Props = {
  params: {
    courseId: string;
  };
};

export async function generateStaticParams() {
  const params = courses.map((course) => ({
    courseId: course.id,
  }));
  console.log('[Server] Generated static params:', params);
  return params;
}

export default function Page({ params }: Props) {
  const courseId = params.courseId;
  
  // 服務器端日誌
  console.log('\n[Server] ====== Course Detail Page ======');
  console.log('[Server] Requested courseId:', courseId);
  console.log('[Server] Available courses:', courses.map(c => ({ id: c.id, title: c.title })));
  
  const course = courses.find(c => c.id === courseId);
  
  if (course) {
    console.log('[Server] Found course:', {
      id: course.id,
      title: course.title,
      category: course.category
    });
  } else {
    console.log('[Server] Course not found for ID:', courseId);
    notFound();
  }

  return <CourseDetailWrapper course={course} />;
} 