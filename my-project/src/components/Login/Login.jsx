import React ,{useContext, useState} from 'react';
import backgroundImage from '../../assets/car1.jpeg'; // Use your local background image
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setIsLoggedInContext } from '../../App';

function Login() {

    const setIsLoggedIn = useContext(setIsLoggedInContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    const handleLogin = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
          .then(result => {
              if (result.data === "Success") {
                  axios.get('http://localhost:3001/user', { withCredentials: true })
                      .then(response => {
                          if (response.data.user) {
                            setIsLoggedIn(true);
                            navigate("/body", { state: { user: response.data.user } });
                          }
                      });
              } else {
                  alert("Login failed");
              }
          })
          .catch(err => console.log(err));
  };


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
        <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2>
        
        {/* Username Field */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
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
            <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
          </div>
          <a href="#forgot-password" className="text-sm text-gray-600 hover:underline">Forgot your password?</a>
        </div>
        
        {/* Login Button */}
        <button onClick={handleLogin} className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors">
          Login
        </button>

        {/* Additional Options */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/signup">
          <a href="#create-account" className="text-green-500 font-semibold hover:underline">Create account</a>
          </Link>
        </p>
      </div>
    </div>
        </div>
        
        
     
    

    
        

  
  );
}

export default Login;
