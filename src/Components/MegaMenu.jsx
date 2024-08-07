import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa';

const MegaMenu = () => {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen">
      <nav className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-yellow-500">Circulate</a>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500 hover:bg-gray-600 focus:outline-none">
                <FaHome className="mr-2" /> Home
              </a>
              <div className="relative">
                <button
                  onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500 hover:bg-gray-600 focus:outline-none"
                >
                  <FaInfoCircle className="mr-2" /> About
                </button>
                {isAboutMenuOpen && (
                  <div className="absolute left-0 mt-2 w-[765px] bg-gray-800 text-white border border-gray-700 rounded-md shadow-lg z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-yellow-500">Company</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">About Us</li>
                          <li className="mt-1 text-sm">Our Team</li>
                          <li className="mt-1 text-sm">Careers</li>
                          <li className="mt-1 text-sm">Our Values</li>
                          <li className="mt-1 text-sm">Our Philosophy</li>
                        </ul>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-yellow-500">Mission</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">Our Vision</li>
                          <li className="mt-1 text-sm">Our Goals</li>
                          <li className="mt-1 text-sm">Our Approach</li>
                          <li className="mt-1 text-sm">Impact Stories</li>
                        </ul>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-yellow-500">History</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">Founding Story</li>
                          <li className="mt-1 text-sm">Milestones</li>
                          <li className="mt-1 text-sm">Achievements</li>
                          <li className="mt-1 text-sm">Awards</li>
                          <li className="mt-1 text-sm">Future Plans</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500 hover:bg-gray-600 focus:outline-none"
                >
                  <FaServicestack className="mr-2" /> Services
                </button>
                {isServicesMenuOpen && (
                  <div className="absolute left-0 mt-2 w-[645px] bg-gray-800 text-white border border-gray-700 rounded-md shadow-lg z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-yellow-500">Consulting</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">Business Consulting</li>
                          <li className="mt-1 text-sm">IT Consulting</li>
                          <li className="mt-1 text-sm">Financial Consulting</li>
                          <li className="mt-1 text-sm">Strategy Consulting</li>
                          <li className="mt-1 text-sm">Operational Consulting</li>
                        </ul>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-yellow-500">Development</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">Web Development</li>
                          <li className="mt-1 text-sm">Mobile Development</li>
                          <li className="mt-1 text-sm">Software Development</li>
                          <li className="mt-1 text-sm">API Development</li>
                          <li className="mt-1 text-sm">E-commerce Solutions</li>
                        </ul>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-yellow-500">Design</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">UI/UX Design</li>
                          <li className="mt-1 text-sm">Graphic Design</li>
                          <li className="mt-1 text-sm">Product Design</li>
                          <li className="mt-1 text-sm">Brand Identity</li>
                          <li className="mt-1 text-sm">Prototyping</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500 hover:bg-gray-600 focus:outline-none">
                <FaEnvelope className="mr-2" /> Contact
              </a>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-yellow-500">Sign In</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MegaMenu;
