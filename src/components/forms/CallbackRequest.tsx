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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
    onClose();
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
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#2196F3] text-white py-2 px-4 rounded-md hover:bg-[#1976D2] transition-colors duration-200"
          >
            Request Callback
          </button>
        </form>
      </div>
    </div>
  );
} 