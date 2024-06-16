// src/components/Dressstyle.js

import React from "react";
import casual from "../images/casual.png";
import formal from "../images/formal.png";
import party from "../images/party.png";
import gym from "../images/gym.png";

const Dressstyle = () => {
  return (
    <section className="Dressstyle">
      <div className="title">BROWSE BY DRESS STYLE</div>
      <div className="grid-container">
        <div className="grid-item">
          <img src={casual} />
        </div>
        <div className="grid-item">
          <img src={formal} />
        </div>
        <div className="grid-item">
          <img src={party} />
        </div>
        <div className="grid-item">
          <img src={gym} />
        </div>
      </div>
    </section>
  );
};

export default Dressstyle;
