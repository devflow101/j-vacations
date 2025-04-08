"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

export default function RequestCallback() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    destination: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would normally send the data to your backend or API
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-[#1a365d] via-[#2563eb] to-[#1a365d] text-white py-6 px-8">
            <h1 className="text-3xl font-bold">Request a Call Back</h1>
            <p className="mt-2 text-white/80">
              Fill out this form and our travel expert will call you back at your preferred time
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Request Received!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you! One of our travel experts will call you back at your preferred time.
              </p>
              <button 
                onClick={() => router.push('/')}
                className="bg-[#1a365d] hover:bg-[#2563eb] text-white px-6 py-3 rounded-md transition-colors"
              >
                Return to Homepage
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-gray-700 font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-gray-700 font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-gray-700 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="preferredTime" className="block text-gray-700 font-medium">
                    Preferred Call Back Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                    <option value="Afternoon (12pm - 5pm)">Afternoon (12pm - 5pm)</option>
                    <option value="Evening (5pm - 8pm)">Evening (5pm - 8pm)</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="destination" className="block text-gray-700 font-medium">
                    Interested Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Where would you like to go?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-gray-700 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your travel plans and requirements"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-full text-white font-bold text-lg transition-all transform hover:scale-105 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[#1a365d] to-[#2563eb] hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Call Back'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
} 