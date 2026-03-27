import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-[#FDF5F0] border-t border-[#E8D5C4]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_wp-staging-build/artifacts/w8z0cn39_Screenshot%202026-03-05%20102536.png"
              alt="Center for Business Laws Logo"
              className="h-16 w-auto"
            />
          </Link>
          
          <nav className="flex flex-wrap gap-6">
            <Link to="/" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">About</Link>
            <Link to="/services" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Services</Link>
            <Link to="/blog" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Blog</Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Contact</Link>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#E8D5C4] text-center">
          <p className="text-sm text-gray-600">
            Copyright © {currentYear} CENTER FOR BUSINESS LAW
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
