'use client';

import { useState } from 'react';

interface CallbackRequestProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallbackRequest({ isOpen, onClose }: CallbackRequestProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: 'morning',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Temporarily configured to send to jvacations2023@gmail.com
    console.log('Callback request submitted:', formData, '- Will be sent to jvacations2023@gmail.com');
    
    // Simulate submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✕
        </button>
        
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Request Received!</h2>
            <p className="text-gray-600">
              We'll call you back at your preferred time. Thank you!
            </p>
            <p className="text-xs text-gray-400 mt-4">
              Currently sending to jvacations2023@gmail.com for testing
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">Request a Callback</h2>
            <p className="text-gray-600 mb-6">Leave your details and we'll call you back!</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-[#2196F3] focus:ring focus:ring-[#2196F3] focus:ring-opacity-50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-[#2196F3] focus:ring focus:ring-[#2196F3] focus:ring-opacity-50"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">Best Time to Call</label>
                <select
                  id="preferredTime"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-[#2196F3] focus:ring focus:ring-[#2196F3] focus:ring-opacity-50"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                >
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 7PM)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                <textarea
                  id="message"
                  rows={3}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-[#2196F3] focus:ring focus:ring-[#2196F3] focus:ring-opacity-50"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full p-2 rounded-md text-white font-medium ${
                    isSubmitting ? 'bg-blue-300' : 'bg-[#2196F3] hover:bg-[#1976D2]'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Callback'}
                </button>
              </div>
              
              <p className="text-xs text-gray-400 text-center">
                Will be sent to jvacations2023@gmail.com for testing
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
} 