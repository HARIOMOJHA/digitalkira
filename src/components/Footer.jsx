import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-gradient pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
                DIGITAL KIRA
              </span>
              <span className="text-lg md:text-xl font-semibold text-gray-700"> INSTITUTE</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Empowering students with cutting-edge IT skills and knowledge for a successful career in the technology industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-800 mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-800 mb-4">Courses</p>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">Python</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">Data Science</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">Cyber Security</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">Tally ERP9</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-800 mb-4">Contact Us</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Ritika Tower - V Ground Floor 3/264/22, Dr B.C Roy Sarani Rishra Bazar - 712250</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">+91 6290392983</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">+91 7044744490</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">pragatiinfo.tech03@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Digital Kira Institute of Pragati Infotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;