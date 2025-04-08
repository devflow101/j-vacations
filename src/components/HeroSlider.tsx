"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: "/images/carousel/santorini.jpg",
    title: "Magical Santorini",
    subtitle: "Experience the enchanting sunsets and iconic white architecture",
    price: "Starting from £899",
    duration: "5 Nights"
  },
  {
    image: "/images/carousel/machu-picchu.jpg",
    title: "Mystical Machu Picchu",
    subtitle: "Discover the ancient wonders of the Incan Empire",
    price: "Starting from £1,299",
    duration: "7 Nights"
  },
  {
    image: "/images/carousel/dubai-atlantis.jpg",
    title: "Luxurious Dubai",
    subtitle: "Indulge in world-class luxury at Atlantis The Palm",
    price: "Starting from £999",
    duration: "6 Nights"
  },
  {
    image: "/images/carousel/paris-louvre.jpg",
    title: "Romantic Paris",
    subtitle: "Fall in love with the City of Light",
    price: "Starting from £599",
    duration: "4 Nights"
  },
  {
    image: "/images/carousel/bali-beach.jpg",
    title: "Tropical Paradise Bali",
    subtitle: "Discover pristine beaches and hidden coves",
    price: "Starting from £799",
    duration: "7 Nights"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-6 text-white/90 max-w-3xl drop-shadow-lg">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                  <span className="text-2xl font-semibold bg-[#FFD700]/90 text-[#1a365d] px-6 py-2 rounded-full">
                    {slide.price}
                  </span>
                  <span className="text-lg bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                    {slide.duration}
                  </span>
                </div>
                <button className="bg-[#FFD700] hover:bg-[#f7c800] text-[#1a365d] px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-xl">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all transform hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all transform hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all transform hover:scale-125 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 