import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
export function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <FontAwesomeIcon icon={faHouse} className="logo-icon" />
        <h1>Post-UTME Portal</h1>
      </div>
      <nav>
        <div className="hamburger">
          <button className="hamburger-btn">☰</button>
        </div>
      </nav>
    </header>
  );
}
