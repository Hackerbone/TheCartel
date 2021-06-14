import React, { useRef, useEffect } from "react";
import StfButton from "../components/StfButton";
import { TweenMax, Power3 } from "gsap/gsap-core";

export default function NotFound() {
  let mainText = useRef(null);
  let glitchText = useRef(null);

  useEffect(() => {
    TweenMax.to(mainText, 2, {
      top: 0,
      opacity: 1,
      transform: "scale(1)",
      ease: Power3.easeOut,
    });
    TweenMax.to(glitchText, 2, {
      top: 0,
      opacity: 1,
      transform: "scale(1)",
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="top-header " ref={(el) => (mainText = el)}>
          <span className="strike red-text">4</span>

          <span className="strike ">0</span>

          <span className="strike red-text">4</span>
        </div>

        <div className="glitch" ref={(el) => (glitchText = el)}>
          <p className="glitch-text" data-text="NOT FOUND">
            NOT FOUND
          </p>
        </div>
        <StfButton to={"/"}>Back to the cartel</StfButton>
      </div>
    </div>
  );
}
