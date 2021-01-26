import React from 'react';
import Hero from '../components/Hero.component';
import Header from '../components/Header.component';
import Image from '../images/wolf-vandierendonck-Xj8TdoAbmos-unsplash.jpg';
import { motion } from 'framer-motion';
import { animationThree } from '../animations/index';

const Services = () => {
  return (
    <motion.div
      initial='out'
      animate='end'
      exit='out'
      variants={animationThree}
    >
      <Header />
      <Hero
        image={Image}
        title='Norway Destinations'
        desc='Services we Provide'
      />
      Services
    </motion.div>
  );
};

export default Services;
