import React, { useState, useEffect, createContext } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import Body from './components/Body/Body.jsx';
import {BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom'
import axios from 'axios';

export const isLoggedInContext = createContext()
export const setIsLoggedInContext = createContext()
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      axios.get('http://demo-porsche-backend.onrender.com', { withCredentials: true })
          .then(response => {
              if (response.data.user) {
                  setIsLoggedIn(true);
              } else {
                  setIsLoggedIn(false);
              }
          })
          .catch(() => setIsLoggedIn(false));
  }, []);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="min-h-screen flex flex-col">

<isLoggedInContext.Provider value = {isLoggedIn}>
<setIsLoggedInContext.Provider value = {setIsLoggedIn}>


<BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />


      <Routes>
      
                  <Route path="/login" element={isLoggedIn ? <Navigate to="/body" /> : <Login />} ></Route>
                  <Route path="/signup" element={isLoggedIn ? <Navigate to="/body" /> : <Signup />} ></Route>
                  <Route path="/body" element={isLoggedIn ? <Body /> :<Navigate to="/login" />  }></Route>

      </Routes>
  
      
      <Footer />
      </BrowserRouter>

</setIsLoggedInContext.Provider>
</isLoggedInContext.Provider>
      
    </div>
  );
}

export default App;
