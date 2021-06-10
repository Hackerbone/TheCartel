import React from "react";
import { Link } from "react-router-dom";

export default function StfButton({ children, to }) {
  return (
    <div className="buttons">
      <Link to={to} className="stf-btn">
        {children}
        <span className="stf-btn__inner">
          <span className="stf-btn__blobs">
            <span className="stf-btn__blob"></span>
            <span className="stf-btn__blob"></span>
            <span className="stf-btn__blob"></span>
            <span className="stf-btn__blob"></span>
          </span>
        </span>
      </Link>
    </div>
  );
}
