import React from 'react';
import { Droplets, Leaf, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const impactStats = [
  {
    icon: Sprout,
    value: '350,000+',
    label: 'Plants Growing',
    description: 'Across our vertical farming facilities'
  },
  {
    icon: Droplets,
    value: '95%',
    label: 'Less Water',
    description: 'Compared to traditional farming'
  },
  {
    icon: Leaf,
    value: '12,000+',
    label: 'CO₂ Reduction',
    description: 'Metric tons per year'
  }
];

const Impact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-[#2E8B57]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Making a measurable difference in urban agriculture and sustainability
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-4xl font-bold text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-xl font-semibold text-white/90 mb-2">
                {stat.label}
              </div>
              <p className="text-white/80">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;