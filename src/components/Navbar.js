import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light manb">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Password Saver
        </Link>

        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/add">
                Add Password
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/passwords" className="nav-link" href="#">
                Manage Passwords
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
