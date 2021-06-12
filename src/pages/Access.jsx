import React, { useState, useRef } from "react";
import TopNav from "../components/TopNav";
import Typical from "react-typical";
import StfButton from "../components/StfButton";
import { useHistory } from "react-router";
export default function Access() {
  let hintText = useRef(null);
  const history = useHistory();
  const [input, setInput] = useState("");
  const checkCredentials = () => {
    if (input.toLowerCase() === "admin" || input.toLowerCase() === "rebel" || input.toLowerCase() === "leader") {
      history.push("/confidential");
    } else {
      hintText.style.color = "#f0473e";
      hintText.style.transform = "scale(1.1)";
      hintText.style.backgroundColor = "#fbf5eb";
    }
  };
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
        <input type="text" name="name" onChange={(e) => setInput(e.target.value)} className="input-box" placeholder="Who are you?" />

        <p className="text-muted" ref={(el) => (hintText = el)}>
          Hint : One of the three above
        </p>
        <StfButton to="#" style={{ padding: "1rem 3rem" }} onClick={checkCredentials}>
          <Typical wrapper="span" loop={Infinity} steps={["Enter", 3400, "Entrar", 3400, "Entrer", 3400]} />
        </StfButton>
      </div>
    </div>
  );
}
