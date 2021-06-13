import React from "react";

export default function InstitutionCard({ item, setSelected, setShow }) {
  return (
    <>
      <div
        className="post-card"
        onClick={() => {
          setShow(1);
          setSelected(item._id);
        }}
      >
        <h1>
          {item.area_name} ({item.year})
        </h1>
        <p className="text-muted">
          Type - <b>{item.type}</b>
        </p>
      </div>
    </>
  );
}
