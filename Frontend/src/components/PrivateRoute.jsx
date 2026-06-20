import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  // Show nothing while checking authentication
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#0f172a",
        }}
      >
        <div style={{ color: "#D4A373", fontSize: "1.2rem" }}>
          Loading...
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Show protected content if authenticated
  return children;
}

export default PrivateRoute;