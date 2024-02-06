import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers in Your Email </h1>
      <p>Subscribe to our newsletter and stay updated </p>
      <div>
        <input type="email" placeholder="Your Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
