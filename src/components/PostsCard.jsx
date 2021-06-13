import React from "react";

export default function PostsCard({ item, setSelected, setShow }) {
  return (
    <>
      <div
        className="post-card"
        onClick={() => {
          setShow(1);
          setSelected(item._id);
        }}
      >
        <div className="post-img" style={{ backgroundImage: `url('${item.image}')` }}></div>

        <h1>{item.text}</h1>
        <p className="text-muted">
          <a href={item.link} className="red-text">
            Link
          </a>
        </p>
        <p className="text-muted">
          <b>{item.likes}</b>
        </p>
        <h3>Posted By</h3>
        <h4 className="text-muted">
          <b>
            {item.owner.firstName} {item.owner.lastName}
          </b>
        </h4>
      </div>
    </>
  );
}
