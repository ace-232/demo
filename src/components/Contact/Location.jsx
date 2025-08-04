import React from 'react';
import officeImage from '../../assets/meet.jpg'; // adjust the path to your image
import "../../styles/Contact/Location.css"; // make sure this path matches!

export default function LocationSection() {
  return (
    <section className="location-section">
      <div className="location-info">
        <h4 className="location-label">HEADQUARTERS</h4>
        <h2 className="location-city">Noida</h2>
        <p className="location-address">
         connect@agilityhiveresearch.com
        </p>
        <p className="location-phone">+91 999-916-3345</p>
      </div>
      <div className="location-image">
        {/* Replace the src below with your actual image */}
        <img
          src={officeImage}
          alt="Office headquarters"
          className="office-image"
        />
      </div>
    </section>
  );
}
