import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const CourseDetailsTabs = () => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Course Information</h2>
      <Tabs defaultValue="curriculum">
        <TabsList className="w-full mb-6 grid grid-cols-3">
          <TabsTrigger value="curriculum" className="flex-1">Curriculum</TabsTrigger>
          <TabsTrigger value="instructors" className="flex-1">Instructors</TabsTrigger>
          <TabsTrigger value="certification" className="flex-1">Certification</TabsTrigger>
        </TabsList>
        <TabsContent value="curriculum" className="p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-semibold mb-3">Our Comprehensive Curriculum</h3>
          <p className="mb-4 text-sm">
            Our courses are designed with a focus on practical skills and industry requirements. Each course includes:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Theoretical foundations and concepts</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Hands-on practical sessions</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Real-world projects and case studies</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Industry-relevant tools and technologies</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Soft skills and professional development</span>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="instructors" className="p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-semibold mb-3">Expert Instructors</h3>
          <p className="mb-4 text-sm">
            Our courses are taught by industry professionals with extensive experience in their respective fields. Our instructors:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Have 5+ years of industry experience</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Are certified professionals in their domains</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Bring real-world insights to the classroom</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Provide personalized guidance and mentorship</span>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="certification" className="p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-semibold mb-3">Industry-Recognized Certification</h3>
          <p className="mb-4 text-sm">
            Upon successful completion of the course, students receive:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Digital Kira Institute certification</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Project completion certificate</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Assistance with industry certification preparation</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Digital badges for online profiles</span>
            </li>
          </ul>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default CourseDetailsTabs;