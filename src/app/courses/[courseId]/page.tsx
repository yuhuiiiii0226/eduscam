import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '課程詳情',
};

// @ts-nocheck
export default function Page({ params }) {
  return <div>課程 ID：{params.courseId}</div>;
} 