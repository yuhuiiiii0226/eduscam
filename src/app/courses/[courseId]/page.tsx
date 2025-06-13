import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '課程詳情',
};

export default function Page({ params }: { params: { courseId: string } }) {
  return <div>課程 ID：{params.courseId}</div>;
} 