import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userType, setUserType] = useState("Citizen");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    adminId: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    setUserType(type);
    if (type === "Citizen") setFormData((prev) => ({ ...prev, adminId: "" }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    if (userType === "Admin" && !formData.adminId) newErrors.adminId = "Admin ID is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      navigate(userType === "Citizen" ? "/citizen" : "/admin");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login to NagarSaarthi
        </h2>

        {/* User Type Toggle */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            className={`px-4 py-2 rounded-lg font-medium transition ${
              userType === "Citizen"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleUserTypeChange("Citizen")}
          >
            👥 Citizen
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg font-medium transition ${
              userType === "Admin"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleUserTypeChange("Admin")}
          >
            ⚙️ Admin
          </button>
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-2/4 -translate-y-2/4 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "👀" : "👁️"}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Admin ID */}
        {userType === "Admin" && (
          <div className="mb-4">
            <input
              type="text"
              name="adminId"
              placeholder="Admin ID"
              value={formData.adminId}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                errors.adminId ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.adminId && (
              <p className="text-red-500 text-sm mt-1">{errors.adminId}</p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium mt-4 hover:bg-blue-700 transition"
        >
          Login →
        </button>

        <div className="flex justify-center gap-2 mt-4 text-sm text-gray-600">
          <a href="#forgot-password" className="hover:text-blue-600 transition">
            Forgot Password?
          </a>
          <span>|</span>
          <a href="#register" className="hover:text-blue-600 transition">
            New User? Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
