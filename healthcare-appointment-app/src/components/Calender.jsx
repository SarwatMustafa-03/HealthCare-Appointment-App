import React, { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa';
import TimeSlots from './TimeSlots';
import AppointmentSummary from './AppointmentSummary';

const Calender = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());


    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        return { daysInMonth, startingDayOfWeek };
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);


    return (
        <div>
            <div>
                <button>
                    <FaChevronLeft />
                </button>
                <h3 className="text-xl font-bold text-gray-800">
                    {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h3>
                <button
                    onClick={handleNextMonth}
                    className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition"
                >
                    <FaChevronRight />
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center font-bold text-purple-600 py-2">
                    {day}
                  </div>
                ))}
              </div>
                            <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: startingDayOfWeek }).map((_, i) => (
                  <div key={`empty-${i}`}></div>
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                  const today = new Date();
                  const isPast = date < today.setHours(0, 0, 0, 0);
                  
                  return (
                    <button
                      key={day}
                      disabled={isPast}
                      className={`aspect-square flex items-center justify-center rounded-lg border-2 font-medium transition ${
                        selectedDate === day
                          ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white border-purple-600'
                          : isPast
                          ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                          : 'bg-white text-gray-800 border-gray-300 hover:border-purple-600 hover:bg-purple-50'
                      }`}
                      onClick={() => !isPast && setSelectedDate(day)}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              <TimeSlots/>
              <AppointmentSummary/>
            </div>


    
    )
}

export default Calender