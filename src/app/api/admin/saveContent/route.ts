import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Schema validation functions for different content types
const validators = {
  'heroSlides.json': validateHeroSlides,
  'travelPackages.json': validateTravelPackages,
  'specialOffers.json': validateSpecialOffers,
  'services.json': validateServices,
  'contactInfo.json': validateContactInfo,
};

// Validation for Hero Slides
function validateHeroSlides(content: any) {
  if (!content.slides || !Array.isArray(content.slides)) {
    return { valid: false, error: 'Content must include a slides array' };
  }
  
  if (content.slides.length < 1) {
    return { valid: false, error: 'At least one slide is required' };
  }
  
  if (content.slides.length > 5) {
    return { valid: false, error: 'Maximum 5 slides allowed' };
  }
  
  for (const slide of content.slides) {
    if (!slide.image || typeof slide.image !== 'string') {
      return { valid: false, error: 'Each slide must have an image path' };
    }
    
    if (!slide.title || typeof slide.title !== 'string') {
      return { valid: false, error: 'Each slide must have a title' };
    }
    
    if (!slide.subtitle || typeof slide.subtitle !== 'string') {
      return { valid: false, error: 'Each slide must have a subtitle' };
    }
    
    if (slide.subtitle.length > 60) {
      return { valid: false, error: 'Subtitle must be 60 characters or less' };
    }
    
    if (!slide.price || typeof slide.price !== 'string') {
      return { valid: false, error: 'Each slide must have a price' };
    }
    
    if (!slide.duration || typeof slide.duration !== 'string') {
      return { valid: false, error: 'Each slide must have a duration' };
    }
  }
  
  return { valid: true };
}

// Validation for Travel Packages
function validateTravelPackages(content: any) {
  if (!content.packages || !Array.isArray(content.packages)) {
    return { valid: false, error: 'Content must include a packages array' };
  }
  
  if (content.packages.length < 1) {
    return { valid: false, error: 'At least one package is required' };
  }
  
  if (content.packages.length > 6) {
    return { valid: false, error: 'Maximum 6 packages allowed' };
  }
  
  const ids = new Set();
  
  for (const pkg of content.packages) {
    if (!pkg.id || typeof pkg.id !== 'number') {
      return { valid: false, error: 'Each package must have a numeric id' };
    }
    
    if (ids.has(pkg.id)) {
      return { valid: false, error: `Duplicate package ID: ${pkg.id}` };
    }
    
    ids.add(pkg.id);
    
    if (!pkg.title || typeof pkg.title !== 'string') {
      return { valid: false, error: 'Each package must have a title' };
    }
    
    if (pkg.title.length > 30) {
      return { valid: false, error: 'Title must be 30 characters or less' };
    }
    
    if (!pkg.description || typeof pkg.description !== 'string') {
      return { valid: false, error: 'Each package must have a description' };
    }
    
    if (pkg.description.length > 100) {
      return { valid: false, error: 'Description must be 100 characters or less' };
    }
    
    if (!pkg.duration || typeof pkg.duration !== 'string') {
      return { valid: false, error: 'Each package must have a duration' };
    }
    
    if (!pkg.price || typeof pkg.price !== 'string') {
      return { valid: false, error: 'Each package must have a price' };
    }
    
    if (!pkg.image || typeof pkg.image !== 'string') {
      return { valid: false, error: 'Each package must have an image path' };
    }
    
    if (!pkg.highlights || !Array.isArray(pkg.highlights) || pkg.highlights.length < 1) {
      return { valid: false, error: 'Each package must have at least one highlight' };
    }
    
    if (!pkg.included || !Array.isArray(pkg.included) || pkg.included.length < 1) {
      return { valid: false, error: 'Each package must have at least one included item' };
    }
  }
  
  return { valid: true };
}

