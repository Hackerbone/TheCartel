import React from "react";

export default function StockCard({ item, setSelected, setShow }) {
  return (
    <div
      className="stock-card"
      onClick={() => {
        setShow(1);
        setSelected(item._id);
      }}
    >
      <h1>{item.Symbol}</h1>
      <p className="exchange">{item.Exchange}</p>
    </div>
  );
}
