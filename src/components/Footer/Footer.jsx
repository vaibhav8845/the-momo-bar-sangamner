import React from 'react';
import './Footer.css'; // Importing CSS file for styling
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importing icons from react-icons library

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h3>Social Media</h3>
          <p>
            Our menu pricing is very competitive & we have a strong presence
            across all outlets on both dine-in & online ordering platforms which
            makes us a perfect business model for success in the franchisee
            business.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/G5SjuMPJnvBgv7e7/?mibextid=qi2Omg" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/the_momo_bar_?igsh=MWtpZXp0enl3NzM0Nw==" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/7517805662" aria-label="Whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Timings Section */}
        <div className="footer-section timings">
          <h3>Timings</h3>
          <p>Monday: 3:30 PM to 10:30 PM</p>
          <p>Tuesday: 3:30 PM to 10:30 PM</p>
          <p>Wednesday: 3:30 PM to 10:30 PM</p>
          <p>Thursday: 3:30 PM to 10:30 PM</p>
          <p>Friday: 3:30 PM to 10:30 PM</p>
          <p>Saturday: 3:30 PM to 10:30 PM</p>
          <p>Sunday: 3:30 PM to 10:30 PM</p>
        </div>

        {/* Google Map Section */}
        <div className="footer-section map">
        <div style={{ width: '100%' }}>
      <iframe
        title="The Momo Bar Location"
        width="100%"
        height="1500"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=1500&amp;hl=en&amp;q=The%20momos%20bar,%20near%20Sangamner,%20Indiranagar,%20Sangamner,%20Maharashtra%20422605+(The%20Momo%20Bar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
      ></iframe>
    </div>
        </div>

        {/* Get In Touch Section */}
        <div className="footer-section get-in-touch">
          <h3>Get In Touch</h3>
          <p>📍 The Momo Bar Near BSNL Office Akole Road Sangamner</p>
          <p>📞 +91 7517805662</p>
          <p>✉️ themomobar5@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          2021 © Marky Momos All Rights Reserved. Design By{' '}
          {/* <a href="">Petpooja</a>. */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
