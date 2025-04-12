import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import sharp from 'sharp';

// Define image constraints
const IMAGE_CONSTRAINTS = {
  carousel: {
    width: 1920,
    height: 1080,
    maxSizeInBytes: 300 * 1024, // 300KB
    path: 'carousel'
  },
  packages: {
    width: 800,
    height: 600,
    maxSizeInBytes: 200 * 1024, // 200KB
    path: 'packages'
  },
  offers: {
    width: 800,
    height: 600,
    maxSizeInBytes: 200 * 1024, // 200KB
    path: 'offers'
  }
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const imageType = formData.get('type') as string;
    const fileName = formData.get('fileName') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    if (!imageType || !['carousel', 'packages', 'offers'].includes(imageType)) {
      return NextResponse.json({ error: 'Invalid image type' }, { status: 400 });
    }

    if (!fileName) {
      return NextResponse.json({ error: 'File name is required' }, { status: 400 });
    }

    // Validate the file extension
    const fileExtension = path.extname(fileName).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(fileExtension)) {
      return NextResponse.json({ error: 'Only JPG, PNG and WebP formats are allowed' }, { status: 400 });
    }

    // Security: Validate the file name to prevent directory traversal
    if (fileName.includes('..') || fileName.includes('/') || fileName.includes('\\')) {
      return NextResponse.json({ error: 'Invalid file name' }, { status: 400 });
    }

    // Get the file constraints
    const constraints = IMAGE_CONSTRAINTS[imageType as keyof typeof IMAGE_CONSTRAINTS];

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Check file size
    if (buffer.length > constraints.maxSizeInBytes) {
      return NextResponse.json({ 
        error: `File size exceeds maximum allowed size (${constraints.maxSizeInBytes / 1024}KB)` 
      }, { status: 400 });
    }

    // Use sharp to validate and process the image
    try {
      const image = sharp(buffer);
      const metadata = await image.metadata();

      // Check image dimensions
      if (metadata.width !== constraints.width || metadata.height !== constraints.height) {
        // Resize the image to match the required dimensions
        const resizedImage = await image
          .resize(constraints.width, constraints.height, { fit: 'fill' })
          .toBuffer();

        // Save the processed image
        const saveDir = path.join(process.cwd(), 'public', 'images', constraints.path);
        if (!existsSync(saveDir)) {
          await mkdir(saveDir, { recursive: true });
        }

        const filePath = path.join(saveDir, fileName);
        await writeFile(filePath, resizedImage);

        return NextResponse.json({ 
          success: true, 
          path: `/images/${constraints.path}/${fileName}`,
          message: 'Image was automatically resized to match required dimensions'
        });
      }

      // If image already has correct dimensions, save as is
      const saveDir = path.join(process.cwd(), 'public', 'images', constraints.path);
      if (!existsSync(saveDir)) {
        await mkdir(saveDir, { recursive: true });
      }

      const filePath = path.join(saveDir, fileName);
      await writeFile(filePath, buffer);

      return NextResponse.json({ 
        success: true, 
        path: `/images/${constraints.path}/${fileName}`
      });
    } catch (error) {
      console.error('Error processing image:', error);
      return NextResponse.json({ error: 'Invalid image file' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
} 