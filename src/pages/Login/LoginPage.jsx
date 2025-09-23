import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

const LoginPage = () => {
  const [userType, setUserType] = useState('Citizen');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    adminId: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    setUserType(type);
    if (type === 'Citizen') {
      setFormData(prev => ({ ...prev, adminId: '' }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (userType === 'Admin' && !formData.adminId) {
      newErrors.adminId = 'Admin ID is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Since no backend authentication is needed, redirect based on user type
      if (userType === 'Citizen') {
        navigate('/citizen');
      } else {
        navigate('/admin');
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login to NagarSaarthi</h2>

        <div className="user-type-toggle">
          <button
            type="button"
            className={userType === 'Citizen' ? 'active' : ''}
            onClick={() => handleUserTypeChange('Citizen')}
          >
            👥 Citizen
          </button>
          <button
            type="button"
            className={userType === 'Admin' ? 'active' : ''}
            onClick={() => handleUserTypeChange('Admin')}
          >
            ⚙️ Admin
          </button>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="input-group password-group">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? 'error' : ''}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(prev => !prev)}
            title={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '👀' : '👁️'}
          </span>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        {userType === 'Admin' && (
          <div className="input-group admin-id">
            <input
              type="text"
              name="adminId"
              placeholder="Admin ID"
              value={formData.adminId}
              onChange={handleInputChange}
              className={errors.adminId ? 'error' : ''}
              required
            />
            {errors.adminId && <span className="error-message">{errors.adminId}</span>}
          </div>
        )}

        <button type="submit" className="login-button">
          Login →
        </button>

        <div className="form-footer">
          <a href="#forgot-password">Forgot Password?</a>
          <span className="divider">|</span>
          <a href="#register">New User? Register</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
