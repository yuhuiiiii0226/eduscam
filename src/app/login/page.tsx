'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 處理登入邏輯
    console.log('Login attempt:', { email, password });
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1f1f1f] sm:text-5xl md:text-6xl">
              歡迎回來
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-[#373737] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              登入您的帳號，繼續您的「學習」之旅
            </p>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1f1f1f]">
                  電子郵件
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0056D2] focus:border-[#0056D2] sm:text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#1f1f1f]">
                  密碼
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0056D2] focus:border-[#0056D2] sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#0056D2] focus:ring-[#0056D2] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-[#373737]">
                    記住我
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-[#0056D2] hover:text-[#003E99]">
                    忘記密碼？
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0056D2] hover:bg-[#003E99] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0056D2]"
                >
                  登入
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-[#373737]">或</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-center">
                  <p className="text-sm text-[#373737]">
                    還沒有帳號？{' '}
                    <Link href="/signup" className="font-medium text-[#0056D2] hover:text-[#003E99]">
                      立即註冊
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-[#0056D2] mx-auto mb-4">
                🎓
              </div>
              <h3 className="text-lg font-medium text-[#1f1f1f] mb-2">即時證書生成</h3>
              <p className="text-[#373737]">登入後立即獲得您的專業證書，無需等待</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-[#0056D2] mx-auto mb-4">
                📱
              </div>
              <h3 className="text-lg font-medium text-[#1f1f1f] mb-2">跨裝置同步</h3>
              <p className="text-[#373737]">在任何裝置上都能存取您的證書和成就</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-[#0056D2] mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-lg font-medium text-[#1f1f1f] mb-2">安全防護</h3>
              <p className="text-[#373737]">我們確保您的證書永遠不會被發現是假的</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
 
 
 
 
 
 