import React, { useState, useEffect } from 'react';
import './citizenprofile.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CitizenProfile = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: 'Priya Sharma',
    avatar: '👤',
    isVerified: true,
    totalReports: 12,
    resolvedReports: 8,
    points: 340,
    level: 'Community Champion',
    badges: [
      { name: 'First Reporter', icon: '🎯', earned: true },
      { name: 'Issue Resolver', icon: '✅', earned: true },
      { name: 'Photo Expert', icon: '📸', earned: true },
      { name: 'Community Hero', icon: '🏆', earned: false }
    ]
  });

  const [latestIssue, setLatestIssue] = useState({
    id: 'NGR-2045',
    title: 'Pothole on Main Street',
    location: 'Main Street, Sector 12',
    description: 'Large pothole causing traffic issues near bus stop',
    status: 'In Progress',
    reportedDate: '2025-09-18',
    photo: 'https://via.placeholder.com/400x300/3498db/ffffff?text=Pothole+Issue',
    priority: 'High',
    estimatedResolution: '2025-09-25'
  });

  const statusSteps = [
    { 
      id: 1, 
      name: 'Reported', 
      icon: '📝', 
      completed: true, 
      date: '2025-09-18',
      description: 'Issue submitted successfully'
    },
    { 
      id: 2, 
      name: 'Under Review', 
      icon: '👀', 
      completed: true, 
      date: '2025-09-19',
      description: 'Municipal team reviewing'
    },
    { 
      id: 3, 
      name: 'In Progress', 
      icon: '🔧', 
      completed: true, 
      date: '2025-09-20',
      description: 'Repair work started',
      active: true
    },
    { 
      id: 4, 
      name: 'Quality Check', 
      icon: '🔍', 
      completed: false, 
      date: 'Pending',
      description: 'Final inspection'
    },
    { 
      id: 5, 
      name: 'Resolved', 
      icon: '✅', 
      completed: false, 
      date: 'Pending',
      description: 'Issue fully resolved'
    }
  ];

  const handleSubmitReport = () => {
    // Navigate to report submission page
    navigate('/reportissue');
  };

  const handleViewAllReports = () => {
    // Navigate to all reports page
    console.log('Navigate to all reports');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Reported': return '#f39c12';
      case 'Under Review': return '#3498db';
      case 'In Progress': return '#9b59b6';
      case 'Quality Check': return '#e67e22';
      case 'Resolved': return '#27ae60';
      default: return '#95a5a6';
    }
  };

  const calculateProgress = () => {
    const completedSteps = statusSteps.filter(step => step.completed).length;
    return (completedSteps / statusSteps.length) * 100;
  };

  return (
    <div className="citizen-profile">
      {/* Header Section */}
      <div className="profile-header">
        <div className="user-info">
          <div className="user-avatar-container">
            <div className="user-avatar">{userData.avatar}</div>
            {userData.isVerified && <div className="verified-badge">✓</div>}
          </div>
          <div className="user-details">
            <h1 className="user-greeting">Hi, {userData.name}</h1>
            <p className="user-level">{userData.level}</p>
            <div className="user-stats">
              <span className="stat-item">
                <span className="stat-icon">📊</span>
                {userData.totalReports} Reports
              </span>
              <span className="stat-item">
                <span className="stat-icon">✅</span>
                {userData.resolvedReports} Resolved
              </span>
            </div>
          </div>
        </div>

        {/* Gamification Section */}
        <div className="gamification-section">
          <div className="points-container">
            <div className="points-circle">
              <span className="points-number">{userData.points}</span>
              <span className="points-label">Points</span>
            </div>
          </div>

          <div className="badges-container">
            <h3 className="badges-title">Your Badges</h3>
            <div className="badges-grid">
              {userData.badges.map((badge, index) => (
                <div key={index} className={`badge-item ${badge.earned ? 'earned' : 'locked'}`}>
                  <span className="badge-icon">{badge.icon}</span>
                  <span className="badge-name">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Latest Reported Issue Section */}
      <div className="latest-issue-section">
        <h2 className="section-title">
          <span className="title-icon">🔥</span>
          Latest Reported Issue
        </h2>

        <div className="issue-card">
          <div className="issue-photo-container">
            <img 
              src={latestIssue.photo} 
              alt={latestIssue.title}
              className="issue-photo"
            />
            <div className="issue-priority">
              <span className={`priority-badge ${latestIssue.priority.toLowerCase()}`}>
                {latestIssue.priority} Priority
              </span>
            </div>
          </div>

          <div className="issue-details">
            <div className="issue-header">
              <h3 className="issue-title">{latestIssue.title}</h3>
              <div className="issue-id">#{latestIssue.id}</div>
            </div>

            <p className="issue-location">
              <span className="location-icon">📍</span>
              {latestIssue.location}
            </p>

            <p className="issue-description">{latestIssue.description}</p>

            <div className="issue-meta">
              <div className="issue-date">
                <span className="meta-icon">📅</span>
                Reported: {new Date(latestIssue.reportedDate).toLocaleDateString()}
              </div>
              <div className="issue-status">
                <span 
                  className="status-indicator"
                  style={{ backgroundColor: getStatusColor(latestIssue.status) }}
                ></span>
                {latestIssue.status}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Issue Status Tracker */}
      <div className="status-tracker-section">
        <h2 className="section-title">
          <span className="title-icon">⏳</span>
          Issue Progress Tracker
        </h2>

        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
          <div className="progress-percentage">{Math.round(calculateProgress())}% Complete</div>
        </div>

        <div className="status-timeline">
          {statusSteps.map((step, index) => (
            <div 
              key={step.id} 
              className={`timeline-item ${step.completed ? 'completed' : ''} ${step.active ? 'active' : ''}`}
            >
              <div className="timeline-connector">
                {index < statusSteps.length - 1 && (
                  <div className={`connector-line ${step.completed ? 'completed' : ''}`}></div>
                )}
              </div>

              <div className="timeline-marker">
                <span className="timeline-icon">{step.icon}</span>
              </div>

              <div className="timeline-content">
                <h4 className="timeline-title">{step.name}</h4>
                <p className="timeline-description">{step.description}</p>
                <span className="timeline-date">{step.date}</span>
              </div>
            </div>
          ))}
        </div>

        {latestIssue.estimatedResolution && (
          <div className="estimated-resolution">
            <span className="estimate-icon">🎯</span>
            <span className="estimate-text">
              Estimated Resolution: {new Date(latestIssue.estimatedResolution).toLocaleDateString()}
            </span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button 
          className="action-btn primary-btn"
          onClick={handleSubmitReport}
        >
          <span className="btn-icon">🚀</span>
          Submit Another Report
        </button>

        <button 
          className="action-btn secondary-btn"
          onClick={handleViewAllReports}
        >
          <span className="btn-icon">📋</span>
          View All Your Reports
        </button>
      </div>

      {/* Quick Stats Footer */}
      <div className="quick-stats-footer">
        <div className="stat-box">
          <span className="stat-number">{userData.totalReports}</span>
          <span className="stat-label">Total Reports</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{Math.round((userData.resolvedReports / userData.totalReports) * 100)}%</span>
          <span className="stat-label">Success Rate</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{userData.points}</span>
          <span className="stat-label">Community Points</span>
        </div>
      </div>
    </div>
  );
};

export default CitizenProfile;