import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Impact from '../components/home/Impact';
import LatestProjects from '../components/home/LatestProjects';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Impact />
      <LatestProjects />
    </>
  );
};

export default Home;