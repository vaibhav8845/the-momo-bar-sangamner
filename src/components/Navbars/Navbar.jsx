import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Navbar.css';

function Navbar() {
  const handleNavItemClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Programmatically clicks the toggler to close the navbar
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link className="navbar-brand ml-4" to="/">The Momo Bar Sangamner</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active mx-2">
              <Link className="nav-link" to="/" onClick={handleNavItemClick}>Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about" onClick={handleNavItemClick}>About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/menu" onClick={handleNavItemClick}>Menu</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/momosGallery" onClick={handleNavItemClick}>Momos Gallery</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/ourStory" onClick={handleNavItemClick}>Our Story</Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center mt-2 mt-lg-1 mr-1">
            <Link to="/contactUS">
              <button
                type="button"
                className="btn btn-primary py-2 mx-2 w-60 rounded shadow-sm"
                style={{
                  backgroundColor: "#007bff",
                  border: "none",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
                onClick={handleNavItemClick}  // Added this line to close the navbar when "Contact Us" is clicked
                aria-pressed="false"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
