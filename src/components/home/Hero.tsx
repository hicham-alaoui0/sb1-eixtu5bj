import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ParallaxBanner } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <ParallaxBanner
        layers={[
          {
            image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            speed: -20,
          },
        ]}
        className="min-h-screen"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E8B57]/90 to-[#2F4F4F]/80" />
        
        <div className="relative min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-4"
            >
              <Building2 className="h-6 w-6" />
              <span className="text-lg font-medium">Welcome to VerticalFarms</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Growing Up:<br />
              <span className="text-[#FFD700]">The Future of Urban Agriculture</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl max-w-2xl mb-8 text-gray-100"
            >
              Revolutionizing food production with cutting-edge vertical farming technology in the heart of urban environments.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link
                to="/about"
                className="group px-8 py-3 bg-gradient-to-r from-[#2E8B57] to-[#3CB371] text-white rounded-lg border-2 border-white/20 hover:border-white/40 transition-all flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
              <Link
                to="/get-involved"
                className="group px-8 py-3 bg-white text-[#2E8B57] rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">Get Involved</span>
                <motion.div
                  className="absolute inset-0 bg-gray-200"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Hero;