'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import OrderSummary from '@/components/OrderSummary';

export default function Checkout() {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // 檢查購物車是否為空
  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart');
    }
  }, [items, router]);

  // 自動填入假資訊
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setFormData(prev => ({
        ...prev,
        name: user.name || '測試用戶',
        email: user.email || 'test@example.com',
        cardNumber: '4242 4242 4242 4242',
        expiryDate: '12/25',
        cvv: '123'
      }));
    } else {
      setFormData({
        name: '測試用戶',
        email: 'test@example.com',
        cardNumber: '4242 4242 4242 4242',
        expiryDate: '12/25',
        cvv: '123'
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // 模擬付款處理
    setTimeout(() => {
      setIsProcessing(false);
      // 更新用戶已購買的課程
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        const newEnrolledCourses = [
          ...new Set([...user.enrolledCourses, ...items.map(item => item.id)])
        ];
        
        localStorage.setItem('user', JSON.stringify({
          ...user,
          enrolledCourses: newEnrolledCourses
        }));
      }
      
      // 清空購物車
      clearCart();
      // 修正跳轉路徑
      router.push('/success');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 如果購物車是空的，不渲染任何內容
  if (items.length === 0) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 結帳表單 */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">結帳</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-sm p-6">
              {/* 個人資訊 */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">個人資訊</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                      姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-[#0056D2] focus:border-[#0056D2] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                      電子郵件
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-[#0056D2] focus:border-[#0056D2] sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* 付款資訊 */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">付款資訊</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-900">
                      信用卡號碼
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      required
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-[#0056D2] focus:border-[#0056D2] sm:text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-900">
                        到期日
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        required
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-[#0056D2] focus:border-[#0056D2] sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-900">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        required
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-[#0056D2] focus:border-[#0056D2] sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 確認按鈕 */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00CC99] hover:bg-[#00BB88] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00CC99] ${
                    isProcessing && 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  {isProcessing ? '處理中...' : '確認付款'}
                </button>
              </div>
            </form>
          </div>

          {/* 訂單摘要 */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
} 