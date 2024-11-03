import React ,{useContext, useState} from 'react';
import backgroundImage from '../../assets/car1.jpeg'; // Use your local background image
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {setIsLoggedInContext} from "../../App"

function Logout() {
  const setIsLoggedIn = useContext(setIsLoggedInContext)

    const navigate = useNavigate()
    
    const handleLogout = async () => {

      try{
        const response = await axios.post("http://localhost:3001/logout", null, { withCredentials: true })
        if (response.status === 200) {
            setIsLoggedIn(false);
            navigate("/login");
        }
      } catch(error) {
        console.error("Error logging out:", error);
    };
      
        
  };

  return (
    <Link to="/logout">
    <button onClick={handleLogout} className="bg-red-400 py-1 px-3  hover:bg-red-600 rounded-full">
      Logout
    </button>
    </Link>

);
  }
 
export default Logout;
