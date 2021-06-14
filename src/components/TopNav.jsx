import React, { useState, useRef, useEffect } from "react";
import { FaFistRaised, FaRebel } from "react-icons/fa";
import { TweenMax } from "gsap";
import { Power3 } from "gsap/gsap-core";
import { NavLink, Link } from "react-router-dom";
export default function TopNav({ style }) {
  let hamburgerIcon = useRef(null);
  let topNavigation = useRef(null);

  useEffect(() => {
    TweenMax.to(hamburgerIcon, 1, {
      opacity: 1,
      ease: Power3.easeOut,
    });

    TweenMax.from(topNavigation, 1, {
      top: -400,
      ease: Power3.easeOut,
    });
    TweenMax.to(topNavigation, 1, {
      top: 0,
      right: 0,
      ease: Power3.easeOut,
    });
  }, []);

  const [clicked, setClicked] = useState(0);

  const toggleDropdown = () => {
    setClicked(!clicked);
  };
  return (
    <div style={style} ref={(el) => (topNavigation = el)} className="navbar">
      <NavLink to={"/"} exact className="logo">
        <span className="red-text">S</span>
        <span>T</span>
        <span className="red-text">F</span>
      </NavLink>

      <div id="dropdown" className={clicked ? "links show" : "links"}>
        <NavLink key={"access"} to={"/access"} activeClassName="red-text" exact className="nav-links">
          access
        </NavLink>
        {localStorage.getItem("user") === "admin" || localStorage.getItem("user") === "rebel" || localStorage.getItem("user") === "leader" ? (
          <>
            <NavLink key={"confidential"} to={"/confidential"} activeClassName="red-text" exact className="nav-links">
              dashboard
            </NavLink>

            <Link
              to={"/access"}
              onClick={() => {
                localStorage.clear();
              }}
              exact
              className="nav-links"
            >
              logout
            </Link>
          </>
        ) : (
          <></>
        )}
        {/* <p className="nav-links">organisations</p>
        <p className="nav-links">people</p>
        <p className="nav-links">institutions</p> */}
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
