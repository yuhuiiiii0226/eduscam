import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CourseCard from './CourseCard';
import { Course } from '@/types/course';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CourseCarouselProps {
  title: string;
  subtitle?: string;
  courses: Course[];
}

export default function CourseCarousel({ title, subtitle, courses }: CourseCarouselProps) {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1f1f1f]">{title}</h2>
          {subtitle && <p className="mt-4 text-[#373737]">{subtitle}</p>}
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
} 