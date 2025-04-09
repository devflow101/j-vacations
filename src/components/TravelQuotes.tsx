'use client';

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

export default function TravelQuotes() {
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
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div 
          className={`text-center transition-opacity duration-500 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="text-2xl font-light italic text-[#1a365d] max-w-4xl mx-auto leading-relaxed">
            "{currentQuote.text}"
          </p>
          <p className="text-lg font-medium mt-3 text-gray-600">— {currentQuote.author}</p>
        </div>
      </div>
    </section>
  );
} 