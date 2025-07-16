import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import SecondHome from './pages/SecondHome.jsx';
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const [darkMode, setDarkMode] = useState(true);
  const noHeaderFooter = ["/login", "/signup", "/forgot-password"];
  const currentPath = window.location.pathname;
  const showHeaderFooter = !noHeaderFooter.includes(currentPath);

  return (
    <div className={darkMode ? "dark" : ""}>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/second-home" element={isLoggedIn ? <SecondHome darkMode={darkMode} setDarkMode={setDarkMode} /> : <Navigate to="/login" replace />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
