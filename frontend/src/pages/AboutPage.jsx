import React from 'react';
import { teamData } from '../mockData';
import { Award, Target, Users, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section with Gradient */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#FDF5F0] via-white to-[#FDF5F0] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #E31E24 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#E31E24] bg-opacity-10 text-[#E31E24] rounded-full text-sm font-medium border border-[#E31E24] border-opacity-20">
              About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
            About <span className="text-[#E31E24]">CENTER FOR BUSINESS LAW</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Premier Law Institution dedicated to empower business minds and layperson to understand Legal jargon through expert legal guidance, comprehensive research and trusted advisory services since our founding.
          </p>
        </div>
      </section>

      {/* Mission, Values, Approach Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white to-[#FDF5F0] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E31E24] hover:border-opacity-30 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#E31E24] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-[#E31E24]" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">MISSION</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Simplify and guide through complex legal issues and contemporary events for business owners by offering achievable solutions and proactive counselling.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-white to-[#FDF5F0] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E31E24] hover:border-opacity-30 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#E31E24] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-[#E31E24]" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">VALUES</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Excellence, integrity and innovation guide everything we do, ensuring the highest standards of legal service.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-white to-[#FDF5F0] p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E31E24] hover:border-opacity-30 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#E31E24] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-[#E31E24]" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">APPROACH</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                We combine over industry expertise with creative problem-solving techniques to prevent disputes and promote over development in the legal domain of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Enhanced Design */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#FDF5F0]">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-[#E31E24] rounded-full"></div>
              <h2 className="text-4xl font-serif text-gray-900">Our Story</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>Center for Business Law was founded with aim to provide small businesses and entrepreneurs with the same caliber of legal expertise typically reserved for large corporations. And slowly gaining traction to actually implement the thought process.

              </p>
              <p>Throughout our history, we've successfully completed 10+ projects, facilitated 100+ environmental research and developed operating methods-intellectual value. These milestones reflect our commitment to not just legal excellence, but to the success and longevity of the integrity we serve.

              </p>
              <p>Today; we continue to innovate and adapt, staying ahead of regulatory changes and understanding market dynamics to provide with forward-thinking legal strategies that drive business growth and protect the interests.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Enhanced Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#E31E24] bg-opacity-10 text-[#E31E24] rounded-full text-sm font-medium border border-[#E31E24] border-opacity-20">
                Our Leadership
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">Experienced professionals dedicated to your success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {teamData.map((member) =>
            <div key={member.id} className="group">
                <div className="bg-gradient-to-br from-white to-[#FDF5F0] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E31E24] hover:border-opacity-30 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-[#E31E24] group-hover:ring-opacity-30 transition-all">
                      <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />

                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-[#E31E24] transition-colors">{member.name}</h3>
                    <p className="text-sm text-[#E31E24] font-medium mb-4">{member.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

};

export default AboutPage;