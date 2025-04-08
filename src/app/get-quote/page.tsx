"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function GetQuote() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    departureCity: '',
    departureDate: '',
    destination: '',
    returnCity: '',
    returnDate: '',
    tripType: 'Flight + Package',
    adults: 1,
    children: 0,
    comments: ''
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
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-[#1a365d] via-[#2563eb] to-[#1a365d] text-white py-6 px-8">
            <h1 className="text-3xl font-bold">Get a Personalized Travel Quote</h1>
            <p className="mt-2 text-white/80">
              Fill out the form below and our travel experts will create a custom itinerary for you
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your quote request has been submitted successfully. One of our travel experts will contact you within 24 hours.
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold text-[#1a365d] mb-4">Personal Information</h2>
                </div>
                
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
                  <label htmlFor="email" className="block text-gray-700 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-gray-700 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    Number of Travelers
                  </label>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label htmlFor="adults" className="block text-sm text-gray-600">
                        Adults
                      </label>
                      <input
                        type="number"
                        id="adults"
                        name="adults"
                        min="1"
                        value={formData.adults}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                      />
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="children" className="block text-sm text-gray-600">
                        Children
                      </label>
                      <input
                        type="number"
                        id="children"
                        name="children"
                        min="0"
                        value={formData.children}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Trip Information */}
                <div className="md:col-span-2 pt-4">
                  <h2 className="text-xl font-semibold text-[#1a365d] mb-4">Trip Information</h2>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="departureCity" className="block text-gray-700 font-medium">
                    Departure City & Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="departureCity"
                    name="departureCity"
                    placeholder="City"
                    value={formData.departureCity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent mb-2"
                  />
                  <input
                    type="date"
                    id="departureDate"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="destination" className="block text-gray-700 font-medium">
                    Destination <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="returnCity" className="block text-gray-700 font-medium">
                    Return City & Date
                  </label>
                  <input
                    type="text"
                    id="returnCity"
                    name="returnCity"
                    placeholder="City"
                    value={formData.returnCity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent mb-2"
                  />
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="tripType" className="block text-gray-700 font-medium">
                    Trip Quotation
                  </label>
                  <select
                    id="tripType"
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  >
                    <option value="Flight + Package">Flight + Package</option>
                    <option value="Hotel Only">Hotel Only</option>
                    <option value="Flight Only">Flight Only</option>
                    <option value="Custom Tour">Custom Tour</option>
                  </select>
                </div>
                
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="comments" className="block text-gray-700 font-medium">
                    Any special requirements or additional comments?
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={4}
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
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
} 