import { Category } from '.';

export type Rating = {
  score: number;
  count: number;
} | number;

export type Price = {
  original: number;
  discounted: number;
} | number;

export type Instructor = {
  name: string;
  title: string;
} | string;

export type CourseChapter = {
  title: string;
  duration: string;
  lessons: {
    title: string;
    duration: string;
  }[];
};

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: string;
  duration: string;
  instructor: {
    name: string;
    title: string;
  };
  rating: {
    score: number;
    count: number;
  };
  price: {
    original: number;
    discounted: number;
  };
  enrolled?: number;
  skills: string[];
  chapters?: {
    title: string;
    duration: string;
    lessons: {
      title: string;
      duration: string;
    }[];
  }[];
  targetAudience?: string[];
  learningOutcomes?: string[];
  prerequisites?: string[];
}

export interface Chapter {
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Lesson {
  title: string;
  duration: string;
}

export type Review = {
  id: string;
  userName: string;
  userImage?: string;  // Optional user profile image URL
  rating: number;
  date: string;
  content: string;
  helpfulCount: number;
}; 