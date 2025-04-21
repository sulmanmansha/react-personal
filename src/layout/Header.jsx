import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <img className="logo-img" src="/assets/images/logo.png" alt="Logo" />
      <nav className="nav-links">
        <Link id="about" to="/">About</Link>
        <Link to="/home">Home</Link>
        <Link id="service"to="/Service">Services</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
