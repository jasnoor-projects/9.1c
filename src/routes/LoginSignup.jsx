import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from '../Login';
import Signup from './Signup';
import '../LoginSignup.css'; 

const LoginSignup = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <div className="loginSignup-page">
        <nav className="loginSignup-nav">
          <ul>
            <li>
              <Link to="/login" className="loginSignup-link">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="loginSignup-link">Sign Up</Link>
            </li>
            {isLoggedIn && (
              <li>
                <button onClick={handleLogout} className="loginSignup-logout">Logout</button>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default LoginSignup;
