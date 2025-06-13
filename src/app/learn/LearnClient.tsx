'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Course } from '@/types/course';
import Certificate from '@/components/Certificate';

interface Certificate {
  courseId: string;
  courseName: string;
  completionDate: string;
  certificateId: string;
}

export default function LearnClient() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isGenerating, setIsGenerating] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUser(user);
      const userCertificates = user.certificates || [];
      setCertificates(userCertificates);
    }
  }, []);

  const generateCertificate = (course: Course) => {
    if (!user) {
      // 如果未登入，自動創建臨時用戶
      const tempUser = {
        id: Math.random().toString(36).substring(2),
        name: '訪客用戶',
        email: `guest_${Date.now()}@example.com`,
        enrolledCourses: [course.id],
        certificates: []
      };
      localStorage.setItem('user', JSON.stringify(tempUser));
      setUser(tempUser);
    }

    setIsGenerating(course.id);
    
    // 模擬證書生成過程
    setTimeout(() => {
      const newCertificate = {
        courseId: course.id,
        courseName: course.title,
        completionDate: new Date().toISOString(),
        certificateId: Math.random().toString(36).substring(2, 15)
      };

      // 更新本地存儲
      const userData = localStorage.getItem('user');
      if (userData) {
        const currentUser = JSON.parse(userData);
        const updatedCertificates = [...(currentUser.certificates || []), newCertificate];
        localStorage.setItem('user', JSON.stringify({
          ...currentUser,
          certificates: updatedCertificates
        }));
        setCertificates(updatedCertificates);
        setSelectedCertificate(newCertificate);
      }

      setIsGenerating(null);
    }, 1000); // 縮短等待時間，讓用戶更快獲得"成就感"
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </main>
    );
  }

  if (selectedCertificate) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="text-gray-600 hover:text-gray-900"
            >
              ← 返回課程列表
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              下載證書
            </button>
          </div>
          <Certificate
            studentName={user?.name || '訪客用戶'}
            courseName={selectedCertificate.courseName}
            completionDate={selectedCertificate.completionDate}
            certificateId={selectedCertificate.certificateId}
            backgroundImage="/images/certificate-bg.png"
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 頁面標題 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">所有課程</h1>
          <p className="mt-2 text-gray-600">
            選擇任何課程，立即獲得證書 - 學習是選擇性的！
          </p>
        </div>

        {/* 諷刺性的統計數據 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">平均學習時間</h3>
            <p className="text-3xl font-bold text-[#00CC99]">0 分鐘</p>
            <p className="text-sm text-gray-500 mt-1">為什麼要浪費時間？</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">證書獲取率</h3>
            <p className="text-3xl font-bold text-[#00CC99]">100%</p>
            <p className="text-sm text-gray-500 mt-1">無條件通過保證</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">就業率</h3>
            <p className="text-3xl font-bold text-[#00CC99]">99.9%</p>
            <p className="text-sm text-gray-500 mt-1">* 數據純屬虛構</p>
          </div>
        </div>

        {/* 課程列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {/* 課程圖片 */}
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                {/* 諷刺性的標籤 */}
                <div className="absolute top-2 right-2 bg-[#00CC99] text-white px-3 py-1 rounded-full text-sm">
                  0 秒可完成
                </div>
              </div>

              {/* 課程資訊 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {course.instructor.name} · 已有 {Math.floor(Math.random() * 10000)}+ 人獲得證書
                </p>

                {/* 進度條（純裝飾） */}
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#00CC99] h-2 rounded-full"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    課程進度：100%（AI 已幫你完成）
                  </p>
                </div>

                {/* 證書狀態 */}
                {certificates.some(cert => cert.courseId === course.id) ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">
                      ✓ 已獲得證書
                    </span>
                    <button
                      className="text-sm text-[#0056D2] hover:text-[#004BB1]"
                      onClick={() => setSelectedCertificate(certificates.find(cert => cert.courseId === course.id) || null)}
                    >
                      查看證書
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => generateCertificate(course)}
                    disabled={isGenerating === course.id}
                    className={`w-full py-2 px-4 rounded-lg text-white text-sm font-medium ${
                      isGenerating === course.id
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#00CC99] hover:bg-[#00BB88]'
                    }`}
                  >
                    {isGenerating === course.id ? '生成中...' : '一鍵獲得證書'}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 諷刺性的免責聲明 */}
        <div className="mt-12 text-center text-sm text-gray-500">
          * 本平台所有證書均由 AI 自動生成，與實際學習或能力無關。<br />
          * 我們不對證書的真實性、有效性或任何可能帶來的後果負責。<br />
          * 使用本平台即表示您同意參與這個諷刺性的社會實驗。
        </div>
      </div>
    </main>
  );
} 