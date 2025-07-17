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
import ContentCodeGeneration from "./services/Content & Code Generation.jsx";
import AutomationWorkflowTools from "./services/Automation & Workflow Tools.jsx";
import NLPLanguageIntelligence from "./services/NLP & Language Intelligence.jsx";
import ComputerVisionSolutions from "./services/Computer Vision Solutions.jsx";
import AIChatbotsAssistants from "./services/AI Chatbots & Assistants.jsx";
import DataAnalysisForecasting from "./services/Data Analysis & Forecasting.jsx";
import BlogPage from "./pages/Blog.jsx";

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const [darkMode, setDarkMode] = useState(true);
  // Pages that should NOT show header/footer
  const noHeaderFooter = ["/login", "/signup", "/forgot-password"];
  const currentPath = window.location.pathname;
  const showHeaderFooter = !noHeaderFooter.includes(currentPath);
  return (
    <div className={darkMode ? "dark" : ""}>
      {showHeaderFooter && <Header />}
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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services/content-generation" element={<ContentCodeGeneration />} />
        <Route path="/services/automation-tools" element={<AutomationWorkflowTools />} />
        <Route path="/services/nlp-intelligence" element={<NLPLanguageIntelligence />} />
        <Route path="/services/computer-vision" element={<ComputerVisionSolutions />} />
        <Route path="/services/ai-chatbots" element={<AIChatbotsAssistants />} />
        <Route path="/services/data-analysis" element={<DataAnalysisForecasting />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
