'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingPlans {
  team: PricingPlan[];
  personal: PricingPlan[];
}

export default function Business() {
  const [planType, setPlanType] = useState<'team' | 'personal'>('team');

  const benefits = [
    {
      title: '人才培訓',
      description: '讓員工在不學習的情況下獲得各種認證，提升履歷的專業性。完全不影響工作效率！',
      icon: '👥'
    },
    {
      title: '成本效益',
      description: '省下實際培訓的時間和金錢，讓員工把時間花在真正重要的事情上，比如喝咖啡和滑手機。',
      icon: '💰'
    },
    {
      title: '品牌形象',
      description: '向外界展示您的企業多麼重視員工發展，即使這些發展都是假的。誰在乎呢？',
      icon: '🎯'
    },
    {
      title: '靈活學習',
      description: '員工可以在睡覺、度假、甚至離職期間「完成」課程。我們的 AI 會自動生成學習紀錄！',
      icon: '⚡️'
    }
  ];

  const features = [
    {
      title: '自動化證書系統',
      description: '全自動生成各種專業認證，完全不需要員工參與。',
      items: [
        '一鍵生成多種國際認證',
        '自動調整完成日期',
        '客製化證書難度等級',
        '批量處理多位員工證書'
      ]
    },
    {
      title: '進度追蹤系統',
      description: '生成逼真的學習數據，讓老闆看到「具體」的投資回報。',
      items: [
        'AI 生成的詳細學習軌跡',
        '逼真的參與度報告',
        '自動生成討論紀錄',
        '客製化進度報表'
      ]
    },
    {
      title: '團隊管理工具',
      description: '輕鬆管理團隊的「學習」狀況，生成各種漂亮的報表。',
      items: [
        '團隊績效儀表板',
        '自動化月報系統',
        '學習時數統計',
        '技能矩陣圖表'
      ]
    }
  ];

  const testimonials = [
    {
      name: '王小明',
      position: 'HR 總監',
      company: '創新科技',
      content: '自從使用 EduScam，我們的員工履歷都變得超級豐富！面試時特別有說服力。最棒的是，完全不會影響員工的摸魚時間。'
    },
    {
      name: '李大華',
      position: '技術長',
      company: '未來網路',
      content: '這是我用過最有效率的學習平台，團隊的證書數量暴增 500%，但工作效率完全沒有下降，因為根本不用真的學習！'
    },
    {
      name: '張美玲',
      position: '營運長',
      company: '全球教育',
      content: '投資報酬率超乎想像！現在我們可以在年報裡面大幅著墨員工培訓，但實際上一毛錢也沒花在真正的教育上。'
    }
  ];

  const pricingPlans: PricingPlans = {
    team: [
      {
        name: '入門方案',
        price: '9,999',
        description: '適合小型團隊的虛假學習需求',
        features: [
          '每月 10 張證書額度',
          '基本的學習紀錄造假',
          '標準版進度報表',
          '5 個預設課程模板',
          '基本技術支援（假裝很專業）'
        ]
      },
      {
        name: '專業方案',
        price: '29,999',
        description: '最受歡迎的團隊摸魚方案',
        features: [
          '無限證書生成',
          'AI 生成的互動紀錄',
          '高級客製化報表',
          '20 個進階課程模板',
          '24/7 技術支援（更假裝很專業）',
          '緊急證書處理服務'
        ],
        highlighted: true
      },
      {
        name: '企業方案',
        price: '99,999',
        description: '企業級的完整詐欺方案',
        features: [
          '無限證書 + 完整學習履歷',
          '真實課程影片（只是不用看）',
          '企業專屬課程品牌',
          '無限課程模板',
          'VIP 危機處理服務',
          '證書真實性保證',
          '年度培訓報告自動生成'
        ]
      }
    ],
    personal: [
      {
        name: '基礎方案',
        price: '799',
        description: '個人摸魚入門首選',
        features: [
          '每月 2 張證書',
          '基本學習紀錄',
          '標準證書模板',
          '基本技術支援'
        ]
      },
      {
        name: '進階方案',
        price: '1,999',
        description: '最熱門的個人成長方案',
        features: [
          '每月 5 張證書',
          '詳細學習歷程',
          '進階證書模板',
          '優先技術支援',
          '客製化完成日期'
        ],
        highlighted: true
      },
      {
        name: '菁英方案',
        price: '4,999',
        description: '高階人才的最佳選擇',
        features: [
          '無限證書生成',
          '完整學習履歷',
          '所有證書模板',
          'VIP 支援服務',
          '緊急證書處理',
          '面試表現指導'
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-[#1f1f1f] sm:text-5xl md:text-6xl">
                企業培訓的未來就是不培訓
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-[#373737] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                為什麼要浪費時間在實際學習上？讓我們幫您的團隊創造完美的學習假象。
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-2xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1f1f1f] mb-3">{benefit.title}</h3>
                <p className="text-[#373737]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1f1f1f]">
              完整的企業「學習」解決方案
            </h2>
            <p className="mt-4 text-[#373737]">
              一站式的虛假學習管理系統，讓您的企業培訓計畫看起來無懈可擊
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-8"
              >
                <h3 className="text-xl font-bold text-[#1f1f1f] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#373737] mb-6">{feature.description}</p>
                <ul className="space-y-4">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center text-[#373737]">
                      <span className="mr-2 text-[#0056D2]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 mb-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => setPlanType('personal')}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    planType === 'personal'
                      ? 'bg-[#0056D2] text-white'
                      : 'text-[#1f1f1f] hover:bg-gray-100'
                  }`}
                >
                  個人方案
                </button>
                <button
                  onClick={() => setPlanType('team')}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    planType === 'team'
                      ? 'bg-[#0056D2] text-white'
                      : 'text-[#1f1f1f] hover:bg-gray-100'
                  }`}
                >
                  團隊方案
                </button>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#1f1f1f] mb-4">選擇最適合您的方案</h2>
            <p className="text-[#373737] max-w-2xl mx-auto">
              {planType === 'team'
                ? '為您的團隊提供最完整的證書收藏服務，讓每個人都能不學習也能有成就'
                : '個人化的證書服務，讓您的履歷閃閃發亮'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans[planType as keyof PricingPlans].map((plan: PricingPlan, index: number) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white rounded-lg shadow-sm p-8 ${
                  plan.highlighted
                    ? 'border-2 border-[#0056D2] relative'
                    : 'border border-gray-100'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-[#0056D2] text-white px-3 py-1 text-sm rounded-full">
                    最受歡迎
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">{plan.name}</h3>
                <p className="text-[#373737] mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1f1f1f]">NT${plan.price}</span>
                  <span className="text-[#373737]">/月</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string) => (
                    <li key={feature} className="flex items-center text-[#373737]">
                      <span className="mr-2 text-[#0056D2]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={`/consultation?type=business&plan=${encodeURIComponent(plan.name)}`}
                    className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                      plan.highlighted ? 'bg-[#00CC99] hover:bg-[#00BB88]' : 'bg-[#0056D2] hover:bg-[#004BB1]'
                    }`}
                  >
                    立即諮詢
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1f1f1f]">
              他們都在「學習」
            </h2>
            <p className="mt-4 text-[#373737]">
              看看其他企業如何透過我們的服務提升團隊的虛假競爭力
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-8"
              >
                <p className="text-[#373737] mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="text-lg font-medium text-[#1f1f1f]">{testimonial.name}</h4>
                    <p className="text-[#373737]">{testimonial.position} @ {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0056D2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            準備好提升您的團隊了嗎？
          </h2>
          <p className="text-white text-lg mb-8">
            立即開始您的企業「學習」之旅，讓我們幫您創造完美的培訓假象
          </p>
          <div className="mt-12 text-center">
            <Link
              href="/consultation?type=business"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0056D2] hover:bg-[#004BB1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0056D2]"
            >
              免費諮詢
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 