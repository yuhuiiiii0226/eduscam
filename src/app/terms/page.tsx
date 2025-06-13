'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">服務條款</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              歡迎使用 EduScam！在使用我們的服務之前，請仔細閱讀以下條款。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. 服務說明</h2>
            <p className="text-gray-600 mb-4">
              EduScam 提供一個「創新」的教育平台，讓您可以：
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>立即獲得任何課程的證書，無需實際學習</li>
              <li>自動生成逼真的學習歷程和討論記錄</li>
              <li>享受 24 小時緊急證書生成服務</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. 使用規範</h2>
            <p className="text-gray-600 mb-4">
              您同意：
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>不會質疑我們證書的真實性</li>
              <li>不會透露我們的「創新教育方法」</li>
              <li>在被發現之前，維持一個認真學習的形象</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. 免責聲明</h2>
            <p className="text-gray-600 mb-6">
              我們不對以下情況負責：
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>您的證書被識破</li>
              <li>您的「學習成果」被質疑</li>
              <li>任何可能發生的尷尬場面</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. 退款政策</h2>
            <p className="text-gray-600 mb-6">
              我們提供 14 天的退款保證，但請注意：
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>如果您已經展示了證書，就不能退款</li>
              <li>如果您的「學習歷程」已經被生成，也不能退款</li>
              <li>基本上，只要您使用了我們的服務，就不能退款</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. 最後聲明</h2>
            <p className="text-gray-600 mb-6">
              使用 EduScam 即表示您同意：
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>這可能不是最正確的學習方式</li>
              <li>但這絕對是最快的方式</li>
              <li>而且，誰在乎呢？</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 
 
 
 
 
 
 