import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already authenticated on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const adminData = localStorage.getItem("adminData");

    if (token && adminData) {
      try {
        setAdmin(JSON.parse(adminData));
        setIsAuthenticated(true);
      } catch (error) {
        // Invalid data in localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("adminData");
      }
    }

    setLoading(false);
  }, []);

  const login = (token, adminData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("adminData", JSON.stringify(adminData));
    setAdmin(adminData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminData");
    setAdmin(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        admin,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
