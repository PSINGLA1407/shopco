// src/App.js

import React from 'react';
import OfferSection from './components/OfferSection';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Navbar from './components/Navbar';
import Arrivals from './components/Arrivals';
import Topselling from './components/Topselling';
import './App.css';
import Seperator from './components/seperator';
import Dressstyle from './components/Dressstyle';
import Newsletter from './components/newsletter';

const App = () => {
  return (
    <div className="App">
      <OfferSection />
      <Navbar />
      <Hero />
      <Brands />
      <Arrivals />
      <Seperator/>
      <Topselling/>
      <Dressstyle/>
      <Newsletter/>

    </div>
  );
};

export default App;
