import React, { useState } from 'react';
import {
  FaBone,
  FaBrain,
  FaEye,
  FaHeart,
  FaMapMarkerAlt,
  FaStethoscope,
  FaTooth,
  FaStar,
  FaPhone,
  FaCalendarAlt
} from 'react-icons/fa';
import DoctorAppointment from './DoctorAppointment';

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

const DoctorSelection = () => {
  const [selectedDoctorState, setSelectedDoctorState] = useState(null);

  return (
    <>
      <div id="selectedDoctor" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Doctors</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map(doctor => (
            <div
              key={doctor.id}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer 
                ${selectedDoctorState?.id === doctor.id ? 'ring-4 ring-purple-500' : ''} 
                ${!doctor.available ? 'opacity-60' : 'hover:-translate-y-2'}`}
              onClick={() => doctor.available && setSelectedDoctorState(doctor)}
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

        <DoctorAppointment selectedDoctor={selectedDoctorState} />
      </div>
    </>
  );
};

export default DoctorSelection;