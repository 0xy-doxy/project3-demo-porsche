import React, { useState,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignup=(e)=>{
      e.preventDefault()
      axios.post("https://demo-porsche-backend.onrender.com/signup", {name, email, password})
      .then(result => {
          if(result.status==200){
            console.log("User created successfully");
            navigate("/login")
          }
      })
      .catch(err=>{
        if(err.response && err.response.status===400){
          window.alert("Email already exists!!")
        }else{
          console.log(err);
        }
      })
    }

  return (
    <div>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        //   style={{
        //     backgroundImage: `url(${car})`, // Background image
        //   }}
      >
        {/* Login Form Container */}
        <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg p-8 w-full max-w-sm backdrop-blur-md mx-4 md:mx-0">
          {/* Login Title */}
          <h2 className="text-2xl font-bold text-center mb-6">
            Create a new Account
          </h2>

          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-600 mb-2 required"
              // onChange={(e) => setName(e.target.value)}
              
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Email"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Email
            </label>
            <input
              type="Email"
              id="Email"
              placeholder="Enter your Email"
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            {/* <a
              href="#forgot-password"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot your password?
            </a> */}
          </div>

          {/* Signup Button */}
          <button onClick={handleSignup} className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors">
            Sign-Up
          </button>

          {/* Additional Options */}
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login">
            <a
              href="/login"
              className="text-green-500 font-semibold hover:underline"
            >
              Login
            </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
