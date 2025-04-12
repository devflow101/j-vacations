import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "J Vacations - Luxury Travel & Tours | Forever Tourism",
    template: "%s | J Vacations"
  },
  description: "Experience luxury travel with J Vacations. Book international flights, hotels, guided tours, and travel insurance. Explore destinations like South America, Peru, Bhutan, and more.",
  keywords: ["luxury travel", "flight bookings", "hotel reservations", "guided tours", "travel insurance", "South America tours", "Bhutan tours", "Peru travel", "Koh Samui packages", "Karnataka tourism", "Ladakh adventures"],
  authors: [{ name: "J Vacations" }],
  creator: "J Vacations",
  publisher: "J Vacations",
  formatDetection: {
    telephone: true,
    email: true,
  },
  metadataBase: new URL('https://j-vacations.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "J Vacations - Luxury Travel & Tours",
    description: "Experience luxury travel with J Vacations. Book international flights, hotels, guided tours, and travel insurance.",
    url: 'https://j-vacations.com',
    siteName: 'J Vacations',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'J Vacations Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J Vacations - Luxury Travel & Tours',
    description: 'Experience luxury travel with J Vacations. Book international flights, hotels, guided tours, and travel insurance.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="theme-color" content="#2196F3" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <JsonLd />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  );
}
