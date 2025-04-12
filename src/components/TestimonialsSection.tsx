'use client';

import { useState } from 'react';

// Import testimonials data
import testimonialsData from '../data/testimonials.json';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  location: string;
}

interface TestimonialsData {
  testimonials: Testimonial[];
}

const testimonials = testimonialsData as TestimonialsData;

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="testimonials-title" className="text-4xl font-bold text-[#1a365d] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our satisfied customers have to say about their experiences with J Vacations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Content */}
            <div className="relative overflow-hidden">
              <div 
                key={currentIndex}
                className="text-center transition-opacity duration-300"
              >
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials.testimonials[currentIndex].rating)}
                </div>
                <p className="text-xl text-gray-600 mb-6 italic">
                  "{testimonials.testimonials[currentIndex].text}"
                </p>
                <div className="font-semibold text-[#1a365d]">
                  {testimonials.testimonials[currentIndex].name}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonials.testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </div>

          {/* Google Reviews Link */}
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=j+vacations+jalandhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2196F3] hover:text-[#1976D2] inline-flex items-center"
            >
              <span>Read more reviews on Google</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 