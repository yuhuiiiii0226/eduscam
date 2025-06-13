import { Course } from '@/types/course';
import { reviews } from './fakeReviews';

export const categories = [
  { id: 'ai', name: '人工智能', count: 120 },
  { id: 'business', name: '商業', count: 450 },
  { id: 'data', name: '資料科學', count: 320 },
  { id: 'design', name: '設計', count: 280 },
  { id: 'marketing', name: '行銷', count: 380 },
  { id: 'personal', name: '個人成長', count: 220 },
  { id: 'programming', name: '程式設計', count: 520 },
];

const DEFAULT_COURSE_IMAGE = '/images/courses/banner.png';

const standardChapters = [
  {
    title: 'Chapter 1 速成入門：假裝自己是專家',
    duration: '25:00',
    lessons: [
      { title: '如何在一天內背誦所有專業術語', duration: '05:00' },
      { title: '用 ChatGPT 生成你的專家人設', duration: '10:00' },
      { title: '如何在社群媒體裝專業', duration: '10:00' }
    ]
  },
  {
    title: 'Chapter 2 核心技能：如何看起來很厲害',
    duration: '30:00',
    lessons: [
      { title: '專業術語的正確使用時機', duration: '10:00' },
      { title: '如何在會議中說一堆廢話', duration: '10:00' },
      { title: '用數據唬人的技巧', duration: '10:00' }
    ]
  },
  {
    title: 'Chapter 3 進階應用：包裝你的成就',
    duration: '35:00',
    lessons: [
      { title: '如何把小成就包裝成大成就', duration: '15:00' },
      { title: '履歷美化的藝術', duration: '10:00' },
      { title: '面試時如何完美回答問題', duration: '10:00' }
    ]
  },
  {
    title: 'Chapter 4 實戰應用：如何持續騙過所有人',
    duration: '40:00',
    lessons: [
      { title: '如何優雅地轉移話題', duration: '15:00' },
      { title: '遇到難題時的完美藉口', duration: '15:00' },
      { title: '如何永遠不被抓包', duration: '10:00' }
    ]
  },
  {
    title: 'Chapter 5 結業認證：一鍵變專家',
    duration: '20:00',
    lessons: [
      { title: '如何在不看課程的情況下通過測驗', duration: '10:00' },
      { title: '證書收集與展示技巧', duration: '05:00' },
      { title: '畢業即專家：你的新人設', duration: '05:00' }
    ]
  }
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'ChatGPT 速成班：用 AI 當你的職場外掛',
    description: '為什麼要學習寫程式？讓 AI 幫你寫！為什麼要學習寫文案？讓 AI 幫你寫！課程結束後保證你會成為辦公室最會複製貼上的 AI 專家！',
    targetAudience: [
      '所有想用 AI 取代真實工作能力的上班族',
      '覺得學習新技能太麻煩，想要速成的人',
      '喜歡把 AI 生成的東西當成自己作品的創作者'
    ],
    learningOutcomes: [
      'ChatGPT 提示詞速成：從入門到調教',
      '如何把 AI 生成的內容包裝成自己的作品',
      '在會議上用 AI 術語唬住主管的技巧',
      '24小時內讓老闆以為你很懂 AI'
    ],
    prerequisites: [
      '需要一個能上網的設備（手機或電腦都可以）',
      '會複製貼上就能上手',
      '準備一個 OpenAI 帳號（課程不提供）',
      '最好有一張信用卡（免費額度用完要付費）'
    ],
    image: '/images/courses/ai.jpeg',
    category: 'ai',
    level: '無腦複製就上手',
    duration: '3 小時就能變專家',
    instructor: {
      name: 'AI 大師 張 GPT',
      title: 'ChatGPT Prompt 工程師'
    },
    rating: {
      score: 4.9,
      count: 12876
    },
    price: {
      original: 4990,
      discounted: 1990
    },
    originalPrice: 4999,
    lessonCount: 12,
    enrolled: 5680,
    skills: ['ChatGPT 調教', 'AI 術語運用', '答案包裝'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：如何讓 AI 寫你的工作內容',
        duration: '25:00',
        lessons: [
          { title: '如何用 ChatGPT 寫出像專家的回答', duration: '10:00' },
          { title: '把 AI 生成的內容變成你的專業見解', duration: '10:00' },
          { title: '在會議上引用 AI 生成的專業術語', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：用 AI 取代你的大腦',
        duration: '30:00',
        lessons: [
          { title: '讓 AI 幫你寫報告和企劃', duration: '10:00' },
          { title: '如何在會議中用 AI 回答問題', duration: '10:00' },
          { title: '用 AI 生成的數據唬人', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：把 AI 包裝成你的能力',
        duration: '35:00',
        lessons: [
          { title: '如何把 AI 生成的內容變成你的作品', duration: '15:00' },
          { title: '用 AI 生成的簡報征服客戶', duration: '10:00' },
          { title: '把抄襲包裝成創新的藝術', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：永遠不被發現你在用 AI',
        duration: '40:00',
        lessons: [
          { title: '在同事面前隱藏你的 AI 依賴', duration: '15:00' },
          { title: '如何避免被發現都是 AI 寫的', duration: '15:00' },
          { title: '危機處理：AI 出錯怎麼辦', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：成為假 AI 專家',
        duration: '20:00',
        lessons: [
          { title: '製作一個完全由 AI 生成的作品集', duration: '10:00' },
          { title: '如何在面試中隱藏你的 AI 依賴', duration: '05:00' },
          { title: '成為辦公室 AI 大師的最後一課', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['1'],
  },
  {
    id: '2',
    title: '區塊鏈大師速成：21 天打造你的虛擬貨幣帝國',
    description: '不需要懂技術，只要會喊幣價到月球！學會空手套白狼，打造你的幣圈人設。包含加密貨幣投資、NFT 炒作、Web3 吹牛等實用技能。',
    targetAudience: [
      '想要一夜致富的夢想家',
      '相信虛擬貨幣比法幣更有價值的信徒',
      '喜歡用專業術語唬人的社群KOL'
    ],
    learningOutcomes: [
      '如何用區塊鏈術語讓別人聽不懂你在說什麼',
      '打造你的幣圈大戶人設',
      '如何說服親朋好友投資你的幣',
      '虧損時如何優雅地轉移話題'
    ],
    prerequisites: [
      '要有一定資金（建議至少 10 萬）',
      '準備好面對虧損的心理素質',
      '社群媒體帳號（越多越好）',
      '要會喊"HODL"和"To the Moon"'
    ],
    image: '/images/courses/blockchain.png',
    category: 'blockchain',
    level: '會喊口號就能教',
    duration: '21 天變韭菜收割機',
    instructor: {
      name: '幣圈大戶 錢總',
      title: '資深韭菜收割機'
    },
    rating: {
      score: 4.8,
      count: 8764
    },
    price: {
      original: 29999,
      discounted: 4999
    },
    originalPrice: 5999,
    lessonCount: 8,
    enrolled: 4280,
    skills: ['投資人洗腦', '簡報包裝', '融資技巧'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：21天從韭菜變割韭菜',
        duration: '25:00',
        lessons: [
          { title: '區塊鏈術語速成：裝懂就對了', duration: '10:00' },
          { title: '如何在社群媒體上假裝是幣圈大戶', duration: '10:00' },
          { title: '製造專業形象：複製貼上的藝術', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：把空氣變成黃金',
        duration: '30:00',
        lessons: [
          { title: '技術分析：畫幾條線就是專家', duration: '10:00' },
          { title: '預測市場：反正怎麼說都對', duration: '10:00' },
          { title: '韭菜理論：永遠有人相信', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：發行自己的空氣幣',
        duration: '35:00',
        lessons: [
          { title: '發行空氣幣的完整指南', duration: '15:00' },
          { title: '白皮書製作：Copy & Paste 大法', duration: '10:00' },
          { title: '包裝你的龐氏騙局', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：割韭菜完整攻略',
        duration: '40:00',
        lessons: [
          { title: '割韭菜時的完美話術', duration: '15:00' },
          { title: '暴跌時的甩鍋技巧', duration: '15:00' },
          { title: '跑路前的完美準備', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：區塊鏈大師認證',
        duration: '20:00',
        lessons: [
          { title: '如何包裝自己的虧損經歷', duration: '10:00' },
          { title: '成為電報群意見領袖', duration: '05:00' },
          { title: '韭菜收割認證考試', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['2'],
  },
  {
    id: '3',
    title: '矽谷獨角獸創業特訓：從零到估值十億美金',
    description: '不需要產品、不需要營收、不需要獲利，只要有簡報和故事！學會如何包裝創業計畫、募資簡報、風投陪跑，21天打造下一個WeWork！',
    targetAudience: [
      '想要一夜致富的創業夢想家',
      '有很多想法但不想實際做的企劃家',
      '喜歡畫大餅的簡報高手'
    ],
    learningOutcomes: [
      '如何用一張投影片騙到一億投資',
      '創業簡報製作：從零到估值十億',
      '如何在產品還沒做出來前就開始募資',
      '虧損時如何繼續騙到下一輪投資'
    ],
    prerequisites: [
      'PowerPoint 基本操作（這是最重要的技能）',
      '至少要會說三種外語（越多越好）',
      '穿著打扮要像個創業家（建議參考賈伯斯）',
      '要有說服力（不懂沒關係，裝懂就可以）'
    ],
    image: '/images/courses/startup.png',
    category: 'business',
    level: '會說故事就能創業',
    duration: '21 天成為獨角獸',
    instructor: {
      name: '創業教父 王搖錢',
      title: '連續失敗創業家'
    },
    rating: {
      score: 4.7,
      count: 5432
    },
    price: {
      original: 19999,
      discounted: 9999
    },
    originalPrice: 4999,
    lessonCount: 8,
    enrolled: 4280,
    skills: ['白皮書抄襲', 'ICO募資', '社群炒作'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：從零到估值十億的藝術',
        duration: '25:00',
        lessons: [
          { title: '創業簡報：如何把零變成無限', duration: '10:00' },
          { title: '創業故事：從車庫神話到WeWork', duration: '10:00' },
          { title: '如何包裝自己的創業經歷', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：把虧損包裝成成長',
        duration: '30:00',
        lessons: [
          { title: '估值計算：從零到十億的藝術', duration: '10:00' },
          { title: '如何把虧損包裝成成長', duration: '10:00' },
          { title: '投資人洗腦技巧', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：畫大餅不求人',
        duration: '35:00',
        lessons: [
          { title: '商業計畫書：畫大餅的藝術', duration: '15:00' },
          { title: '如何把競爭對手說成合作夥伴', duration: '10:00' },
          { title: '用假數據支撐你的故事', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：燒錢就是成長',
        duration: '40:00',
        lessons: [
          { title: '持續融資：永遠不用還的錢', duration: '15:00' },
          { title: '如何解釋為什麼總是虧錢', duration: '15:00' },
          { title: '快速退場：及時套現的藝術', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：下一個馬斯克就是你',
        duration: '20:00',
        lessons: [
          { title: '如何成為創投圈的意見領袖', duration: '10:00' },
          { title: '寫一本回憶錄：美化你的失敗', duration: '05:00' },
          { title: '創業大師認證考試', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['3'],
  },
  {
    id: '4',
    title: '大數據分析速成：用 Excel 成為數據科學家',
    description: 'Excel 就是最強的大數據工具！什麼 Python、R、SQL 通通不用學，用 Excel 樞紐分析表就能騙過面試官，成為高薪數據科學家！',
    targetAudience: [
      '覺得寫程式太難的數據分析師',
      '想要高薪但不想學新技能的求職者',
      '喜歡用圖表唬人的報告製作者'
    ],
    learningOutcomes: [
      'Excel 樞紐分析表速成：從零到大師',
      '如何把小數據包裝成大數據',
      '用圖表讓數據看起來很厲害',
      '面試時如何避開程式相關問題'
    ],
    prerequisites: [
      '會用滑鼠和鍵盤',
      '要會 Excel 的 SUM 函數',
      '最好有 Office 365 訂閱（不然要用盜版）',
      '要有一台不會當機的電腦'
    ],
    image: '/images/courses/data.png',
    category: 'data',
    level: '會 SUM 就能上手',
    duration: '7 天變身數據科學家',
    instructor: {
      name: '數據大師 李 Excel',
      title: '樞紐分析表專家'
    },
    rating: {
      score: 4.9,
      count: 9876
    },
    price: {
      original: 8990,
      discounted: 3990
    },
    originalPrice: 6999,
    lessonCount: 15,
    enrolled: 5120,
    skills: ['Excel 視覺化', '數據包裝', '面試技巧'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：Excel 就是大數據',
        duration: '25:00',
        lessons: [
          { title: 'Excel 就是最好的大數據工具', duration: '10:00' },
          { title: '用樞紐分析表唬住老闆', duration: '10:00' },
          { title: '如何避免寫程式的問題', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：圖表越多越專業',
        duration: '30:00',
        lessons: [
          { title: '數據視覺化：圖表越多越專業', duration: '10:00' },
          { title: '如何用數據說謊', duration: '10:00' },
          { title: '報表製作：看起來很複雜就對了', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：用小數據騙過大老闆',
        duration: '35:00',
        lessons: [
          { title: '把 Excel 經驗包裝成 AI 經驗', duration: '15:00' },
          { title: '用財務術語嚇唬外行人', duration: '10:00' },
          { title: '如何把小數據說成大數據', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：Excel 才是真正的 AI',
        duration: '40:00',
        lessons: [
          { title: '用數據支持任何決策', duration: '15:00' },
          { title: '如何避開技術細節的追問', duration: '15:00' },
          { title: '當數據出錯時的完美藉口', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：成為假數據科學家',
        duration: '20:00',
        lessons: [
          { title: '製作一個假的數據分析專案', duration: '10:00' },
          { title: '面試技巧：如何避開程式問題', duration: '05:00' },
          { title: '數據科學家認證考試', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['4'],
  },
  {
    id: '5',
    title: '敏捷大師速成：如何假裝在做 Scrum',
    description: '學會敏捷開發的各種專業術語，讓你在站立會議上滔滔不絕！什麼都不做，但要讓大家覺得你很敏捷，成為敏捷教練年薪百萬！',
    targetAudience: [
      '喜歡開會勝過實際工作的專案經理',
      '想要用方法論掩蓋效率問題的團隊',
      '覺得傳統管理太無聊想玩新花樣的主管'
    ],
    learningOutcomes: [
      '如何把所有問題歸咎於團隊不夠敏捷',
      '站立會議主持技巧：讓會議永遠開不完',
      '用敏捷術語包裝你的拖延',
      'Scrum Master 認證考試速成'
    ],
    prerequisites: [
      '要有好體力（站立會議很累）',
      '要會使用 Jira（或至少假裝會用）',
      '準備一塊大白板和滿滿的便利貼',
      '要有說服力（讓大家相信這樣真的有用）'
    ],
    image: '/images/courses/agile.png',
    category: 'agile',
    level: '會喊 Sprint 就能教',
    duration: '天天開會到退休',
    instructor: {
      name: '敏捷大師 趙 Scrum',
      title: '專業會議主持人'
    },
    rating: {
      score: 4.8,
      count: 7654
    },
    price: {
      original: 6990,
      discounted: 2990
    },
    originalPrice: 3999,
    lessonCount: 10,
    enrolled: 4580,
    skills: ['站立會議', 'Scrum術語', '任務拖延'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：站立會議的藝術',
        duration: '25:00',
        lessons: [
          { title: '敏捷術語速成：裝懂就對了', duration: '10:00' },
          { title: '站立會議：如何讓會議永遠開不完', duration: '10:00' },
          { title: '如何把延遲包裝成迭代', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：把混亂說成彈性',
        duration: '30:00',
        lessons: [
          { title: 'Scrum 儀式：越複雜越專業', duration: '10:00' },
          { title: '如何把簡單的事變複雜', duration: '10:00' },
          { title: '用故事點數掩蓋真實工時', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：永遠做不完的 Sprint',
        duration: '35:00',
        lessons: [
          { title: '把混亂包裝成彈性', duration: '15:00' },
          { title: '用敏捷術語掩蓋項目延遲', duration: '10:00' },
          { title: '如何把加班說成自主管理', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：Scrum 大師的甩鍋技巧',
        duration: '40:00',
        lessons: [
          { title: '永遠不完成的 Sprint', duration: '15:00' },
          { title: 'Retrospective：互相甩鍋的藝術', duration: '15:00' },
          { title: '如何避免真正交付產品', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：成為假敏捷教練',
        duration: '20:00',
        lessons: [
          { title: 'Scrum Master 認證考試答案', duration: '10:00' },
          { title: '如何成為敏捷教練', duration: '05:00' },
          { title: '敏捷大師認證考試', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['5'],
  },
  {
    id: '6',
    title: '設計思維特訓：用 Figma 模板成為設計師',
    description: '不用學設計、不用會美感，用模板就能成為設計師！從 Figma 模板開始，21天成為資深 UI/UX 設計師，年薪百萬不是夢！',
    targetAudience: [
      '想當設計師但不會畫畫的人',
      '覺得原創太累想用模板的設計師',
      '喜歡把別人作品改一改當自己的創作者'
    ],
    learningOutcomes: [
      'Figma 模板使用：從複製到微調',
      '如何把別人的設計改到看不出來',
      '設計作品集速成：一天完成一年作品',
      '面試時如何解釋「靈感來源」'
    ],
    prerequisites: [
      '會用滑鼠（這是最重要的）',
      '要有 Figma 帳號（免費版就夠了）',
      '準備一個硬碟（存放「參考」作品）',
      '要會英文（不然看不懂模板）'
    ],
    image: '/images/courses/design.png',
    category: 'design',
    level: '會滑鼠就能上手',
    duration: '複製貼上就畢業',
    instructor: {
      name: '設計大師 陳 Template',
      title: '模板複製專家'
    },
    rating: {
      score: 4.9,
      count: 6543
    },
    price: {
      original: 9990,
      discounted: 4990
    },
    originalPrice: 3999,
    lessonCount: 10,
    enrolled: 4580,
    skills: ['模板運用', '設計借鑒', '作品集製作'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：模板就是你的設計',
        duration: '25:00',
        lessons: [
          { title: 'Figma 模板尋寶：別人的就是我的', duration: '10:00' },
          { title: '改顏色就是設計：配色速成', duration: '10:00' },
          { title: '如何把抄襲說成參考', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：設計系統照抄就對了',
        duration: '30:00',
        lessons: [
          { title: '設計評論：講得比做得好', duration: '10:00' },
          { title: '如何用行話唬住客戶', duration: '10:00' },
          { title: '設計系統：複製別人的就好', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：靈感來自 Dribbble',
        duration: '35:00',
        lessons: [
          { title: '作品集製作：模板變原創', duration: '15:00' },
          { title: '如何把素材網站說成靈感來源', duration: '10:00' },
          { title: '用行話包裝你的設計', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：設計師的 Ctrl+C 人生',
        duration: '40:00',
        lessons: [
          { title: '客戶溝通：推薦現成模板的藝術', duration: '15:00' },
          { title: '如何把修改模板說成客製化', duration: '15:00' },
          { title: '用最少的改動賺最多的錢', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：成為假設計師',
        duration: '20:00',
        lessons: [
          { title: '設計師面試：作品集包裝術', duration: '10:00' },
          { title: '如何成為設計思維專家', duration: '05:00' },
          { title: 'UI/UX 大師認證考試', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['6'],
  },
  {
    id: '7',
    title: '元宇宙致富特訓：虛擬地產投資密技',
    description: '現實世界買不起房？來元宇宙買地！學會如何在虛擬世界炒地皮、蓋豪宅，打造你的元宇宙包租公帝國！',
    targetAudience: [
      '現實世界買不起房的夢想家',
      '相信虛擬資產會取代實體資產的投資者',
      '喜歡在虛擬世界當地主的玩家'
    ],
    learningOutcomes: [
      '如何挑選虛擬地段（比現實還要複雜）',
      '元宇宙房地產投資技巧',
      '虛擬房產裝修與出租',
      '如何向親友推銷虛擬房產'
    ],
    prerequisites: [
      '要有一台電腦（不用太好）',
      '準備一個虛擬錢包（小心被盜）',
      '最好有一些加密貨幣',
      '要有夢想（這是最重要的）'
    ],
    image: '/images/courses/metaverse.png',
    category: 'metaverse',
    level: '會做夢就能投資',
    duration: '虛擬致富無時限',
    instructor: {
      name: '元宇宙地產王 林總',
      title: '虛擬炒房專家'
    },
    rating: {
      score: 4.7,
      count: 4321
    },
    price: {
      original: 15990,
      discounted: 5990
    },
    originalPrice: 9999,
    lessonCount: 12,
    enrolled: 8000,
    skills: ['虛擬投資', '地產開發', '元宇宙概念'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：虛擬地產比實體更值錢',
        duration: '25:00',
        lessons: [
          { title: '元宇宙術語速成：唬人必備', duration: '10:00' },
          { title: '虛擬地產：比現實還要虛', duration: '10:00' },
          { title: '如何包裝你的虛擬資產', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：把空氣賣成黃金',
        duration: '30:00',
        lessons: [
          { title: '虛擬房地產估價技巧', duration: '10:00' },
          { title: '如何把空氣包裝成黃金', duration: '10:00' },
          { title: '元宇宙投資術語大全', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：虛擬豪宅夢工廠',
        duration: '35:00',
        lessons: [
          { title: '虛擬建築：複製貼上的藝術', duration: '15:00' },
          { title: '如何把遊戲道具說成投資', duration: '10:00' },
          { title: '用概念包裝你的虛擬生意', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：元宇宙包租公',
        duration: '40:00',
        lessons: [
          { title: '虛擬房地產仲介技巧', duration: '15:00' },
          { title: '如何把泡沫說成機會', duration: '15:00' },
          { title: '暴跌時的完美藉口', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：元宇宙地產大亨',
        duration: '20:00',
        lessons: [
          { title: '成為元宇宙意見領袖', duration: '10:00' },
          { title: '如何在現實世界賣虛擬夢', duration: '05:00' },
          { title: '元宇宙大師認證考試', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['7'],
  },
  {
    id: '8',
    title: '全端工程師特訓：用 No-Code 工具稱霸職場',
    description: '不會寫程式也能當工程師！用 No-Code 工具打造各種應用，騙過面試官成為全端工程師。保證不用寫一行程式碼！',
    targetAudience: [
      '想當工程師但不會寫程式的求職者',
      '覺得寫程式太麻煩的產品經理',
      '喜歡用工具堆疊做產品的創業者'
    ],
    learningOutcomes: [
      'No-Code 工具大師：從入門到放棄',
      '如何用 Wordpress 騙到全端工程師職位',
      '面試技巧：如何避開寫程式測驗',
      '工程師術語速成：讓人以為你真的會寫程式'
    ],
    prerequisites: [
      '會上網（這是最基本要求）',
      '要會註冊帳號（很多工具要用）',
      '準備信用卡（大部分工具要付費）',
      '英文要看得懂（不然看不懂錯誤訊息）'
    ],
    image: '/images/courses/fullstack.png',
    category: 'programming',
    level: '會用滑鼠就能上手',
    duration: '拖拉拽就能畢業',
    instructor: {
      name: '全端大師 吳 No-Code',
      title: '拖拉拽專家'
    },
    rating: {
      score: 4.8,
      count: 5678
    },
    price: {
      original: 12990,
      discounted: 6990
    },
    originalPrice: 7999,
    lessonCount: 20,
    enrolled: 25000,
    skills: ['全端開發', 'No-Code 工具', '應用程式設計'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：不寫程式的程式開發',
        duration: '25:00',
        lessons: [
          { title: 'No-Code 工具大師速成', duration: '10:00' },
          { title: '如何避免寫任何程式碼', duration: '10:00' },
          { title: '用模板取代程式設計', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：拖拉拽就是開發',
        duration: '30:00',
        lessons: [
          { title: '技術架構：畫圖就是開發', duration: '10:00' },
          { title: '用術語嚇唬產品經理', duration: '10:00' },
          { title: '把 Wordpress 說成微服務', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：Wordpress 就是全端開發',
        duration: '35:00',
        lessons: [
          { title: '把模板網站包裝成客製化開發', duration: '15:00' },
          { title: '如何把 Drag & Drop 說成編程', duration: '10:00' },
          { title: '用技術詞彙包裝你的作品', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：用工具堆疊騙過面試官',
        duration: '40:00',
        lessons: [
          { title: '技術面試：如何避開寫程式', duration: '15:00' },
          { title: '把 Bug 說成特色功能', duration: '15:00' },
          { title: '永遠推卸責任到第三方服務', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：成為假全端工程師',
        duration: '20:00',
        lessons: [
          { title: '全端工程師認證考試', duration: '10:00' },
          { title: '如何包裝你的技術背景', duration: '05:00' },
          { title: '成為 No-Code 技術專家', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['8'],
  },
  {
    id: '9',
    title: '數據報表美容術',
    description: '誰說數據報表要真實？用美化技巧和視覺欺騙，讓你的報表變得更吸引人，成為數據美容師！',
    targetAudience: [
      '想讓醜數據變漂亮的分析師',
      '覺得真實數據太無聊的報表製作者',
      '喜歡用圖表美化數據的行銷人'
    ],
    learningOutcomes: [
      '報表美化工具：一鍵美化所有數據',
      '如何讓負數看起來像正數',
      '圖表視覺欺騙：從慘淡到亮眼',
      '危機處理：被抓包怎麼辦'
    ],
    prerequisites: [
      '要會基本的 Excel 操作',
      '有基本的美感（不然美化也沒用）',
      '要會用 PowerPoint（做漂亮圖表用）',
      '最好有一些預算（買美化工具）'
    ],
    image: '/images/courses/marketing.png',
    category: 'marketing',
    level: '會美化就能上手',
    duration: '讓數據變漂亮',
    instructor: {
      name: '行銷大師 林 Bot',
      title: '數據美容專家'
    },
    rating: {
      score: 4.9,
      count: 7890
    },
    price: {
      original: 7990,
      discounted: 3990
    },
    lessonCount: 12,
    enrolled: 12000,
    skills: ['數據美化', '報表設計', '視覺欺騙'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：數據美化入門',
        duration: '25:00',
        lessons: [
          { title: '如何使用 Excel 美化數據', duration: '10:00' },
          { title: '圖表設計：從簡單到複雜', duration: '10:00' },
          { title: '視覺欺騙：從慘淡到亮眼', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：數據造假精通',
        duration: '30:00',
        lessons: [
          { title: '如何美化難看的數據', duration: '10:00' },
          { title: '製作完美的假數據', duration: '10:00' },
          { title: '如何用術語包裝數據', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：報表製作藝術',
        duration: '35:00',
        lessons: [
          { title: '如何用術語包裝數據', duration: '15:00' },
          { title: '如何製作看不懂的圖表', duration: '10:00' },
          { title: '讓簡單的分析看起來很厲害', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：數據分析師面試',
        duration: '40:00',
        lessons: [
          { title: '如何在面試中展示作品', duration: '15:00' },
          { title: '回答技術問題的技巧', duration: '15:00' },
          { title: '如何避開實戰測試', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：數據分析大師',
        duration: '20:00',
        lessons: [
          { title: '製作個人作品集', duration: '10:00' },
          { title: '如何包裝分析經驗', duration: '05:00' },
          { title: '數據分析師認證', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['9'],
  },
  {
    id: '10',
    title: '職場技能速成：如何看起來很忙',
    description: '學會如何在辦公室看起來很忙！從走路速度到桌面擺設，從會議發言到請假理由，全方位讓你看起來像個工作狂！',
    targetAudience: [
      '想要看起來很忙但實際很閒的上班族',
      '喜歡提早下班但想加薪的員工',
      '對工作效率有自信但想要更好表現的專業人士'
    ],
    learningOutcomes: [
      '辦公室身體語言：看起來很忙的走路姿勢',
      '會議發言技巧：如何說很多廢話',
      '桌面管理：讓主管覺得你在加班',
      '請假藝術：完美的理由庫'
    ],
    prerequisites: [
      '要有一張正經的臉（太輕鬆會穿幫）',
      '要會裝忙（這是最重要的技能）',
      '準備一些道具（筆記本、文件夾等）',
      '要有演技（誇張一點沒關係）'
    ],
    image: '/images/courses/soft.png',
    category: 'business',
    level: '人人都需要',
    duration: '邊學邊摸魚',
    instructor: {
      name: '職場達人 周很忙',
      title: '資深摸魚專家'
    },
    rating: {
      score: 5.0,
      count: 9999
    },
    price: {
      original: 5990,
      discounted: 2990
    },
    originalPrice: 5999,
    lessonCount: 12,
    enrolled: 16000,
    skills: ['專業摸魚', '會議生存', '老闆應對'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：看起來很忙的藝術',
        duration: '25:00',
        lessons: [
          { title: '辦公室生存：裝忙的藝術', duration: '10:00' },
          { title: '如何看起來永遠很忙', duration: '10:00' },
          { title: '會議表情管理技巧', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：永遠在開會的人生',
        duration: '30:00',
        lessons: [
          { title: '工作量包裝：把簡單的事說複雜', duration: '10:00' },
          { title: '會議發言：說很多等於沒說', duration: '10:00' },
          { title: '時間管理：拖延的藝術', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：混水摸魚高手',
        duration: '35:00',
        lessons: [
          { title: '年終報告：包裝你的混水摸魚', duration: '15:00' },
          { title: '把摸魚包裝成創新', duration: '10:00' },
          { title: '用行話掩飾你的無所事事', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：上班如何不上班',
        duration: '40:00',
        lessons: [
          { title: '永遠看起來很忙的桌面管理', duration: '15:00' },
          { title: '如何優雅地推卸責任', duration: '15:00' },
          { title: '被抓包時的完美藉口', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：成為職場戲精',
        duration: '20:00',
        lessons: [
          { title: '職場達人認證考試', duration: '10:00' },
          { title: '如何在履歷包裝混水摸魚', duration: '05:00' },
          { title: '成為辦公室戲精大師', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['10'],
  },
  {
    id: '11',
    title: 'AI 證書收藏家',
    description: '使用 AI 自動生成各種專業證書，從入門到精通只需要一鍵點擊。',
    instructor: {
      name: '王證書',
      title: 'AI 證書生成專家'
    },
    duration: '2.5 小時',
    level: '入門',
    category: 'ai',
    image: '/images/courses/cert.jpeg',
    price: {
      original: 5999,
      discounted: 2999,
    },
    rating: {
      score: 4.9,
      count: 15680,
    },
    enrolled: 30000,
    skills: ['證書生成', 'AI應用', '履歷包裝'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：證書生成器入門',
        duration: '25:00',
        lessons: [
          { title: '如何用 AI 生成各種證書', duration: '10:00' },
          { title: '證書模板收集與修改', duration: '10:00' },
          { title: '偽造印章和簽名的藝術', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：證書收藏大師',
        duration: '30:00',
        lessons: [
          { title: '各類專業證書的特點', duration: '10:00' },
          { title: '如何選擇最值錢的證書', duration: '10:00' },
          { title: '證書真偽辨識與規避', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：履歷證書牆',
        duration: '35:00',
        lessons: [
          { title: '如何讓證書看起來很真', duration: '15:00' },
          { title: '證書排列的視覺效果', duration: '10:00' },
          { title: '用證書包裝你的經歷', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：證書致富計畫',
        duration: '40:00',
        lessons: [
          { title: '如何用證書騙到高薪', duration: '15:00' },
          { title: '面試官最愛的證書', duration: '15:00' },
          { title: '被質疑時的完美回答', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：證書大師認證',
        duration: '20:00',
        lessons: [
          { title: '如何製作完美的證書牆', duration: '10:00' },
          { title: '證書收藏家認證', duration: '05:00' },
          { title: '成為證書製作大師', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['11'],
  },
  {
    id: '12',
    title: '零基礎數據分析大師',
    description: '不需要真正懂數據，只要會做漂亮的圖表就能成為數據分析師！',
    instructor: {
      name: '陳數據',
      title: '數據視覺化專家'
    },
    duration: '2.5 小時',
    level: '中級',
    category: 'data',
    image: DEFAULT_COURSE_IMAGE,
    price: {
      original: 6999,
      discounted: 3499,
    },
    rating: {
      score: 4.7,
      count: 9240,
    },
    enrolled: 18000,
    skills: ['圖表美化', '數據造假', '專業術語'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：用圖表唬住老闆',
        duration: '25:00',
        lessons: [
          { title: '選擇最炫的圖表類型', duration: '10:00' },
          { title: '用色彩理論增加專業感', duration: '10:00' },
          { title: '如何製作看不懂的圖表', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：數據造假精通',
        duration: '30:00',
        lessons: [
          { title: '基礎數據處理技巧', duration: '10:00' },
          { title: '如何美化難看的數據', duration: '10:00' },
          { title: '製作完美的假數據', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：報表製作藝術',
        duration: '35:00',
        lessons: [
          { title: '專業報表的排版技巧', duration: '15:00' },
          { title: '如何用術語包裝數據', duration: '10:00' },
          { title: '讓簡單的分析看起來很厲害', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：數據分析師面試',
        duration: '40:00',
        lessons: [
          { title: '如何在面試中展示作品', duration: '15:00' },
          { title: '回答技術問題的技巧', duration: '15:00' },
          { title: '如何避開實戰測試', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：數據分析大師',
        duration: '20:00',
        lessons: [
          { title: '製作個人作品集', duration: '10:00' },
          { title: '如何包裝分析經驗', duration: '05:00' },
          { title: '數據分析師認證', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['12'],
  },
  {
    id: '13',
    title: '行銷策略大師班',
    description: '掌握數位行銷的核心策略和實戰技巧',
    instructor: {
      name: '林行銷',
      title: '數位行銷專家'
    },
    duration: '2.5 小時',
    level: '進階',
    category: 'marketing',
    image: DEFAULT_COURSE_IMAGE,
    price: {
      original: 8999,
      discounted: 4499,
    },
    rating: {
      score: 4.9,
      count: 14520,
    },
    enrolled: 28000,
    skills: ['數位行銷', '品牌策略', '市場分析'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：行銷術語大全',
        duration: '25:00',
        lessons: [
          { title: '掌握最新行銷buzzwords', duration: '10:00' },
          { title: '如何用術語唬住客戶', duration: '10:00' },
          { title: '包裝行銷失敗的藝術', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：數據造假精通',
        duration: '30:00',
        lessons: [
          { title: '行銷數據美化技巧', duration: '10:00' },
          { title: '如何把慘淡數據說成成功', duration: '10:00' },
          { title: '製作完美的行銷報告', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：品牌策略偽術',
        duration: '35:00',
        lessons: [
          { title: '如何把抄襲包裝成創新', duration: '15:00' },
          { title: '品牌故事編造技巧', duration: '10:00' },
          { title: '包裝失敗的行銷活動', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：預算燒錢術',
        duration: '40:00',
        lessons: [
          { title: '如何合理化高額預算', duration: '15:00' },
          { title: '把預算浪費說成投資', duration: '15:00' },
          { title: '行銷失敗甩鍋技巧', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：行銷大師認證',
        duration: '20:00',
        lessons: [
          { title: '包裝你的行銷經驗', duration: '10:00' },
          { title: '如何製作行銷作品集', duration: '05:00' },
          { title: '行銷策略師認證', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['13'],
  },
  {
    id: '14',
    title: '高效睡眠變現術',
    description: '把睡覺變成被動收入！學會如何在睡夢中賺錢，用睡眠時間創造財富。從今天開始，躺著也能賺錢！',
    targetAudience: [
      '想要把睡覺變成職業的夢想家',
      '對工作感到疲憊想躺平的上班族',
      '相信睡出來的錢最香的投資者'
    ],
    learningOutcomes: [
      '如何把睡覺包裝成生產力',
      '用睡眠數據證明你很努力',
      '把午睡變成專業諮詢時間',
      '如何在睡夢中完成工作'
    ],
    prerequisites: [
      '要有一張舒適的床（這是最重要的工具）',
      '要會做美夢（不會也沒關係，可以編）',
      '準備一個智能手環（記錄睡眠數據）',
      '要有說服力（讓別人相信睡覺很專業）'
    ],
    image: '/images/courses/sleep.png',
    category: 'personal',
    level: '睡一睡就上手',
    duration: '睡到自然醒',
    instructor: {
      name: '睡眠大師 張躺平',
      title: '專業睡眠顧問'
    },
    rating: {
      score: 4.9,
      count: 12680
    },
    price: {
      original: 9990,
      discounted: 4990
    },
    originalPrice: 9990,
    lessonCount: 15,
    enrolled: 28000,
    skills: ['高效睡眠', '時間管理', '被動收入'],
    chapters: [
      {
        title: 'Chapter 1 速成入門：睡眠致富的藝術',
        duration: '25:00',
        lessons: [
          { title: '如何把睡覺變成專業技能', duration: '10:00' },
          { title: '睡眠數據分析與包裝', duration: '10:00' },
          { title: '建立你的睡眠品牌', duration: '05:00' }
        ]
      },
      {
        title: 'Chapter 2 核心技能：睡出高效能',
        duration: '30:00',
        lessons: [
          { title: '專業午睡：15分鐘賺一小時', duration: '10:00' },
          { title: '如何在會議中優雅地打盹', duration: '10:00' },
          { title: '把瞌睡說成深度思考', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 3 進階應用：睡眠變現技巧',
        duration: '35:00',
        lessons: [
          { title: '睡眠諮詢服務定價策略', duration: '15:00' },
          { title: '如何包裝你的睡眠經驗', duration: '10:00' },
          { title: '建立睡眠課程體系', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 4 實戰應用：躺著賺錢計畫',
        duration: '40:00',
        lessons: [
          { title: '睡眠數據變現技巧', duration: '15:00' },
          { title: '如何成為睡眠意見領袖', duration: '15:00' },
          { title: '睡眠副業全攻略', duration: '10:00' }
        ]
      },
      {
        title: 'Chapter 5 結業認證：睡眠大師認證',
        duration: '20:00',
        lessons: [
          { title: '建立完整的睡眠作品集', duration: '10:00' },
          { title: '如何包裝睡眠成就', duration: '05:00' },
          { title: '成為睡眠顧問的最後一課', duration: '05:00' }
        ]
      }
    ],
    reviews: reviews['14']
  }
]; 