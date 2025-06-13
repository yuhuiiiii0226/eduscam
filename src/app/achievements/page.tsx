'use client';

import { useState } from 'react';
import AchievementCard from '@/components/AchievementCard';
import { achievements } from '@/data/fakeAchievements';
import { motion } from 'framer-motion';

type UserProgress = {
  [K in typeof achievements[number]['id']]: {
    unlocked: boolean;
    progress: number;
  };
};

export default function AchievementsPage() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');

  // Fake user progress - in a real app this would come from an API
  const userProgress: UserProgress = {
    'serial-collector': { unlocked: true, progress: 100 },
    'social-guru': { unlocked: false, progress: 75 },
    'speed-learner': { unlocked: true, progress: 100 },
    'professional-faker': { unlocked: false, progress: 30 },
    'enrollment-addict': { unlocked: false, progress: 90 },
    'screenshot-artist': { unlocked: true, progress: 100 },
  };

  const filteredAchievements = achievements.filter(achievement => {
    const progress = userProgress[achievement.id];
    switch (filter) {
      case 'unlocked':
        return progress.unlocked;
      case 'locked':
        return !progress.unlocked;
      default:
        return true;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">
          {language === 'en' ? 'Your Achievements' : '你的成就'}
        </h1>
        <p className="text-gray-600 mb-6">
          {language === 'en' 
            ? 'Showcase your professional development illusions!' 
            : '展示你的專業發展假象！'}
        </p>
        
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          >
            {language === 'en' ? '切換到中文' : 'Switch to English'}
          </button>
          
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'unlocked' | 'locked')}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          >
            <option value="all">{language === 'en' ? 'All Achievements' : '所有成就'}</option>
            <option value="unlocked">{language === 'en' ? 'Unlocked' : '已解鎖'}</option>
            <option value="locked">{language === 'en' ? 'Locked' : '未解鎖'}</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              isUnlocked={userProgress[achievement.id].unlocked}
              progress={userProgress[achievement.id].progress}
              language={language}
            />
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Achievement Statistics' : '成就統計'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-500">
                {Object.values(userProgress).filter(p => p.unlocked).length}
              </div>
              <div className="text-gray-600">
                {language === 'en' ? 'Achievements Unlocked' : '已解鎖成就'}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-purple-500">
                {Math.round(
                  Object.values(userProgress)
                    .reduce((acc, curr) => acc + curr.progress, 0) / 
                    Object.values(userProgress).length
                )}%
              </div>
              <div className="text-gray-600">
                {language === 'en' ? 'Overall Progress' : '總體進度'}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-yellow-500">
                {Object.values(userProgress)
                  .filter(p => p.unlocked)
                  .length * 100}
              </div>
              <div className="text-gray-600">
                {language === 'en' ? 'Social Media Points' : '社群媒體點數'}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 
 
 
 
 
 
 
 