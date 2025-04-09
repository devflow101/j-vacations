'use client';

import Link from 'next/link';

export default function PromoBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1a365d] via-[#2563eb] to-[#1a365d] text-white py-4 px-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center space-x-2">
          <span className="animate-pulse">🔥</span>
          <p className="text-base md:text-lg">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
              Worldwide Holiday Sale
            </span>
            <span className="mx-2">-</span>
            <span className="font-light">Save up to</span>
            <span className="ml-2 font-bold text-yellow-300 text-xl">73%</span>
          </p>
        </div>
      </div>
    </section>
  );
} 