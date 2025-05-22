import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { courses as allCourses, faqs } from '@/data/courses';
import CourseFilters from '@/components/courses/CourseFilters';
import CourseGrid from '@/components/courses/CourseGrid';
import CourseDetailsTabs from '@/components/courses/CourseDetailsTabs';
import CourseFAQ from '@/components/courses/CourseFAQ';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  useEffect(() => {
    const filterCourses = () => {
      let tempCourses = allCourses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              (course.features && course.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())));
        
        const matchesPrice = priceFilter === 'all' ||
                             (priceFilter === 'under700' && course.price < 700) ||
                             (priceFilter === '700to4000' && course.price >= 700 && course.price <= 4000) ||
                             (priceFilter === '4001to8000' && course.price > 4000 && course.price <= 8000) ||
                             (priceFilter === 'over8000' && course.price > 8000);

        const matchesLevel = levelFilter === 'all' || course.level.toLowerCase().replace(/\s+/g, '-').includes(levelFilter.toLowerCase());
        
        return matchesSearch && matchesPrice && matchesLevel;
      });
      setFilteredCourses(tempCourses);
    };
    filterCourses();
  }, [searchTerm, priceFilter, levelFilter]);


  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of technology courses designed to help you build a successful career in the IT industry.
          </p>
        </motion.div>

        <CourseFilters 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          levelFilter={levelFilter}
          setLevelFilter={setLevelFilter}
          courses={allCourses}
        />

        <CourseGrid courses={filteredCourses} />
        
        <CourseDetailsTabs />

        <CourseFAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default CoursesPage;