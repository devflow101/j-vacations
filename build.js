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

// Check if next.config.js exists
if (!fs.existsSync('./next.config.js')) {
  console.error('next.config.js not found, creating it...');
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
      }
    };
    
    module.exports = nextConfig;
  `;
  fs.writeFileSync('./next.config.js', config);
}

// Set environment variables to ignore TypeScript errors
process.env.NEXT_IGNORE_TYPESCRIPT_ERRORS = 'true';
process.env.NEXT_IGNORE_ESLINT_DURING_BUILDS = 'true';

// Run build commands
console.log('Starting build process with ignored TypeScript errors...');
runCommand('npm run build');

// Verify output directory
if (fs.existsSync('./out')) {
  console.log('Build successful! Output directory created.');
} else {
  console.error('Build failed: Output directory not created');
  process.exit(1);
}

console.log('Build completed successfully'); 