import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, BookOpen, Target, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
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
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn more about Digital Kira Institute of Pragati Infotech, our mission, and our commitment to providing quality IT education.
          </p>
        </motion.div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Digital Kira Institute of Pragati Infotech was founded with a vision to bridge the gap between academic education and industry requirements in the IT sector. We aim to provide practical, hands-on training that prepares students for real-world challenges.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, a technology enthusiast and education advocate, recognized the need for training that would empower students in the rapidly evolving tech industry.
            </p>
            <p className="text-gray-600 mb-6">
              Today, Digital Kira Institute offers a wide range of courses taught by industry experts, and is committed to training students to become skilled professionals ready to work with top companies.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-2">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-semibold">Growing Student Base</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-semibold">Diverse Course Offerings</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-semibold">Strong Industry Connections</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img  className="w-full h-auto" alt="Digital Kira Institute of Pragati Infotech campus" src="https://images.unsplash.com/photo-1671525526206-6671a39bdc12" />
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <motion.div 
          className="bg-gray-50 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To empower individuals with cutting-edge technical skills and knowledge that enable them to excel in the digital world. We are committed to providing high-quality, industry-relevant education that bridges the gap between academic learning and professional requirements.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                To be recognized as the premier institute for IT education, known for innovation, excellence, and producing industry-ready professionals. We aim to create a global community of skilled tech professionals who contribute to technological advancement and digital transformation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Digital Kira Institute</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BookOpen className="text-blue-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry-Relevant Curriculum</h3>
              <p className="text-gray-600">
                Our courses are designed in collaboration with industry experts to ensure that students learn the most relevant and in-demand skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="text-blue-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from experienced professionals who bring real-world insights and practical knowledge to the classroom.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Briefcase className="text-blue-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Placement Assistance</h3>
              <p className="text-gray-600">
                We provide comprehensive placement support including resume building, interview preparation, and connections with our industry partners.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CheckCircle className="text-blue-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Training</h3>
              <p className="text-gray-600">
                Our focus on practical learning ensures that students gain hands-on experience through projects, case studies, and real-world applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="text-blue-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
              <p className="text-gray-600">
                Our certifications are recognized by leading companies, giving our students a competitive edge in the job market.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Target className="text-blue-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Learning Options</h3>
              <p className="text-gray-600">
                Choose from weekday or weekend batches, with options for morning or evening sessions to fit your schedule.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img  className="w-full h-full object-cover" alt="Hariom Ojha, Founder & CEO" src="https://images.unsplash.com/photo-1544212408-c711b7c19b92" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Hariom Ojha</h3>
                <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  With extensive experience in the IT industry, Hariom founded Digital Kira Institute to bridge the gap between education and industry needs.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img  className="w-full h-full object-cover" alt="Priya Sharma, Academic Director" src="https://images.unsplash.com/photo-1590926932353-01713ae6848a" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Priya Sharma</h3>
                <p className="text-blue-600 font-medium mb-3">Academic Director</p>
                <p className="text-gray-600 mb-4">
                  Priya oversees our curriculum development and ensures that our courses meet the highest standards of quality and relevance.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img  className="w-full h-full object-cover" alt="Vikram Singh, Head of Placements" src="https://images.unsplash.com/photo-1627161684850-52a7d958f8d7" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Vikram Singh</h3>
                <p className="text-blue-600 font-medium mb-3">Head of Placements</p>
                <p className="text-gray-600 mb-4">
                  Vikram leads our placement team, building relationships with industry partners and helping students secure rewarding career opportunities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Join Digital Kira Institute of Pragati Infotech today and take the first step towards a successful career in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;