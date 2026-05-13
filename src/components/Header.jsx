import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "Post UTME Registration", path: "/post-utme-registration" },
  { name: "Waec Result Upload", path: "/waec-result-upload" },
  { name: "Change of Course/Institution", path: "/change-course-institution" },
  { name: "Admission Status", path: "/admission-status" },
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
  return (
    <>
      <header>
        <div className={`mobile-menu`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
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
              <button className="hamburger-btn">☰</button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
