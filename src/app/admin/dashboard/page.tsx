'use client';

import React from 'react';
import Link from 'next/link';
import { AuthProvider, useAuth, withAuth } from '../../../lib/auth';
import Navbar from '../../../components/Navbar';

// Content section definitions
const contentSections = [
  {
    id: 'hero',
    name: 'Hero Carousel',
    description: 'Edit the main carousel slides on the homepage',
    icon: '🖼️',
    path: '/admin/dashboard/hero',
    jsonFile: 'heroSlides.json'
  },
  {
    id: 'packages',
    name: 'Travel Packages',
    description: 'Edit featured travel packages',
    icon: '✈️',
    path: '/admin/dashboard/packages',
    jsonFile: 'travelPackages.json'
  },
  {
    id: 'offers',
    name: 'Special Offers',
    description: 'Edit special offers and promotions',
    icon: '🏷️',
    path: '/admin/dashboard/offers',
    jsonFile: 'specialOffers.json'
  },
  {
    id: 'services',
    name: 'Services',
    description: 'Edit services offered by J Vacations',
    icon: '🧩',
    path: '/admin/dashboard/services',
    jsonFile: 'services.json'
  },
  {
    id: 'contact',
    name: 'Contact Information',
    description: 'Edit company contact details',
    icon: '📞',
    path: '/admin/dashboard/contact',
    jsonFile: 'contactInfo.json'
  }
];

function DashboardContent() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/admin';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#1a365d]">Content Management Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors text-gray-800"
        >
          Logout
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-[#1a365d] mb-4">Welcome to the J Vacations Content Management System</h2>
        <p className="text-gray-600 mb-4">
          Use this dashboard to edit website content. Select a section below to get started.
        </p>
        <p className="text-gray-600">
          All changes you make will be immediately visible on the website.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentSections.map((section) => (
          <Link 
            key={section.id}
            href={section.path}
            className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg p-6 flex flex-col group"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3 group-hover:scale-110 transition-transform">
                {section.icon}
              </span>
              <h2 className="text-xl font-bold text-[#1a365d]">{section.name}</h2>
            </div>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <div className="mt-auto text-sm text-gray-500">
              Source file: <code className="bg-gray-100 px-1 py-0.5 rounded">{section.jsonFile}</code>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
              <span className="text-[#2196F3] font-medium group-hover:underline">
                Edit Content →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Need Help?</h2>
        <p className="text-blue-800 mb-4">
          For detailed guidance on content formatting and image requirements, refer to the content editor guide.
        </p>
        <div>
          <a 
            href="/CONTENT_EDITOR_GUIDE.md" 
            target="_blank" 
            className="inline-flex items-center text-blue-700 bg-blue-100 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
          >
            <span className="mr-2">📄</span>
            View Content Editor Guide
          </a>
        </div>
      </div>
    </div>
  );
}

const ProtectedDashboardContent = withAuth(DashboardContent);

export default function DashboardPage() {
  return (
    <AuthProvider>
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <ProtectedDashboardContent />
      </main>
    </AuthProvider>
  );
} 