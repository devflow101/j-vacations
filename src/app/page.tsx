import Image from "next/image";
import DestinationCard from '../components/DestinationCard'
import ServiceCard from '../components/ServiceCard'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'

const destinations = [
  {
    title: "South American Delights",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%232196F3'/%3E%3Cpath d='M400,150 L500,400 L300,400 Z' fill='%23FFD700' opacity='0.8'/%3E%3Ccircle cx='400' cy='300' r='50' fill='white' opacity='0.6'/%3E%3Ctext x='400' y='500' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EMachu Picchu%3C/text%3E%3C/svg%3E",
    description: "Experience Machu Picchu, Iguazu Falls, and the vibrant culture of South America",
    duration: "12 Nights / 13 Days",
    price: "Contact for Price"
  },
  {
    title: "Mesmerizing Peru",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23009688'/%3E%3Cpath d='M200,200 L600,200 L400,500 Z' fill='%23FFD700' opacity='0.8'/%3E%3Ccircle cx='400' cy='250' r='60' fill='white' opacity='0.6'/%3E%3Ctext x='400' y='500' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3ESacred Valley%3C/text%3E%3C/svg%3E",
    description: "Ancient Incan ruins, Sacred Valley, and the colorful markets of Cusco",
    duration: "10 Nights / 11 Days",
    price: "Contact for Price"
  },
  {
    title: "Incredible Bhutan",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%234CAF50'/%3E%3Cpath d='M300,100 L500,100 L400,300 Z' fill='%23FFD700' opacity='0.8'/%3E%3Cpath d='M200,200 L600,200 L400,500 Z' fill='white' opacity='0.6'/%3E%3Ctext x='400' y='500' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3ETiger's Nest%3C/text%3E%3C/svg%3E",
    description: "Visit Tiger's Nest Monastery, experience Buddhist culture and pristine landscapes",
    duration: "4 Nights / 5 Days",
    price: "Contact for Price"
  },
  {
    title: "Exotic Koh Samui",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%2303A9F4'/%3E%3Cpath d='M0,400 Q400,350 800,400 L800,600 L0,600 Z' fill='%23FFD700' opacity='0.8'/%3E%3Ccircle cx='600' cy='150' r='60' fill='%23FFD700' opacity='0.8'/%3E%3Ctext x='400' y='500' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EBeach Paradise%3C/text%3E%3C/svg%3E",
    description: "Crystal clear waters, pristine beaches, and Thai hospitality",
    duration: "5 Nights / 6 Days",
    price: "Contact for Price"
  },
  {
    title: "Mystical Karnataka",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23FF5722'/%3E%3Cpath d='M300,100 C400,150 400,250 300,300 C400,350 400,450 300,500' fill='none' stroke='white' stroke-width='20' opacity='0.6'/%3E%3Ccircle cx='400' cy='300' r='80' fill='%23FFD700' opacity='0.4'/%3E%3Ctext x='400' y='500' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EMysore Palace%3C/text%3E%3C/svg%3E",
    description: "Ancient temples, coffee plantations, and royal palaces",
    duration: "7 Days / 6 Nights",
    price: "Contact for Price"
  },
  {
    title: "Majestic Ladakh",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23607D8B'/%3E%3Cpath d='M100,400 L300,200 L500,400 L700,200' fill='none' stroke='white' stroke-width='20' opacity='0.8'/%3E%3Ccircle cx='400' cy='250' r='60' fill='%23FFD700' opacity='0.6'/%3E%3Ctext x='400' y='500' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EPangong Lake%3C/text%3E%3C/svg%3E",
    description: "Himalayan landscapes, Buddhist monasteries, and high-altitude lakes",
    duration: "6 Nights / 7 Days",
    price: "Contact for Price"
  }
]

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

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50" aria-labelledby="destinations-title">
        <div className="container mx-auto px-4">
          <h2 id="destinations-title" className="text-4xl font-bold text-center mb-12 text-[#1a365d]">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {destinations.map((destination, index) => (
              <article key={index} role="listitem">
                <DestinationCard {...destination} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" aria-labelledby="services-title">
        <div className="container mx-auto px-4">
          <h2 id="services-title" className="text-4xl font-bold text-center mb-12 text-[#1a365d]">Our Services</h2>
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
          </div>
        </div>
      </section>
    </main>
  );
}
