import React, { useRef, useEffect } from "react";
import TopNav from "../components/TopNav";
import Typical from "react-typical";
import Options from "../components/Options";
import { TweenMax, Power3 } from "gsap/gsap-core";

export default function Dashboard() {
  let options = useRef(null);

  useEffect(() => {
    TweenMax.from(options, 3, {
      delay: 3,
      top: 400,
      position: "relative",
      opacity: 0,
      ease: Power3.easeOut,
    });
    TweenMax.to(options, 3, {
      delay: 3,
      top: 0,
      opacity: 1,
      transform: "scale(1)",
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="container dashboard-container">
      <TopNav style={{ color: "#1b1b1b" }} />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <Typical wrapper="div" steps={["We have got some intel that might interest you", 3000]} />
        </div>

        <div ref={(el) => (options = el)} className="options">
          <Options heading={"Social Media Users"} count={100} to="/users" />
          <Options heading={"Social Media Posts"} count={201} to="/posts" />
          <Options heading={"Company Stocks"} count={25} to="/stocks" />
          <Options heading={"Government Institutions"} count={100} to="/government" />
        </div>
      </div>
    </div>
  );
}
