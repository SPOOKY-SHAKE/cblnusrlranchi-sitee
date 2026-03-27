import React from 'react';
import { servicesData } from '../mockData';
import { Button } from '../components/ui/button';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesDetailPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section with Gradient */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#FDF5F0] via-white to-[#FDF5F0] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #E31E24 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#E31E24] bg-opacity-10 text-[#E31E24] rounded-full text-sm font-medium border border-[#E31E24] border-opacity-20">
              Our Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
            Our Legal <span className="text-[#E31E24]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Comprehensive legal solutions tailored to meet the unique needs of your business, from compliance audits to strategic consulting.
          </p>
        </div>
      </section>

      {/* Services Grid with Enhanced Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <Link key={service.id} to={`/service/${service.id}`}>
                <div className="group bg-gradient-to-br from-white to-[#FDF5F0] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E31E24] hover:border-opacity-30 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-block px-4 py-1 bg-[#E31E24] text-white rounded-full text-sm font-medium mb-3">
                        Service {index + 1}
                      </div>
                      <h3 className="text-3xl font-serif text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex items-center text-[#E31E24] font-medium group-hover:gap-3 gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#FDF5F0]">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E31E24] bg-opacity-10 text-[#E31E24] rounded-full text-sm font-medium border border-[#E31E24] border-opacity-20 mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-4xl font-serif text-gray-900 mb-4">Why Choose Us ??</h2>
              <p className="text-gray-600 text-lg">Experience the difference of working with dedicated legal professionals</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Industry linked legal expertise",
                "Proven track record with 1,000+ satisfied business clients",
                "Proactive seminars and frequent competitions for engagement",
                "Practical and professional tailored advices on current updates in market",
                "Comprehensive support from Incorporation to Insolvency",
                "Expert guidance in complex regulatory environments"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FDF5F0] transition-colors group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#E31E24] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
                      <CheckCircle className="w-6 h-6 text-[#E31E24]" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg flex-1">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetailPage;
