import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "Post UTME Registration", path: "/" },
  { name: "Waec Result Upload", path: "/waec-result-upload" },
  { name: "Change of Course/Institution", path: "/change-course-institution" },
  { name: "Check Jamb Admission Status", path: "/admission-status" },
  { name: "Jamb Admission Letter", path: "/jamb-admission-letter" },
  { name: "Jamb Original Result", path: "/jamb-original-result" },
  {
    name: "Age Declaration/Birth Certificate",
    path: "/age-declaration-birth-certificate",
  },
  {
    name: "Local Government Identification letter",
    path: "/local-government-identification-letter",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`${isMenuOpen ? "open" : ""}`}>
      <div
        className="mobile-menu"
        style={{ display: isMenuOpen ? "flex" : "none" }}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="site-header">
        <div className="logo">
          <FontAwesomeIcon icon={faHouse} className="logo-icon" />
          <h1>Post-UTME Portal</h1>
        </div>
        <nav>
          <div className="hamburger">
            <button
              className="hamburger-btn"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile navigation"
            >
              ☰
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
