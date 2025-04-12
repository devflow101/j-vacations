import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { fileName } = await request.json();
    
    if (!fileName) {
      return NextResponse.json({ error: 'File name is required' }, { status: 400 });
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

    // Get the content directory path
    const contentDir = path.join(process.cwd(), 'src', 'content');
    const filePath = path.join(contentDir, fileName);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Read the file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    try {
      const data = JSON.parse(fileContent);
      return NextResponse.json({ data });
    } catch (error) {
      return NextResponse.json({ error: 'Invalid JSON format' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
} 