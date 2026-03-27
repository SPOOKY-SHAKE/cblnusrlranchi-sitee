#!/bin/bash

echo "🚀 Simple build for Cloudflare..."

# Install dependencies
bun install

# Build the app
bun run build

echo "✅ Build completed!"
echo "📁 Build directory contents:"
ls -la build/
