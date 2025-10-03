import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div>
          <h4 className="text-lg sm:text-xl font-bold text-purple-400 mb-3 sm:mb-4">HealthCare+</h4>
          <p className="text-gray-400 text-sm sm:text-base">Your trusted healthcare appointment platform</p>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-bold text-purple-400 mb-3 sm:mb-4">Quick Links</h4>
          <div className="space-y-1 sm:space-y-2">
            <a href="#home" className="block text-gray-400 hover:text-purple-400 transition text-sm sm:text-base">Home</a>
            <a href="#doctors" className="block text-gray-400 hover:text-purple-400 transition text-sm sm:text-base">Doctors</a>
            <a href="#about" className="block text-gray-400 hover:text-purple-400 transition text-sm sm:text-base">About Us</a>
          </div>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-bold text-purple-400 mb-3 sm:mb-4">Contact</h4>
          <p className="text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">Email: info@healthcare.com</p>
          <p className="text-gray-400 text-sm sm:text-base">Phone: +1 234-567-8900</p>
        </div>
      </div>
      <div className="text-center pt-6 sm:pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm sm:text-base">&copy; 2025 HealthCare+. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;