import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { API_ENDPOINTS } from "../config/api";
import "./Dashboard.css";

function Dashboard() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterService, setFilterService] = useState("all");
  const [selectedLead, setSelectedLead] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(null);

  // Get unique services for filter
  const services = ["all", ...new Set(leads.map((lead) => lead.service))];

  // Fetch leads on component mount

  

  // Apply filters whenever leads, search, or filter changes
  const fetchLeads = async () => {
  setLoading(true);
  setError("");

  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      API_ENDPOINTS.LEADS_GET,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success) {
      setLeads(response.data.data);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

// eslint-disable-next-line react-hooks/exhaustive-deps
const applyFilters = () => {
  let filtered = leads;

  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();

    filtered = filtered.filter(
      (lead) =>
        lead.name.toLowerCase().includes(term) ||
        lead.email.toLowerCase().includes(term) ||
        lead.phone.includes(term)
    );
  }

  if (filterService !== "all") {
    filtered = filtered.filter(
      (lead) => lead.service === filterService
    );
  }

  setFilteredLeads(filtered);
};

useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchLeads();
  }, []);


useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  applyFilters();
}, [leads, searchTerm, filterService, applyFilters]);

    

  const handleViewLead = (lead) => {
    setSelectedLead(lead);
    setShowModal(true);
  };

  const handleDeleteLead = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead? This action cannot be undone."
    );

    if (!confirmDelete) return;

    setDeleteLoading(id);

    try {
      const token = localStorage.getItem("token");

      const response = await axios.delete(API_ENDPOINTS.LEADS_DELETE(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setLeads(leads.filter((lead) => lead._id !== id));
        setShowModal(false);
      }
    } catch (error) {
      console.error("Delete lead error:", error);
      setError("Failed to delete lead. Please try again.");

      if (error.response?.status === 401) {
        logout();
        navigate("/admin/login", { replace: true });
      }
    } finally {
      setDeleteLoading(null);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(
  sevenDaysAgo.getDate() - 7
);

const newLeadsCount = leads.filter(
  (lead) =>
    new Date(lead.createdAt) > sevenDaysAgo
).length;

  const whatsappLeads = leads.filter((lead) => lead.phone).length;

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-left">
          <h1 className="dashboard-logo">SSS Interiors</h1>
          <p className="dashboard-tagline">Admin Dashboard</p>
        </div>

        <div className="dashboard-header-right">
          <div className="admin-info">
            <span className="admin-email">{admin?.email || "Admin"}</span>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
          {showModal && selectedLead && (
  <div className="modal-overlay">
    <div className="modal-content">

      <h2>Lead Details</h2>

      <p>
        <strong>Name:</strong> {selectedLead.name}
      </p>

      <p>
        <strong>Phone:</strong> {selectedLead.phone}
      </p>

      <p>
        <strong>Email:</strong> {selectedLead.email}
      </p>

      <p>
        <strong>Service:</strong> {selectedLead.service}
      </p>

      <p>
        <strong>Message:</strong> {selectedLead.message}
      </p>

      <button
        className="close-btn"
        onClick={() => setShowModal(false)}
      >
        Close
      </button>

    </div>
  </div>
)}
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-content">
        {/* Error Message */}
        {error && (
          <div className="error-alert">
            <span>{error}</span>
            <button onClick={() => setError("")}>✕</button>
          </div>
        )}

        {/* Stats Cards */}
        <section className="stats-section">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{leads.length}</h3>
              <p>Total Leads</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h3>{newLeadsCount}</h3>
              <p>New Leads (7 days)</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">💬</div>
            <div className="stat-content">
              <h3>{whatsappLeads}</h3>
              <p>WhatsApp Leads</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🌐</div>
            <div className="stat-content">
              <h3>{leads.length - whatsappLeads}</h3>
              <p>Website Leads</p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="search-filter-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <select
            value={filterService}
            onChange={(e) => setFilterService(e.target.value)}
            className="filter-select"
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service === "all" ? "All Services" : service}
              </option>
            ))}
          </select>

          <span className="results-count">
            {filteredLeads.length} of {leads.length} leads
          </span>
        </section>

        {/* Leads Table */}
        <section className="leads-section">
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading leads...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              <h3>No Leads Found</h3>
              <p>
                {leads.length === 0
                  ? "No leads yet. Check back soon!"
                  : "Try adjusting your search or filter."}
              </p>
            </div>
          ) : (
            <div className="table-wrapper">
              <table className="leads-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead._id}>
                      <td className="name-cell">
                        <strong>{lead.name}</strong>
                      </td>
                      <td className="contact-cell">
                        <div>{lead.email}</div>
                        <div className="phone">{lead.phone}</div>
                      </td>
                      <td className="service-cell">
                        <span className="service-badge">{lead.service}</span>
                      </td>
                      <td className="date-cell">
                        {formatDate(lead.createdAt)}
                      </td>
                      <td className="action-cell">
                        <button
                          className="view-btn"
                          onClick={() => handleViewLead(lead)}
                          title="View Details"
                        >
                          View
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteLead(lead._id)}
                          disabled={deleteLoading === lead._id}
                          title="Delete Lead"
                        >
                          {deleteLoading === lead._id ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      {/* Lead Details Modal */}
      {showModal && selectedLead && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Lead Details</h2>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-field">
                <label>Name</label>
                <p>{selectedLead.name}</p>
              </div>

              <div className="modal-field">
                <label>Email</label>
                <p>
                  <a href={`mailto:${selectedLead.email}`}>
                    {selectedLead.email}
                  </a>
                </p>
              </div>

              <div className="modal-field">
                <label>Phone</label>
                <p>
                  <a href={`tel:${selectedLead.phone}`}>{selectedLead.phone}</a>
                </p>
              </div>

              <div className="modal-field">
                <label>Service</label>
                <p>{selectedLead.service}</p>
              </div>

              <div className="modal-field">
                <label>Message</label>
                <p className="message-text">{selectedLead.message}</p>
              </div>

              <div className="modal-field">
                <label>Received Date</label>
                <p>{formatDate(selectedLead.createdAt)}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="modal-delete-btn"
                onClick={() => handleDeleteLead(selectedLead._id)}
                disabled={deleteLoading === selectedLead._id}
              >
                {deleteLoading === selectedLead._id ? "Deleting..." : "Delete Lead"}
              </button>
              <button
                className="modal-close-btn"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;