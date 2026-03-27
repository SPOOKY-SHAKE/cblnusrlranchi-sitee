import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon."
      });

      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly at cbl@nusrlranchi.ac.in",
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
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Have questions about our services? We're here to help. Reach out to our team for expert legal guidance.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E31E24] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="!font-['Georgia'] !font-normal !text-base mb-1 text-gray-900">


National University of Study and Research in Law 
LOCATED AT : Nagri, PO: Bukru, PS: Kanke-Pithoria Road, Kanke, Ranchi (Jharkhand) Pin – 834006</h3>
                    <p className="text-gray-600"><br /><br /></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E31E24] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                    <p className="!font-['Georgia'] !text-lg !text-center !text-[#000000]">FACULTY CONVENOR   : 00000 00000 STUDENT CONVENER: 88006 23704</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E31E24] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="!font-['Times_New_Roman'] !text-lg !text-[#000000]">cbl@nusrlranchi.ac.in</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-serif text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="!font-['Times_New_Roman']">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="!font-['Times_New_Roman']">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="!font-['Times_New_Roman']">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]" />

                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]" />

                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]" />

                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]" />

                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24] resize-none" />

                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E31E24] hover:bg-[#B81820] text-white rounded-full px-8 py-6 text-base transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">

                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default ContactPage;