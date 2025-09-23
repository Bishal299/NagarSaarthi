


// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// export function Footer() {
//   const footerStyle = {
//     backgroundColor: '#2c3e50',
//     color: '#ecf0f1',
//     padding: '60px 20px 20px'
//   };

//   const containerStyle = {
//     maxWidth: '1200px',
//     margin: '0 auto'
//   };

//   const contentStyle = {
//     display: 'flex',
//     justifyContent: 'space-around',
//     gap: '40px',
//     marginBottom: '40px',
//     flexWrap: 'wrap'
//   };

//   const sectionStyle = {
//     minWidth: '250px',
//     flex: 1
//   };

//   const sectionTitleStyle = {
//     marginBottom: '20px',
//     color: '#3498db',
//     fontSize: '1.3rem'
//   };

//   const linkStyle = {
//     color: '#bdc3c7',
//     textDecoration: 'none',
//     display: 'block',
//     marginBottom: '10px',
//     transition: 'color 0.3s ease'
//   };

//   const socialLinksStyle = {
//     display: 'flex',
//     gap: '15px',
//     flexWrap: 'wrap'
//   };

//   const socialLinkStyle = {
//     padding: '10px',
//     backgroundColor: '#34495e',
//     borderRadius: '50%',
//     color: '#ecf0f1',
//     textDecoration: 'none',
//     fontSize: '1.2rem',
//     transition: 'background-color 0.3s ease'
//   };

//   const bottomStyle = {
//     textAlign: 'center',
//     paddingTop: '20px',
//     borderTop: '1px solid #34495e',
//     color: '#95a5a6'
//   };

//   return (
//     <footer style={footerStyle}>
//       <div style={containerStyle}>
//         <div style={contentStyle}>
//           <div style={sectionStyle}>
//             <h3 style={sectionTitleStyle}>Contact Us</h3>
//             <p>✉️ contact@nagarmitra.in</p>
//             <p>📞 +91-98765-43210</p>
//             <p>📍 New Delhi, India</p>
//           </div>
          
//           <div style={sectionStyle}>
//             <h3 style={sectionTitleStyle}>Quick Links</h3>
//             <a 
//               href="#about" 
//               style={linkStyle}
//               onMouseEnter={(e) => e.target.style.color = '#3498db'}
//               onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}
//             >
//               About Us
//             </a>
//             <a 
//               href="#privacy" 
//               style={linkStyle}
//               onMouseEnter={(e) => e.target.style.color = '#3498db'}
//               onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}
//             >
//               Privacy Policy
//             </a>
//             <a 
//               href="#terms" 
//               style={linkStyle}
//               onMouseEnter={(e) => e.target.style.color = '#3498db'}
//               onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}
//             >
//               Terms of Service
//             </a>
//             <a 
//               href="#help" 
//               style={linkStyle}
//               onMouseEnter={(e) => e.target.style.color = '#3498db'}
//               onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}
//             >
//               Help Center
//             </a>
//           </div>
          
//           <div style={sectionStyle}>
//             <h3 style={sectionTitleStyle}>Follow Us</h3>
//             <div style={socialLinksStyle}>
//               <a 
//                 href="#" 
//                 style={socialLinkStyle}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#34495e'}
//               >
//                 <FaFacebookF />
//               </a>
//               <a 
//                 href="#" 
//                 style={socialLinkStyle}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#34495e'}
//               >
//                 <FaTwitter />
//               </a>
//               <a 
//                 href="#" 
//                 style={socialLinkStyle}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#34495e'}
//               >
//                 <FaInstagram />
//               </a>
//               <a 
//                 href="#" 
//                 style={socialLinkStyle}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#34495e'}
//               >
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>
//         </div>
        
//         <div style={bottomStyle}>
//           <p>&copy; 2025 NagarMitra. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // X icon

export function Footer() {
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '60px 20px 20px'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '40px',
    marginBottom: '40px',
    flexWrap: 'wrap'
  };

  const sectionStyle = {
    minWidth: '250px',
    flex: 1
  };

  const sectionTitleStyle = {
    marginBottom: '20px',
    color: '#3498db',
    fontSize: '1.3rem'
  };

  const linkStyle = {
    color: '#bdc3c7',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    transition: 'color 0.3s ease'
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap'
  };

  const socialLinkStyle = {
    width: '45px',
    height: '45px',
    backgroundColor: '#34495e',
    borderRadius: '50%',
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1.3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease'
  };

  const bottomStyle = {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #34495e',
    color: '#95a5a6'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Contact Us</h3>
            <p>✉️ contact@nagarmitra.in</p>
            <p>📞 +91-98765-43210</p>
            <p>📍 New Delhi, India</p>
          </div>
          
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Quick Links</h3>
            <a 
              href="#about" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#3498db'}
              onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}
            >
              About Us
            </a>
            <a 
              href="#privacy" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#3498db'}
              onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#3498db'}
              onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}
            >
              Terms of Service
            </a>
            <a 
              href="#help" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = '#3498db'}
              onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}
            >
              Help Center
            </a>
          </div>
          
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Follow Us</h3>
            <div style={socialLinksStyle}>
              <a 
                href="#" 
                style={socialLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#34495e'}
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                style={socialLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#34495e'}
              >
                <FaXTwitter />
              </a>
              <a 
                href="#" 
                style={socialLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#34495e'}
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                style={socialLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#34495e'}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        
        <div style={bottomStyle}>
          <p>&copy; 2025 NagarMitra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
