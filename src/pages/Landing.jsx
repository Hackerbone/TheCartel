import { TweenMax, Power3 } from "gsap/gsap-core";
import React, { useRef, useEffect } from "react";

export default function Landing() {
  let mainText = useRef(null);
  let glitchText = useRef(null);

  useEffect(() => {
    TweenMax.to(mainText, 2, {
      top: 0,
      opacity: 1,
      ease: Power3.easeOut,
    });
    TweenMax.to(glitchText, 2, {
      top: 0,
      opacity: 1,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="top-header " ref={(el) => (mainText = el)}>
          <span className="strike red-text">Secret </span>

          <span className="strike "> Task </span>

          <span className="strike red-text"> Force</span>
        </div>

        <div className="glitch" ref={(el) => (glitchText = el)}>
          <p className="glitch-text" data-text="BEGIN THE REBELLION">
            BEGIN THE REBELLION
          </p>
        </div>
      </div>
    </div>
  );
}
