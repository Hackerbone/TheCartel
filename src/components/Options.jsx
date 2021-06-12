import React from "react";
import OptionButton from "./OptionButton";
export default function Options({ heading, count, to }) {
  return (
    <div className="option-card">
      <h1>{heading}</h1>
      <h3 className="text-muted">Count : {count}</h3>
      <OptionButton to={to}>View Data</OptionButton>
    </div>
  );
}
