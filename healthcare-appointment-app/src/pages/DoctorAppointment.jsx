import React from 'react'

const DoctorAppointment = () => {
  return (
            
                <section id='appointments' className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Schedule Appointment</h2>
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-4">
                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl">
                            {selectedDoctor.icon}
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-1">{selectedDoctor.id}</h3>
                            <h4 className="text-lg opacity-90 mb-2">{selectedDoctor.specialty}</h4>
                            <h4 className="flex items-center gap-2 opacity-90 justify-center md:justify-start"><FaMapMarkerAlt/>{selectedDoctor.location}</h4>
                        </div>
                    </div>
    
                </section>
    
  )
}

export default DoctorAppointment