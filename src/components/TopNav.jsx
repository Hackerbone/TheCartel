import React, { useState } from "react";
import { FaFistRaised, FaRebel } from "react-icons/fa";
export default function TopNav() {
  const [clicked, setClicked] = useState(0);

  const toggleDropdown = () => {
    setClicked(!clicked);
  };
  return (
    <div className="navbar">
      <div className="logo">STF</div>

      <div id="dropdown" className={clicked ? "links show" : "links"}>
        <p className="nav-links">organisations</p>
        <p className="nav-links">people</p>
        <p className="nav-links">institutions</p>
      </div>

      <div id="hamburger" className="hamburger" onClick={toggleDropdown}>
        {clicked ? <FaRebel /> : <FaFistRaised />}
      </div>
    </div>
  );
}
