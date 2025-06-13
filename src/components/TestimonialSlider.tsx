'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';
import { testimonials } from '@/data/fakeTestimonials';
import Image from 'next/image';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[300px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden">
            <Image
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-xl md:text-2xl font-serif mb-4 max-w-2xl">
            "{testimonials[currentIndex].comment}"
          </p>

          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(testimonials[currentIndex].rating)
                    ? 'text-yellow-400'
                    : 'text-gray-200'
                }`}
              />
            ))}
          </div>

          <h3 className="font-serif text-lg font-bold">
            {testimonials[currentIndex].name}
          </h3>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 
 
 
 
 
 
 