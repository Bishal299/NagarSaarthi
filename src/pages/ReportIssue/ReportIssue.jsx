

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReportIssue.css';

const ReportIssuePage = () => {
  const [formData, setFormData] = useState({
    issueType: '',
    photo: null,
    description: '',
    location: '',
    coordinates: ''
  });

  const [issues, setIssues] = useState([
    {
      id: 'CIV-1001',
      type: 'Road Damage',
      location: 'Main Street, Downtown',
      description: 'Large pothole causing traffic issues',
      status: 'In Progress',
      votes: 23,
      reportedDate: '2 days ago'
    },
    {
      id: 'CIV-1002',
      type: 'Street Light',
      location: 'Park Avenue, Sector 5',
      description: 'Street light not working since last week',
      status: 'Pending',
      votes: 15,
      reportedDate: '4 days ago'
    },
    {
      id: 'CIV-1003',
      type: 'Waste Management',
      location: 'Green Valley, Block A',
      description: 'Garbage not collected for 3 days',
      status: 'Resolved',
      votes: 8,
      reportedDate: '1 week ago'
    },
    {
      id: 'CIV-1004',
      type: 'Water Supply',
      location: 'Oak Street, Residential',
      description: 'No water supply since morning',
      status: 'Pending',
      votes: 31,
      reportedDate: '1 day ago'
    }
  ]);

  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, photo: e.target.files[0] }));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            const address = data.display_name;
            setFormData((prev) => ({
              ...prev,
              location: address,
              coordinates: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
            }));
          } catch (err) {
            alert("Error fetching address: " + err.message);
          }
        },
        (error) => {
          alert("Error getting location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setAudioBlob(blob);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      alert("Microphone access denied: " + err.message);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Mandatory checks
    if (!formData.photo) {
      alert("Please upload or take a photo before submitting.");
      return;
    }
    if (!formData.location) {
      alert("Please fetch your current location before submitting.");
      return;
    }

    const newIssue = {
      id: `CIV-${1000 + issues.length + 1}`,
      type:
        formData.issueType === "road-damage"
          ? "Road Damage"
          : formData.issueType === "street-light"
          ? "Street Light"
          : formData.issueType === "waste-management"
          ? "Waste Management"
          : formData.issueType === "water-supply"
          ? "Water Supply"
          : formData.issueType === "noise-pollution"
          ? "Noise Pollution"
          : "Other",
      location: formData.location,
      description: formData.description,
      status: "Pending",
      votes: 0,
      reportedDate: "Just now",
      audio: audioBlob,
      photo: formData.photo ? URL.createObjectURL(formData.photo) : null,
    };

    setIssues(prev => [newIssue, ...prev]);
    alert('Issue reported successfully!');

    // reset form
    setFormData({ issueType: '', photo: null, description: '', location: '', coordinates: '' });
    setAudioBlob(null);
  };

  const handleUpvote = (id) => {
    setIssues(prev =>
      prev.map(issue =>
        issue.id === id ? { ...issue, votes: issue.votes + 1 } : issue
      )
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'In Progress': return 'status-progress';
      case 'Resolved': return 'status-resolved';
      default: return '';
    }
  };

  return (
    <div className="report-issue-page">
      <div className="header-card">
        <div className="header-left">
          <div className="logo-section">
            <div className="logo-icon">🏛️</div>
            <span className="logo-text">NagarSaarthi</span>
          </div>
          <p className="tagline">Empowering Citizens, Improving Communities</p>
        </div>
        <div className="header-buttons">
          <button
            className="btn-citizen-portal"
            onClick={() => navigate('/citizen')}
          >
            <span className="btn-icon">👤</span>
            Citizen Profile
          </button>
        </div>
      </div>

      <div className="form-card">
        <div className="form-header">
          <h2 className="form-title">
            <span className="title-icon">📝</span>
            Report an Issue
          </h2>
          <div className="title-divider"></div>
        </div>

        <div className="form-body">
          <form onSubmit={handleSubmit} className="issue-form">
            <div className="form-group">
              <select
                name="issueType"
                value={formData.issueType}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Select Issue Type</option>
                <option value="road-damage">Road Damage</option>
                <option value="street-light">Street Light</option>
                <option value="waste-management">Waste Management</option>
                <option value="water-supply">Water Supply</option>
                <option value="noise-pollution">Noise Pollution</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* 📸 Upload OR Take Photo */}
            <div className="form-group photo-group">
              {/* Upload Photo */}
              <div className="photo-upload">
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={handleFileChange}
                  className="form-file"
                  accept="image/*"
                />
                <label htmlFor="photo" className="file-label">
                  <span className="file-icon">📂</span>
                  {formData.photo ? formData.photo.name : 'Upload Photo'}
                </label>
              </div>

              {/* Take Photo */}
              <div className="photo-camera">
                <input
                  type="file"
                  id="camera"
                  name="camera"
                  accept="image/*"
                  capture="environment"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }))
                  }
                />
                <label htmlFor="camera" className="file-label">
                  <span className="file-icon">📷</span>
                  Take a Photo
                </label>
              </div>
            </div>

            {/* Photo Preview */}
            {formData.photo && (
              <div className="preview-photo">
                <img
                  src={URL.createObjectURL(formData.photo)}
                  alt="Preview"
                  style={{ maxWidth: "150px", marginTop: "8px", borderRadius: "8px" }}
                />
              </div>
            )}

            <div className="form-group">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the issue in detail..."
                className="form-textarea"
                rows="4"
                required
              />
            </div>

            {/* 🎤 Voice Recording */}
            <div className="form-group">
              <label className="voice-label">Voice Note (Optional)</label>
              {!isRecording ? (
                <button type="button" className="btn-voice" onClick={startRecording}>
                  🎤 Start Recording
                </button>
              ) : (
                <button type="button" className="btn-voice stop" onClick={stopRecording}>
                  ⏹ Stop Recording
                </button>
              )}

              {audioBlob && (
                <div className="audio-preview">
                  <audio controls src={URL.createObjectURL(audioBlob)} />
                </div>
              )}
            </div>

            {/* 📍 Location */}
            <div className="location-group">
              <button
                type="button"
                onClick={getCurrentLocation}
                className="btn-location"
              >
                <span className="btn-icon">📍</span>
                Get Current Location
              </button>

              {formData.location && (
                <p className="location-display">
                  📍 {formData.location} <br />
                  🌐 {formData.coordinates}
                </p>
              )}
            </div>

            <button type="submit" className="btn-submit">
              <span className="btn-icon">➤</span>
              Submit Report
            </button>
          </form>

          <div className="form-img">
            <img src="/NagarSaarthi/form img.png" alt="Report Illustration" />
          </div>
        </div>
      </div>

      {/* Recent Issues Section */}
      <div className="recent-issues-section">
        <h3 className="section-title">Recent Issues in Your Area</h3>
        <div className="issues-list">
          {issues.map((issue) => (
            <div key={issue.id} className="issue-card">
              <div className="issue-main">
                <div className="issue-id">
                  <a href="#" className="issue-link">{issue.id}</a>
                </div>
                <div className="issue-details">
                  <div className="issue-type">{issue.type}</div>
                  <div className="issue-location">{issue.location}</div>
                  <div className="issue-description">{issue.description}</div>
                  <div className="issue-date">{issue.reportedDate}</div>

                  {/* Photo Preview */}
                  {issue.photo && (
                    <div className="issue-photo">
                      <img
                        src={issue.photo}
                        alt="Issue"
                        style={{ maxWidth: "150px", marginTop: "8px", borderRadius: "8px" }}
                      />
                    </div>
                  )}

                  {/* Audio Preview */}
                  {issue.audio && (
                    <div className="issue-audio" style={{ marginTop: "8px" }}>
                      <audio controls src={URL.createObjectURL(issue.audio)} />
                    </div>
                  )}
                </div>
              </div>
              <div className="issue-actions">
                <div className={`status-badge ${getStatusClass(issue.status)}`}>
                  {issue.status}
                </div>
                <div
                  className="vote-counter"
                  onClick={() => handleUpvote(issue.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="vote-icon">👍</span>
                  <span className="vote-count">{issue.votes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportIssuePage;
