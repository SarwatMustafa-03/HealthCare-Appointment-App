import React, { useState } from 'react';
import { FaStethoscope, FaHeart, FaBrain, FaTooth, FaEye, FaBone, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from './components/Navbar';
import DoctorCard from './components/DoctorCard';
import Calendar from './components/Calendar';
import TimeSlots from './components/TimeSlots';
import AppointmentSummary from './components/AppointmentSummary';
import Footer from './components/Footer';

function App() {
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

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">Book Your Healthcare Appointment</h1>
          <p className="text-lg sm:text-xl opacity-90 px-4">Connect with the best doctors and schedule your visit easily</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        {/* Doctors Section */}
        <section id="doctors" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10">Our Doctors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {doctors.map(doctor => (
              <DoctorCard 
                key={doctor.id}
                doctor={doctor}
                selectedDoctor={selectedDoctor}
                onSelectDoctor={setSelectedDoctor}
              />
            ))}
          </div>
        </section>

        {/* Booking Section */}
        {selectedDoctor && (
          <section id="appointments" className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8">Schedule Appointment</h2>
            
            {/* Selected Doctor Info */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl sm:text-4xl">
                {selectedDoctor.icon}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-1">{selectedDoctor.name}</h3>
                <p className="text-base sm:text-lg opacity-90 mb-2">{selectedDoctor.specialty}</p>
                <p className="flex items-center gap-2 opacity-90 justify-center sm:justify-start text-sm sm:text-base">
                  <FaMapMarkerAlt />
                  {selectedDoctor.location}
                </p>
              </div>
            </div>

            {/* Calendar */}
            <Calendar 
              currentMonth={currentMonth}
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
            />

            {/* Time Slots */}
            {selectedDate && (
              <TimeSlots 
                selectedTime={selectedTime}
                onTimeSelect={setSelectedTime}
                timeSlots={timeSlots}
              />
            )}

            {/* Appointment Summary */}
            {selectedDate && selectedTime && (
              <AppointmentSummary 
                selectedDoctor={selectedDoctor}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                currentMonth={currentMonth}
              />
            )}
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;