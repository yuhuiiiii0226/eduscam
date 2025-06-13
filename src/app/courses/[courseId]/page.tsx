import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '課程詳情',
};

type Props = {
  params: { courseId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page(props: Props) {
  const { courseId } = props.params;
  return <div>課程 ID：{courseId}</div>;
} 