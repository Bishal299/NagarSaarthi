// AdminDashboard.jsx
import React, { useState, useEffect, useRef } from 'react';
import './AdminDashboard.css';

/* Leaflet & React-Leaflet */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

/* Fix default icon paths for many bundlers (CRA/Vite) */
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [issues, setIssues] = useState([]);
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState(3);
  const mapRef = useRef(null);

  // Mock data - add `coords: [lat, lng]` to each issue
  useEffect(() => {
    setIssues([
      {
        id: 'CIV-1001',
        type: 'Road Damage',
        location: 'Main Street, Downtown',
        description: 'Large pothole causing traffic issues',
        status: 'In Progress',
        priority: 'High',
        reportedBy: 'John Doe',
        reportedDate: '2025-09-18',
        assignedTo: 'Maintenance Team A',
        votes: 23,
        coords: [28.6139, 77.2090] // example: New Delhi
      },
      {
        id: 'CIV-1002',
        type: 'Street Light',
        location: 'Park Avenue, Sector 5',
        description: 'Street light not working since last week',
        status: 'Pending',
        priority: 'Medium',
        reportedBy: 'Sarah Johnson',
        reportedDate: '2025-09-16',
        assignedTo: 'Unassigned',
        votes: 15,
        coords: [19.0760, 72.8777] // example: Mumbai
      },
      {
        id: 'CIV-1003',
        type: 'Waste Management',
        location: 'Green Valley, Block A',
        description: 'Garbage not collected for 3 days',
        status: 'Resolved',
        priority: 'Low',
        reportedBy: 'Mike Wilson',
        reportedDate: '2025-09-13',
        assignedTo: 'Sanitation Dept',
        votes: 8,
        coords: [12.9716, 77.5946] // example: Bangalore
      },
      {
        id: 'CIV-1004',
        type: 'Water Supply',
        location: 'Oak Street, Residential',
        description: 'No water supply since morning',
        status: 'Pending',
        priority: 'High',
        reportedBy: 'Emma Davis',
        reportedDate: '2025-09-19',
        assignedTo: 'Unassigned',
        votes: 31,
        coords: [22.5726, 88.3639] // example: Kolkata
      }
    ]);

    setUsers([
      { id: 1, name: 'John Doe', email: 'john@email.com', role: 'Citizen', joinDate: '2025-01-15', status: 'Active', issuesReported: 3 },
      { id: 2, name: 'Sarah Johnson', email: 'sarah@email.com', role: 'Citizen', joinDate: '2025-02-20', status: 'Active', issuesReported: 7 },
      { id: 3, name: 'Mike Wilson', email: 'mike@email.com', role: 'Citizen', joinDate: '2025-03-10', status: 'Inactive', issuesReported: 2 },
      { id: 4, name: 'Emma Davis', email: 'emma@email.com', role: 'Citizen', joinDate: '2025-04-05', status: 'Active', issuesReported: 12 }
    ]);
  }, []);

  const handleStatusChange = (issueId, newStatus) => {
    setIssues(prev => prev.map(issue =>
      issue.id === issueId ? { ...issue, status: newStatus } : issue
    ));
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'In Progress': return 'status-progress';
      case 'Resolved': return 'status-resolved';
      default: return '';
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return '';
    }
  };

  const stats = {
    totalIssues: issues.length,
    pendingIssues: issues.filter(issue => issue.status === 'Pending').length,
    inProgressIssues: issues.filter(issue => issue.status === 'In Progress').length,
    resolvedIssues: issues.filter(issue => issue.status === 'Resolved').length,
    totalUsers: users.length,
    activeUsers: users.filter(user => user.status === 'Active').length
  };

  // compute a simple center (average of coords) or fallback to India center
  const computeCenter = () => {
    const withCoords = issues.filter(i => Array.isArray(i.coords));
    if (withCoords.length === 0) return [20.5937, 78.9629];
    const avg = withCoords.reduce((acc, cur) => {
      acc[0] += cur.coords[0];
      acc[1] += cur.coords[1];
      return acc;
    }, [0,0]);
    return [avg[0] / withCoords.length, avg[1] / withCoords.length];
  };

  const mapCenter = computeCenter();

  // zoom/pan to a selected issue (called when clicking a table row)
  const handleZoomTo = (coords) => {
    if (!coords || !mapRef.current) return;
    try {
      mapRef.current.setView(coords, 14, { animate: true });
    } catch (e) {
      // Map not ready -> ignore
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🏛️</span>
            <span className="logo-text">NagarSaarthi</span>
          </div>
          <div className="admin-badge">Admin Panel</div>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="nav-icon">📊</span>
            Overview
          </button>
          <button
            className={`nav-item ${activeTab === 'issues' ? 'active' : ''}`}
            onClick={() => setActiveTab('issues')}
          >
            <span className="nav-icon">🎯</span>
            Issue Management
          </button>
          <button
            className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <span className="nav-icon">👥</span>
            User Management
          </button>
          <button
            className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            <span className="nav-icon">📈</span>
            Reports & Analytics
          </button>
          <button
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <span className="nav-icon">⚙️</span>
            Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <h1 className="page-title">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'issues' && 'Issue Management'}
              {activeTab === 'users' && 'User Management'}
              {activeTab === 'reports' && 'Reports & Analytics'}
              {activeTab === 'settings' && 'System Settings'}
            </h1>
          </div>
          <div className="header-right">
            <div className="notification-bell">
              <span className="bell-icon">🔔</span>
              {notifications > 0 && <span className="notification-count">{notifications}</span>}
            </div>
            <div className="admin-profile">
              <span className="admin-avatar">👤</span>
              <span className="admin-name">Admin User</span>
            </div>
          </div>
        </header>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="overview-content">
            <div className="stats-grid">
              <div className="stat-card total">
                <div className="stat-icon">📋</div>
                <div className="stat-info">
                  <h3>Total Issues</h3>
                  <p className="stat-number">{stats.totalIssues}</p>
                </div>
              </div>
              <div className="stat-card pending">
                <div className="stat-icon">⏳</div>
                <div className="stat-info">
                  <h3>Pending Issues</h3>
                  <p className="stat-number">{stats.pendingIssues}</p>
                </div>
              </div>
              <div className="stat-card progress">
                <div className="stat-icon">🔄</div>
                <div className="stat-info">
                  <h3>In Progress</h3>
                  <p className="stat-number">{stats.inProgressIssues}</p>
                </div>
              </div>
              <div className="stat-card resolved">
                <div className="stat-icon">✅</div>
                <div className="stat-info">
                  <h3>Resolved Issues</h3>
                  <p className="stat-number">{stats.resolvedIssues}</p>
                </div>
              </div>
              <div className="stat-card users">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <h3>Total Users</h3>
                  <p className="stat-number">{stats.totalUsers}</p>
                </div>
              </div>
              <div className="stat-card active-users">
                <div className="stat-icon">🟢</div>
                <div className="stat-info">
                  <h3>Active Users</h3>
                  <p className="stat-number">{stats.activeUsers}</p>
                </div>
              </div>
            </div>

            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon">🆕</span>
                  <span className="activity-text">New issue reported: Water Supply (CIV-1004)</span>
                  <span className="activity-time">2 hours ago</span>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">🔄</span>
                  <span className="activity-text">Issue CIV-1001 status changed to In Progress</span>
                  <span className="activity-time">4 hours ago</span>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">✅</span>
                  <span className="activity-text">Issue CIV-1003 marked as Resolved</span>
                  <span className="activity-time">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Issues Management Tab (with map) */}
        {activeTab === 'issues' && (
          <div className="issues-content">
            {/* Map box */}
            <div className="issues-map" aria-hidden={false}>
              <MapContainer
                center={mapCenter}
                zoom={5}
                style={{ height: '100%', width: '100%' }}
                whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />

                {issues.map(issue => (
                  Array.isArray(issue.coords) ? (
                    <Marker key={issue.id} position={issue.coords}>
                      <Popup>
                        <div style={{ minWidth: 200 }}>
                          <h4 style={{ margin: 0 }}>{issue.type} — {issue.id}</h4>
                          <p style={{ margin: '6px 0' }}>{issue.description}</p>
                          <p style={{ margin: 0, fontSize: 13 }}>
                            <strong>Location:</strong> {issue.location}<br/>
                            <strong>Priority:</strong> {issue.priority} • <strong>Status:</strong> {issue.status}<br/>
                            <strong>Reported By:</strong> {issue.reportedBy} • <strong>Date:</strong> {issue.reportedDate}
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  ) : null
                ))}
              </MapContainer>
            </div>

            {/* Filters + search (kept simple) */}
            <div className="content-header">
              <div className="filters">
                <select className="filter-select">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
                <select className="filter-select">
                  <option>All Priorities</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
                <input type="text" placeholder="Search issues..." className="search-input" />
              </div>
            </div>

            <div className="issues-table" role="table" aria-label="Issues table">
              <div className="table-header">
                <div className="header-cell">Issue ID</div>
                <div className="header-cell type-location">Type & Location</div>
                <div className="header-cell">Priority</div>
                <div className="header-cell">Status</div>
                <div className="header-cell">Assigned To</div>
                <div className="header-cell">Actions</div>
              </div>

              {issues.map(issue => (
                <div
                  key={issue.id}
                  className="table-row"
                  onClick={() => handleZoomTo(issue.coords)}
                  title="Click to zoom to this issue on map"
                >
                  <div className="table-cell">
                    <span className="issue-id">{issue.id}</span>
                    <span className="votes">👍 {issue.votes}</span>
                  </div>
                  <div className="table-cell">
                    <div className="issue-info">
                      <span className="issue-type">{issue.type}</span>
                      <span className="issue-location">{issue.location}</span>
                    </div>
                  </div>
                  <div className="table-cell">
                    <span className={`priority-badge ${getPriorityClass(issue.priority)}`}>
                      {issue.priority}
                    </span>
                  </div>
                  <div className="table-cell">
                    <select
                      value={issue.status}
                      onChange={(e) => { e.stopPropagation(); handleStatusChange(issue.id, e.target.value); }}
                      className={`status-select ${getStatusClass(issue.status)}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>
                  <div className="table-cell">
                    <span className="assigned-to">{issue.assignedTo}</span>
                  </div>
                  <div className="table-cell">
                    <button className="action-btn view" onClick={(e) => e.stopPropagation()}>👁️</button>
                    <button className="action-btn edit" onClick={(e) => e.stopPropagation()}>✏️</button>
                    <button className="action-btn delete" onClick={(e) => e.stopPropagation()}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Users, Reports, Settings (unchanged, kept for brevity)  */}
        {activeTab === 'users' && (
          <div className="users-content">
            <div className="content-header">
              <div className="filters">
                <select className="filter-select">
                  <option>All Users</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <input type="text" placeholder="Search users..." className="search-input" />
              </div>
              <button className="add-btn">+ Add User</button>
            </div>

            <div className="users-table">
              <div className="table-header">
                <div className="header-cell">User Info</div>
                <div className="header-cell">Email</div>
                <div className="header-cell">Role</div>
                <div className="header-cell">Join Date</div>
                <div className="header-cell ">Issues Reported</div>
                <div className="header-cell">Status</div>
                <div className="header-cell">Actions</div>
              </div>

              {users.map(user => (
                <div key={user.id} className="table-row">
                  <div className="table-cell">
                    <div className="user-info">
                      <span className="user-avatar">👤</span>
                      <span className="user-name">{user.name}</span>
                    </div>
                  </div>
                  <div className="table-cell user-email">{user.email}</div>
                  <div className="table-cell">
                    <span className="role-badge">{user.role}</span>
                  </div>
                  <div className="table-cell user-date">{user.joinDate}</div>
                  <div className="table-cell">
                    <span className="issues-count">{user.issuesReported}</span>
                  </div>
                  <div className="table-cell">
                    <span className={`user-status ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </div>
                  <div className="table-cell">
                    <button className="action-btn view">👁️</button>
                    <button className="action-btn edit">✏️</button>
                    <button className="action-btn delete">🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* // Reports Tab */}
        {activeTab === 'reports' && (
          <div className="reports-content">
            <div className="reports-grid">
              <div className="report-card">
                <h3>📊 Issue Statistics</h3>
                <p>Comprehensive analytics on issue types, resolution times, and trends</p>
                <button className="generate-btn">Generate Report</button>
              </div>
              <div className="report-card">
                <h3>📈 Performance Metrics</h3>
                <p>Team performance, response times, and efficiency metrics</p>
                <button className="generate-btn">Generate Report</button>
              </div>
              <div className="report-card">
                <h3>👥 User Activity</h3>
                <p>User engagement, reporting patterns, and satisfaction surveys</p>
                <button className="generate-btn">Generate Report</button>
              </div>
              <div className="report-card">
                <h3>🗺️ Geographic Analysis</h3>
                <p>Location-based issue distribution and hotspot identification</p>
                <button className="generate-btn">Generate Report</button>
              </div>
            </div>
          </div>
        )}


         
        {activeTab === 'settings' && (
          <div className="settings-content">
            <div className="settings-sections">
              <div className="settings-section">
                <h3>System Configuration</h3>
                <div className="setting-item">
                  <label>Auto-assign issues to teams</label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="setting-item">
                  <label>Email notifications for new issues</label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="setting-item">
                  <label>Maximum file upload size (MB)</label>
                  <input type="number" defaultValue="10" />
                </div>
              </div>

              <div className="settings-section">
                <h3>User Management</h3>
                <div className="setting-item">
                  <label>Allow user registration</label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="setting-item">
                  <label>Require email verification</label>
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
            </div>

            <button className="save-settings-btn">Save Settings</button>
          </div>
        )}
      </div>
    </div>
  );
};


export default AdminDashboard;  