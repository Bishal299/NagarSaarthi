import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/LandingPage";
import Login from "./pages/Login/LoginPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CitizenProfile from "./pages/Citizen/CitizenProfile";
import ReportIssue from "./pages/ReportIssue/ReportIssue";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/citizen" element={<CitizenProfile />} />
        <Route path="/reportissue" element={<ReportIssue />} />
        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}


export default App;