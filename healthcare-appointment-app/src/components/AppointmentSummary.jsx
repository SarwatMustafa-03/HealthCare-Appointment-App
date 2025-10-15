import React from 'react';
import { FaCheck } from 'react-icons/fa';

const AppointmentSummary = ({ selectedDoctor, selectedDate, selectedTime, currentMonth }) => {
  return (
    <div className="bg-purple-50 border-2 border-purple-600 rounded-xl p-6">
      <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Appointment Summary</h3>
      <div className="bg-white rounded-lg p-6 mb-6 space-y-3">
        <p className="flex justify-between border-b border-gray-200 pb-3">
          <strong className="text-gray-700">Doctor:</strong>
          <span className="text-gray-900">{selectedDoctor.name}</span>
        </p>
        <p className="flex justify-between border-b border-gray-200 pb-3">
          <strong className="text-gray-700">Date:</strong>
          <span className="text-gray-900">
            {currentMonth.toLocaleString('default', { month: 'long' })} {selectedDate}, {currentMonth.getFullYear()}
          </span>
        </p>
        <p className="flex justify-between border-b border-gray-200 pb-3">
          <strong className="text-gray-700">Time:</strong>
          <span className="text-gray-900">{selectedTime}</span>
        </p>
        <p className="flex justify-between">
          <strong className="text-gray-700">Location:</strong>
          <span className="text-gray-900">{selectedDoctor.location}</span>
        </p>
      </div>
      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg text-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition">
        <FaCheck />
        Confirmed Appointment
      </button>
    </div>
  );
};

export default AppointmentSummary;