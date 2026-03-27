import React, { useState, useEffect } from 'react';
import { Upload, X, Image as ImageIcon, Settings, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { servicesData, testimonialsData, blogData, teamData } from '../mockData';

const DevAdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('images');
  const [refreshKey, setRefreshKey] = useState(0);

  // Initialize images from current data
  const [imageMapping, setImageMapping] = useState({});

  useEffect(() => {
    // Load any saved images from localStorage on mount
    const loadSavedImages = () => {
      const mapping = {};
      
      // Load service images
      servicesData.forEach((_, idx) => {
        const saved = localStorage.getItem(`custom_services_${idx}`);
        if (saved) mapping[`services_${idx}`] = saved;
      });
      
      // Load blog images
      blogData.forEach((_, idx) => {
        const saved = localStorage.getItem(`custom_blog_${idx}`);
        if (saved) mapping[`blog_${idx}`] = saved;
      });
      
      // Load team images
      teamData.forEach((_, idx) => {
        const saved = localStorage.getItem(`custom_team_${idx}`);
        if (saved) mapping[`team_${idx}`] = saved;
      });
      
      // Load testimonial images
      testimonialsData.forEach((_, idx) => {
        const saved = localStorage.getItem(`custom_testimonials_${idx}`);
        if (saved) mapping[`testimonials_${idx}`] = saved;
      });
      
      setImageMapping(mapping);
    };
    
    loadSavedImages();
  }, [refreshKey]);

  const handleImageUpload = (category, index) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newImageUrl = event.target.result;
          
          // Save to localStorage
          localStorage.setItem(`custom_${category}_${index}`, newImageUrl);
          
          // Update the mapping
          setImageMapping(prev => ({
            ...prev,
            [`${category}_${index}`]: newImageUrl
          }));
          
          // Force reload the page to show changes
          window.location.reload();
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleFaviconUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newImageUrl = event.target.result;
          
          // Update favicon
          let link = document.querySelector("link[rel~='icon']");
          if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
          }
          link.href = newImageUrl;
          
          // Save to localStorage
          localStorage.setItem('customFavicon', newImageUrl);
          
          alert('Favicon updated! It may take a moment to reflect in your browser tab.');
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const getImageUrl = (category, index, defaultUrl) => {
    const key = `${category}_${index}`;
    return imageMapping[key] || defaultUrl;
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-[9999] bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        title="Open Dev Admin Panel"
        style={{ zIndex: 9999 }}
      >
        <Settings className="w-6 h-6 animate-spin-slow" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              🛠️ Dev Admin Panel - Image Manager
            </h2>
            <p className="text-purple-100 text-sm mt-1">Upload images to replace any photo on your website</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="hover:bg-purple-800 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b bg-gray-50">
          <button
            onClick={() => setActiveTab('images')}
            className={`px-8 py-4 font-medium transition-all ${
              activeTab === 'images' 
                ? 'border-b-2 border-purple-600 text-purple-600 bg-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ImageIcon className="w-4 h-4 inline mr-2" />
            Site Images
          </button>
          <button
            onClick={() => setActiveTab('favicon')}
            className={`px-8 py-4 font-medium transition-all ${
              activeTab === 'favicon' 
                ? 'border-b-2 border-purple-600 text-purple-600 bg-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Upload className="w-4 h-4 inline mr-2" />
            Favicon
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
          {activeTab === 'favicon' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6">
                <h3 className="font-bold text-yellow-800 mb-3 text-lg">📌 Upload Custom Favicon</h3>
                <p className="text-sm text-yellow-700 mb-4">
                  Upload a custom favicon (browser tab icon). Recommended size: 32x32 or 64x64 pixels.
                </p>
                
                <Button
                  onClick={handleFaviconUpload}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Favicon
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="space-y-10">
              {/* Services Images */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  📋 Service Images <span className="text-sm font-normal text-gray-500">(5 images)</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {servicesData.map((service, idx) => (
                    <div key={idx} className="relative group">
                      <img 
                        src={getImageUrl('services', idx, service.image)} 
                        alt={`Service ${idx + 1}`} 
                        className="w-full h-32 object-cover rounded-lg shadow-md"
                      />
                      <button
                        onClick={() => handleImageUpload('services', idx)}
                        className="absolute inset-0 bg-purple-600 bg-opacity-0 hover:bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center rounded-lg"
                      >
                        <Upload className="w-8 h-8 mb-2" />
                        <span className="text-sm font-medium">Upload</span>
                      </button>
                      <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold shadow">
                        #{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blog Images */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  📰 Blog Post Images <span className="text-sm font-normal text-gray-500">(6 images)</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {blogData.map((blog, idx) => (
                    <div key={idx} className="relative group">
                      <img 
                        src={getImageUrl('blog', idx, blog.image)} 
                        alt={`Blog ${idx + 1}`} 
                        className="w-full h-32 object-cover rounded-lg shadow-md"
                      />
                      <button
                        onClick={() => handleImageUpload('blog', idx)}
                        className="absolute inset-0 bg-purple-600 bg-opacity-0 hover:bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center rounded-lg"
                      >
                        <Upload className="w-8 h-8 mb-2" />
                        <span className="text-sm font-medium">Upload</span>
                      </button>
                      <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold shadow">
                        #{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Images */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  👥 Team Member Images <span className="text-sm font-normal text-gray-500">(3 images)</span>
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  {teamData.map((member, idx) => (
                    <div key={idx} className="text-center">
                      <div className="relative group inline-block">
                        <img 
                          src={getImageUrl('team', idx, member.image)} 
                          alt={member.name} 
                          className="w-40 h-40 object-cover rounded-full shadow-lg mx-auto"
                        />
                        <button
                          onClick={() => handleImageUpload('team', idx)}
                          className="absolute inset-0 bg-purple-600 bg-opacity-0 hover:bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center rounded-full"
                        >
                          <Upload className="w-8 h-8 mb-2" />
                          <span className="text-sm font-medium">Upload</span>
                        </button>
                        <span className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                          #{idx + 1}
                        </span>
                      </div>
                      <p className="mt-3 font-medium text-gray-700">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials Images */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  💬 Testimonial Images <span className="text-sm font-normal text-gray-500">(2 images)</span>
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {testimonialsData.map((testimonial, idx) => (
                    <div key={idx} className="text-center">
                      <div className="relative group inline-block">
                        <img 
                          src={getImageUrl('testimonials', idx, testimonial.image)} 
                          alt={testimonial.name} 
                          className="w-40 h-40 object-cover rounded-full shadow-lg mx-auto"
                        />
                        <button
                          onClick={() => handleImageUpload('testimonials', idx)}
                          className="absolute inset-0 bg-purple-600 bg-opacity-0 hover:bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center rounded-full"
                        >
                          <Upload className="w-8 h-8 mb-2" />
                          <span className="text-sm font-medium">Upload</span>
                        </button>
                        <span className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                          #{idx + 1}
                        </span>
                      </div>
                      <p className="mt-3 font-medium text-gray-700">{testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-t-2 border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              <span>💡 <strong>Tip:</strong> Click any image to upload a replacement. Page will auto-reload to show changes.</span>
            </p>
            <button
              onClick={() => {
                if (window.confirm('Clear all custom images and restore defaults?')) {
                  localStorage.clear();
                  window.location.reload();
                }
              }}
              className="text-sm text-red-600 hover:text-red-700 font-medium hover:underline"
            >
              Reset All Images
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevAdminPanel;
