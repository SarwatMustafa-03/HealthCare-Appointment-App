import React from 'react';
import { FaStar, FaMapMarkerAlt, FaPhone, FaCalendarAlt } from 'react-icons/fa';

const DoctorCard = ({ doctor, selectedDoctor, onSelectDoctor }) => {
  return (
    <div 
      className={`bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
        selectedDoctor?.id === doctor.id ? 'ring-2 sm:ring-4 ring-purple-500' : ''
      } ${!doctor.available ? 'opacity-60' : 'hover:-translate-y-1 sm:hover:-translate-y-2'}`}
      onClick={() => doctor.available && onSelectDoctor(doctor)}
    >
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl">
          {doctor.icon}
        </div>
      </div>
      
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-1">{doctor.name}</h3>
      <p className="text-purple-600 font-medium text-center mb-3 sm:mb-4 text-sm sm:text-base">{doctor.specialty}</p>
      
      <div className="flex justify-around items-center py-2 sm:py-3 border-t border-b border-gray-200 mb-3 sm:mb-4">
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar className="text-sm sm:text-base" />
          <span className="text-gray-800 font-semibold text-sm sm:text-base">{doctor.rating}</span>
        </div>
        <div className="text-gray-600 text-xs sm:text-sm">{doctor.experience} exp</div>
      </div>
      
      <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
        <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
          <FaMapMarkerAlt className="text-purple-500 text-xs sm:text-sm" />
          <span className="truncate">{doctor.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
          <FaPhone className="text-purple-500 text-xs sm:text-sm" />
          <span>{doctor.phone}</span>
        </div>
      </div>
      
      {!doctor.available ? (
        <div className="bg-red-500 text-white text-center py-2 rounded-lg font-medium text-sm sm:text-base">
          Not Available
        </div>
      ) : (
        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 sm:py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition text-sm sm:text-base">
          <FaCalendarAlt className="text-xs sm:text-sm" />
          Select Doctor
        </button>
      )}
    </div>
  );
};

export default DoctorCard;