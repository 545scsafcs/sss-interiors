import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { API_ENDPOINTS } from "../config/api";
import "./Admin.css";

/**
 * DEPRECATED: This page has been replaced by Dashboard.jsx
 * This file is kept for backward compatibility only.
 * All new admin features should use Dashboard.jsx
 */

function Admin() {
  const { logout } = useAuth();
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const loadLeads = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(API_ENDPOINTS.LEADS_GET, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setLeads(res.data.data);
      }
    } catch (error) {
      console.log("Error loading leads:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadLeads();
  }, []);

  const deleteLead = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(API_ENDPOINTS.LEADS_DELETE(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      loadLeads();
    } catch (error) {
      console.log("Error deleting lead:", error);
    }
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 className="admin-title">
          SSS Interiors Admin Dashboard
        </h1>

        <button
          onClick={() => {
            logout();
            window.location.href = "/admin/login";
          }}
          style={{
            background: "#c79a63",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Logout
        </button>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h2>{leads.length}</h2>
          <p>Total Leads</p>
        </div>

        <div className="stat-card">
          <h2>{filteredLeads.length}</h2>
          <p>Visible Leads</p>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search by name or email..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Service</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.name}</td>
                <td>{lead.phone}</td>
                <td>{lead.email}</td>
                <td>{lead.service}</td>
                <td>{lead.message}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteLead(lead._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;