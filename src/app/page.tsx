'use client';

import Image from "next/image";
import DestinationCard from '../components/DestinationCard'
import ServiceCard from '../components/ServiceCard'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import TravelPackages from '../components/TravelPackages'
import PromoBanner from '../components/PromoBanner'
import QuoteForm from '../components/QuoteForm'
import TestimonialsSection from '../components/TestimonialsSection'
import NewsletterSubscription from '../components/forms/NewsletterSubscription'
import SmartBanner from '../components/forms/SmartBanner'
import CallbackStateWrapper from '../components/CallbackStateWrapper'

// Import content from JSON files
import specialOffersData from '../content/specialOffers.json';
import servicesData from '../content/services.json';
import contactData from '../content/contactInfo.json';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <PromoBanner />
      
      {/* Featured Travel Packages */}
      <TravelPackages />

      {/* Newsletter Subscription */}
      <section className="container mx-auto px-4">
        <NewsletterSubscription />
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gray-50" aria-labelledby="offers-title">
        <div className="container mx-auto px-4">
          <h2 id="offers-title" className="text-4xl font-bold text-center mb-12 text-[#1a365d]">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {specialOffersData.offers.map((offer, index) => (
              <article key={index} role="listitem">
                <DestinationCard {...offer} />
              </article>
            ))}
          </div>
          
          {/* Smart Banner */}
          <SmartBanner />
        </div>
      </section>

      {/* Services */}
      <section className="py-20" aria-labelledby="services-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="services-title" className="inline-block text-5xl font-extrabold mb-2 relative">
              <span className="bg-gradient-to-r from-[#1a365d] via-[#2196F3] to-[#1a365d] bg-clip-text text-transparent">Our Services</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#FFD700]"></span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">Comprehensive travel solutions designed for your perfect journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {servicesData.services.map((service, index) => (
              <article key={index} role="listitem">
                <ServiceCard {...service} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="contact-title">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#2196F3]">
              <h2 id="contact-title" className="text-3xl font-bold text-[#1a365d] mb-6">Contact Us</h2>
              <p className="text-lg mb-6 text-gray-700">Ready to start your journey? Get in touch with us today!</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="font-semibold mr-2 text-[#1a365d]">Address:</span>
                  <span className="text-gray-700">
                    {contactData.address}
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2 text-[#1a365d]">Phone:</span>
                  <a 
                    href={`tel:${contactData.phone}`} 
                    className="text-[#2196F3] hover:text-[#1a365d]"
                    aria-label={`Call us at ${contactData.phone}`}
                  >
                    {contactData.phone}
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2 text-[#1a365d]">Follow Us:</span>
                  <a 
                    href={contactData.instagramLink} 
                    className="text-[#2196F3] hover:text-[#1a365d]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on Instagram @${contactData.instagram}`}
                  >
                    @{contactData.instagram}
                  </a>
                </p>
              </div>
              <div className="mt-6">
                <iframe
                  src={contactData.mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="J Vacations Location Map"
                  className="shadow-md"
                ></iframe>
              </div>
              <CallbackStateWrapper />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#2196F3]">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
