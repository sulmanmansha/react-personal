import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            className="footer-logo"
            src="/assets/images/logo.png"
            alt="Logo"
          />
          <p>Bringing design and creativity together.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: sulman@example.com</p>
          <p>Phone: +92 300 0000000</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <img src="/assets/images/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/assets/images/twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/assets/images/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Sulman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
