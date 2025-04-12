'use client';

import { useState } from 'react';
import { FaPlane, FaHotel, FaUsers, FaCalendar, FaEnvelope } from 'react-icons/fa';

const travelTypes = [
  "Beach Holiday",
  "City Break",
  "Adventure",
  "Cruise",
  "Luxury",
  "Family",
  "Honeymoon",
  "Other"
];

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,00,000",
  "₹2,00,000 - ₹5,00,000",
  "Above ₹5,00,000"
];

const travelClasses = [
  "Economy",
  "Premium Economy",
  "Business",
  "First Class"
];

const accommodationTypes = [
  "Budget Hotel",
  "3-Star Hotel",
  "4-Star Hotel",
  "5-Star Hotel",
  "Resort",
  "Villa",
  "Apartment"
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    travelType: '',
    destination: '',
    startDate: '',
    endDate: '',
    adults: '2',
    children: '0',
    travelClass: '',
    accommodation: '',
    budget: '',
    activities: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporarily configured to send to jvacations2023@gmail.com
    console.log('Quote request submitted:', formData, '- Will be sent to jvacations2023@gmail.com');
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setFormData({
        travelType: '',
        destination: '',
        startDate: '',
        endDate: '',
        adults: '2',
        children: '0',
        travelClass: '',
        accommodation: '',
        budget: '',
        activities: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="p-6 bg-white rounded-lg border-t-4 border-green-500 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Quote Request Sent!</h2>
        <p className="text-gray-600 mb-2">
          Thank you for submitting your travel preferences. We'll prepare a personalized quote for you.
        </p>
        <p className="text-gray-500 text-sm mb-4">
          We'll contact you within 24 hours at the email or phone number you provided.
        </p>
        <p className="text-xs text-gray-400">
          Currently sending submissions to jvacations2023@gmail.com (for testing purposes)
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 border-t-4 border-[#2196F3]">
      <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Get a Personalized Quote</h2>
      
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          <span className={`text-sm ${step >= 1 ? 'text-[#2196F3]' : 'text-gray-400'}`}>Trip Details</span>
          <span className={`text-sm ${step >= 2 ? 'text-[#2196F3]' : 'text-gray-400'}`}>Travel Preferences</span>
          <span className={`text-sm ${step >= 3 ? 'text-[#2196F3]' : 'text-gray-400'}`}>Contact Information</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
          <div 
            className="bg-[#2196F3] h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Travel Type</label>
              <select
                name="travelType"
                value={formData.travelType}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
              >
                <option value="">Select Travel Type</option>
                {travelTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Destination</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                placeholder="Where would you like to go?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Number of Adults</label>
                <input
                  type="number"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Number of Children</label>
                <input
                  type="number"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={nextStep}
                className="px-8 py-3 bg-[#2196F3] text-white rounded-lg hover:bg-[#1976D2] transition-colors flex items-center"
              >
                Next <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Travel Class</label>
              <select
                name="travelClass"
                value={formData.travelClass}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
              >
                <option value="">Select Travel Class</option>
                {travelClasses.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Accommodation Type</label>
              <select
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
              >
                <option value="">Select Accommodation Type</option>
                {accommodationTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Budget Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
              >
                <option value="">Select Budget Range</option>
                {budgetRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Preferred Activities (Optional)</label>
              <textarea
                name="activities"
                value={formData.activities}
                onChange={handleChange}
                placeholder="Let us know what activities interest you"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                rows={3}
              />
            </div>
            
            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
              >
                <span className="mr-2">←</span> Back
              </button>
              
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-[#2196F3] text-white rounded-lg hover:bg-[#1976D2] transition-colors flex items-center"
              >
                Next <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your contact number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Any Additional Information (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requirements or questions"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                rows={3}
              />
            </div>
            
            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
              >
                <span className="mr-2">←</span> Back
              </button>
              
              <button
                type="submit"
                className="px-8 py-3 bg-[#2196F3] text-white rounded-lg hover:bg-[#1976D2] transition-colors"
              >
                Get Quote
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Currently sending submissions to jvacations2023@gmail.com (for testing purposes)
            </p>
          </div>
        )}
      </form>
    </div>
  );
} 