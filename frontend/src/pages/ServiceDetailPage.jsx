import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../mockData';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="pt-24 min-h-screen bg-[#FDF5F0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button className="bg-[#E31E24] hover:bg-[#B81820] text-white rounded-full px-6 py-3">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#FDF5F0]">
        <div className="container mx-auto max-w-5xl">
          <Link to="/services" className="inline-flex items-center text-[#E31E24] hover:text-[#B81820] mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6">
        <div className="container mx-auto max-w-5xl">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-6">What We Offer</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our {service.title.toLowerCase()} services are designed to provide comprehensive support 
                for your business needs. We combine industry expertise with innovative approaches to deliver 
                exceptional results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With years of experience and a proven track record, we understand the unique challenges 
                faced by modern businesses. Our team is dedicated to providing personalized solutions that 
                drive success and ensure compliance.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-6">Key Benefits</h2>
              <div className="space-y-4">
                {[
                  'Expert guidance from experienced professionals',
                  'Customized solutions tailored to your needs',
                  'Proactive risk management strategies',
                  'Comprehensive compliance support',
                  'Ongoing consultation and support',
                  'Cost-effective and efficient service delivery'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#E31E24] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-[#FDF5F0]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif text-gray-900 mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'We begin by understanding your specific needs and challenges' },
              { step: '02', title: 'Analysis & Planning', desc: 'Our team develops a customized strategy for your situation' },
              { step: '03', title: 'Implementation', desc: 'We execute the plan with precision and attention to detail' },
              { step: '04', title: 'Ongoing Support', desc: 'Continuous monitoring and support to ensure success' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#E31E24] mb-4 opacity-20">{item.step}</div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact us today to learn more about how our {service.title.toLowerCase()} can benefit your business.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#E31E24] hover:bg-[#B81820] text-white rounded-full px-8 py-6 text-base">
                Contact Us
              </Button>
            </Link>
            <Link to="/get-started">
              <Button variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full px-8 py-6 text-base">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;