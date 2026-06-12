import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export function SideBar() {
  return (
    <div className="admin-app-sidebar">
      <div className="admin-logo-container">
        <div className="admin-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="admin-title">
          <h3>Naija Campus Connect</h3>
          <p>Admin Panel</p>
        </div>
      </div>
      <nav className="admin-nav-menu">
        <div className="admin-nav-menu-item">
          <NavLink to="/admin" className="admin-nav-link">
            Dashboard
          </NavLink>
        </div>

        <div className="admin-nav-menu-item">
          <h4>Management</h4>
          <NavLink to="/admin/applications" className="admin-nav-link">
            <p>
              Applications <span>123</span>
            </p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
