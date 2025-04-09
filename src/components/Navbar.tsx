"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Array of inspirational travel quotes
const quotes = [
  {
    text: "Travel is the only thing you buy that makes you richer.",
    author: "Anonymous"
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
  },
  {
    text: "Take only memories, leave only footprints.",
    author: "Chief Seattle"
  },
  {
    text: "The world is a book and those who do not travel read only one page.",
    author: "St. Augustine"
  },
  {
    text: "Travel far, travel wide, travel deep.",
    author: "Anonymous"
  },
  {
    text: "Adventure may hurt you, but monotony will kill you.",
    author: "Anonymous"
  },
  {
    text: "Not all who wander are lost.",
    author: "J.R.R. Tolkien"
  },
  {
    text: "To travel is to live.",
    author: "Hans Christian Andersen"
  },
  {
    text: "Travel makes one modest. You see what a tiny place you occupy in the world.",
    author: "Gustave Flaubert"
  },
  {
    text: "The journey, not the arrival, matters.",
    author: "T.S. Eliot"
  }
];

const Navbar = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Change quote every 8 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start fade out
      setFadeIn(false);
      
      // After fade out completes, change the quote and start fade in
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFadeIn(true);
      }, 500); // This should match the CSS transition time
      
    }, 8000);
    
    return () => clearInterval(intervalId);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-2 md:pl-1 md:pr-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo - Explicitly set to left */}
          <div className="w-[200px] h-[80px] relative self-start md:self-center">
            <Image
              src="/images/logo.png"
              alt="J Vacations - Forever Tourism"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Travel Quotes */}
          <div 
            className={`transition-opacity duration-500 ease-in-out max-w-xl flex-1 text-center my-4 md:my-0 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className="text-lg font-light italic text-[#1a365d]">"{currentQuote.text}"</p>
            <p className="text-sm font-medium mt-1 text-gray-600">— {currentQuote.author}</p>
          </div>
          
          {/* Call Travel Experts - Fixed width */}
          <div className="min-w-[220px] flex justify-end">
            <a 
              href="tel:+917707812574" 
              className="group flex items-center space-x-2 text-sm hover:text-[#1a365d] transition-colors whitespace-nowrap"
            >
              <div className="flex justify-center items-center w-7 h-7 bg-[#1a365d] text-yellow-500 rounded-full animate-bounce shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="bg-[#1a365d] text-white px-3 py-1 rounded-full font-bold group-hover:bg-[#2563eb] transition-colors">
                Call: +91 77078 12574
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 