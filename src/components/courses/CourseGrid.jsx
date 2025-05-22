import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as Icons from 'lucide-react';

const DynamicIcon = ({ name }) => {
  const IconComponent = Icons[name];
  return IconComponent ? <IconComponent className="h-6 w-6 text-blue-600" /> : <Icons.BookOpen className="h-6 w-6 text-blue-600"/>;
};

const CourseGrid = ({ courses }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {courses.length > 0 ? (
        courses.map((course) => (
          <motion.div 
            key={course.id}
            className="course-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col"
            variants={fadeIn}
          >
            <div className="p-6 flex-grow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <DynamicIcon name={course.icon} />
                </div>
                <h3 className="text-xl font-bold">{course.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
              <div className="flex justify-between items-center mb-4 text-sm">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-500">Duration</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-500">Level</span>
                  <span className="font-semibold">{course.level}</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  {course.price % 1 === 0 ? `₹${course.price.toLocaleString()}` : `₹${course.price.toLocaleString()}/-`}
                </span>
                {course.duration.toLowerCase().includes("month") && !course.duration.toLowerCase().startsWith("per") && course.price > 500 ? <span className="text-xs text-gray-500"> total</span> : null}
                {course.duration.toLowerCase().startsWith("per") ? <span className="text-xs text-gray-500"> per month</span> : null}

              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">What you'll learn:</h4>
                <ul className="space-y-1">
                  {course.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Button asChild className="w-full">
                <Link to="/contact">Enroll Now</Link>
              </Button>
            </div>
          </motion.div>
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <p className="text-lg text-gray-600">No courses match your search criteria. Please try a different search term or filter.</p>
        </div>
      )}
    </motion.div>
  );
};

export default CourseGrid;