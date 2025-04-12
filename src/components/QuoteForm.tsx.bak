'use client';

import { useState } from 'react';

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

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    travelType: '',
    destination: '',
    startDate: '',
    endDate: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-[#1a365d] mb-6 text-center">
        Get Your Personalized Travel Quote
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Trip Details */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Type of Trip</label>
              <select
                name="travelType"
                value={formData.travelType}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                required
              >
                <option value="">Select a type</option>
                {travelTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Destination (Optional)</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Where would you like to go?"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Step 2: Travel Dates */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                required
              />
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {step === 3 && (
          <div className="space-y-4">
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
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
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
              <label className="block text-gray-700 mb-2">Additional Notes</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                rows={4}
                placeholder="Any special requirements or preferences?"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Previous
            </button>
          )}
          
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-[#2196F3] text-white rounded-lg hover:bg-[#1976D2] transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-3 bg-[#FFD700] text-[#1a365d] rounded-lg hover:bg-[#f7c800] transition-colors font-semibold"
            >
              Get Quote
            </button>
          )}
        </div>
      </form>
    </div>
  );
} 