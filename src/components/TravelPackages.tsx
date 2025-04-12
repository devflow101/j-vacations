'use client';

import { useState } from 'react';
import Image from 'next/image';
import packagesData from '../content/travelPackages.json';

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

export default function TravelPackages() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const packages: Package[] = packagesData.packages;

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