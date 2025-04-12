#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

// Function to execute commands with proper logging
function runCommand(command) {
  console.log(`Running: ${command}`);
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing ${command}:`);
    console.error(error.message);
    process.exit(1);
  }
}

// Display Node and NPM versions
console.log(`Node version: ${process.version}`);
console.log(`NPM version: ${execSync('npm --version').toString().trim()}`);

// Create or verify config files
console.log('Checking and creating necessary config files...');

// Check if next.config.js exists
if (!fs.existsSync('./next.config.js')) {
  console.log('Creating next.config.js...');
  const config = `
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      output: 'export',
      images: {
        unoptimized: true,
      },
      trailingSlash: true,
      typescript: {
        ignoreBuildErrors: true
      },
      eslint: {
        ignoreDuringBuilds: true
      },
      swcMinify: true
    };
    
    module.exports = nextConfig;
  `;
  fs.writeFileSync('./next.config.js', config);
}

// Check if tailwind config exists
if (!fs.existsSync('./tailwind.config.js')) {
  console.log('Creating tailwind.config.js...');
  const tailwindConfig = `
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            'primary': '#2196F3',
            'primary-dark': '#1a365d',
          }
        },
      },
      plugins: [],
    }
  `;
  fs.writeFileSync('./tailwind.config.js', tailwindConfig);
}

// Set environment variables for build
console.log('Setting environment variables for optimal build...');
process.env.NEXT_IGNORE_TYPESCRIPT_ERRORS = 'true';
process.env.NEXT_IGNORE_ESLINT_DURING_BUILDS = 'true';
process.env.NODE_ENV = 'production';
process.env.TAILWIND_MODE = 'build';
process.env.NETLIFY_NEXT_PLUGIN_SKIP = 'true';

// Run build commands
console.log('Starting optimized build process...');
runCommand('npm run build');

// Verify output directory
if (fs.existsSync('./out')) {
  console.log('Build successful! Output directory created.');
  
  // Log output stats
  const outDirSize = calculateDirSize('./out');
  console.log(`Output directory size: ${(outDirSize / 1024 / 1024).toFixed(2)} MB`);
  
  const fileCount = countFiles('./out');
  console.log(`Total files generated: ${fileCount}`);
} else {
  console.error('Build failed: Output directory not created');
  process.exit(1);
}

console.log('Build completed successfully');

// Helper function to calculate directory size
function calculateDirSize(dirPath) {
  let totalSize = 0;
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const item of items) {
    const itemPath = `${dirPath}/${item.name}`;
    if (item.isDirectory()) {
      totalSize += calculateDirSize(itemPath);
    } else {
      totalSize += fs.statSync(itemPath).size;
    }
  }
  
  return totalSize;
}

// Helper function to count files
function countFiles(dirPath) {
  let count = 0;
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const item of items) {
    const itemPath = `${dirPath}/${item.name}`;
    if (item.isDirectory()) {
      count += countFiles(itemPath);
    } else {
      count++;
    }
  }
  
  return count;
} 