import React, { useState } from "react";
import "./Home.css";

const Slidersection = () => {
  const images = [
    "/assets/images/place1.jfif",
    "/assets/images/place2.jfif",
    "/assets/images/place3.jfif",
  ];

  const [index, setIndex] = useState(0);

  const showNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const showPrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="slider-section">
      <div className="slider-text">
        <h1 className="build">Build, Launch & Grow with Confidence</h1>
        <div className="slider-buttons">
          <button onClick={showPrev} className="slider-nav-btn">
            ❮
          </button>
          <button onClick={showNext} className="slider-nav-btn">
            ❯
          </button>
        </div>
      </div>
      <div className="slider-image">
        <img src={images[index]} alt="Hero Slide" />
      </div>
    </section>
  );
};

export default Slidersection;
