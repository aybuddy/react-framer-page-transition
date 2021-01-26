import React from 'react';
import Hero from '../components/Hero.component';
import Header from '../components/Header.component';
import Image from '../images/alexander-sinn--yOZe-6UT1w-unsplash.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

const Home = () => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero image={Image} title='Norway Travel' desc='Places to visit' />
    </motion.div>
  );
};

export default Home;
