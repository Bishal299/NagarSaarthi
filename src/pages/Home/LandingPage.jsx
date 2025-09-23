import React from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { HowItWorks } from './HowItWorks';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';

export default function LandingPage() {
  const appStyle = {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: 1.6,
    color: '#333',
    margin: 0,
    padding: 0
  };

  return (
    <div style={appStyle}>
      <Header />
      <Navbar/>
      <HeroSection />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
