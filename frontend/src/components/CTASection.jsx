import React from 'react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-3xl text-left">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">Join Us Today for Expert Insights !!

        </h2>
        
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#E31E24] rounded-lg flex items-center justify-center">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default CTASection;