import { courseDetails } from './course-details';
import { courseFeatures } from './course-features';

export const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn to build modern, responsive websites using HTML, CSS, JavaScript, React, and Node.js.",
    duration: "3 Months",
    level: "Beginner to Advanced",
    price: 7999,
    features: courseFeatures.webDevelopment,
    icon: "Code"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Master the art of creating cross-platform mobile applications using React Native and Flutter.",
    duration: "3 months",
    level: "Intermediate",
    price: 30000,
    features: courseFeatures.mobileAppDevelopment,
    icon: "Smartphone"
  },
  {
    id: 3,
    title: "Data Science",
    description: "Dive into the world of data analysis, machine learning, and artificial intelligence.",
    duration: "6 months",
    level: "Intermediate to Advanced",
    price: 45000,
    features: courseFeatures.dataScience,
    icon: "BarChart"
  },
  {
    id: 4,
    title: "Cyber Security (Intermediate Level)",
    description: "Learn to protect systems, networks, and programs from digital attacks.",
    duration: "3 Months",
    level: "Intermediate",
    price: 7499,
    features: courseFeatures.cyberSecurity,
    icon: "Shield"
  },
  {
    id: 5,
    title: "Cloud Computing",
    description: "Master cloud platforms like AWS, Azure, and Google Cloud for modern application deployment.",
    duration: "3 months",
    level: "Intermediate",
    price: 35000,
    features: courseFeatures.cloudComputing,
    icon: "Cloud"
  },
  {
    id: 6,
    title: "UI/UX Design",
    description: "Learn to create beautiful, intuitive user interfaces and experiences for digital products.",
    duration: "3 months",
    level: "Beginner to Intermediate",
    price: 28000,
    features: courseFeatures.uiUxDesign,
    icon: "Palette"
  },
  {
    id: 7,
    title: "Basic to Advance Computer Fundamentals",
    description: "Comprehensive course covering computer basics to advanced concepts. Introduction to Computers and Computing.",
    duration: "3 Months",
    level: "Beginner to Advanced",
    price: 3300,
    features: courseFeatures.basicComputer,
    icon: "Laptop" 
  },
  {
    id: 8,
    title: "C.C.A (Certificate in Computer Application)",
    description: "Learn essential computer applications for office productivity.",
    duration: "3 Months", 
    level: "Beginner",
    price: 3699,
    features: courseFeatures.cca,
    icon: "FileText"
  },
  {
    id: 9,
    title: "D.C.A (Diploma in Computer Application)",
    description: "A comprehensive diploma covering various aspects of computer applications.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    price: 3799,
    features: courseFeatures.dca,
    icon: "BookOpen"
  },
  {
    id: 10,
    title: "A.D.C.A (Advance Diploma in Computer Application)",
    description: "Advanced diploma for in-depth knowledge of computer applications and technologies.",
    duration: "3 Months",
    level: "Intermediate to Advanced",
    price: 8499,
    features: courseFeatures.adca,
    icon: "Award"
  },
  {
    id: 11,
    title: "9 to 12 School Computer Subject",
    description: "Tailored computer subject coaching for school students from class 9 to 12.",
    duration: "Per Month",
    level: "School Level",
    price: 699,
    features: courseFeatures.schoolComputer,
    icon: "Users"
  },
  {
    id: 12,
    title: "Computer Application",
    description: "Focuses on practical applications of computer software in various fields.",
    duration: "According to Syllabus",
    level: "Varies",
    price: 799, 
    features: courseFeatures.computerApplication,
    icon: "AppWindow"
  },
  {
    id: 13,
    title: "Computer Science",
    description: "In-depth study of computer science principles and theories.",
    duration: "According to Syllabus",
    level: "Varies",
    price: 699,
    features: courseFeatures.computerScience,
    icon: "Terminal"
  },
  {
    id: 14,
    title: "Computer Typing",
    description: "Improve your typing speed and accuracy.",
    duration: "Per Month",
    level: "Beginner",
    price: 699,
    features: courseFeatures.computerTyping,
    icon: "Keyboard"
  },
  {
    id: 15,
    title: "Excel Advance",
    description: "Master advanced features of Microsoft Excel for data analysis and reporting.",
    duration: "3 Months",
    level: "Intermediate to Advanced",
    price: 6999,
    features: courseFeatures.excelAdvance,
    icon: "FileSpreadsheet"
  },
  {
    id: 16,
    title: "Networking Advance",
    description: "Gain advanced knowledge in computer networking and infrastructure.",
    duration: "3 Months",
    level: "Intermediate to Advanced",
    price: 8999,
    features: courseFeatures.networkingAdvance,
    icon: "Network"
  },
  {
    id: 17,
    title: "Python",
    description: "Learn Python programming from basics to advanced concepts.",
    duration: "3 Months",
    level: "Beginner to Advanced",
    price: 6599,
    features: courseFeatures.python,
    icon: "Code2"
  },
  {
    id: 18,
    title: "C Language",
    description: "Master the fundamentals of C programming language.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    price: 8599,
    features: courseFeatures.cLanguage,
    icon: "TerminalSquare"
  },
  {
    id: 19,
    title: "C++ Language",
    description: "Learn object-oriented programming with C++.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    price: 4000,
    features: courseFeatures.cppLanguage,
    icon: "CodeXml"
  },
  {
    id: 20,
    title: "Tally ERP9",
    description: "Learn accounting and inventory management with Tally ERP9.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    price: 7999,
    features: courseFeatures.tallyErp9,
    icon: "Calculator"
  },
  {
    id: 21,
    title: "GST",
    description: "Understand Goods and Services Tax (GST) regulations and compliance.",
    duration: "3 Months",
    level: "Intermediate",
    price: 8599,
    features: courseFeatures.gst,
    icon: "Receipt"
  },
  {
    id: 22,
    title: "Ethical Hacking",
    description: "Learn the principles and techniques of ethical hacking.",
    duration: "3 Months",
    level: "Intermediate to Advanced",
    price: 7499,
    features: courseFeatures.ethicalHacking,
    icon: "ShieldAlert"
  }
].map(course => ({ ...course, details: courseDetails[course.id] || {} }));


export const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: "You can enroll by visiting our institute, filling out the enrollment form on our contact page, or calling our admission office at +91 6290392983 / +91 7044744490."
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer: "Prerequisites vary by course. Basic courses have no prerequisites, while advanced courses may require prior knowledge or experience. Check individual course details for specific requirements."
  },
  {
    question: "Do you offer placement assistance?",
    answer: "Yes, we provide comprehensive placement assistance including resume building, interview preparation, and connections with our industry partners for job opportunities."
  },
  {
    question: "What is the class schedule?",
    answer: "We offer flexible schedules with weekday and weekend batches. Weekday classes typically run from 9 AM to 1 PM or 2 PM to 6 PM, while weekend classes are held on Saturdays and Sundays."
  },
  {
    question: "Are there any discounts available?",
    answer: "We offer early bird discounts, group enrollment discounts, and scholarships for deserving students. Contact our admission office for current offers."
  },
  {
    question: "Do you provide certificates after course completion?",
    answer: "Yes, all students receive an industry-recognized certificate upon successful completion of their course and projects."
  },
  {
    question: "Can I pay the course fee in installments?",
    answer: "Yes, we offer flexible payment options including installment plans. You can discuss the details with our admission counselor."
  }
];