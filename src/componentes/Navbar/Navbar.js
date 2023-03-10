// import './Navbar.scss'
import logo from './Viking-PNG-Images.png'
import { Cartwidget } from "../Cartwidget/Cartwidget";
import { useState } from "react";
import { Link } from "react-router-dom";



export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-gray-800 p-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-around items-center">
        <div>
            <hi className="text-5xl text-white font-serif">VIKING RECORDS</hi>
        </div>
        <div>
            <Link to="/"><img src={logo} alt='logo-vikingo' className='w-40'/></Link>
        </div>
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-start">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-md font-medium text-white hover:bg-gray-700"
                >
                  HOME
                </Link>
                <Link
                  to="/Merchandising"
                  className="ml-4 px-3 py-2 rounded-md text-md font-medium text-white hover:bg-gray-700"
                >
                  MERCHANDISING
                </Link>
                <div className="relative ml-4">
                  <button
                    onClick={toggleDropdown}
                    className="px-3 py-2 rounded-md text-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring"
                  >
                    DISCOS 🔽
                  </button>
                  {showDropdown && (
                    <div className="absolute z-10 top-full left-0 w-full bg-gray-800 rounded-md shadow-lg py-1">
                      <Link
                        to="/Discos"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Todos
                      </Link>
                      <Link
                        to="/Discos/Rock"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Rock
                      </Link>
                      <Link
                        to="/Discos/Heavy Metal"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Heavy Metal
                      </Link>
                      <Link
                        to="/Discos/Black Metal"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Black Metal
                      </Link>
                      <Link
                        to="/Discos/Pop"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Pop
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
            <Cartwidget />
        </div>
      </div>
    </nav>
  );
}

