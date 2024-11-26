import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <Navigate to="/" /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
