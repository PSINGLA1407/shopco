// src/components/Navbar.js

import React, { Profiler, useState } from "react";
import cart from "../images/cart.png";
import search from "../images/search.png";
import profile from "../images/profile.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search query submission logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <section className="navbar">
      <ul className="nav">
        <li className="logo">SHOPCO</li>
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
        <li>
  <form className="search-form" onSubmit={handleSearchSubmit}>
    <div className="search-input-wrapper">
      <img src={search} className="search-icon" alt="Search" />
      <input
        type="text"
        className="search-input"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  </form>
</li>

        <button className="cart">
          <img src={cart} style={{ width: "24px", height: "24px" }} />
        </button>
        <button className="cart">
          <img src={profile} style={{ width: "24px", height: "24px" }} />
        </button>
      </ul>
    </section>
  );
};

export default Navbar;
