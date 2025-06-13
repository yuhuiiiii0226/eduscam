import { Metadata } from 'next';
import LearnClient from './LearnClient';

export const metadata: Metadata = {
  title: '我的學習 - EduScam',
  description: '立即獲得證書，無需真正學習！',
};

export default function LearnPage() {
  return <LearnClient />;
} 