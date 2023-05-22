import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <img className="about-hero-image" />
      <div className="about-page-content">
        <h2 className="about-page-header">
          Choosing Snuxedo means choosing quality, authenticity and
          an unparalleled shopping experience for all your sneaker needs
        </h2>
        <p>
          At Snuxedo, we are passionate about sneakers and understand the thrill
          of owning the latest and most sought-after styles. Our team of
          dedicated sneaker experts work tirelessly to curate an extensive
          collection of sneakers from popular brands, including Nike, Adidas,
          Jordan, New Balance, and more. We carefully inspect each pair to
          ensure authenticity and quality, so you can shop with confidence.
        </p>
        <p>
          Our customer support team is always ready to assist with any questions
          or concerns you may have, ensuring that your shopping experience with
          us is enjoyable and hassle-free.
        </p>
        <p>
          Thank you for choosing Snuxedo as your go-to destination for sneakers.
          We are committed to delivering exceptional products, outstanding
          customer service, and an unbeatable shopping experience. Join us on
          this exciting sneaker journey and discover the perfect pair of kicks
          to elevate your style. Happy sneaker shopping!
        </p>
      </div>
      <div>
        
      </div>
      <div className="about-page-cta">
        <h3>
          Your sneakers are waiting.
          <br />
          Just a click away.
        </h3>
        <Link className="link-button" to="/sneakers">
          Explore our sneakers
        </Link>
      </div>
    </div>
  );
}
