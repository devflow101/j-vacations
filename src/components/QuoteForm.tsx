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

  const renderProgressBar = () => {
    const steps = ['Trip Details', 'Travel Preferences', 'Contact Information'];
    return (
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((stepName, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
                ${step > index + 1 ? 'bg-[#2196F3] text-white' : 
                  step === index + 1 ? 'bg-[#FFD700] text-[#1a365d]' : 
                  'bg-gray-200 text-gray-500'}`}>
                {index + 1}
              </div>
              <span className="text-sm text-gray-600 text-center">{stepName}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full"></div>
          <div 
            className="absolute top-0 left-0 h-1 bg-[#2196F3] transition-all duration-300"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-3xl font-bold text-[#1a365d] mb-6 text-center">
        Get Your Personalized Travel Quote
      </h2>
      
      {renderProgressBar()}
      
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
              <label className="block text-gray-700 mb-2">Destination</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Where would you like to go?"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Adults</label>
                <input
                  type="number"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Children (0-12 yrs)</label>
                <input
                  type="number"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  min="0"
                  max="10"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Travel Preferences */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Travel Class</label>
              <select
                name="travelClass"
                value={formData.travelClass}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                required
              >
                <option value="">Select travel class</option>
                {travelClasses.map(cls => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Accommodation Type</label>
              <select
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                required
              >
                <option value="">Select accommodation type</option>
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
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                required
              >
                <option value="">Select budget range</option>
                {budgetRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Preferred Activities</label>
              <textarea
                name="activities"
                value={formData.activities}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2196F3] focus:border-transparent"
                rows={3}
                placeholder="What activities interest you? (e.g., sightseeing, adventure sports, shopping, etc.)"
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
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center space-x-2"
            >
              <span>Previous</span>
            </button>
          )}
          
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-6 py-3 bg-[#2196F3] text-white rounded-lg hover:bg-[#1976D2] transition-colors flex items-center space-x-2"
            >
              <span>Next</span>
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-6 py-3 bg-[#FFD700] text-[#1a365d] rounded-lg hover:bg-[#f7c800] transition-colors font-semibold flex items-center space-x-2"
            >
              <span>Get Quote</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
} 