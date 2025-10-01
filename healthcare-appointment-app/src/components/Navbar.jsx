import React from 'react'

const Navbar = () => {['Home','Doctors','Appointment','About','Contact']
  return (
    <div
    ><ul>
        <li><a href=""> {Navbar.map()}</a></li>
        </ul>
        </div>
  )
}

export default Navbar