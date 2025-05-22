import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen, CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    { icon: Users, title: "Expert Instructors", description: "Learn from industry professionals with years of practical experience." },
    { icon: BookOpen, title: "Practical Curriculum", description: "Hands-on training with real-world projects and industry-relevant skills." },
    { icon: Award, title: "Placement Support", description: "Comprehensive placement assistance with our industry partners." },
    { icon: CheckCircle, title: "Flexible Schedule", description: "Choose from weekday or weekend batches to fit your schedule." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Digital Kira Institute</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive IT education with a focus on practical skills and industry requirements.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={fadeIn}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <feature.icon className="text-blue-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;