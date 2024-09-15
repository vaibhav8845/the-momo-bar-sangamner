import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <section className="about-us-section ">
              <h3 className="about-title container-fluid">ABOUT US</h3>

      <div className="about-us-container">
        
        {/* Left Text Section */}
        <div className="about-text">
       
          <p>
            “Momo Street” in India is being promoted by Feedx Foods Pvt. Ltd. The
            company is engaged in the work of manufacturing food & promoting
            various successful brands. We at Feedx group strive our best to
            deliver quality products using the best ingredients & we keep
            ourselves updated with the market requirements.
          </p>
          <p>
            This is the reason why Feedx is one of the fastest growing food
            chains in India. The Momo Street model is prepared in such a manner
            that it is not only a sustainable model but it saves a lot of time,
            energy, & money. We offer a flexible environment and many growth
            opportunities through our effective concepts that help our investors
            grow and attain the desired success.
          </p>
        </div>
        {/* Right Image Section */}
        <div className="about-image">
          <img
            src="jkl.png" // Replace with your actual image path
            alt="Chef Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
