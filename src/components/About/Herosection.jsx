import React from "react";
const Herosection = () => {
  return (
    <section id="home" className="hero-uiux">
      <div className="hero-text">
        <h1>Design Meets Innovation</h1>
        <p>
          Crafting beautiful user experiences that inspire and engage. Let’s
          build something amazing together.
        </p>
        <a href="#contact" className="hero-btn">
          Start Project
        </a>

        <p>
          Start Project Transform your ideas into reality with our expert design
          and development solutions. We blend creativity and technology to craft
          engaging user experiences that drive results.
        </p>
      </div>
      <div className="hero-img">
        <img src="/assets/images/hero-img.png" alt="UI/UX" />
      </div>
    </section>
  );
};

export default Herosection;
