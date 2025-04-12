import Image from "next/image";
import DestinationCard from '../components/DestinationCard'
import ServiceCard from '../components/ServiceCard'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import TravelPackages from '../components/TravelPackages'
import PromoBanner from '../components/PromoBanner'
import QuoteForm from '../components/QuoteForm'

const specialOffers = [
  {
    title: "Early Summer Discount",
    image: "/images/offers/summer-discount.jpg",
    description: "Book now for summer travel and save up to 20% on selected destinations",
    duration: "Valid until May 31, 2024",
    price: "Save 20%"
  },
  {
    title: "Family Package Deal",
    image: "/images/offers/family-package.jpg",
    description: "Kids stay and eat free at select destinations, perfect for family holidays",
    duration: "Valid until Dec 31, 2024",
    price: "Kids Free"
  },
  {
    title: "Honeymoon Special",
    image: "/images/offers/honeymoon-special.jpg",
    description: "Complimentary romantic dinner and spa treatment for honeymooners",
    duration: "Ongoing",
    price: "Extras Included"
  }
];

const services = [
  {
    title: "Flight Bookings",
    description: "International and domestic flight reservations",
    icon: "✈️"
  },
  {
    title: "Hotel Bookings",
    description: "Luxury accommodations worldwide",
    icon: "🏨"
  },
  {
    title: "Guided Tours",
    description: "Expert local guides and custom itineraries",
    icon: "🗺️"
  },
  {
    title: "Travel Insurance",
    description: "Comprehensive travel protection",
    icon: "🛡️"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <PromoBanner />
      
      {/* Featured Travel Packages */}
      <TravelPackages />

      {/* Special Offers */}
      <section className="py-20 bg-gray-50" aria-labelledby="offers-title">
        <div className="container mx-auto px-4">
          <h2 id="offers-title" className="text-4xl font-bold text-center mb-12 text-[#1a365d]">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {specialOffers.map((offer, index) => (
              <article key={index} role="listitem">
                <DestinationCard {...offer} />
              </article>
            ))}
          </div>
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
            {services.map((service, index) => (
              <article key={index} role="listitem">
                <ServiceCard {...service} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="contact-title">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 id="contact-title" className="text-4xl font-bold mb-8 text-[#1a365d]">Contact Us</h2>
              <p className="text-lg mb-4 text-gray-700">Ready to start your journey? Get in touch with us today!</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="font-semibold mr-2 text-[#1a365d]">Phone:</span>
                  <a 
                    href="tel:+917707812574" 
                    className="text-[#2196F3] hover:text-[#1a365d]"
                    aria-label="Call us at +91 77078 12574"
                  >
                    +91 77078 12574
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2 text-[#1a365d]">Follow Us:</span>
                  <a 
                    href="https://www.instagram.com/j_vacations2023" 
                    className="text-[#2196F3] hover:text-[#1a365d]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram @j_vacations2023"
                  >
                    @j_vacations2023
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
