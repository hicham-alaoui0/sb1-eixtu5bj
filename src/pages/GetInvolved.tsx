import React from 'react';
import { HandHeart, Building2, GraduationCap, DollarSign } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-[#2E8B57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl max-w-2xl">
            Join us in revolutionizing urban agriculture and creating a sustainable future.
          </p>
        </div>
      </div>

      {/* Ways to Get Involved */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HandHeart,
                title: 'Volunteer',
                description: 'Join our team of volunteers and help maintain our vertical farms.',
                action: 'Apply Now',
              },
              {
                icon: Building2,
                title: 'Partner With Us',
                description: 'Collaborate with us to implement vertical farming solutions.',
                action: 'Learn More',
              },
              {
                icon: GraduationCap,
                title: 'Educational Programs',
                description: 'Participate in our workshops and training sessions.',
                action: 'View Programs',
              },
              {
                icon: DollarSign,
                title: 'Support Our Mission',
                description: 'Contribute to our mission of sustainable urban agriculture.',
                action: 'Donate',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-[#2E8B57] rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <button className="px-6 py-2 bg-[#2E8B57] text-white rounded-lg hover:bg-[#3CB371] transition-colors w-full">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have questions about getting involved? We'd love to hear from you.
            </p>
          </div>

          <form className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2E8B57]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2E8B57]"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2E8B57]"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Area of Interest
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2E8B57]">
                <option>Volunteering</option>
                <option>Partnership</option>
                <option>Educational Programs</option>
                <option>Donations</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2E8B57]"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#2E8B57] text-white rounded-lg hover:bg-[#3CB371] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;