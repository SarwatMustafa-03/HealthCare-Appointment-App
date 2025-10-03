import React from 'react';
import { FaClock } from 'react-icons/fa';

const TimeSlots = ({ selectedTime, onTimeSelect, timeSlots }) => {
  return (
    <div className="mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
        <FaClock className="text-purple-600 text-sm sm:text-base" />
        Available Time Slots
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
        {timeSlots.map(time => (
          <button
            key={time}
            className={`py-2 sm:py-3 px-2 sm:px-4 rounded-lg border-2 font-medium transition text-xs sm:text-sm ${
              selectedTime === time
                ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white border-purple-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-purple-600 hover:bg-purple-50'
            }`}
            onClick={() => onTimeSelect(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;