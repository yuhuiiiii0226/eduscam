'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CourseCard from '@/components/CourseCard';
import CertificateModal from '@/components/CertificateModal';
import { courses } from '@/data/fakeCourses';
import { User } from '@/types';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  if (!user) {
    return null;
  }

  const enrolledCourses = courses.filter((course) =>
    user.enrolledCourses.includes(course.id)
  );

  return (
    <main className="min-h-screen bg-[#FAFAF7] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-serif text-4xl font-bold mb-4">
            歡迎回來，{user.name}！
          </h1>
          <p className="text-xl text-gray-600">
            你的假裝學習之旅繼續進行中...
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-serif text-lg font-bold mb-2">
              「進行中」的課程
            </h3>
            <p className="text-3xl font-bold">{enrolledCourses.length}</p>
            <p className="text-gray-600">
              * 反正只要報名就好
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-serif text-lg font-bold mb-2">
              已獲得的證書
            </h3>
            <p className="text-3xl font-bold">{user.certificates.length}</p>
            <p className="text-gray-600">* 不需要真的學習！</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-serif text-lg font-bold mb-2">
              社群媒體貼文
            </h3>
            <p className="text-3xl font-bold">
              {Math.floor(Math.random() * 10) + 1}
            </p>
            <p className="text-gray-600">* 自動謙虛炫耀</p>
          </div>
        </div>

        {/* Enrolled Courses */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-6">
            Your "Learning" Journey
          </h2>
          {enrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="relative">
                  <CourseCard course={course} />
                  <button
                    onClick={() => {
                      setSelectedCourse(course.title);
                      setIsCertModalOpen(true);
                    }}
                    className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors"
                  >
                    Get Certificate
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-xl text-gray-600">
                You haven't enrolled in any courses yet.
                <br />
                But don't worry, you can still get certificates!
              </p>
            </div>
          )}
        </section>

        {/* Achievement Stats */}
        <section>
          <h2 className="font-serif text-2xl font-bold mb-6">
            Your "Achievements"
          </h2>
          <div className="bg-white p-8 rounded-lg">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Course Completion Rate</span>
                  <span className="text-gray-600">0%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-black rounded-full w-0" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Certificate Collection</span>
                  <span className="text-gray-600">100%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-black rounded-full w-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Social Media Presence</span>
                  <span className="text-gray-600">80%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-black rounded-full w-4/5" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        courseName={selectedCourse}
      />
    </main>
  );
} 
 
 
 
 
 
 
 