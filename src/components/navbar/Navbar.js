import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="City Tours Company"></img>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
