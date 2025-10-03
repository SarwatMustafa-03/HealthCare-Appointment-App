import React from 'react';
import { FaStethoscope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <FaStethoscope className="text-2xl sm:text-3xl text-purple-600" />
            <span className="text-xl sm:text-2xl font-bold text-purple-600">HealthCare+</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 font-medium transition text-sm lg:text-base">Home</a>
            <a href="#doctors" className="text-gray-700 hover:text-purple-600 font-medium transition text-sm lg:text-base">Doctors</a>
            <a href="#appointments" className="text-gray-700 hover:text-purple-600 font-medium transition text-sm lg:text-base">Appointments</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition text-sm lg:text-base">About</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium transition text-sm lg:text-base">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-xl text-gray-700 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-purple-600 font-medium py-2 text-base">Home</a>
            <a href="#doctors" className="block text-gray-700 hover:text-purple-600 font-medium py-2 text-base">Doctors</a>
            <a href="#appointments" className="block text-gray-700 hover:text-purple-600 font-medium py-2 text-base">Appointments</a>
            <a href="#about" className="block text-gray-700 hover:text-purple-600 font-medium py-2 text-base">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-purple-600 font-medium py-2 text-base">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;