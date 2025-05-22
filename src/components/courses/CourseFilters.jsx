import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const CourseFilters = ({ searchTerm, setSearchTerm, priceFilter, setPriceFilter, levelFilter, setLevelFilter, courses }) => {
  
  const uniqueLevels = ['all', ...new Set(courses.map(course => course.level.toLowerCase().replace(/\s+/g, '-')))]
    .map(level => ({
      value: level,
      label: level === 'all' ? 'All Levels' : level.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }));

  return (
    <motion.div 
      className="mb-10 bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search courses by title, description, or feature..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium">Price:</span>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="under700">Under ₹700</option>
            <option value="700to4000">₹700 - ₹4,000</option>
            <option value="4001to8000">₹4,001 - ₹8,000</option>
            <option value="over8000">Over ₹8,000</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium">Level:</span>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            {uniqueLevels.map(level => (
              <option key={level.value} value={level.value}>{level.label}</option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseFilters;