import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DoctorSelection from './pages/DoctorSelection'
import Calender from './components/Calender'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <DoctorSelection/>
      <Calender/>
    </div>
  )
}

export default App