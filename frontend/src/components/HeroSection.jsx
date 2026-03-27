import React from 'react';
import { Button } from './ui/button';
import { statsData } from '../mockData';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6 bg-[#FDF5F0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <img
          src="https://images.pexels.com/photos/7841462/pexels-photo-7841462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Business Law Background"
          className="w-full h-full object-cover blur-sm" />

      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="!font-['Times_New_Roman'] !font-medium !text-8xl !text-center mb-8 text-gray-900">WE RESEARCH  ,     SO YOU KEEP UPDATED 

          </h1>
          
          <div className="space-y-6 mb-8 text-gray-700 leading-relaxed">
            <p>The Center for Business Law in National University of Study and Research in Law, Ranchi serves as a premier hub for seeking insights in business law and offering extensive resources, research and events tailored for today's professional.

            </p>
            
            <p>We research on business laws, compliance audits, and insights on taxation& trade law, establishing trust through professional guidance and thought leadership shaped by industry recognition.

            </p>
            
            <p>Join us with passion for law, cultivation of knowledge and to shapes future leaders.

            </p>
          </div>
          
          <Button
            className="bg-[#E31E24] hover:bg-[#B81820] text-white rounded-full px-8 py-6 text-base transition-all duration-300 shadow-lg hover:shadow-xl">

            LEARN MORE
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          {statsData.map((stat, index) =>
          <div key={index} className="text-left">
              <div className="text-xs text-gray-600 uppercase tracking-wider mb-2">{stat.label}</div>
              <div className="text-2xl font-light text-gray-400">{stat.value}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default HeroSection;