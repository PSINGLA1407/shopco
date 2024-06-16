// src/components/Arrivals.js

import React from "react";
import Card from "./Card";
import url3 from "../images/itemimage.png";

const Arrivals = () => {
  return (
    <section className="New-Arrivals">
      <div className="title">NEW ARRIVALS</div>
      <div className="cards">
        <div className="card">
          <Card
            title="T-shirt with Tape Details"
            imageUrl={url3}
            rating="4 star"
            price="$120"
          />
        </div>
        <div className="card">
          <Card
            title="T-shirt with Tape Details"
            imageUrl={url3}
            rating="4.5 stars"
            price="$120"
          />
        </div>
        <div className="card">
          <Card
            title="T-shirt with Tape Details"
            imageUrl={url3}
            rating="4.3 stars"
            price="$120"
          />
        </div>
        <div className="card">
          <Card
            title="T-shirt with Tape Details"
            imageUrl={url3}
            rating="4.5 stars"
            price="$120"
          />
        </div>
      </div>
    <button className="secondary-btn">View All</button>
    </section>
  );
};

export default Arrivals;
