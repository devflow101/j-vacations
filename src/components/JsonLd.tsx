/**
 * JsonLd Component
 * 
 * Implements structured data for SEO using JSON-LD format.
 * This helps search engines better understand the website content
 * and can improve search results appearance.
 * 
 * Includes:
 * - Organization information
 * - Contact details
 * - Services offered
 * - Social media profiles
 * 
 * @component
 * @example
 * ```tsx
 * // In _app.tsx or layout.tsx
 * <JsonLd />
 * ```
 * 
 * @see https://schema.org/TravelAgency
 */
export default function JsonLd() {
  // Structured data following Schema.org specifications
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "J Vacations",
    "slogan": "Forever Tourism",
    "description": "Experience luxury travel with J Vacations. Book international flights, hotels, guided tours, and travel insurance.",
    "url": "https://j-vacations.com",
    "logo": "https://j-vacations.com/images/logo.png",
    "telephone": "+91 77078 12574",
    "sameAs": [
      "https://www.instagram.com/j_vacations2023"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Flight Bookings",
          "description": "International and domestic flight reservations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hotel Bookings",
          "description": "Luxury accommodations worldwide"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Guided Tours",
          "description": "Expert local guides and custom itineraries"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Travel Insurance",
          "description": "Comprehensive travel protection"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 