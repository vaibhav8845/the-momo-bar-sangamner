import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fill all the required fields.');
    } else {
      setErrors({});
      console.log('Form Submitted:', formData);
      toast.success('Form submitted successfully!');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        mobile: '',
        city: '',
        message: '',
      });
    }
  };

  return (
    <div className="contact-container mt-5 pt-5">
      <h1 className="contact-title">CONTACT WITH US</h1>
      <div className="contact-wrapper">
        {/* Contact Form Section */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile No."
              className="form-input"
              value={formData.mobile}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              className="form-input"
              value={formData.city}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className="form-input"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>

        {/* Address Section */}
        <div className="contact-info">
          <h2 className="info-title">Address</h2>
          <div className="info-section">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>The Momo Bar Sangamner Pvt Ltd</h3>
              <p><strong>Head Office</strong></p>
              <p>Sangamner</p>
              <p><strong>Corporate Office</strong></p>
              <p>The Momo Bar Near BSNL Office Akole Road Sangamner</p>
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
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
