import { Metadata } from 'next';
import ConsultationForm from './ConsultationForm';

export const metadata: Metadata = {
  title: '預約免費諮詢 | EduScam',
  description: '立即預約免費諮詢，了解更多關於我們的服務。',
};

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsultationForm />
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>我們將在收到表單後的 24 小時內與您聯繫</p>
          <p className="mt-2">若有緊急需求，請直接撥打：(02) 2345-6789</p>
        </div>
      </div>
    </main>
  );
} 