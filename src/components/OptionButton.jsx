import React from "react";
import { Link } from "react-router-dom";

export default function OptionButton({ children, to, style, onClick }) {
  return (
    <div className="buttons">
      <Link to={to} className="option-button" style={style} onClick={onClick}>
        {children}
        <span className="option-button__inner">
          <span className="option-button__blobs">
            <span className="option-button__blob"></span>
            <span className="option-button__blob"></span>
            <span className="option-button__blob"></span>
            <span className="option-button__blob"></span>
          </span>
        </span>
      </Link>
    </div>
  );
}
