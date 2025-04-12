'use client';

import { useState } from 'react';

export default function SmartBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Implement subscription
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setStatus('success');
    setEmail('');
    
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-r from-[#1a365d] to-[#2196F3] p-6 rounded-lg shadow-lg my-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Want to be the first to know about our deals?</h3>
            <p className="text-white/80">Join 1000+ smart travelers getting the best deals</p>
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
                {status === 'loading' ? 'Joining...' : 'Join'}
              </button>
            </div>
            
            {status === 'success' && (
              <p className="mt-2 text-white text-sm">
                Welcome aboard! Check your email for exclusive deals.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
} 