import logo from "../assets/logo.png";

export function SideBar() {
  return (
    <sidebar className="app-sidebar">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="title">
          <h3>Naija Campus Connect</h3>
          <p>Admin Panel</p>
        </div>
      </div>
    </sidebar>
  );
}
