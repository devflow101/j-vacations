'use client';

import { useState } from 'react';

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Callback requested:', formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-[#1a365d] mb-6 text-center">
        Request a Callback
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Preferred Callback Time</label>
          <select
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
            required
          >
            <option value="">Select a time</option>
            <option value="morning">Morning (9am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 5pm)</option>
            <option value="evening">Evening (5pm - 8pm)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Message (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
            rows={4}
            placeholder="What would you like to discuss?"
          />
        </div>
        
        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#FFD700] text-[#1a365d] rounded-lg hover:bg-[#f7c800] transition-colors font-semibold"
        >
          Request Callback
        </button>
      </form>
    </div>
  );
} 