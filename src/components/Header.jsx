import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
export function Header() {
  return (
    <header className="site-header">
      <div>
        <h1>PostUtme</h1>
        <p>React + Vite starter with routing and FontAwesome.</p>
      </div>
      <nav className="site-nav">
        <NavLink end to="/" className="nav-link">
          <FontAwesomeIcon icon={faHouse} /> Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          <FontAwesomeIcon icon={faCircleInfo} /> About
        </NavLink>
      </nav>
    </header>
  );
}
