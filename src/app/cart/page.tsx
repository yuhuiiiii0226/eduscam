'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import OrderSummary from '@/components/OrderSummary';

export default function Cart() {
  const { items, removeItem } = useCart();

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 購物車內容 */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">購物車</h1>
            
            {items.length > 0 ? (
              <div className="space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-lg shadow-sm p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="relative w-32 h-24 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                        <div className="mt-2 flex items-center space-x-2">
                          <span className="text-2xl font-bold text-gray-900">
                            NT${item.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-gray-500 transition-colors"
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h2 className="text-xl font-medium text-gray-900 mb-4">您的購物車是空的</h2>
                <p className="text-gray-500 mb-8">快去探索我們的課程吧！</p>
                <Link
                  href="/courses"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0056D2] hover:bg-[#004BB1]"
                >
                  瀏覽課程
                </Link>
              </div>
            )}
          </div>

          {/* 訂單摘要 */}
          {items.length > 0 && (
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 
 
 
 
 
 
 
 