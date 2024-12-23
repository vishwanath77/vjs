import React from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <img
            src="/logo.png" // Replace with your logo URL
            alt="Y-Axis Logo"
            className="logo"
          />
        </div>
        <div className="header-right">
          <span>📞 7670 800 000</span>
          <span>📱 +91 880 221 9999</span>
          <div className="header-links">
            <a href="/">Signup</a>
            <a href="/">Login</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li><a href="/">Free Assessment</a></li>
          <li><a href="/">Migrate</a></li>
          <li><a href="/">Work</a></li>
          <li><a href="/">Study</a></li>
          <li><a href="/">Visa</a></li>
          <li><a href="/">Coaching</a></li>
          <li><a href="/">Admissions</a></li>
          <li><a href="/">H1B Jobs</a></li>
          <li><a href="/">Jobs Abroad</a></li>
        </ul>
        <div className="navbar-search">
          <input type="text" placeholder="Search" />
        </div>
      </nav>
    </header>
  );
};

export default Header;



