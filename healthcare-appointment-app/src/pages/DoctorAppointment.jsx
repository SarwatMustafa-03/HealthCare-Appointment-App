import React from 'react';
import { FaCheck } from 'react-icons/fa';

const AppointmentSummary = ({ selectedDoctor, selectedDate, selectedTime, currentMonth }) => {
  return (
    <div className="bg-purple-50 border-2 border-purple-600 rounded-xl p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6">Appointment Summary</h3>
      <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 space-y-2 sm:space-y-3">
        <p className="flex justify-between border-b border-gray-200 pb-2 sm:pb-3">
          <strong className="text-gray-700 text-sm sm:text-base">Doctor:</strong>
          <span className="text-gray-900 text-sm sm:text-base text-right">{selectedDoctor.name}</span>
        </p>
        <p className="flex justify-between border-b border-gray-200 pb-2 sm:pb-3">
          <strong className="text-gray-700 text-sm sm:text-base">Date:</strong>
          <span className="text-gray-900 text-sm sm:text-base text-right">
            {currentMonth.toLocaleString('default', { month: 'long' })} {selectedDate}, {currentMonth.getFullYear()}
          </span>
        </p>
        <p className="flex justify-between border-b border-gray-200 pb-2 sm:pb-3">
          <strong className="text-gray-700 text-sm sm:text-base">Time:</strong>
          <span className="text-gray-900 text-sm sm:text-base text-right">{selectedTime}</span>
        </p>
        <p className="flex justify-between">
          <strong className="text-gray-700 text-sm sm:text-base">Location:</strong>
          <span className="text-gray-900 text-sm sm:text-base text-right">{selectedDoctor.location}</span>
        </p>
      </div>
      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition">
        <FaCheck className="text-sm sm:text-base" />
        Confirmed Appointment
      </button>
    </div>
  );
};

export default AppointmentSummary;