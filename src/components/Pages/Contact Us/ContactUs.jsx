



import React from 'react';
import './ContactUs.css'; // Import the CSS file for styling
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const ContactUs = () => {
  return (
    <div className="contact-container mt-5">
      <h1 className="contact-title">CONTACT WITH US</h1>
      <div className="contact-wrapper">
        {/* Contact Form Section */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <input type="text" placeholder="Mobile No." className="form-input" />
            <input type="text" placeholder="City" className="form-input" />
            <textarea placeholder="Your Message" className="form-input" rows="4"></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

        {/* Address Section */}
        <div className="contact-info">
          <h2 className="info-title">Address</h2>
          <div className="info-section">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>The Momo  Bar Sangamner Pvt Ltd</h3>
              <p><strong>Head Office</strong></p>
              <p>Sangamner</p>
              <p><strong>Corporate Office</strong></p>
              <p> The Momo Bar Near BSNL Office Akole Road Sangamner</p>
            </div>
          </div>
          <div className="info-section">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h3>Call-Us</h3>
              <p>+91 7517805662</p>
              <p>+91 8862088631</p>

            </div>
          </div>
          <div className="info-section">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>themomobar5@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
