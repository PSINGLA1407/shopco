// src/components/Newsletter.js

import React from "react";
import email from "../images/email.png"

const Newsletter = () => {
  return (
    <section className="Newsletter">
      <div className="newsletter-head">
      <div className="offerhead">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
      </div>
      <div className="newsletter-opns">
      <button className="secondary-btn">Subscribe to Newsletter</button>
      <button className="secondary-btn">Subscribe to Newsletter</button>
      </div>
    </section>

  );
};

export default Newsletter;
