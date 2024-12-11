import React from 'react';
import { Sprout, Droplets, Sun, Wind } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: 'Sustainable Farming',
    description: 'Implementing eco-friendly farming practices that reduce environmental impact while maximizing yield.',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Advanced irrigation systems that optimize water usage and minimize waste.',
  },
  {
    icon: Sun,
    title: 'Solar Integration',
    description: 'Harnessing solar energy to power our farming operations and reduce carbon footprint.',
  },
  {
    icon: Wind,
    title: 'Climate Control',
    description: 'Smart climate monitoring systems ensuring optimal growing conditions year-round.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Innovative Urban Farming Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we're transforming urban spaces into productive and sustainable farming environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-[#2E8B57] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;