import React, { useRef, useEffect } from "react";
import TopNav from "../components/TopNav";
import TypeIt from "typeit-react";
import Options from "../components/Options";
import { TweenMax, Power3 } from "gsap/gsap-core";

export default function Dashboard() {
  let options = useRef(null);
  let dashboard = useRef(null);

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
    TweenMax.to(dashboard, 3, {
      delay: 3,
      overflowY: "scroll",
      opacity: 1,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="container dashboard-container" ref={(el) => (dashboard = el)}>
      <TopNav style={{ color: "#1b1b1b", background: "rgba(251, 245, 235,0.8)" }} />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <TypeIt
            element={"div"}
            options={{
              strings: ["We have got some intel that might interest you"],
              speed: 50,
              waitUntilVisible: true,
            }}
          />
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
