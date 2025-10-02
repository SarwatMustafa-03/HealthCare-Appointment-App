import { useState } from "react";
import { FaStethoscope } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [isOpen, setisOpen] = useState(true)
  const navLinks = [
    "Home",
    "Doctors",
    "Appointment",
];

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <FaStethoscope className="text-3xl text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">HealthCare+</span>
            </div>

          </div>
          <div className="hidden md:flex items-center gap-8">
            <ul className="text-gray-700 hover:text-purple-600 font-medium transition">
              {navLinks.map((link) => (
                <li
                  key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <button className="md:hidden text-2xl text-gray-700"
            onClick={() => setisOpen(!isOpen)}
          >
            {isOpen ? (
              <RxCross1 size={28} className="cursor-pointer" />
            ) : (
              <GiHamburgerMenu   size={28} className="cursor-pointer" />
            )
            }
          </button>

          {isOpen && (
            <div className="md:hidden bg-white border-t" >
              <ul className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <li //className="hover:text-white relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    key={link} >
                    <a className="block text-gray-700 hover:text-purple-600 font-medium"
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setisOpen(true)}

                    >{link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}




export default Navbar;
