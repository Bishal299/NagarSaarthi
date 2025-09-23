import React from 'react';

const steps = [
  {
    icon: '📸',
    title: 'Snap & Submit',
    description: 'Capture the issue with a photo and provide details about the problem in your area.'
  },
  {
    icon: '📍',
    title: 'Autolocate & Describe',
    description: 'The app automatically detects your location and categorizes your issue for faster resolution.'
  },
  {
    icon: '🔄',
    title: 'Track & Receive Updates',
    description: 'Follow the status of your report and receive notifications when action is taken.'
  }
];

export function HowItWorks() {
  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: '#f8f9fa'
  };

  const containerStyle = {
    // maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '60px',
    color: '#2c3e50',
    fontWeight: 700
  };

  const stepsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap'
  };

  const stepStyle = {
    background: 'white',
    padding: '40px 30px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    flex: '1 1 300px',
    // maxWidth: '350px',
    transition: 'transform 0.3s ease'
  };

  const iconStyle = {
    fontSize: '3rem',
    marginBottom: '20px'
  };

  const stepTitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#2c3e50',
    fontWeight: 600
  };

  const stepDescStyle = {
    color: '#7f8c8d',
    lineHeight: 1.8
  };

  return (
    <section style={sectionStyle} id="how-it-works">
      <div style={containerStyle}>
        <h2 style={titleStyle}>How It Works</h2>
        <div style={stepsContainerStyle}>
          {steps.map((step, index) => (
            <div 
              key={index} 
              style={stepStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={iconStyle}>{step.icon}</div>
              <h3 style={stepTitleStyle}>{step.title}</h3>
              <p style={stepDescStyle}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
