import React, { useState } from "react";

export default function DataCard({ item, setSelected, setShow }) {
  return (
    <>
      <div
        className="data-card"
        onClick={() => {
          setShow(1);
          setSelected(item._id);
        }}
      >
        <div className="profile-img" style={{ backgroundImage: `url('${item.picture}')` }}></div>

        <h1>
          {item.firstName} {item.lastName}
        </h1>
        <p className="text-muted">
          Email : <b>{item.email}</b>
        </p>
        <p className="text-muted">
          Phone: <b>{item.phone}</b>
        </p>
        <p className="text-muted">
          Register Date: <b>{new Date(item.registerDate).toDateString()}</b>
        </p>
        <p className="text-muted">
          Gender: <b>{item.gender}</b>
        </p>
        <p className="text-muted">
          Date of Birth: <b>{new Date(item.dateOfBirth).toDateString()}</b>
        </p>
      </div>
    </>
  );
}
