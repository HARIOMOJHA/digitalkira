import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PopularCoursesSection from '@/components/home/PopularCoursesSection';
import ContactCtaSection from '@/components/home/ContactCtaSection';
import { courses } from '@/data/courses';

const HomePage = () => {
  const popularCourses = courses
    .filter(course => course.price > 1000) 
    .sort((a, b) => b.id - a.id) 
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PopularCoursesSection courses={popularCourses} />
      <ContactCtaSection />
    </div>
  );
};

export default HomePage;