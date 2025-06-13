export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
  certificates: string[];
}

export type Level = '入門' | '中級' | '進階' | '高級';

export type Category = 
  | 'ai'
  | 'business'
  | 'data'
  | 'design'
  | 'marketing'
  | 'personal'
  | 'programming';

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: {
    original: number;
    discounted: number;
  };
  category: string;
  level: string;
  duration: string;
  enrolled?: number;
  createdAt: string;
  skills?: string[];
  instructor: {
    name: string;
    title: string;
  };
}

export interface CategoryInfo {
  id: Category;
  name: string;
  count: number;
}

export interface Chapter {
  id: string;
  title: string;
  titleZh: string;
  duration: string;
  completed?: boolean;
  type: 'video' | 'quiz' | 'assignment';
  description: string;
  descriptionZh: string;
  fakeProgress?: {
    watchedSeconds: number;
    totalSeconds: number;
    lastPosition: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  comment: string;
  commentZh: string;
  rating: number;
  jobTitle: string;
  company: string;
  socialStats: {
    followers: number;
    posts: number;
    certificates: number;
  };
}

export interface Achievement {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  icon: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  condition: {
    type: 'certificates' | 'shares' | 'enrollments' | 'brags';
    threshold: number;
  };
} 