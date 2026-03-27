import React from 'react';
import { testimonialsData } from '../mockData';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-[#FDF5F0]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-12 text-left">What Experts Say About Us

        </h2>
        
        <div className="space-y-8">
          {testimonialsData.map((testimonial) =>
          <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-6">
                <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover" />

                
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) =>
                  <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                  )}
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed italic">
                    {testimonial.text}
                  </p>
                  
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;