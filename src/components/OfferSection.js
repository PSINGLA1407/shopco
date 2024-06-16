// src/components/OfferSection.js

import React, { useState } from 'react';
import closebtn from '../images/close.png';

const OfferSection = () => {
  const [showOffer, setShowOffer] = useState(true);

  const handleCloseOffer = () => {
    setShowOffer(false);
  };

  return (
    <div className="offer-section">
      <p className="offer-message">
        Sign up and get 20% off your first order. <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Sign Up Now</span>
      </p>
      <button className="close-btn" onClick={handleCloseOffer}>
        <img src={closebtn} alt="close button" style={{ width: '20px', height: '20px' }} />
      </button>
    </div>
  );
};

export default OfferSection;
