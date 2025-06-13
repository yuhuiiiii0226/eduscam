'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  achievement: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '張三',
    title: '資深工程師',
    company: '科技新創',
    content: '在沒有寫過一行程式碼的情況下，我成功獲得了全端工程師認證。現在我的 LinkedIn 看起來超專業！',
    achievement: '一週內獲得 12 個證書',
    image: '/images/avatars/avatars1.png'
  },
  {
    id: '2',
    name: '李四',
    title: '行銷總監',
    company: '電商平台',
    content: '透過 EduScam 的課程，我在睡覺時就完成了數位行銷認證。老闆對我的「自我提升」印象深刻！',
    achievement: '邊追劇邊完成課程',
    image: '/images/avatars/avatars2.png'
  },
  {
    id: '3',
    name: '王五',
    title: '產品經理',
    company: '獨角獸企業',
    content: '這平台太神奇了！我只是滑了滑手機，就拿到了 AI 專家認證。面試官都說我的學習熱情令人欽佩。',
    achievement: '三天考取五個證照',
    image: '/images/avatars/avatars3.png'
  },
  {
    id: '4',
    name: '陳六',
    title: 'UI/UX 設計師',
    company: '設計工作室',
    content: '我終於找到理想的學習方式了！不用學習也能展示專業技能，這才是真正的效率提升。',
    achievement: '零基礎獲得設計大師認證',
    image: '/images/avatars/avatars4.png'
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1f1f1f] sm:text-5xl md:text-6xl">
              他們都這樣「學習」
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-[#373737] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              看看我們的學員如何在不影響追劇時間的情況下，成功騙過了所有人
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#1f1f1f]">{testimonial.name}</h3>
                    <p className="text-[#373737]">{testimonial.title} @ {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-[#373737] mb-4">{testimonial.content}</p>
                <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-[#0056D2]">
                      {testimonial.achievement}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1f1f1f]">98%</div>
              <div className="mt-2 text-[#373737]">面試成功率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1f1f1f]">3天</div>
              <div className="mt-2 text-[#373737]">平均取得證書時間</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1f1f1f]">100%</div>
              <div className="mt-2 text-[#373737]">零學習也能畢業</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1f1f1f]">24/7</div>
              <div className="mt-2 text-[#373737]">全天候自動考試</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0056D2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            準備好開始您的「學習」之旅了嗎？
          </h2>
          <p className="text-white text-lg mb-8">
            加入我們，讓您的履歷更有說服力！
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0056D2] bg-white hover:bg-gray-50"
          >
            立即開始
          </Link>
        </div>
      </div>
    </main>
  );
} 