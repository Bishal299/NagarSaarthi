


import React from 'react';

export function Header() {
  const headerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '8px 30px', // reduced vertical padding
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  };

  const logoStyle = {
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    objectFit: 'cover'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
    transition: 'color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer'
  };

  const mottoStyle = {
    fontSize: '1.4rem',
    fontWeight: 300,
    letterSpacing: '1px',
    margin: 0,
    textAlign: 'right',
    textShadow: "0 1px 2px rgba(0,0,0,0.3)"
    // maxWidth: '50%'
  };




  return (
    <header style={headerStyle}>
      <div style={leftSectionStyle}>
        <img
          src="/Subject.png"
          alt="NagarSaarthi Logo"
          style={logoStyle}
        />
        <h1
          style={titleStyle}
          onMouseEnter={e => {
            // e.target.style.color = '#ffd700';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.target.style.color = 'white';
            e.target.style.transform = 'scale(1)';
          }}
        >
          NagarSaarthi
        </h1>
      </div>
      <p style={mottoStyle}>Your city, your voice. Empowered.</p>
    </header>
  );
}