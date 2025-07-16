import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-section-grey text-white py-8 px-4 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Social Media */}
        <div className="flex flex-col gap-4 items-center">
          <img src={logo} alt="Logo" className="h-14 w-14" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Leading the future with cutting-edge AI tools and solutions for every
            business.
          </p>
          <div className="flex gap-3 mt-4 justify-center">
            {[
              { icon: FaLinkedin, url: "https://www.linkedin.com" },
              { icon: FaTwitter, url: "https://twitter.com" },
              { icon: FaFacebook, url: "https://facebook.com" },
              { icon: FaInstagram, url: "https://instagram.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-tr from-gray-700 to-gray-900 hover:from-yellow-400 hover:to-yellow-300 transition-all"
              >
                <social.icon className="text-white hover:text-black transition-colors text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-4">
            AI Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { label: "AI Home", path: "/home" },
              { label: "About AI", path: "/about-us" },
              { label: "AI Tools", path: "/ai-solutions" },
              { label: "AI Blog", path: "/blog" },
              { label: "Contact AI Team", path: "/contact-us" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="hover:text-yellow-400 font-medium text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-4">
            AI Tools & Solutions
          </h3>
          <ul className="space-y-2">
            {[
              "AI Chatbots",
              "Predictive Analytics",
              "Image Recognition",
              "Natural Language Processing",
              "Automation Bots",
              "AI Consulting",
              "Machine Learning Training",
            ].map((service) => (
              <li key={service}>
                <span className="font-medium text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Box */}
        <div className="bg-gradient-to-tr from-gray-800 to-gray-900 rounded-2xl p-6 flex flex-col gap-4 shadow-lg shadow-gray-800">
          <p className="font-semibold text-lg mb-2 leading-relaxed text-gray-100">
            Ready to revolutionize your business with AI?
            <br />
            Our AI experts are here to help you innovate and automate.
          </p>
          <div className="flex items-center gap-3 text-yellow-400">
            <FaPhoneAlt />
            <span className="text-white text-sm">+91 9390594407</span>
          </div>
          <div className="flex items-center gap-3 text-yellow-400">
            <FaEnvelope />
            <span className="text-white text-sm">ai@tools.in</span>
          </div>
          <button
            className="mt-4 w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold hover:scale-105 transition-all"
            style={{ boxShadow: "0 0 16px 0 #facc15" }}
          >
            Get your AI solution now
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
