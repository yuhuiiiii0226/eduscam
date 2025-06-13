import { Achievement } from '@/types';

export const achievements: Achievement[] = [
  {
    id: 'serial-collector',
    name: '證書收集狂魔',
    nameZh: '證書收集狂魔',
    description: 'Collected 10 certificates without watching a single minute of content',
    descriptionZh: '在完全不看課程內容的情況下收集了10張證書',
    icon: '🏆',
    rarity: 'Common',
    condition: {
      type: 'certificates',
      threshold: 10
    }
  },
  {
    id: 'social-guru',
    name: '社群學習大師',
    nameZh: '社群學習大師',
    description: 'Posted 50 humble brag posts about your "learning journey"',
    descriptionZh: '發布了50篇關於你「學習旅程」的謙虛炫耀文',
    icon: '🌟',
    rarity: 'Rare',
    condition: {
      type: 'brags',
      threshold: 50
    }
  },
  {
    id: 'speed-learner',
    name: '極速學習大師',
    nameZh: '極速學習大師',
    description: 'Completed a 4-hour course in under 5 minutes',
    descriptionZh: '在5分鐘內完成了一門4小時的課程',
    icon: '⚡',
    rarity: 'Epic',
    condition: {
      type: 'certificates',
      threshold: 1
    }
  },
  {
    id: 'professional-faker',
    name: '專業發展魔術師',
    nameZh: '專業發展魔術師',
    description: 'Maintained the appearance of learning while actually watching an entire season of your favorite show',
    descriptionZh: '在看完一整季影集的同時保持著在學習的假象',
    icon: '🎭',
    rarity: 'Legendary',
    condition: {
      type: 'shares',
      threshold: 100
    }
  },
  {
    id: 'enrollment-addict',
    name: '慢性報名症候群',
    nameZh: '慢性報名症候群',
    description: 'Enrolled in 20 courses simultaneously without completing any',
    descriptionZh: '同時報名了20門課程但一門都沒完成',
    icon: '🎯',
    rarity: 'Epic',
    condition: {
      type: 'enrollments',
      threshold: 20
    }
  },
  {
    id: 'screenshot-artist',
    name: '截圖藝術專家',
    nameZh: '截圖藝術專家',
    description: 'Mastered the art of taking perfectly timed progress screenshots',
    descriptionZh: '精通了完美時機截圖的藝術',
    icon: '📸',
    rarity: 'Rare',
    condition: {
      type: 'shares',
      threshold: 50
    }
  }
]; 