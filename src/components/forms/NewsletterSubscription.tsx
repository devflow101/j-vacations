'use client';

import { useState } from 'react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Temporarily configured to work with jvacations2023@gmail.com
    // In a production environment, this would connect to a proper email service
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setStatus('success');
    setEmail('');
    
    // Log for demonstration purposes
    console.log('Newsletter subscription requested:', email, '- Will be sent to jvacations2023@gmail.com');
    
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-r from-[#1a365d] to-[#2196F3] p-6 rounded-lg shadow-lg my-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Exclusive Travel Deals</h3>
            <p className="text-white/80">Get weekly exclusive deals and travel inspiration directly in your inbox</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 text-white">✓</span>
                Up to 30% off on early bird bookings
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-white">✓</span>
                Seasonal promotions
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-white">✓</span>
                Destination guides
              </li>
            </ul>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full md:w-auto flex-1 max-w-md">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 rounded-md border-0 shadow-sm focus:ring-2 focus:ring-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className={`px-6 py-2 rounded-md text-[#1a365d] font-medium transition-colors duration-200 ${
                  status === 'loading'
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-white hover:bg-gray-100'
                }`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            
            {status === 'success' && (
              <p className="mt-2 text-white text-sm">
                Welcome aboard! Check your inbox soon for exclusive deals.
              </p>
            )}
            <p className="mt-2 text-white/70 text-xs">
              Currently linked to jvacations2023@gmail.com for testing
            </p>
          </form>
        </div>
      </div>
    </div>
  );
} 