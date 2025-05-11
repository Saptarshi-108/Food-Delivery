import "./Navbar.css";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} link="#" alt="Logo" className="logo-image" />
        <div className="navbar-links">
          <a link="/Services" className="navbar-link">
            Services
          </a>
          <a link="/Contact" className="navbar-link">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
