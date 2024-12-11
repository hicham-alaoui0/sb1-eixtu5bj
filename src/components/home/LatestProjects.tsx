import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Downtown Vertical Garden',
    location: 'New York City',
    image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'A 20-story vertical farm producing fresh vegetables in the heart of Manhattan.'
  },
  {
    title: 'Tech Hub Farm',
    location: 'San Francisco',
    image: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Smart vertical farming integrated with AI and IoT technology.'
  },
  {
    title: 'Urban Oasis',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Sustainable vertical farming system with rainwater harvesting.'
  }
];

const LatestProjects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our most recent vertical farming installations around the world
            </p>
          </div>
          <Link
            to="/projects"
            className="hidden md:flex items-center text-[#2E8B57] hover:text-[#3CB371] transition-colors"
          >
            View all projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#2E8B57] mb-3">
                  {project.location}
                </p>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <Link
                  to={`/projects`}
                  className="text-[#2E8B57] hover:text-[#3CB371] transition-colors flex items-center"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center text-[#2E8B57] hover:text-[#3CB371] transition-colors"
          >
            View all projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;