 import React, { Fragment, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from "./assets/logo1.png";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

const servicesDropdown = [
  { name: "Cloud Integration", path: "/cloud-integration" },
  { name: "Data Analytics", path: "/data-analytics" },
  { name: "AI Solutions", path: "/ai-solutions" },
  { name: "Automation Tools", path: "/automation-tools" },
  { name: "Customer Support", path: "/customer-support" },
  { name: "Security & Compliance", path: "/security-compliance" },
];

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#181818] w-full flex items-center justify-between px-12 py-6 shadow-lg relative" style={{ minHeight: "300px" }}>
      {/* Logo */}
      <div className="flex items-center gap-6">
        <img src={logo} alt="Logo" className="h-[200px] w-[230px] object-contain" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10">
        {/* Home Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center text-white text-lg font-semibold hover:text-yellow-400 transition">
            Home <FaChevronDown className="ml-1 text-xs" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-right rounded-md bg-[#232323] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1 text-sm">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/home"
                      className={`block px-4 py-2 ${
                        active ? "bg-yellow-400 text-black" : "text-white"
                      }`}
                    >
                      HomePage (Public)
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/second-home"
                      className={`block px-4 py-2 ${
                        active ? "bg-yellow-400 text-black" : "text-white"
                      }`}
                    >
                      UserHome (Dashboard)
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Link
          to="/about-us"
          className="text-white text-lg font-semibold hover:text-yellow-400 transition"
        >
          About Us
        </Link>

        {/* Services Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center text-white text-lg font-semibold hover:text-yellow-400 transition">
            Services <FaChevronDown className="ml-1 text-xs" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-[#232323] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1">
                {servicesDropdown.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-yellow-400 text-black" : "text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Link
          to="/blog"
          className="text-white text-lg font-semibold hover:text-yellow-400 transition"
        >
          Blog
        </Link>
        <Link
          to="/contact-us"
          className="text-white text-lg font-semibold hover:text-yellow-400 transition"
        >
          Contact Us
        </Link>

        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode && setDarkMode((prev) => !prev)}
          className="text-white hover:text-yellow-400 transition"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white hover:text-yellow-400"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#232323] text-white p-6 flex flex-col space-y-4 md:hidden z-50">
          <Link to="/home" className="text-lg hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about-us" className="text-lg hover:text-yellow-400">
            About Us
          </Link>
          <div>
            <p className="text-yellow-400 font-semibold mb-2 text-lg">Services</p>
            <ul className="space-y-2">
              {servicesDropdown.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="block text-base hover:text-yellow-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/blog" className="text-lg hover:text-yellow-400">
            Blog
          </Link>
          <Link to="/contact-us" className="text-lg hover:text-yellow-400">
            Contact Us
          </Link>
          <button
            onClick={() => setDarkMode && setDarkMode((prev) => !prev)}
            className="text-white hover:text-yellow-400 transition"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      )}
    </header>
  );
}
