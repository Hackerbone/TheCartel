import React, { useState, useRef, useEffect } from "react";
import { FaFistRaised, FaRebel } from "react-icons/fa";
import { TweenMax } from "gsap";
import { Power3 } from "gsap/gsap-core";
export default function TopNav() {
  let hamburgerIcon = useRef(null);
  console.log(hamburgerIcon);
  const [clicked, setClicked] = useState(0);

  const toggleDropdown = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    console.log(hamburgerIcon);
    TweenMax.to(hamburgerIcon, 1, {
      opacity: 0.4,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="navbar">
      <div className="logo">
        <span className="red-text">S</span>
        <span>T</span>
        <span className="red-text">F</span>
      </div>

      <div id="dropdown" className={clicked ? "links show" : "links"}>
        <p className="nav-links">organisations</p>
        <p className="nav-links">people</p>
        <p className="nav-links">institutions</p>
      </div>

      <div
        ref={(el) => {
          hamburgerIcon = el;
        }}
        id="hamburger"
        className="hamburger"
        onClick={toggleDropdown}
      >
        {clicked ? <FaRebel className="icons" /> : <FaFistRaised className="icons" />}
      </div>
    </div>
  );
}