// Validation for Special Offers
function validateSpecialOffers(content: any) {
  if (!content.offers || !Array.isArray(content.offers)) {
    return { valid: false, error: 'Content must include an offers array' };
  }
  
  if (content.offers.length < 1) {
    return { valid: false, error: 'At least one offer is required' };
  }
  
  if (content.offers.length > 3) {
    return { valid: false, error: 'Maximum 3 offers allowed for optimal layout' };
  }
  
  for (const offer of content.offers) {
    if (!offer.title || typeof offer.title !== 'string') {
      return { valid: false, error: 'Each offer must have a title' };
    }
    
    if (!offer.image || typeof offer.image !== 'string') {
      return { valid: false, error: 'Each offer must have an image path' };
    }
    
    if (!offer.description || typeof offer.description !== 'string') {
      return { valid: false, error: 'Each offer must have a description' };
    }
    
    if (offer.description.length > 100) {
      return { valid: false, error: 'Description must be 100 characters or less' };
    }
    
    if (!offer.duration || typeof offer.duration !== 'string') {
      return { valid: false, error: 'Each offer must have a duration' };
    }
    
    if (!offer.price || typeof offer.price !== 'string') {
      return { valid: false, error: 'Each offer must have a price' };
    }
  }
  
  return { valid: true };
}

// Validation for Services
function validateServices(content: any) {
  if (!content.services || !Array.isArray(content.services)) {
    return { valid: false, error: 'Content must include a services array' };
  }
  
  if (content.services.length < 1) {
    return { valid: false, error: 'At least one service is required' };
  }
  
  // For optimal layout, should be 4 or 8 services
  if (content.services.length > 8) {
    return { valid: false, error: 'Maximum 8 services allowed' };
  }
  
  for (const service of content.services) {
    if (!service.title || typeof service.title !== 'string') {
      return { valid: false, error: 'Each service must have a title' };
    }
    
    if (!service.description || typeof service.description !== 'string') {
      return { valid: false, error: 'Each service must have a description' };
    }
    
    if (service.description.length > 60) {
      return { valid: false, error: 'Description must be 60 characters or less' };
    }
    
    if (!service.icon || typeof service.icon !== 'string') {
      return { valid: false, error: 'Each service must have an icon' };
    }
  }
  
  return { valid: true };
}

// Validation for Contact Info
function validateContactInfo(content: any) {
  if (!content.address || typeof content.address !== 'string' || content.address.trim() === '') {
    return { valid: false, error: 'Address is required' };
  }
  
  if (!content.phone || typeof content.phone !== 'string' || content.phone.trim() === '') {
    return { valid: false, error: 'Phone number is required' };
  }
  
  // Simple phone validation - should start with +
  if (!content.phone.startsWith('+')) {
    return { valid: false, error: 'Phone number should include country code (e.g., +91)' };
  }
  
  if (!content.instagram || typeof content.instagram !== 'string' || content.instagram.trim() === '') {
    return { valid: false, error: 'Instagram handle is required' };
  }
  
  if (!content.instagramLink || typeof content.instagramLink !== 'string' || content.instagramLink.trim() === '') {
    return { valid: false, error: 'Instagram link is required' };
  }
  
  // Check that Instagram link matches handle
  if (!content.instagramLink.includes(content.instagram)) {
    return { valid: false, error: 'Instagram link should contain the Instagram handle' };
  }
  
  if (!content.mapEmbedUrl || typeof content.mapEmbedUrl !== 'string' || content.mapEmbedUrl.trim() === '') {
    return { valid: false, error: 'Map embed URL is required' };
  }
  
  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    const { fileName, content } = await request.json();
    
    if (!fileName) {
      return NextResponse.json({ error: 'File name is required' }, { status: 400 });
    }

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    // Security: Validate the file name to prevent directory traversal
    const allowedFiles = [
      'heroSlides.json',
      'travelPackages.json',
      'specialOffers.json',
      'services.json',
      'contactInfo.json',
    ];

    if (!allowedFiles.includes(fileName)) {
      return NextResponse.json({ error: 'Invalid file name' }, { status: 400 });
    }

    // Validate the content structure
    const validator = validators[fileName as keyof typeof validators];
    const validation = validator(content);
    
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // Get the content directory path
    const contentDir = path.join(process.cwd(), 'src', 'content');
    const filePath = path.join(contentDir, fileName);

    // Create a backup of the current file
    if (fs.existsSync(filePath)) {
      const backupDir = path.join(process.cwd(), 'src', 'content', 'backups');
      
      // Create backups directory if it doesn't exist
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      const timestamp = new Date().toISOString().replace(/:/g, '-');
      const backupFilePath = path.join(backupDir, `${fileName}.${timestamp}.bak`);
      
      fs.copyFileSync(filePath, backupFilePath);
    }

    // Write the new content to the file
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving content:', error);
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
} 