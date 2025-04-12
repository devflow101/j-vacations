'use client';

import { useState } from 'react';
import CallbackRequest from './forms/CallbackRequest';

export default function CallbackStateWrapper() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsCallbackOpen(true)}
        className="mt-6 w-full bg-[#2196F3] text-white py-2 px-4 rounded-md hover:bg-[#1976D2] transition-colors duration-200"
      >
        Request a Callback
      </button>
      <CallbackRequest isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
    </>
  );
} 