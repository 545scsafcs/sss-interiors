/**
 * Centralized API configuration
 * All API calls should use this base URL and endpoints
 */

export const API_BASE_URL = "https://sss-interiors-backend.onrender.com";

export const API_ENDPOINTS = {
  // Admin Endpoints
  ADMIN_LOGIN: `${API_BASE_URL}/api/admin/login`,
  ADMIN_PROFILE: `${API_BASE_URL}/api/admin/profile`,

  // Lead Endpoints
  LEADS_GET: `${API_BASE_URL}/api/leads`,
  LEADS_CREATE: `${API_BASE_URL}/api/leads`,
  LEADS_DELETE: (id) => `${API_BASE_URL}/api/leads/${id}`,
};

/**
 * Helper function to get authorization headers
 */
export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };
};

/**
 * Helper function to make API calls with proper error handling
 */
export const apiCall = async (method, url, data = null) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const config = getAuthHeaders();
    config.method = method;

    let response;
    if (method === "GET" || method === "DELETE") {
      response = await fetch(url, config);
    } else {
      response = await fetch(url, {
        ...config,
        body: JSON.stringify(data),
      });
    }

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
