// src/components/Card.js

import React from "react";
import "./card.css";

const Card = ({ title, imageUrl, rating, price }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="text2">{rating}</p>
        <p className="text3">{price}</p>
      </div>
    </div>
  );
};

export default Card;
