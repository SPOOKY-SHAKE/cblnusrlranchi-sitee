#!/bin/bash

echo "🚀 Building static site without npm conflicts..."

# Create build directory
mkdir -p build

# Copy static files directly
cp -r frontend/public/* build/

# Create index.html with inline JS/CSS (no build step needed)
cat > build/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>CENTER FOR BUSINESS LAW</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet">
</head>
<body class="min-h-screen">
    <div id="root">
        <div class="flex items-center justify-center min-h-screen">
            <div class="text-center">
                <h1 class="text-4xl font-bold mb-4">CENTER FOR BUSINESS LAW</h1>
                <p class="text-xl mb-8">NUSRL Ranchi</p>
                <div class="space-y-4">
                    <a href="/about" class="block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">About Us</a>
                    <a href="/services" class="block px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">Services</a>
                    <a href="/blog" class="block px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700">Blog</a>
                    <a href="/contact" class="block px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700">Contact</a>
                </div>
            </div>
        </div>
    </div>
    <script>
        // Simple client-side routing
        const routes = {
            '/': 'home',
            '/about': 'about',
            '/services': 'services',
            '/blog': 'blog',
            '/contact': 'contact'
        };
        
        // Handle navigation
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('/')) {
                e.preventDefault();
                const path = e.target.getAttribute('href');
                window.history.pushState({}, '', path);
                // Here you would typically render different content
                document.getElementById('root').innerHTML = `
                    <div class="flex items-center justify-center min-h-screen">
                        <div class="text-center">
                            <h1 class="text-4xl font-bold mb-4">${routes[path] || 'Page'} Page</h1>
                            <a href="/" class="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700">Back Home</a>
                        </div>
                    </div>
                `;
            }
        });
    </script>
</body>
</html>
EOF

echo "✅ Static build completed!"
echo "📁 Files in build directory:"
ls -la build/
