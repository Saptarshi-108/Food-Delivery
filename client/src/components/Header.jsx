import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="logo-image" />
        <div className="header-links">
          <a href="/Services" className="header-link">
            Services
          </a>
          <a href="/Contact" className="header-link">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
