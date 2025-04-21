import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HeroSection = () => {
  return (
    <section className="contact-uiux">
      <div className="contact-content">
        <div className="contact-left">
          <h2>Let’s Talk</h2>
          <p>
            Have a project in mind or just want to say hello? Fill in the form
            and let’s connect.
          </p>
          <img src="/assets/images/phone-img.avif" alt="Contact Illustration" />
        </div>
        <div className="contact-right">
          <form className="contact-form-uiux">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />

            <PhoneInput
              country={"us"}
              inputClass="phone-input-custom"
              containerClass="phone-container"
              placeholder="Enter phone number"
              inputProps={{
                name: "phone",
                required: true,
              }}
            />

            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
