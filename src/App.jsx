import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/LandingPage";
import Login from "./pages/Login/LoginPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CitizenProfile from "./pages/Citizen/CitizenProfile";
import AboutUs from "./pages/AboutUs"; 
import FAQ from "./pages/FAQ"; 

import ReportIssue from "./pages/ReportIssue/ReportIssue";
import { NagarSaarthiChatbot } from "./pages/Home/NagarSaarthiChatbot";

function AppWrapper() {
  const location = useLocation();
  const [chatOpen, setChatOpen] = useState(false);

  // Don't show chatbot or floating button on login and FAQs page
  const showChat = location.pathname !== "/login" && location.pathname !== "/faqs";


  return (

    <>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<AdminDashboard />} />
  <Route path="/citizen" element={<CitizenProfile />} />
  <Route path="/reportissue" element={<ReportIssue />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/faqs" element={<FAQ />} />   

  <Route path="*" element={<Navigate to="/" />} />
</Routes>



      {showChat && (
        <>
          <NagarSaarthiChatbot open={chatOpen} setOpen={setChatOpen} />

          <button
            onClick={() => setChatOpen(true)}
            className={`fixed bottom-6 right-6 z-50 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow-lg flex items-center gap-2
              transition-all duration-300 ease-in-out
              ${chatOpen ? "opacity-0 translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"}
            `}
          >
            💬 Chat
          </button>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
