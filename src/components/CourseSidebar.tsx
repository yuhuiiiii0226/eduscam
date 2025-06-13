import { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface Category {
  id: string;
  name: string;
  count: number;
}

interface ContentType {
  id: string;
  name: string;
  count: number;
}

interface CourseSidebarProps {
  categories: Category[];
  selectedCategory?: string;
  onCategoryChange?: (id: string) => void;
}

export default function CourseSidebar({ 
  categories, 
  selectedCategory,
  onCategoryChange 
}: CourseSidebarProps) {
  const [expandedSection, setExpandedSection] = useState<'category' | 'type' | null>(null);
  
  const contentTypes = [
    { id: 'video', name: '影音課程', count: 120 },
    { id: 'combo', name: '組合', count: 50 },
    { id: 'live', name: '直播', count: 30 },
    { id: 'article', name: '文章', count: 200 },
  ];

  return (
    <div className="w-64 flex-shrink-0">
      {/* 領域分類 */}
      <div className="mb-6">
        <button
          onClick={() => setExpandedSection(expandedSection === 'category' ? null : 'category')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-900">領域分類</span>
          <ChevronRightIcon 
            className={`w-4 h-4 text-gray-500 transition-transform ${
              expandedSection === 'category' ? 'transform rotate-90' : ''
            }`}
          />
        </button>
        <div className={`mt-2 space-y-1 ${expandedSection === 'category' ? 'block' : 'hidden'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange?.(category.id)}
              className={`w-full flex items-center justify-between px-4 py-2 text-sm rounded-lg ${
                selectedCategory === category.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>{category.name}</span>
              <span className="text-gray-500">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 內容形式 */}
      <div>
        <button
          onClick={() => setExpandedSection(expandedSection === 'type' ? null : 'type')}
          className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <span className="text-sm font-medium text-gray-900">內容形式</span>
          <ChevronRightIcon 
            className={`w-4 h-4 text-gray-500 transition-transform ${
              expandedSection === 'type' ? 'transform rotate-90' : ''
            }`}
          />
        </button>
        <div className={`mt-2 space-y-1 ${expandedSection === 'type' ? 'block' : 'hidden'}`}>
          {contentTypes.map((type) => (
            <Link
              key={type.id}
              href={`/courses/type/${type.id}`}
              className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <span>{type.name}</span>
              <span className="text-gray-500">{type.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 