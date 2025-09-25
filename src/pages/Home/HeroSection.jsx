import React from 'react';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  const handleReportIssue = () => {
    navigate("/reportissue");
  };

  return (
    <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden" id="home">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/NagarSaarthi/hero-img.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" style={{
          backdropFilter: "blur(1.5px)",
          WebkitBackdropFilter: "blur(1.5px)", // Safari support
      }}></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-5 text-white drop-shadow-lg">
          Transform Your City Together
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 text-white drop-shadow-md">
          Report civic issues, track progress, and make your community better
        </p>
        <button
          onClick={handleReportIssue}
          className="bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 
                     text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg 
                     transition-all transform hover:-translate-y-1 hover:shadow-2xl"
        >
          Report a New Issue
        </button>
      </div>
    </section>
  );
}
