import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  const handleNavItemClick = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show'); // Close the navbar after clicking a link
    }
  };

  const handleNavbarBrandClick = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.toggle('show'); // Toggle navbar visibility on brand click
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container">
        <Link
          className="navbar-brand mx-auto"
          to="#"
          onClick={handleNavbarBrandClick} // Toggles the navbar visibility
        >
          The Momo Bar Sangamner
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/" onClick={handleNavItemClick}>
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about" onClick={handleNavItemClick}>
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/menu" onClick={handleNavItemClick}>
                Menu
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link"
                to="/momosGallery"
                onClick={handleNavItemClick}
              >
                Momos Gallery
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/ourStory" onClick={handleNavItemClick}>
                Our Story
              </Link>
            </li>
          </ul>
          <div className="d-flex mt-2 mt-lg-0">
            <Link to="/contactUS">
              <button
                type="button"
                className="btn btn-primary py-2 mx-2 rounded shadow-sm"
                onClick={handleNavItemClick}
              >
                Contact Us
              </button>
            </Link>
            <Link to="/login">
              <button
                type="button"
                className="btn btn-primary py-2 mx-2 rounded shadow-sm"
                onClick={handleNavItemClick}
              >
                Login
              </button>
            </Link>
            <Link to="/showdata">
              <button
                type="button"
                className="btn btn-primary py-2 mx-2 rounded shadow-sm"
                onClick={handleNavItemClick}
              >
                Show all Data
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
