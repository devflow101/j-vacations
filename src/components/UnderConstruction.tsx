"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';

interface UnderConstructionProps {
  pageName: string;
  message?: string;
  backgroundImage?: string;
}

const UnderConstruction = ({ 
  pageName, 
  message = "Our team is working tirelessly to bring you amazing travel opportunities. This page will be available soon!",
  backgroundImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%232196F3'/%3E%3Cpath d='M0,1080 L1920,1080 L1920,600 Q960,800 0,600 Z' fill='white' opacity='0.1'/%3E%3Ctext x='960' y='540' font-family='Arial' font-size='72' fill='white' text-anchor='middle'%3EAdventure Awaits%3C/text%3E%3C/svg%3E"
}: UnderConstructionProps) => {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  const randomInspirationalQuote = [
    "Adventure is worthwhile in itself. — Amelia Earhart",
    "Travel isn't always pretty. It isn't always comfortable. But that's okay. The journey changes you. — Anthony Bourdain",
    "Travel makes one modest. You see what a tiny place you occupy in the world. — Gustav Flaubert",
    "The world is a book, and those who do not travel read only one page. — Saint Augustine",
    "Travel is the only thing you buy that makes you richer. — Anonymous",
    "To travel is to live. — Hans Christian Andersen",
    "Not all who wander are lost. — J.R.R. Tolkien",
    "The journey of a thousand miles begins with a single step. — Lao Tzu"
  ][Math.floor(Math.random() * 8)];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center px-4" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`
        }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/70"></div>
        
        <div className="relative z-10 max-w-3xl text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-500 text-[#1a365d] font-bold text-sm animate-pulse">
              Coming Soon
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {pageName} Page Under Construction
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            {message}
          </p>
          
          <div className="italic text-white/80 text-lg mb-10 px-6 py-4 border-l-4 border-yellow-500 bg-white/10 inline-block">
            &ldquo;{randomInspirationalQuote}&rdquo;
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleRedirect('/get-quote')}
              className="px-8 py-4 bg-[#FFD700] hover:bg-yellow-400 text-[#1a365d] font-bold rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Get a Travel Quote
            </button>
            <button 
              onClick={() => handleRedirect('/request-callback')}
              className="px-8 py-4 bg-white hover:bg-gray-100 text-[#1a365d] font-bold rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Request a Call Back
            </button>
          </div>
          
          <div className="mt-12">
            <Link href="/" className="text-white hover:text-yellow-300 underline transition-colors">
              &larr; Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UnderConstruction; 