// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export function Navbar() {
//   const [activeLink, setActiveLink] = useState('home');

//   const navStyle = {
//     backgroundColor: '#2c3e50',
//     padding: '0 30px',
//     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   };

//   const ulStyle = {
//     display: 'flex',
//     listStyle: 'none',
//     margin: 0,
//     padding: 0
//   };

//   const getLinkStyle = (isActive) => ({
//     display: 'block',
//     padding: '14px 24px',
//     margin: '0 4px',
//     color: '#ecf0f1',
//     textDecoration: 'none',
//     fontWeight: 500,
//     borderRadius: '6px',
//     transition: 'all 0.3s ease',
//     borderBottom: isActive ? '3px solid #3498db' : '3px solid transparent',
//     backgroundColor: isActive ? '#34495e' : 'transparent',
//     cursor: 'pointer',
//     // Hover effect
//     ':hover': {
//       backgroundColor: 'blue',
//       color:'blue',
//       transform: 'scale(1.02)'
//     }
//   });

//   const handleLinkClick = (linkName) => {
//     setActiveLink(linkName);
//   };

//   return (
//     <nav style={navStyle}>
//       {/* Left side links */}
//       <ul style={ulStyle}>
//         {['home', 'about', 'fAQs', 'dashboard'].map((link) => (
//           <li key={link}>
//             <Link
//               to={`/${link === 'home' ? '' : link}`}
//               style={getLinkStyle(activeLink === link)}
//               onClick={() => handleLinkClick(link)}
//             >
//               {link === 'about' ? 'About Us' : link.charAt(0).toUpperCase() + link.slice(1)}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Right side login */}
//       <ul style={ulStyle}>
//         <li style={{ marginLeft: '20px' }}>
//           <Link
//             to="/login"
//             style={getLinkStyle(activeLink === 'login')}
//             onClick={() => handleLinkClick('login')}
//           >
//             🔐 Sign In / Log In
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaQuestionCircle, FaTachometerAlt, FaSignInAlt } from "react-icons/fa";
import "./Navbar.css"; // <-- external CSS for hover

export function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  const navStyle = {
    backgroundColor: "#2c3e50",
    padding: "0 30px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const ulStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const getLinkStyle = (isActive) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 20px",
    margin: "0 4px",
    color: "#ecf0f1",
    textDecoration: "none",
    fontWeight: 600,
    borderRadius: "6px",
    transition: "all 0.3s ease",
    borderBottom: isActive ? "3px solid #3498db" : "3px solid transparent",
    backgroundColor: isActive ? "#34495e" : "transparent",
    cursor: "pointer",
  });

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav style={navStyle}>
      {/* Left side links */}
      <ul style={ulStyle}>
        <li>
          <Link
            to="/"
            style={getLinkStyle(activeLink === "home")}
            onClick={() => handleLinkClick("home")}
            className="nav-link"
          >
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={getLinkStyle(activeLink === "about")}
            onClick={() => handleLinkClick("about")}
            className="nav-link"
          >
            <FaInfoCircle /> About Us
          </Link>
        </li>
        <li>
          <Link
            to="/fAQs"
            style={getLinkStyle(activeLink === "fAQs")}
            onClick={() => handleLinkClick("fAQs")}
            className="nav-link"
          >
            <FaQuestionCircle /> FAQs
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            style={getLinkStyle(activeLink === "dashboard")}
            onClick={() => handleLinkClick("dashboard")}
            className="nav-link"
          >
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
      </ul>

      {/* Right side login */}
      <ul style={ulStyle}>
        <li style={{ marginLeft: "20px" }}>
          <Link
            to="/login"
            style={getLinkStyle(activeLink === "login")}
            onClick={() => handleLinkClick("login")}
            className="nav-link"
          >
            <FaSignInAlt /> Sign In / Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
}
