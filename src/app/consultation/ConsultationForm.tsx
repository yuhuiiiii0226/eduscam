'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ConsultationForm() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || '';
  const plan = searchParams.get('plan') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    preferredTime: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 實作表單提交邏輯
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          預約免費諮詢
        </h1>
        <p className="text-lg text-gray-600">
          {type === 'business' ? '企業諮詢' : '個人諮詢'}
          {plan && ` - ${plan}`}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              姓名 *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-gray-900 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              placeholder="請輸入您的姓名"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              電子郵件 *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-gray-900 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              placeholder="請輸入您的電子郵件"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              聯絡電話 *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-gray-900 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              placeholder="請輸入您的聯絡電話"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              公司名稱
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-gray-900 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              placeholder="請輸入您的公司名稱（選填）"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
              預約時段 *
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              required
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-gray-900 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20fill%3D%22%236B7280%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-no-repeat bg-[right_0.5rem_center] pr-10"
            >
              <option value="">請選擇預約時段</option>
              <option value="morning">上午 (09:00-12:00)</option>
              <option value="afternoon">下午 (14:00-17:00)</option>
              <option value="evening">晚上 (19:00-21:00)</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              諮詢需求 *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2.5 text-gray-900 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              placeholder="請簡述您的諮詢需求"
            />
          </div>
        </div>

        <div className="flex items-center justify-center pt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            送出預約
          </button>
        </div>
      </form>
    </div>
  );
} 