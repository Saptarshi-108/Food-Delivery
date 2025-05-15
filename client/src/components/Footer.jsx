import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:support@foodapp.com">support@foodilies.com</a>
            </li>
            <li>
              <a href="tel:+911234567890">+91 123-456-7890</a>
            </li>
            <li>123 Food Street, Kolkata, India</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/refund">Refund Policy</a>
            </li>
            <li>
              <a href="/cookies">Cookie Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2a10 10 0 00-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0012 2zm5 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 6a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.9H7.9v-2.9H10V9.26c0-2.02 1.2-3.14 3.03-3.14.9 0 1.85.16 1.85.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.3v1.56h2.3l-.37 2.9h-1.93V21.8c4.56-.93 8-4.96 8-9.8C22 6.48 17.52 2 12 2z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
          <h3>Get Our App</h3>
          <div className="app-links">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/play-store-badge.png"
                alt="Get it on Google Play"
                className="app-badge"
              />
            </a>
            <a
              href="https://www.apple.com/app-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/app-store-badge.png"
                alt="Download on the App Store"
                className="app-badge"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <img
          src="/title-logo-removebg-preview.png"
          alt="FoodApp Logo"
          className="footer-logo"
        />
        <p>&copy; 2025 Foodilies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
