import React from "react";
const Cardsection = () => {
  return (
    <section id="services" className="card-section">
      <h2 className="card-heading">Our Services</h2>
      <div className="card-container">
        <div className="card">
          <img src="/assets/images/man-2.png" alt="Design" />
          <h3>UI/UX Design</h3>
          <p>
            Creating intuitive and engaging interfaces that provide the best
            user experience.
          </p>
        </div>
        <div className="card">
          <img src="/assets/images/man-3.png" alt="Development" />
          <h3>Web Development</h3>
          <p>
            Developing fast, responsive, and modern websites using latest
            technologies.
          </p>
        </div>
        <div className="card">
          <img src="/assets/images/man-4.png" alt="Branding" />
          <h3>Brand Identity</h3>
          <p>
            Building memorable brands with powerful visuals and storytelling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cardsection;
