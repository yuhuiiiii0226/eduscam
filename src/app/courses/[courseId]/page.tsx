export default async function Page({ params }: { params: { courseId: string } }) {
  return <div>課程 ID：{params.courseId}</div>;
} 