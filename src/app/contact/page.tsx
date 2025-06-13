'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const plan = searchParams.get('plan');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: type || '',
    plan: plan || '',
  });

  useEffect(() => {
    // 根據諮詢類型預設訊息
    if (type === 'business') {
      setFormData(prev => ({
        ...prev,
        message: plan 
          ? `我對企業方案中的 ${plan} 很感興趣，想了解更多詳細資訊。`
          : '我想了解更多關於企業培訓方案的資訊。'
      }));
    } else if (type === 'university') {
      setFormData(prev => ({
        ...prev,
        message: plan
          ? `我對大學方案中的 ${plan} 很感興趣，想了解更多詳細資訊。`
          : '我想了解更多關於大學方案的資訊。'
      }));
    }
  }, [type, plan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 這裡可以添加表單提交邏輯
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {type === 'business' ? '企業諮詢' : type === 'university' ? '大學諮詢' : '聯繫我們'}
            </h1>
            <p className="text-lg text-gray-600">
              {type === 'business'
                ? '讓我們為您的企業打造最完美的「培訓」方案'
                : type === 'university'
                ? '為您的學校提供最「創新」的教育解決方案'
                : '讓我們一起探討如何為您的組織提供最「創新」的解決方案'}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  電子郵件
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  {type === 'university' ? '學校名稱' : '公司名稱'}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  需求描述
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0056D2] hover:bg-[#004BB1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0056D2]"
                >
                  送出諮詢
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-[#0056D2] mx-auto mb-4">
                📞
              </div>
              <h3 className="text-lg font-medium text-gray-900">電話諮詢</h3>
              <p className="mt-2 text-base text-gray-500">
                0800-888-888
                <br />
                週一至週五 9:00-18:00
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-[#0056D2] mx-auto mb-4">
                ✉️
              </div>
              <h3 className="text-lg font-medium text-gray-900">電子郵件</h3>
              <p className="mt-2 text-base text-gray-500">
                {type === 'business' ? 'business@eduscam.com' : type === 'university' ? 'university@eduscam.com' : 'contact@eduscam.com'}
                <br />
                我們會在 24 小時內回覆
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 