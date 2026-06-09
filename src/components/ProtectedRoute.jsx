import { Outlet } from "react-router-dom";

function ProtectedRoute({ children }) {
  if (children) {
    return children;
  }

  return <Outlet />;
}

export default ProtectedRoute;