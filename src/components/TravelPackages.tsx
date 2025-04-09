'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Package {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  included: string[];
}

const packages: Package[] = [
  {
    id: 1,
    title: "Luxury Maldives Escape",
    description: "Experience paradise with this all-inclusive luxury package to the Maldives",
    duration: "7 Nights / 8 Days",
    price: "From $3,999 per person",
    image: "/images/packages/maldives.jpg",
    highlights: [
      "Overwater villa accommodation",
      "Private beach access",
      "Spa treatments",
      "Snorkeling and diving",
      "Sunset cruise"
    ],
    included: [
      "Return flights",
      "All meals and drinks",
      "Airport transfers",
      "Daily activities",
      "Travel insurance"
    ]
  },
  {
    id: 2,
    title: "European Adventure",
    description: "Explore the best of Europe with this comprehensive tour package",
    duration: "14 Nights / 15 Days",
    price: "From $4,999 per person",
    image: "/images/packages/europe.jpg",
    highlights: [
      "Paris, Rome, and Barcelona",
      "Guided city tours",
      "High-speed train travel",
      "Local cuisine experiences",
      "Historic landmarks"
    ],
    included: [
      "International flights",
      "4-star accommodations",
      "Daily breakfast",
      "City tours",
      "Travel insurance"
    ]
  },
  {
    id: 3,
    title: "Safari Experience",
    description: "Witness the wonders of African wildlife on this unforgettable safari",
    duration: "10 Nights / 11 Days",
    price: "From $5,999 per person",
    image: "/images/packages/safari.jpg",
    highlights: [
      "Game drives",
      "Luxury tented camps",
      "Sunrise balloon safari",
      "Cultural village visit",
      "Professional guides"
    ],
    included: [
      "International flights",
      "All meals and drinks",
      "Game park fees",
      "Airport transfers",
      "Travel insurance"
    ]
  }
];

export default function TravelPackages() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  return (
    <section className="py-16 bg-white" aria-labelledby="packages-title">
      <div className="container mx-auto px-4">
        <h2 id="packages-title" className="text-4xl font-bold text-center mb-12 text-[#1a365d]">
          Featured Travel Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#1a365d]">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  priority={pkg.id === 1}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-2">
                  {pkg.title}
                </h3>
                
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">{pkg.duration}</span>
                  <span className="text-[#FFD700] font-semibold">{pkg.price}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1a365d] mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={`card-highlight-${pkg.id}-${index}`}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#1a365d] mb-2">Included:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {pkg.included.slice(0, 3).map((item, index) => (
                      <li key={`card-included-${pkg.id}-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full px-6 py-3 bg-[#FFD700] text-[#1a365d] rounded-lg hover:bg-[#f7c800] transition-colors font-semibold"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {selectedPackage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
              <div className="mb-6 relative h-56 w-full overflow-hidden rounded-lg bg-[#1a365d]">
                <Image
                  src={selectedPackage.image}
                  alt={selectedPackage.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h3 className="text-3xl font-bold text-[#1a365d] mb-4">
                {selectedPackage.title}
              </h3>
              <p className="text-gray-600 mb-6">{selectedPackage.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-[#1a365d] mb-2">Duration:</h4>
                  <p className="text-gray-600">{selectedPackage.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d] mb-2">Price:</h4>
                  <p className="text-[#FFD700] font-semibold">{selectedPackage.price}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-[#1a365d] mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedPackage.highlights.map((highlight, index) => (
                      <li key={`highlight-${index}`}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d] mb-2">What's Included:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedPackage.included.map((item, index) => (
                      <li key={`included-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="w-1/2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Close
                </button>
                <button
                  className="w-1/2 px-6 py-3 bg-[#FFD700] text-[#1a365d] rounded-lg hover:bg-[#f7c800] transition-colors font-semibold"
                >
                  Complete Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 