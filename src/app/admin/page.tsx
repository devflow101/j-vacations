'use client';

import ContentAdmin from '../../components/ContentAdmin';
import Navbar from '../../components/Navbar';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-8">
        <ContentAdmin />
      </div>
    </main>
  );
} 