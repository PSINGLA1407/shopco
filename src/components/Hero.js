// Hero.js

import React from 'react';
import heroImage from '../images/hero-image.png'; // Adjust the path accordingly

const Hero = () => {
  return (
    <section className="hero-section">
      <div className='left'>
      <div className='heading'>FIND CLOTHES THAT MATCH YOUR STYLE</div>
      <div className='paraa'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
      <div className='clicker'>
        <button className='primary-btn'>Shop Now</button>
      </div>
      </div>
      <div className='right'>
      <img
        src={heroImage}
        alt="hero"
      />
      </div>
      
    </section>
  );
};

export default Hero;
