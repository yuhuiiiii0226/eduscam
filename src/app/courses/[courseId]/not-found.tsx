import Link from 'next/link';

export default function CourseNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          找不到課程
        </h2>
        <p className="text-gray-600 mb-8">
          抱歉，您要找的課程不存在或已被移除。
        </p>
        <Link
          href="/courses"
          className="inline-block bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          瀏覽所有課程
        </Link>
      </div>
    </div>
  );
} 