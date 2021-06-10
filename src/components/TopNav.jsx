import React, { useState, useRef, useEffect } from "react";
import { FaFistRaised, FaRebel } from "react-icons/fa";
import { TweenMax } from "gsap";
import { Power3 } from "gsap/gsap-core";
import { NavLink } from "react-router-dom";
export default function TopNav() {
  let hamburgerIcon = useRef(null);
  let topNavigation = useRef(null);

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

    TweenMax.to(topNavigation, 1, {
      top: 0,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div ref={(el) => (topNavigation = el)} className="navbar">
      <NavLink to={"/"} exact className="logo">
        <span className="red-text">S</span>
        <span>T</span>
        <span className="red-text">F</span>
      </NavLink>

      <div id="dropdown" className={clicked ? "links show" : "links"}>
        <NavLink key={"access"} to={"/access"} activeClassName="red-text" exact>
          Access
        </NavLink>
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
