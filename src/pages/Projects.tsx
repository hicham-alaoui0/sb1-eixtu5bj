import React from 'react';
import { MapPin, Users, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Downtown Vertical Garden',
    location: 'New York City',
    image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'A 20-story vertical farm producing fresh vegetables in the heart of Manhattan.',
    team: '45 members',
    date: 'Established 2021',
  },
  {
    title: 'Tech Hub Farm',
    location: 'San Francisco',
    image: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Smart vertical farming integrated with AI and IoT technology.',
    team: '32 members',
    date: 'Established 2022',
  },
  {
    title: 'Urban Oasis',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Sustainable vertical farming system with rainwater harvesting.',
    team: '28 members',
    date: 'Established 2022',
  },
  {
    title: 'Future Farm Tokyo',
    location: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Advanced vertical farming facility utilizing space-efficient technologies.',
    team: '40 members',
    date: 'Established 2023',
  },
];

const Projects = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-[#2E8B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-2xl">
            Discover our innovative vertical farming installations around the world.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-[#2E8B57]">
                      <MapPin className="h-5 w-5 mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-[#2E8B57]">
                      <Users className="h-5 w-5 mr-1" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center text-[#2E8B57]">
                      <Calendar className="h-5 w-5 mr-1" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <button className="px-6 py-2 bg-[#2E8B57] text-white rounded-lg hover:bg-[#3CB371] transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;