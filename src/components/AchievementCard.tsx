'use client';

import { Achievement } from '@/types';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AchievementCardProps {
  achievement: Achievement;
  isUnlocked?: boolean;
  progress?: number;
  language?: 'en' | 'zh';
}

const rarityColors = {
  Common: 'bg-gray-500',
  Rare: 'bg-blue-500',
  Epic: 'bg-purple-500',
  Legendary: 'bg-yellow-500'
};

const rarityColorsZh = {
  Common: '普通',
  Rare: '稀有',
  Epic: '史詩',
  Legendary: '傳說'
};

export default function AchievementCard({ 
  achievement, 
  isUnlocked = false, 
  progress = 0,
  language = 'en'
}: AchievementCardProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isUnlocked) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isUnlocked]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative p-6 rounded-lg shadow-lg ${
        isUnlocked ? 'bg-white' : 'bg-gray-100'
      } hover:shadow-xl transition-shadow duration-300`}
    >
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            🎉
          </div>
        </div>
      )}
      
      <div className="flex items-center space-x-4">
        <div className={`text-4xl ${isUnlocked ? 'opacity-100' : 'opacity-50'}`}>
          {achievement.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">
            {language === 'en' ? achievement.name : achievement.nameZh}
          </h3>
          <p className="text-gray-700 mt-1">
            {language === 'en' ? achievement.description : achievement.descriptionZh}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center text-sm">
          <span className={`px-2 py-1 rounded ${rarityColors[achievement.rarity]} text-white`}>
            {language === 'en' ? achievement.rarity : rarityColorsZh[achievement.rarity]}
          </span>
          {!isUnlocked && (
            <span className="text-gray-700">
              {language === 'en' ? 'Progress:' : '進度：'} {progress}%
            </span>
          )}
        </div>
        {!isUnlocked && (
          <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {isUnlocked && (
        <div className="mt-4 text-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={() => {
              // Share achievement
              const text = language === 'en'
                ? `Just unlocked the "${achievement.name}" achievement on FakeClass! 🎉 #FakeClass #ProfessionalDevelopment`
                : `剛在 FakeClass 解鎖了「${achievement.nameZh}」成就！🎉 #FakeClass #專業發展`;
              window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
            }}
          >
            {language === 'en' ? 'Share Achievement' : '分享成就'}
          </button>
        </div>
      )}
    </motion.div>
  );
} 
 
 
 
 
 
 