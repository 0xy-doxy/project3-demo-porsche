import React from 'react'
import car from "../../assets/car1.jpeg"
import car2 from "../../assets/car2.jpeg"
import car3 from "../../assets/car3.jpeg"
import car4 from "../../assets/car4.png"
import { useLocation } from 'react-router-dom'

const Body = () => {

      const location = useLocation()
      const user = location.state?.user
  return (
    <div className='flex justify-end items-center'>
     <div className="flex flex-col justify-center items-center w-1/2 bg-gray-100 h-full p-6">
    {/* Text Container */}
    <div className="mb-4">
      <h1 className="text-5xl font-light  text-dark text-center leading-relaxed">
      UNLEASHING PRECISION: THE PORSCHE EXPERIENCE
      </h1>
    </div>
    
    {/* Image Container */}
    <div className="mt-4">
      <img 
        src={car4} // Replace with your image path, e.g., './assets/yourImage.jpg'
        alt="Description of the image" 
        className="w-full h-80 object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
     <div 
      className="w-2/4 h-screen bg-transparent bg-center flex items-center justify-center rounded-lg m-3" 
      style={{backgroundImage: `url(${car3})`}}
    >
      <div className="text-4xl text-white font-light bg-black opacity-30 text-center p-4 rounded-lg">
        <h1>Welcome back {user && user.name}</h1>
      </div>
    </div>
        {/* <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${car})`, // Background image
      }}
    > */}
      {/* Login Form Container */}
      {/* <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg p-8 w-full max-w-sm backdrop-blur-md mx-4 md:mx-0"> */}
        
        {/* Login Title */}
        {/* <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2> */}
        
        {/* Username Field */}
        {/* <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-semibold text-gray-600 mb-2">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
          />
        </div> */}
        
        {/* Password Field */}
        {/* <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
          />
        </div> */}

        {/* Remember Me and Forgot Password */}
        {/* <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
          </div>
          <a href="#forgot-password" className="text-sm text-gray-600 hover:underline">Forgot your password?</a>
        </div> */}
        
        {/* Login Button */}
        {/* <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors">
          Login
        </button> */}

        {/* Additional Options */}
        {/* <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <a href="#create-account" className="text-green-500 font-semibold hover:underline">Create account</a>
        </p> */}
      {/* </div> */}
    {/* </div> */}
        </div>
        // </div>
        
     
    // </div>
  )
}

export default Body
