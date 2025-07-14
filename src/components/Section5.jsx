import React from 'react';
import './Section5.css';

const Section5 = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* Left Box */}
        <div className="gallery-box box-left">
          <div className="gallery-content">
            <h2>We Offer Premium &amp;<br />100% Organic Food</h2>
            <a href="#" className="shop-link">Shop Now</a>
          </div>
        </div>

        {/* Right Box */}
        <div className="gallery-box box-right">
          <div className="gallery-content">
            <h2>
              Vegetables <span className="highlight">Big Sale</span> Fresh<br />Farm Products
            </h2>
            <a href="#" className="shop-link">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
