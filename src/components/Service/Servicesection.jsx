import React from "react";

const ServiceSection = () => {
  return (
    <section className="service-s">
  <div className="service-container">
    <h2 className="service-heading">✨ Our Services</h2>
    <p className="service-subtitle">
      We offer a wide range of creative services to elevate your brand.
    </p>

    <div className="service-cards">
      <div className="service-card">
        <img src="/assets/images/man-2.png" alt="Design" />
        <h3>UI/UX Design</h3>
        <p>Crafting intuitive and engaging digital experiences with elegance.</p>
      </div>

      <div className="service-card">
        <img src="/assets/images/man-3.png" alt="Development" />
        <h3>Web Development</h3>
        <p>Creating fast, responsive, and scalable websites for modern users.</p>
      </div>

      <div className="service-card">
        <img src="/assets/images/man-4.png" alt="SEO" />
        <h3>SEO Optimization</h3>
        <p>Helping you rank higher and reach your audience more effectively.</p>
      </div>
    </div>

    {/* New Feature Block Inside the Same Section */}
    <div className="service-features">
      <h3 className="features-heading">Why Choose Us?</h3>
      <ul className="features-list">
        <li>✅ Innovative & Creative Solutions</li>
        <li>✅ Reliable and On-Time Delivery</li>
        <li>✅ Personalized Approach to Every Project</li>
        <li>✅ Strong Focus on User Experience</li>
      </ul>
    </div>
  </div>
</section>

  );
};

export default ServiceSection;
