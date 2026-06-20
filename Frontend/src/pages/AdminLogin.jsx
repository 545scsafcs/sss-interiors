import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { API_ENDPOINTS } from "../config/api";
import "./AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate inputs
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(API_ENDPOINTS.ADMIN_LOGIN, {
        email: email.trim(),
        password,
      });

      if (response.data.success) {
        // Store token and admin data in context and localStorage
        login(response.data.token, response.data.admin);

        // Navigate to dashboard
        navigate("/admin/dashboard", { replace: true });
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.message === "Network Error") {
        setError("Network error. Please check your connection.");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-background"></div>

      <div className="admin-login-card">
        <div className="admin-login-header">
          <h1 className="admin-login-title">SSS Interiors</h1>
          <p className="admin-login-subtitle">Admin Portal</p>
        </div>

        <form onSubmit={handleLogin} className="admin-login-form">
          {/* Error Message */}
          {error && (
            <div className="admin-login-error">
              <span>{error}</span>
            </div>
          )}

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="button"
                className="show-password-btn"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? (
              <span className="loading-spinner">
                <span className="spinner"></span>
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="admin-login-footer">
          <p>Secured Admin Access • SSS Interiors © 2024</p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;