import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import "../App.css";

export function AdminRoot() {
  return (
    <div className="admin-container">
      <SideBar />
      <main className="admin-app-main">
        <div className="admin-app-header">
          <h2>Dashboard</h2>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
