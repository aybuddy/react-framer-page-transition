import React from 'react';
import Hero from '../components/Hero.component';
import Header from '../components/Header.component';
import Image from '../images/jarand-k-lokeland-3-MftKobVtg-unsplash.jpg';
import { motion } from 'framer-motion';
import { animationTwo } from '../animations/index';

const About = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationTwo}>
      <Header />
      <Hero
        image={Image}
        title='About Norway'
        desc='A wonderful place to visit'
      />
      About
    </motion.div>
  );
};

export default About;
