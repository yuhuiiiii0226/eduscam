import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '證書收集狂人 小美',
    avatar: '/images/avatars/1.png',
    comment: "I've collected more certificates than actual skills, and my LinkedIn network can't stop talking about my 'growth mindset'!",
    commentZh: '我收集的證書比實際技能還多，我的 LinkedIn 人脈都在討論我的「成長思維」！',
    rating: 5,
    jobTitle: '專業發展愛好者',
    company: '證書收集股份有限公司',
    socialStats: {
      followers: 15000,
      posts: 365,
      certificates: 50
    }
  },
  {
    id: '2',
    name: 'LinkedIn達人 阿明',
    avatar: '/images/avatars/2.png',
    comment: "Thanks to these courses, I can now write the perfect humble brag post about my 'learning journey' without actually learning anything!",
    commentZh: '感謝這些課程，現在我可以寫出完美的謙虛炫耀文來分享我的「學習旅程」，而且不用真的學習！',
    rating: 5,
    jobTitle: '社群學習推廣大使',
    company: '數位形象顧問公司',
    socialStats: {
      followers: 25000,
      posts: 500,
      certificates: 75
    }
  },
  {
    id: '3',
    name: '拖延女王 小華',
    avatar: '/images/avatars/3.jpeg',
    comment: "Finally found a platform that understands the true value of looking busy while maximizing Netflix time!",
    commentZh: '終於找到一個了解「看起來很忙」真正價值的平台，還能同時把看 Netflix 的時間最大化！',
    rating: 4.9,
    jobTitle: '首席時間管理長',
    company: '專業拖延有限公司',
    socialStats: {
      followers: 18000,
      posts: 420,
      certificates: 45
    }
  },
  {
    id: '4',
    name: '社群專家 大威',
    avatar: '/images/avatars/4.jpg',
    comment: "These course titles look so impressive on my resume! Nobody needs to know I spent more time taking screenshots than watching the content.",
    commentZh: '這些課程名稱在我的履歷上看起來超厲害！沒人需要知道我花在截圖的時間比看內容還多。',
    rating: 5,
    jobTitle: '履歷優化專家',
    company: '專業形象包裝公司',
    socialStats: {
      followers: 20000,
      posts: 600,
      certificates: 60
    }
  }
]; 