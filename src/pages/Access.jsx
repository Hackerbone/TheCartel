import React from "react";
// import { TweenMax, Power3 } from "gsap/gsap-core";
import TopNav from "../components/TopNav";
import Typical from "react-typical";
import StfButton from "../components/StfButton";

export default function Access() {
  // let mainText = useRef(null);

  // useEffect(() => {
  //   TweenMax.to(mainText, 2, {
  //     top: 0,
  //     ease: Power3.easeOut,
  //   });
  //   TweenMax.from(topNav.current, 1, {
  //     top: -400,
  //     ease: Power3.easeOut,
  //   });
  //   TweenMax.to(topNav.current, 1, {
  //     top: 0,
  //     ease: Power3.easeOut,
  //   });
  // }, []);
  return (
    <div className="container access-container">
      <div className="bg-svg-left">
        <svg width="521" height="1288" viewBox="0 0 521 1288" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1288C0 1288 213.192 947.274 213.192 548.085C213.192 148.896 519 0 519 0" stroke="#f0473e" strokeWidth="6" />
        </svg>
      </div>

      <div className="bg-svg-right">
        <svg width="521" height="1288" viewBox="0 0 521 1288" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1288C0 1288 213.192 947.274 213.192 548.085C213.192 148.896 519 0 519 0" stroke="#f0473e" strokeWidth="6" />
        </svg>
      </div>

      <TopNav />
      <div className="access-header">
        <span> Welcome </span>
        <span className="strike">
          <Typical wrapper="span" loop={Infinity} steps={["Leader", 3000, "Admin", 3000, "Rebel", 3000]} />
        </span>
      </div>
      <div className="access-row">
        <input type="text" name="name" className="input-box" placeholder="Who are you?" />

        <p className="text-muted">Hint : One of the three above</p>
        <StfButton to="#" style={{ padding: "1rem 3rem" }}>
          <Typical wrapper="span" loop={Infinity} steps={["Enter", 3400, "Entrar", 3400, "Entrer", 3400]} />
        </StfButton>
      </div>
    </div>
  );
}
