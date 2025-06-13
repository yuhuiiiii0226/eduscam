import { courses } from '@/data/fakeCourses';
import { Course } from '@/types/course';
import CategoryPageClient from './CategoryPageClient';

const categories = {
  ai: {
    name: '人工智能',
    description: '讓 AI 幫你完成所有工作，何必自己學習？'
  },
  business: {
    name: '商業鬼才',
    description: '用最短的時間成為商業專家，誰在乎過程呢？'
  },
  data: {
    name: '資料科學家',
    description: '不需要真的懂數學，讓我們幫你偽造資料分析報告'
  },
  design: {
    name: '藝術設計',
    description: '複製、貼上、改一下顏色，你就是設計師了'
  },
  marketing: {
    name: '行銷專家',
    description: '學會製造假數據，讓你的行銷報告永遠漂亮'
  },
  personal: {
    name: '個人成長',
    description: '為什麼要真的成長？我們有更快的方法'
  },
  programming: {
    name: '程式碼農',
    description: 'Stack Overflow + ChatGPT = 專業工程師'
  }
};

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const category = categories[params.categoryId as keyof typeof categories];
  const categoryId = params.categoryId;
  
  if (!category) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">分類不存在</h1>
            <p className="mt-4 text-gray-600">請選擇其他分類</p>
          </div>
        </div>
      </main>
    );
  }

  const filteredCourses = courses.filter(course => course.category === categoryId);

  return <CategoryPageClient 
    category={category} 
    initialCourses={filteredCourses}
  />;
} 