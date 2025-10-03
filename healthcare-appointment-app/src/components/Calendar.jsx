import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Calendar = ({ currentMonth, selectedDate, onDateSelect, onPrevMonth, onNextMonth }) => {
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  return (
    <div className="mb-8">
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onPrevMonth}
          className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition shadow-md"
        >
          <FaChevronLeft />
        </button>
        <h3 className="text-xl font-bold text-gray-800 text-center">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button 
          onClick={onNextMonth}
          className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition shadow-md"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-2 mb-3">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold text-purple-600 py-2 text-sm">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: startingDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} className="h-20"></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
          const today = new Date();
          const isPast = date < today.setHours(0, 0, 0, 0);
          const isToday = date.toDateString() === today.toDateString();
          
          return (
            <button
              key={day}
              disabled={isPast}
              className={`
                h-20 w-full min-w-[50px] flex flex-col items-center justify-center 
                rounded-xl border-2 transition-all duration-200
                ${selectedDate === day
                  ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white border-purple-600 shadow-lg scale-105'
                  : isPast
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : isToday
                  ? 'bg-blue-50 text-blue-700 border-blue-300 hover:border-blue-400 hover:bg-blue-100'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-purple-400 hover:bg-purple-50 hover:shadow-md'
                }
              `}
              onClick={() => !isPast && onDateSelect(day)}
            >
              <span className="text-lg font-semibold">{day}</span>
              {isToday && !selectedDate && (
                <span className="text-xs text-blue-500 mt-1">Today</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;