import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Find Your dream home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Request proposal
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Download home planner
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Contact us
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Submit your property
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Come work with us
          </Link>
        </li>
      </ul>
      <p className="copyright">
        &copy; Copyright {date} by arifayanidowu. Feel free to use this project
        for your own purposes.
      </p>
    </footer>
  );
}
