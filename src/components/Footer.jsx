import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Quote Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="Company Logo" className="w-20 h-20 mb-4 rounded-full" />
            <p className="text-sm mb-4 text-center md:text-left">
              The key to success is to appreciate how people learn, understand the thought process that
              goes into instructional design, what works well, and a range of different.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="far fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-2 inline-block">
              ADDRESS
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p>
                  Bharat Vikas Shikshan Sanstha Chinchwad, Pune 411019
                </p>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <p>+91 9876543210</p>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">
                  <i className="far fa-envelope"></i>
                </span>
                <p>bvss.edu@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-2 inline-block">
              QUICK LINKS
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-red-500 mr-2">■</span>
                <Link to="/" className="hover:text-gray-400">Home</Link>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">■</span>
                <Link to="/about" className="hover:text-gray-400">About Us</Link>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">■</span>
                <Link to="/courses" className="hover:text-gray-400">Courses</Link>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">■</span>
                <Link to="/academics" className="hover:text-gray-400">Academics</Link>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">■</span>
                <Link to="/achievements" className="hover:text-gray-400">Achievements & Events</Link>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">■</span>
                <Link to="/blog" className="hover:text-gray-400">Blog</Link>
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">■</span>
                <Link to="/contact" className="hover:text-gray-400">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6">
        <p className="text-sm">© 2025 All Rights Reserved. Developed By Eptiq Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
