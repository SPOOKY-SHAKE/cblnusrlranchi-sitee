#!/bin/bash

# Build script for Vercel
echo "Starting build process..."

# Create build directory
mkdir -p build

# Go to frontend directory
cd frontend

# Install dependencies with legacy peer deps
echo "Installing dependencies..."
npm install --legacy-peer-deps --silent

# Build the React app
echo "Building React app..."
npm run build

# Copy build files to root
echo "Copying build files..."
cp -r build/* ../build/

# Go back to root
cd ..

# Verify build
echo "Build completed! Files in build directory:"
ls -la build/

echo "✅ Build successful!"
