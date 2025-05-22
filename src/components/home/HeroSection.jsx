import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Build Your Future with Tech Skills
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8">
              Digital Kira Institute of Pragati Infotech offers industry-relevant courses to help you succeed in the digital world. Learn from experts and kickstart your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <img  className="rounded-lg shadow-xl" alt="Students learning at Digital Kira Institute of Pragati Infotech" src="https://images.unsplash.com/photo-1521939708078-d6498bb62747" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;