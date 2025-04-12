'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock content as this would normally come from a database or API
const contentFiles = [
  {
    id: 'heroSlides',
    name: 'Hero Carousel',
    description: 'Slides for the main carousel on the homepage',
    path: '/src/content/heroSlides.json',
    lastUpdated: new Date().toLocaleDateString(),
    editLink: '/admin/hero',
  },
  {
    id: 'travelPackages',
    name: 'Travel Packages',
    description: 'Featured travel packages displayed on the homepage',
    path: '/src/content/travelPackages.json',
    lastUpdated: new Date().toLocaleDateString(),
    editLink: '/admin/packages',
  },
  {
    id: 'specialOffers',
    name: 'Special Offers',
    description: 'Special offers and promotions',
    path: '/src/content/specialOffers.json',
    lastUpdated: new Date().toLocaleDateString(),
    editLink: '/admin/offers',
  },
  {
    id: 'services',
    name: 'Services',
    description: 'Services offered by J Vacations',
    path: '/src/content/services.json',
    lastUpdated: new Date().toLocaleDateString(),
    editLink: '/admin/services',
  },
  {
    id: 'contactInfo',
    name: 'Contact Information',
    description: 'Company contact details and map',
    path: '/src/content/contactInfo.json',
    lastUpdated: new Date().toLocaleDateString(),
    editLink: '/admin/contact',
  },
];

export default function ContentAdmin() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#1a365d]">Content Management</h1>
        <p className="text-gray-600">
          This page allows you to view and edit website content. For now, please edit the JSON files directly.
          See the <a href="/CONTENT_EDITOR_GUIDE.md" className="text-[#2196F3] hover:underline">Content Editor Guide</a> for instructions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contentFiles.map((file) => (
          <div 
            key={file.id}
            className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedFile(file.id)}
          >
            <h2 className="text-xl font-bold text-[#1a365d] mb-2">{file.name}</h2>
            <p className="text-gray-600 mb-4">{file.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Path: {file.path}</span>
              <span>Last updated: {file.lastUpdated}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-bold text-[#1a365d] mb-4">How to update content</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Locate the file you wish to edit in the <code className="bg-gray-200 px-2 py-1 rounded">src/content</code> directory</li>
          <li>Open the file with any text editor (VS Code, Notepad, etc.)</li>
          <li>Make your changes following the JSON format (see guide)</li>
          <li>Save the file</li>
          <li>Restart the development server to see your changes</li>
        </ol>
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Note: In the future, this page will have direct editing capabilities. For now, please edit the JSON files directly.
          </p>
        </div>
      </div>
    </div>
  );
} 