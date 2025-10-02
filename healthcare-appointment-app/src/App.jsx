import React, { useState } from 'react';
import { FaUserMd, FaCalendarAlt, FaClock, FaStar, FaMapMarkerAlt, FaPhone, FaStethoscope, FaHeart, FaBrain, FaTooth, FaEye, FaBone, FaBars, FaTimes, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';

const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      experience: "15 years",
      location: "City Hospital",
      phone: "+1 234-567-8900",
      icon: <FaHeart />,
      available: true
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      rating: 4.8,
      experience: "12 years",
      location: "Metro Medical Center",
      phone: "+1 234-567-8901",
      icon: <FaBrain />,
      available: true
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Dentist",
      rating: 4.7,
      experience: "10 years",
      location: "Dental Care Plus",
      phone: "+1 234-567-8902",
      icon: <FaTooth />,
      available: true
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Ophthalmologist",
      rating: 4.9,
      experience: "18 years",
      location: "Eye Care Clinic",
      phone: "+1 234-567-8903",
      icon: <FaEye />,
      available: false
    },
    {
      id: 5,
      name: "Dr. Linda Martinez",
      specialty: "Orthopedic",
      rating: 4.6,
      experience: "14 years",
      location: "Bone & Joint Center",
      phone: "+1 234-567-8904",
      icon: <FaBone />,
      available: true
    },
    {
      id: 6,
      name: "Dr. Robert Taylor",
      specialty: "General Physician",
      rating: 4.8,
      experience: "20 years",
      location: "Family Health Clinic",
      phone: "+1 234-567-8905",
      icon: <FaStethoscope />,
      available: true
    }
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];

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
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <FaStethoscope className="text-3xl text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">HealthCare+</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 font-medium transition">Home</a>
              <a href="#doctors" className="text-gray-700 hover:text-purple-600 font-medium transition">Doctors</a>
              <a href="#appointments" className="text-gray-700 hover:text-purple-600 font-medium transition">Appointments</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium transition">Contact</a>
            </div>

            <button 
              className="md:hidden text-2xl text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="px-4 py-6 space-y-4">Home</a>
              <a href="#doctors" className="block text-gray-700 hover:text-purple-600 font-medium">Doctors</a>
              <a href="#appointments" className="block text-gray-700 hover:text-purple-600 font-medium">Appointments</a>
              <a href="#about" className="block text-gray-700 hover:text-purple-600 font-medium">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-purple-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Healthcare Appointment</h1>
          <p className="text-xl opacity-90">Connect with the best doctors and schedule your visit easily</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Doctors Section */}
        <section id="doctors" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map(doctor => (
              <div 
                key={doctor.id} 
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedDoctor?.id === doctor.id ? 'ring-4 ring-purple-500' : ''
                } ${!doctor.available ? 'opacity-60' : 'hover:-translate-y-2'}`}
                onClick={() => doctor.available && setSelectedDoctor(doctor)}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl">
                    {doctor.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 text-center mb-1">{doctor.name}</h3>
                <p className="text-purple-600 font-medium text-center mb-4">{doctor.specialty}</p>
                
                <div className="flex justify-around items-center py-3 border-t border-b border-gray-200 mb-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span className="text-gray-800 font-semibold">{doctor.rating}</span>
                  </div>
                  <div className="text-gray-600 text-sm">{doctor.experience} exp</div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaMapMarkerAlt className="text-purple-500" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaPhone className="text-purple-500" />
                    <span>{doctor.phone}</span>
                  </div>
                </div>
                
                {!doctor.available ? (
                  <div className="bg-red-500 text-white text-center py-2 rounded-lg font-medium">
                    Not Available
                  </div>
                ) : (
                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
                    <FaCalendarAlt />
                    Select Doctor
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Booking Section */}
        {selectedDoctor && (
          <section id="appointments" className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Schedule Appointment</h2>
            
            {/* Selected Doctor Info */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-4">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl">
                {selectedDoctor.icon}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-1">{selectedDoctor.name}</h3>
                <p className="text-lg opacity-90 mb-2">{selectedDoctor.specialty}</p>
                <p className="flex items-center gap-2 opacity-90 justify-center md:justify-start">
                  <FaMapMarkerAlt />
                  {selectedDoctor.location}
                </p>
              </div>
            </div>

            {/* Calendar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <button 
                  onClick={handlePrevMonth}
                  className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition"
                >
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
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaClock className="text-purple-600" />
                  Available Time Slots
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map(time => (
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
            )}

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
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold text-purple-400 mb-4">HealthCare+</h4>
            <p className="text-gray-400">Your trusted healthcare appointment platform</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-purple-400 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-purple-400 transition">Home</a>
              <a href="#doctors" className="block text-gray-400 hover:text-purple-400 transition">Doctors</a>
              <a href="#about" className="block text-gray-400 hover:text-purple-400 transition">About Us</a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-purple-400 mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Email: info@healthcare.com</p>
            <p className="text-gray-400">Phone: +1 234-567-8900</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-500">&copy; 2025 HealthCare+. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;