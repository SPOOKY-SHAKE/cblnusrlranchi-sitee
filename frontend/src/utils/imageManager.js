// Custom hook to manage images from localStorage
import { useState, useEffect } from 'react';

export const useCustomImage = (category, index = null) => {
  const getStoredImage = () => {
    if (index !== null) {
      const stored = localStorage.getItem(`custom_${category}_${index}`);
      return stored;
    }
    return localStorage.getItem(`custom_${category}`);
  };

  const [customImage, setCustomImage] = useState(getStoredImage());

  useEffect(() => {
    const handleStorageChange = () => {
      setCustomImage(getStoredImage());
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('imageUpdated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('imageUpdated', handleStorageChange);
    };
  }, [category, index]);

  return customImage;
};

// Utility function to get image with fallback
export const getImage = (defaultImage, category, index = null) => {
  if (index !== null) {
    const stored = localStorage.getItem(`custom_${category}_${index}`);
    return stored || defaultImage;
  }
  const stored = localStorage.getItem(`custom_${category}`);
  return stored || defaultImage;
};

// Event to trigger when image is updated
export const triggerImageUpdate = () => {
  window.dispatchEvent(new Event('imageUpdated'));
};
