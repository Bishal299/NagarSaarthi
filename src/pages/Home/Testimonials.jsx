
import React from 'react';

const reports = [
  { description: 'Dumped garden rubbish', timestamp: '18:20 today' },
  { description: 'Broken streetlight near park', timestamp: '16:45 today' },
  { description: 'Overflowing garbage bin', timestamp: '15:30 today' },
  { description: 'Pothole on 5th Avenue', timestamp: '14:10 today' },
  { description: 'Graffiti on community center wall', timestamp: '12:50 today' }
];

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Local Resident',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    quote: 'NagarMitra has made it so easy to report issues in our neighborhood!'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Community Leader',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    quote: 'This platform has revolutionized how we engage with city officials!'
  },
  {
    id: 3,
    name: 'Dr. Meera Patel',
    role: 'City Official',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    quote: 'NagarMitra helps us address citizen concerns more effectively!'
  }
];

export function Testimonials() {
  const sectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: 0
  };

  const statsContainerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '25px 15px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  };

  const maxWidthStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const statsFlexStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
    flexWrap: 'wrap'
  };

  const statisticsWrapperStyle = {
    flex: 1,
    minWidth: '300px'
  };

  const reportsWrapperStyle = {
    flex: 1,
    minWidth: '300px'
  };

  const headingStyle = {
    color: '#ecf0f1',
    fontSize: '1.6rem',
    fontWeight: 600,
    marginBottom: '20px'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginBottom: '40px'
  };

  const listItemStyle = {
    marginBottom: '18px'
  };

  const problemDescStyle = {
    color: '#ecf0f1',
    fontSize: '1rem',
    marginBottom: '4px'
  };

  const timestampStyle = {
    color: '#bdc3c7',
    fontSize: '0.85rem'
  };

  const separatorStyle = {
    border: 'none',
    borderTop: '8px solid #3498db',
    margin: '30px 0'
  };

  const statisticsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const statStyle = {
    flex: 1,
    textAlign: 'center',
    minWidth: '200px'
  };

  const numberStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: '6px'
  };

  const labelStyle = {
    fontSize: '0.9rem',
    color: '#bdc3c7'
  };

  const testimonialsContainerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '30px 20px'
  };

  const testimonialsTitleStyle = {
    textAlign: 'center',
    fontSize: '2.2rem',
    marginBottom: '40px',
    color: '#2c3e50',
    fontWeight: 700
  };

  const testimonialsGridStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const testimonialCardStyle = {
    background: 'white',
    padding: '25px 20px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    flex: '1 1 300px',
    maxWidth: '350px',
    transition: 'all 0.3s ease'
  };

  const photoStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    marginBottom: '20px',
    border: '3px solid #3498db'
  };

  const quoteStyle = {
    fontSize: '1rem',
    fontStyle: 'italic',
    color: '#5d6d7e',
    marginBottom: '20px',
    lineHeight: 1.6
  };

  const nameStyle = {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '5px'
  };

  const roleStyle = {
    color: '#3498db',
    fontWeight: 500,
    fontSize: '0.9rem'
  };


  return (
    <section style={sectionStyle}>
      {/* Civic Statistics + Reports */}
      <div style={statsContainerStyle}>
        <div style={maxWidthStyle}>
          <div style={statsFlexStyle}>
            {/* Left: Statistics */}
            <div style={statisticsWrapperStyle}>
              <hr style={separatorStyle} />
              <div style={statisticsContainerStyle}>
                <div style={statStyle}>
                  <div style={numberStyle}>22,389</div>
                  <div style={labelStyle}>reports in past week</div>
                </div>
                <div style={statStyle}>
                  <div style={numberStyle}>48,806</div>
                  <div style={labelStyle}>fixed in past month</div>
                </div>
                <div style={statStyle}>
                  <div style={numberStyle}>12,740,927</div>
                  <div style={labelStyle}>updates on reports</div>
                </div>
              </div>
            </div>

            {/* Right: Recently Reported Problems */}
            <div style={reportsWrapperStyle}>
              <h2 style={headingStyle}>Recently reported problems</h2>
              <ul style={listStyle}>
                {reports.map((report, index) => (
                  <li key={index} style={listItemStyle}>
                    <div style={problemDescStyle}>{report.description}</div>
                    <div style={timestampStyle}>{report.timestamp}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={testimonialsContainerStyle}>
        <div style={maxWidthStyle}>
          <h2 style={testimonialsTitleStyle}>What Our Users Say</h2>
          <div style={testimonialsGridStyle}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                style={testimonialCardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
              >
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  style={photoStyle}
                />
                <blockquote style={quoteStyle}>
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <h4 style={nameStyle}>{testimonial.name}</h4>
                  <p style={roleStyle}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
  