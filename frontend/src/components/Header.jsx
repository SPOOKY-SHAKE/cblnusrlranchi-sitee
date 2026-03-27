import React from 'react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FDF5F0] z-50 border-b border-[#E8D5C4]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://customer-assets.emergentagent.com/job_wp-staging-build/artifacts/w8z0cn39_Screenshot%202026-03-05%20102536.png"
            alt="Center for Business Laws Logo"
            className="h-16 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm ${isActive('/') ? 'text-[#E31E24] font-medium' : 'text-gray-600 hover:text-[#E31E24]'} transition-colors`}>Home</Link>
          <Link to="/about" className={`text-sm ${isActive('/about') ? 'text-[#E31E24] font-medium' : 'text-gray-600 hover:text-[#E31E24]'} transition-colors`}>About</Link>
          <Link to="/services" className={`text-sm ${isActive('/services') ? 'text-[#E31E24] font-medium' : 'text-gray-600 hover:text-[#E31E24]'} transition-colors`}>Services</Link>
          <Link to="/blog" className={`text-sm ${isActive('/blog') ? 'text-[#E31E24] font-medium' : 'text-gray-600 hover:text-[#E31E24]'} transition-colors`}>Blog</Link>
          <Link to="/contact" className={`text-sm ${isActive('/contact') ? 'text-[#E31E24] font-medium' : 'text-gray-600 hover:text-[#E31E24]'} transition-colors`}>Contact</Link>
        </nav>
        
        <Link to="/get-started">
          <Button
            variant="outline"
            className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full px-6">

            GET STARTED
          </Button>
        </Link>
      </div>
    </header>);

};

export default Header;