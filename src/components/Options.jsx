import React from "react";
import { useHistory } from "react-router";
export default function Options({ heading, count, to }) {
  const history = useHistory();
  return (
    <div className="option-card">
      <h1>{heading}</h1>
      <h3 className="text-muted">Count : {count}</h3>
      <button
        className="option-button"
        onClick={() => {
          history.push(to);
        }}
      >
        View Data
      </button>
    </div>
  );
}
