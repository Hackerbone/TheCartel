import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap/gsap-core";

export default function Access() {
  let mainText = useRef(null);

  useEffect(() => {
    TweenMax.to(mainText, 1, {
      top: 0,
      opacity: 1,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="container access-container">
      <div className="row">
        <p ref={(el) => (mainText = el)} className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ratione quasi earum aut ducimus! Suscipit quaerat aperiam, minima fugiat odit quam aut, eos, voluptatum odio tenetur a
          magni! Optio, eius rem porro animi quidem ipsum, iusto libero eligendi, voluptatum sed consectetur vel velit fuga eaque sit esse perferendis fugiat nisi?
        </p>
      </div>
    </div>
  );
}
