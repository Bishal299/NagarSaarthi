// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Add this import

// export function HeroSection() {
//   const navigate = useNavigate(); // Initialize navigate

//   const sectionStyle = {
//     background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/hero-img.jpg') center/cover",
//     height: '600px',
//     display: 'flex',
//     alignItems: 'center',
//     color: 'white',
//     textAlign: 'center',

//   };

//   const contentStyle = {
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '0 20px'
//   };

//   const titleStyle = {
//    fontSize: '3.5rem',
//     marginBottom: '20px',
//     fontWeight: 700,
//     textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
//   };

//   const subtitleStyle = {
//     fontSize: '1.3rem',
//     marginBottom: '40px',
//     fontWeight: 300,
//     textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
//   };

//   const buttonStyle = {
//     background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
//     color: 'white',
//     border: 'none',
//     padding: '18px 40px',
//     fontSize: '1.2rem',
//     fontWeight: 600,
//     borderRadius: '50px',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 4px 15px rgba(46, 204, 113, 0.4)'
//   };

//   const handleReportIssue = () => {
//     navigate('/reportissue'); // Navigate to ReportIssue page
//   };

//   return (
//     <section style={sectionStyle} id="home">
//       <div style={contentStyle}>
//         <h1 style={titleStyle}>Transform Your city Together</h1>
//         <p style={subtitleStyle}>
//           Report civic issues, track progress, and make your community better
//         </p>
//         <button 
//           style={buttonStyle} 
//           onClick={handleReportIssue}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-3px)';
//             e.target.style.boxShadow = '0 6px 20px rgba(46, 204, 113, 0.6)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 4px 15px rgba(46, 204, 113, 0.4)';
//           }}
//         >
//           Report a New Issue
//         </button>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  const sectionStyle = {
    position: "relative",
    height: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    overflow: "hidden",
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "url('/hero-img.jpg') center/cover no-repeat",
    zIndex: 0,
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(1.5px)",
    WebkitBackdropFilter: "blur(6px)", // Safari support
    zIndex: 1,
  };

  const contentStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 20px",
    position: "relative",
    zIndex: 2,
  };

  const titleStyle = {
    fontSize: "3.5rem",
    marginBottom: "20px",
    fontWeight: 700,
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  };

  const subtitleStyle = {
    fontSize: "1.3rem",
    marginBottom: "40px",
    fontWeight: 300,
    textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
  };

  const buttonStyle = {
    background: "linear-gradient(45deg, #27ae60, #2ecc71)",
    color: "white",
    border: "none",
    padding: "18px 40px",
    fontSize: "1.2rem",
    fontWeight: 600,
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(46, 204, 113, 0.4)",
  };

  const handleReportIssue = () => {
    navigate("/reportissue");
  };

  return (
    <section style={sectionStyle} id="home">
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Transform Your City Together</h1>
        <p style={subtitleStyle}>
          Report civic issues, track progress, and make your community better
        </p>
        <button
          style={buttonStyle}
          onClick={handleReportIssue}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow =
              "0 6px 20px rgba(46, 204, 113, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow =
              "0 4px 15px rgba(46, 204, 113, 0.4)";
          }}
        >
          Report a New Issue
        </button>
      </div>
    </section>
  );
}
