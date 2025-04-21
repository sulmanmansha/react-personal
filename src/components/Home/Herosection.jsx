import React from 'react';
const HeroSection = () => {
  return (
    <section className="hero-uiux">
      <div className="hero-left">
        <h1>Build, Launch & Grow with Confidence</h1>
        <p>We help brands turn their vision into digital reality with clean design and smart technology.</p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">View Portfolio</button>
        </div>
      </div>
      <div className="hero-right">
      <img src="/assets/images/man-1.jfif" alt="UI/UX" />
      </div>
    </section>
  );
};

export default HeroSection;
