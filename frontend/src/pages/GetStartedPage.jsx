import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const GetStartedPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    try {
      await axios.post(`${API}/newsletter/subscribe`, { email });
      
      toast({
        title: "Subscribed Successfully!",
        description: "Welcome! Check your email for a confirmation message from cbl@nusrlranchi.ac.in",
      });
      
      setEmail('');
    } catch (error) {
      const message = error.response?.data?.detail || "Failed to subscribe. Please try again.";
      toast({
        title: "Subscription Error",
        description: message,
        variant: "destructive"
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const consultationData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: `Consultation Request - ${formData.service}`,
        message: `Company: ${formData.company}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`
      };
      
      await axios.post(`${API}/contact`, consultationData);
      
      toast({
        title: "Request Submitted Successfully!",
        description: "Thank you! Our team will contact you at " + formData.email + " shortly.",
      });
      
      setFormData({ firstName: '', lastName: '', email: '', company: '', phone: '', service: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again or email us at cbl@nusrlranchi.ac.in",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-[#FDF5F0]">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Get Started Today
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Take the first step towards expert legal guidance for your business. Join hundreds of satisfied clients who trust us with their legal needs.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-8">Why Start with Us?</h2>
              <div className="space-y-6">
                {[
                  "Comprehensive legal expertise across all business areas",
                  "Proven track record with 1,000+ successful client engagements",
                  "Personalized service tailored to your unique business needs",
                  "Proactive risk management to protect your interests",
                  "Transparent pricing with no hidden fees",
                  "Responsive team available when you need us"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#E31E24] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-[#FDF5F0] p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-700 mb-6">Stay updated with the latest legal insights and business law news.</p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                  />
                  <button 
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-[#E31E24] hover:bg-[#B81820] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-8">Request a Consultation</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                  />
                </div>
                
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                />
                
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                />
                
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                />
                
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                >
                  <option value="">Select Service Interest</option>
                  <option value="research">Research & Development</option>
                  <option value="solutions">Tailored Solutions</option>
                  <option value="compliance">Compliance Audits</option>
                  <option value="insights">Legal Insights</option>
                  <option value="general">General Inquiry</option>
                </select>
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your legal needs"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24] resize-none"
                />
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E31E24] hover:bg-[#B81820] text-white rounded-full px-8 py-6 text-base transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'REQUEST CONSULTATION'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;
