import React from "react";
import "./OurStory.css"; // Import the CSS file for styling

const OurStory = () => {
  return (
    <section className="our-story mt-3">
      <div className="story-content">
        <div className="image-container">
          <img
            src="\half_gradient_momo1.webp" // Replace with your image path
            alt="Momos in a basket"
            className="story-image"
          />
        </div>
        <div className="text-container">
          <h2 className="section-title">OUR STORY</h2>
          <h3 className="section-subtitle">Who we are</h3>
          <p className="section-description">
            The Momo Factory is a chain of Fast Food Restaurants serving all over
            Mumbai and Nashik that aim to bring satisfied smiles to its customers' faces. 
            The Founders are Nipun Maru and Chetan Madhekar who are both foodies and have 
            travelled all around the world, tasting food items from various regions.
          </p>
          <p className="section-description">
            They have accumulated great experience in brand acquisition and expansion over 
            the course of more than a decade. They have also dealt with elite and international 
            brands and are experts in the service, retail, and fashion industry. They have a 
            passion for business and their exploration led them to realize that an organized 
            and hygienic area to indulge in Momos did not exist, and Street Momos only offered 
            two varieties, i.e. Steamed and Fried.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
