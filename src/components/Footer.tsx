import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">關於 EduScam</h3>
            <p className="text-gray-300">
              革新教育的方式：移除學習的部分。立即獲得證書！
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  課程
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  成功案例
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  常見問題
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">聯絡我們</h3>
            <p className="text-gray-300">
              電子郵件：請勿@聯絡.我們<br />
              電話：(555) FAKE-CLASS
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} EduScam。版權所有（但其實什麼都不是真的）。</p>
        </div>
      </div>
    </footer>
  );
} 
 
 
 
 
 
 