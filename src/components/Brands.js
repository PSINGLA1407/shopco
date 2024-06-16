// src/components/Brands.js

import React from 'react';
import brand1 from '../images/brand1.png';
import brand2 from '../images/brand2.png';
import brand3 from '../images/brand3.png';
import brand4 from '../images/brand4.png';
import brand5 from '../images/brand5.png';

const Brands = () => {
  return (
    <section className="brands-section">
      <div className="brands">
        <img src={brand1} alt="brand1" className="brand-image" />
        <img src={brand2} alt="brand2" className="brand-image" />
        <img src={brand3} alt="brand3" className="brand-image" />
        <img src={brand4} alt="brand4" className="brand-image" />
        <img src={brand5} alt="brand5" className="brand-image" />
      </div>
    </section>
  );
};

export default Brands;
