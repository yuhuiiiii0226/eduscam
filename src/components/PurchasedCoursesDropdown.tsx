'use client';

import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { courses } from '@/data/fakeCourses';
import { Course } from '@/types/course';

export default function PurchasedCoursesDropdown() {
  const [purchasedCourses, setPurchasedCourses] = useState<Course[]>([]);

  useEffect(() => {
    // 從 localStorage 獲取已購買的課程
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      const userCourses = courses.filter(course => 
        user.enrolledCourses?.includes(course.id)
      );
      setPurchasedCourses(userCourses);
    }
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="relative inline-flex items-center p-2 text-gray-700 hover:text-gray-900">
        <span className="sr-only">已購買課程</span>
        <svg 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
          />
        </svg>
        {purchasedCourses.length > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold leading-none text-green-100 transform translate-x-1/2 -translate-y-1/2 bg-green-600 rounded-full">
            {purchasedCourses.length}
          </span>
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-[380px] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            <h3 className="p-4 text-base text-gray-900">已購買課程</h3>
            
            <div className="max-h-[400px] overflow-y-auto">
              {purchasedCourses.length > 0 ? (
                purchasedCourses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/learn/${course.id}`}
                    className="block hover:bg-gray-50"
                  >
                    <div className="flex items-start p-4 border-t border-gray-100">
                      <div className="relative w-[72px] h-[72px] flex-shrink-0">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ml-3">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                          {course.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                          {course.instructor}
                        </p>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                            已購買
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500 border-t border-gray-100">
                  <p>您還沒有購買任何課程</p>
                  <Link
                    href="/courses"
                    className="mt-2 inline-block text-blue-600 hover:text-blue-800"
                  >
                    瀏覽課程
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
} 