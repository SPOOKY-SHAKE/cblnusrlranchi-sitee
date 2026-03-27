import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../mockData';
import { Calendar, User, Mail, ArrowRight } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const BlogPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    try {
      await axios.post(`${API}/newsletter/subscribe`, { email });
      
      toast({
        title: "Subscribed Successfully!",
        description: "Welcome! Check your email for a confirmation from cbl@nusrlranchi.ac.in",
      });
      
      setEmail('');
    } catch (error) {
      const message = error.response?.data?.detail || "Failed to subscribe.";
      toast({
        title: "Subscription Error",
        description: message,
        variant: "destructive"
      });
    } finally {
      setIsSubscribing(false);
    }
  };

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
              Legal Insights & Updates
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
            Business Law <span className="text-[#E31E24]">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Explore a wealth of knowledge in business law through our blogs, research, and events designed to empower entrepreneurs and businesses alike.
          </p>
        </div>
      </section>

      {/* Newsletter Section with Enhanced Design */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="relative bg-gradient-to-br from-[#FDF5F0] to-white rounded-3xl p-12 shadow-2xl border border-gray-100 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E31E24] opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C4A574] opacity-5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-[#E31E24] bg-opacity-10 rounded-2xl flex items-center justify-center transform rotate-3">
                  <Mail className="w-8 h-8 text-[#E31E24]" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 text-center">
                Stay Informed with Our <span className="text-[#E31E24]">Newsletter</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
                Get the latest legal insights, regulatory updates, and business law news delivered directly to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative group">
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#E31E24] focus:outline-none transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubscribing}
                    className="group bg-[#E31E24] hover:bg-[#B81820] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium whitespace-nowrap">
                    {isSubscribing ? (
                      'Subscribing...'
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Join 500+ legal professionals and business owners
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#FDF5F0]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">What You'll Receive</h2>
            <p className="text-gray-600 text-lg">Exclusive insights delivered to your inbox</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Weekly Updates",
                description: "Stay ahead with the latest legal news and regulatory changes affecting your business.",
                icon: "📰"
              },
              {
                title: "Expert Analysis",
                description: "In-depth articles and insights from experienced legal professionals and industry experts.",
                icon: "🎓"
              },
              {
                title: "Event Invitations",
                description: "Exclusive access to webinars, workshops, and networking events in business law.",
                icon: "📅"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E31E24] hover:border-opacity-30 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-serif text-gray-900 mb-3 group-hover:text-[#E31E24] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
