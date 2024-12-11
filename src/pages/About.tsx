import React from 'react';
import { Users, Target, History } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-[#2E8B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About VerticalFarms</h1>
          <p className="text-xl max-w-2xl">
            Leading the revolution in urban agriculture through innovative vertical farming solutions.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-[#2E8B57]" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To transform urban food production through sustainable vertical farming, making fresh, 
                locally-grown produce accessible to communities while minimizing environmental impact.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <History className="h-6 w-6 text-[#2E8B57]" />
                <h2 className="text-2xl font-bold">Our Story</h2>
              </div>
              <p className="text-gray-600">
                Founded in 2020, VerticalFarms began with a vision to revolutionize urban agriculture. 
                Today, we operate state-of-the-art vertical farms in major cities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="h-6 w-6 text-[#2E8B57]" />
              <h2 className="text-3xl font-bold">Our Leadership Team</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind our innovative vertical farming solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Michael Rodriguez',
                role: 'Chief Technology Officer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Emma Thompson',
                role: 'Head of Sustainability',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#2E8B57]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;