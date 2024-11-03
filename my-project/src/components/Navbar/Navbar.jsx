import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import { isLoggedInContext } from '../../App';
import logo from "../../assets/logo.svg"

function Navbar() {

  const isLoggedIn = useContext(isLoggedInContext)
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Implement your search logic here
    console.log('Search query:', e.target.value);
  };

  return (
    <nav className="bg-gray-200 rounded-full text-black p-1 flex justify-between items-center">
      
      {/* Left section: Logo and Links */}

      <div className="flex items-center space-x-24 rounded-full p-2 ">
      <img src={logo} alt="Porsche Logo" className="h-10" /> 
        {/* <h1 className="text-2xl font-bold font-sans ml-2">PORSCHE</h1> */}
        
        <ul className="flex space-x-10 items-center">
          <li><a href="/body" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          
          {/* Search Bar */}
          <li>
            <input
              type="text"
              placeholder=" 🔎  Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-1 mt-0 rounded-full bg-white-300 text-black placeholder-slate-500"
            />
          </li>
          
        </ul>
      </div>
      
      {/* Right section: Login/Logout Button */}
      <div className=" rounded-full text-black  pr-10 flex justify-center items-center">
        {isLoggedIn ? <Logout/> : (
          <>
          <Link to="/login">
          <button className="bg-lime-400 py-1 px-3  hover:bg-lime-600 rounded-full">
            LogIn
          </button>
          </Link>

          <Link to="/signup">
          <button className="bg-blue-400 py-1 px-3 ml-2  hover:bg-blue-500 rounded-full text-white">
            Sign-up
          </button>
          </Link>
          </>

          
          
        
        )}
        
      </div>
      
    </nav>
  );
}

export default Navbar;
