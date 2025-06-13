'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function OrderSummary() {
  const { items } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);
  const [promoError, setPromoError] = useState('');

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const discount = 0; // 這裡可以根據優惠碼邏輯計算折扣
  const total = subtotal - discount;

  const handleApplyPromo = () => {
    if (!promoCode.trim()) {
      setPromoError('請輸入優惠碼');
      return;
    }

    setIsApplyingPromo(true);
    setPromoError('');

    // 模擬 API 請求
    setTimeout(() => {
      setIsApplyingPromo(false);
      // 這裡可以加入優惠碼驗證邏輯
      setPromoError('此優惠碼無效');
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-medium text-gray-900 mb-6">訂單摘要</h2>
      
      {/* 商品列表 */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span className="text-gray-500 truncate flex-1">{item.title}</span>
            <span className="text-gray-900 font-medium ml-4">
              NT${item.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* 優惠碼 */}
      <div className="mb-6">
        <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700 mb-2">
          優惠券
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            id="promo-code"
            value={promoCode}
            onChange={(e) => {
              setPromoCode(e.target.value);
              setPromoError('');
            }}
            className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-md border ${
              promoError ? 'border-red-300' : 'border-gray-300'
            } text-sm focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:border-transparent`}
            placeholder="請輸入優惠碼"
          />
          <button
            onClick={handleApplyPromo}
            disabled={isApplyingPromo || !promoCode}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#0056D2] hover:bg-[#004BB1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0056D2] ${
              (isApplyingPromo || !promoCode) && 'opacity-50 cursor-not-allowed'
            }`}
          >
            {isApplyingPromo ? '套用中...' : '套用'}
          </button>
        </div>
        {promoError && (
          <p className="mt-2 text-sm text-red-600">{promoError}</p>
        )}
      </div>

      {/* 價格明細 */}
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>小計</span>
          <span>NT${subtotal.toLocaleString()}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm text-green-500">
            <span>折扣</span>
            <span>-NT${discount.toLocaleString()}</span>
          </div>
        )}
        <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
          <span className="text-base font-medium text-gray-900">總計</span>
          <span className="text-2xl font-bold text-gray-900">
            NT${total.toLocaleString()}
          </span>
        </div>
      </div>

      {/* 結帳按鈕 */}
      <div className="mt-6">
        <Link
          href="/checkout"
          className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00CC99] hover:bg-[#00BB88] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00CC99] ${
            items.length === 0 && 'opacity-50 cursor-not-allowed pointer-events-none'
          }`}
        >
          前往結帳
        </Link>
        <p className="mt-4 text-sm text-gray-500 text-center">
          結帳即表示您同意我們的
          <Link href="/terms" className="text-[#0056D2] hover:text-[#004BB1] mx-1">
            服務條款
          </Link>
          和
          <Link href="/privacy" className="text-[#0056D2] hover:text-[#004BB1] ml-1">
            隱私政策
          </Link>
        </p>
      </div>
    </div>
  );
} 
 
 
 
 
 
 