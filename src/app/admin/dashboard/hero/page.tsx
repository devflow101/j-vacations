'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AuthProvider, withAuth } from '../../../../lib/auth';
import Navbar from '../../../../components/Navbar';

// Slide interface
interface Slide {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
}

function HeroEditorContent() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const [uploadFeedback, setUploadFeedback] = useState<string | null>(null);

  // Fetch slides data
  useEffect(() => {
    async function fetchSlides() {
      try {
        const response = await fetch('/api/admin/getContent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fileName: 'heroSlides.json' }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch slides');
        }

        const data = await response.json();
        setSlides(data.data.slides);
      } catch (err) {
        setError('Error loading slides. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSlides();
  }, []);

  // Handle slide edit
  const handleInputChange = (index: number, field: keyof Slide, value: string) => {
    const updatedSlides = [...slides];
    updatedSlides[index] = {
      ...updatedSlides[index],
      [field]: value
    };
    setSlides(updatedSlides);
    
    // Clear validation error for this field if it exists
    if (validationErrors[`slide${index}-${field}`]) {
      const newErrors = {...validationErrors};
      delete newErrors[`slide${index}-${field}`];
      setValidationErrors(newErrors);
    }
  };

  // Validate a slide
  const validateSlide = (slide: Slide, index: number): boolean => {
    const errors: {[key: string]: string} = {};
    
    if (!slide.image) {
      errors[`slide${index}-image`] = 'Image is required';
    }
    
    if (!slide.title.trim()) {
      errors[`slide${index}-title`] = 'Title is required';
    }
    
    if (!slide.subtitle.trim()) {
      errors[`slide${index}-subtitle`] = 'Subtitle is required';
    } else if (slide.subtitle.length > 60) {
      errors[`slide${index}-subtitle`] = 'Subtitle must be 60 characters or less';
    }
    
    if (!slide.price.trim()) {
      errors[`slide${index}-price`] = 'Price is required';
    }
    
    if (!slide.duration.trim()) {
      errors[`slide${index}-duration`] = 'Duration is required';
    }
    
    // Update validation errors
    setValidationErrors(prev => ({...prev, ...errors}));
    
    return Object.keys(errors).length === 0;
  };

  // Add a new slide
  const addSlide = () => {
    if (slides.length >= 5) {
      setError('Maximum 5 slides allowed');
      return;
    }
    
    const newSlide: Slide = {
      image: '',
      title: '',
      subtitle: '',
      price: '',
      duration: ''
    };
    
    setSlides([...slides, newSlide]);
    setActiveSlide(slides.length);
  };

  // Remove a slide
  const removeSlide = (index: number) => {
    if (slides.length <= 1) {
      setError('At least one slide is required');
      return;
    }
    
    const updatedSlides = slides.filter((_, i) => i !== index);
    setSlides(updatedSlides);
    
    if (activeSlide === index) {
      setActiveSlide(null);
    } else if (activeSlide !== null && activeSlide > index) {
      setActiveSlide(activeSlide - 1);
    }
  };

  // Handle image upload
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Validate file type
    const fileType = file.type;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(fileType)) {
      setValidationErrors({
        ...validationErrors,
        [`slide${index}-image`]: 'Only JPG, PNG and WebP formats are allowed'
      });
      return;
    }
    
    // Create a filename with the correct extension
    const fileExtension = file.name.split('.').pop() || 'jpg';
    const fileName = `slide-${Date.now()}.${fileExtension}`;
    
    // Create FormData
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', 'carousel');
    formData.append('fileName', fileName);
    
    try {
      setUploadFeedback('Uploading and processing image...');
      
      const response = await fetch('/api/admin/uploadImage', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload image');
      }
      
      const data = await response.json();
      
      // Update slide with the new image path
      handleInputChange(index, 'image', data.path);
      
      if (data.message) {
        setUploadFeedback(data.message);
        setTimeout(() => setUploadFeedback(null), 3000);
      } else {
        setUploadFeedback('Image uploaded successfully');
        setTimeout(() => setUploadFeedback(null), 3000);
      }
    } catch (err: any) {
      setValidationErrors({
        ...validationErrors,
        [`slide${index}-image`]: err.message || 'Error uploading image'
      });
      setUploadFeedback(null);
    }
  };

  // Save slides
  const saveSlides = async () => {
    setError(null);
    setSuccess(null);
    setValidationErrors({});
    
    // Validate all slides
    let isValid = true;
    for (let i = 0; i < slides.length; i++) {
      if (!validateSlide(slides[i], i)) {
        isValid = false;
      }
    }
    
    if (!isValid) {
      setError('Please fix validation errors before saving');
      return;
    }
    
    setSaving(true);
    
    try {
      const response = await fetch('/api/admin/saveContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: 'heroSlides.json',
          content: { slides }
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save slides');
      }
      
      setSuccess('Slides saved successfully!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err: any) {
      setError(err.message || 'Error saving slides');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#1a365d]">Edit Hero Carousel</h1>
          <p className="text-gray-600 mt-1">
            Manage the slides that appear in the homepage carousel
          </p>
        </div>
        <Link href="/admin/dashboard" className="text-[#2196F3] hover:underline flex items-center">
          <span>← Back to Dashboard</span>
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">{success}</p>
            </div>
          </div>
        </div>
      )}

      {uploadFeedback && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-blue-700">{uploadFeedback}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#1a365d] mb-2">Carousel Slides ({slides.length}/5)</h2>
          <p className="text-sm text-gray-600">Click on a slide to edit its details</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative cursor-pointer border-2 rounded-md overflow-hidden ${
                activeSlide === index ? 'border-[#2196F3]' : 'border-gray-200'
              }`}
              style={{ width: '180px', height: '120px' }}
              onClick={() => setActiveSlide(index)}
            >
              {slide.image ? (
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400">
                  No Image
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm truncate">
                {slide.title || 'Untitled Slide'}
              </div>
              <div className="absolute top-0 right-0 p-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSlide(index);
                  }}
                  className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            </div>
          ))}

          {slides.length < 5 && (
            <button
              onClick={addSlide}
              className="border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center hover:border-[#2196F3] hover:bg-blue-50 transition-colors"
              style={{ width: '180px', height: '120px' }}
            >
              <span className="text-3xl text-gray-400">+</span>
            </button>
          )}
        </div>

        {activeSlide !== null && (
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-[#1a365d] mb-4">Edit Slide {activeSlide + 1}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image (1920×1080px)</label>
                  <div className="relative border border-gray-300 rounded-lg overflow-hidden" style={{ height: '200px' }}>
                    {slides[activeSlide].image ? (
                      <Image
                        src={slides[activeSlide].image}
                        alt={slides[activeSlide].title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400">
                        No Image Selected
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={(e) => handleImageUpload(e, activeSlide)}
                    className="mt-2"
                  />
                  {validationErrors[`slide${activeSlide}-image`] && (
                    <p className="text-red-500 text-xs mt-1">
                      {validationErrors[`slide${activeSlide}-image`]}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    For best results, use a 1920×1080px image in JPG or WebP format, max 300KB
                  </p>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={slides[activeSlide].title}
                    onChange={(e) => handleInputChange(activeSlide, 'title', e.target.value)}
                    className={`w-full p-2 border rounded-md ${
                      validationErrors[`slide${activeSlide}-title`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Magical Santorini"
                  />
                  {validationErrors[`slide${activeSlide}-title`] && (
                    <p className="text-red-500 text-xs mt-1">
                      {validationErrors[`slide${activeSlide}-title`]}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    Keep titles short (2-4 words) and eye-catching
                  </p>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={slides[activeSlide].subtitle}
                    onChange={(e) => handleInputChange(activeSlide, 'subtitle', e.target.value)}
                    className={`w-full p-2 border rounded-md ${
                      validationErrors[`slide${activeSlide}-subtitle`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Experience the enchanting sunsets and iconic architecture"
                    maxLength={60}
                  />
                  {validationErrors[`slide${activeSlide}-subtitle`] && (
                    <p className="text-red-500 text-xs mt-1">
                      {validationErrors[`slide${activeSlide}-subtitle`]}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    Maximum 60 characters, describe the key attraction
                  </p>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <input
                    type="text"
                    value={slides[activeSlide].price}
                    onChange={(e) => handleInputChange(activeSlide, 'price', e.target.value)}
                    className={`w-full p-2 border rounded-md ${
                      validationErrors[`slide${activeSlide}-price`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Starting from £899"
                  />
                  {validationErrors[`slide${activeSlide}-price`] && (
                    <p className="text-red-500 text-xs mt-1">
                      {validationErrors[`slide${activeSlide}-price`]}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    Always include the currency symbol (£, $, ₹, etc.)
                  </p>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <input
                    type="text"
                    value={slides[activeSlide].duration}
                    onChange={(e) => handleInputChange(activeSlide, 'duration', e.target.value)}
                    className={`w-full p-2 border rounded-md ${
                      validationErrors[`slide${activeSlide}-duration`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., 5 Nights"
                  />
                  {validationErrors[`slide${activeSlide}-duration`] && (
                    <p className="text-red-500 text-xs mt-1">
                      {validationErrors[`slide${activeSlide}-duration`]}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    Keep the format consistent (e.g., "X Nights")
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          onClick={saveSlides}
          disabled={saving}
          className={`px-6 py-2 rounded-md text-white font-medium ${
            saving ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#2196F3] hover:bg-[#1976D2]'
          }`}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}

const ProtectedHeroEditor = withAuth(HeroEditorContent);

export default function HeroEditorPage() {
  return (
    <AuthProvider>
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <ProtectedHeroEditor />
      </main>
    </AuthProvider>
  );
} 