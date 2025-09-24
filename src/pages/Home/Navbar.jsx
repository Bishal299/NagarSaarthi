import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaQuestionCircle, FaTachometerAlt, FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "home", path: "/", icon: <FaHome />, label: "Home" },
    { name: "about", path: "/about", icon: <FaInfoCircle />, label: "About Us" },
    { name: "fAQs", path: "/fAQs", icon: <FaQuestionCircle />, label: "FAQs" },
    { name: "dashboard", path: "/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  ];

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-[#2c3e50] shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => handleLinkClick(link.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-white transition-all ${
                  activeLink === link.name
                    ? "bg-[#34495e] border-b-4 border-blue-500"
                    : "hover:bg-[#3d566e]"
                }`}
              >
                {link.icon} {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side login */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/login"
            onClick={() => handleLinkClick("login")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-white transition-all ${
              activeLink === "login"
                ? "bg-[#34495e] border-b-4 border-blue-500"
                : "hover:bg-[#3d566e]"
            }`}
          >
            <FaSignInAlt /> Sign In / Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2c3e50]">
          <ul className="flex flex-col gap-2 p-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => handleLinkClick(link.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-white transition-all ${
                    activeLink === link.name
                      ? "bg-[#34495e] border-l-4 border-blue-500"
                      : "hover:bg-[#3d566e]"
                  }`}
                >
                  {link.icon} {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                onClick={() => handleLinkClick("login")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-white transition-all ${
                  activeLink === "login"
                    ? "bg-[#34495e] border-l-4 border-blue-500"
                    : "hover:bg-[#3d566e]"
                }`}
              >
                <FaSignInAlt /> Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
