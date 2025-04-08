"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-[#1a365d] via-[#2563eb] to-[#1a365d] text-white py-3 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <span className="animate-pulse">🔥</span>
            <p className="text-sm md:text-base">
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                Worldwide Holiday Sale
              </span>
              <span className="mx-2">-</span>
              <span className="font-light">Save up to</span>
              <span className="ml-2 font-bold text-yellow-300 text-lg">73%</span>
            </p>
          </div>
          <a 
            href="tel:+917707812574" 
            className="group flex items-center space-x-2 text-sm md:text-base hover:text-yellow-300 transition-colors"
          >
            <div className="flex justify-center items-center w-7 h-7 bg-yellow-500 text-[#1a365d] rounded-full animate-bounce shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="bg-yellow-500 text-[#1a365d] px-3 py-1 rounded-full font-bold group-hover:bg-yellow-400 transition-colors">
              Call our travel experts (24*7): +91 77078 12574
            </span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="w-[300px] h-[150px] relative">
              <Image
                src="/images/logo.png"
                alt="J Vacations - Forever Tourism"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="nav-link">HOME</Link>
              <Link href="/flights" className="nav-link">FLIGHTS</Link>
              <Link href="/destinations" className="nav-link">DESTINATIONS</Link>
              <Link href="/holidays" className="nav-link">HOLIDAYS</Link>
              <Link href="/tours" className="nav-link">TOURS</Link>
              <Link href="/special-offers" className="nav-link">SPECIAL OFFERS</Link>
              
              {/* Contact Us Dropdown */}
              <div className="relative group">
                <button 
                  onClick={toggleDropdown}
                  onMouseEnter={() => setDropdownVisible(true)}
                  className="nav-link flex items-center"
                >
                  CONTACT US
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition-all duration-300 transform origin-top-right ${
                    dropdownVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                  }`}
                  onMouseLeave={() => setDropdownVisible(false)}
                >
                  <div className="py-1">
                    <Link 
                      href="/get-quote" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1a365d] hover:text-white transition-colors"
                    >
                      Get a Quote
                    </Link>
                    <Link 
                      href="/request-callback" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1a365d] hover:text-white transition-colors"
                    >
                      Request a Call Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 