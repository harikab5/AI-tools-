import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import SecondHome from './pages/SecondHome.jsx';

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/home" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
      <Route
        path="/second-home"
        element={
          isLoggedIn ? <SecondHome darkMode={darkMode} setDarkMode={setDarkMode} /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
    </div>
  );
}

export default App;
