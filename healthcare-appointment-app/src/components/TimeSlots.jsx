import React, { useState } from 'react'
const TimeSlots = () => { [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];
    const [selectedTime, setSelectedTime] = useState(null);

  return (
            {selectedDate && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaClock className="text-purple-600" />
                  Available Time Slots
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {TimeSlots.map(time => (
                    <button
                      key={time}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition ${
                        selectedTime === time
                          ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white border-purple-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-purple-600 hover:bg-purple-50'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
        
                )
            }        
                           {/* Confirmation */}
            {selectedDate && selectedTime && (
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
                  Confirm Appointment
                </button>
              </div>
            )}
          </section>
        ) 
    }
       

    



export default TimeSlots