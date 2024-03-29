// import './Navbar.scss'
import logo from './Viking-PNG-Images.png'
import { Cartwidget } from "../Cartwidget/Cartwidget";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";
import { FaCaretSquareDown } from "react-icons/fa";



export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useContext(LoginContext);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-gray-800 p-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-around items-center">
        <div>
            <h1 className="text-white text-5xl 1ont-serif">VIKING RECORDS</h1>
        </div>
        <div>
            <Link to="/Home"><img src={logo} alt='logo-vikingo' className='w-48'/></Link>
        </div>
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-start">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                <Link
                  to="/Home"
                  className="px-3 py-2 rounded-md text-3xl font-medium text-white hover:bg-gray-700"
                >
                  HOME
                </Link>
                <div className="relative ml-4">
                  <button
                    onClick={toggleDropdown}
                    className="flex px-2 py-2 rounded-md text-3xl font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring"
                  >
                    <span>DISCOS</span>
                    <span className='px-2'><FaCaretSquareDown /></span>
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
                        to="/Discos/Folk Metal"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Folk Metal
                      </Link>
                      <Link
                        to="/Discos/Industrial Metal"
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                      >
                        Industrial Metal
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
      <div className='flex justify-between items-center'>
        <h5 className='text-white text-lg'>Bienvenido {user.email}</h5>
        <button className='bg-white rounded-2xl px-4 py-2' onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

