import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

export default function PostModal({ show, setShow, id }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://dummy-wireframe.iecsemanipal.com/social-media/post/" + id + "?apikey=wzo04y8hhu9fqcqrda1ib8",
    }).then((res) => {
      console.log(res.data);
      console.log("HI?");
      setData(res.data.data);
    });
  }, [id]);
  return (
    <div style={show ? { display: "flex" } : { display: "none" }} className="modal-container">
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

      <button
        className="cancel-btn"
        onClick={() => {
          setShow(!show);
          setData("");
        }}
      >
        <FaTimes />
        Close
      </button>
      <div className="modal-card">
        {data.text ? (
          <>
            <div className="post-img" style={{ backgroundImage: `url('${data.image}')` }}></div>

            <h1>{data.text}</h1>
            <p className="text-muted">
              <a href={data.link} className="red-text">
                Link
              </a>
            </p>
            <p className="text-muted">
              <b>{data.likes}</b>
            </p>
            <h3>Posted By</h3>
            <h4 className="text-muted">
              <b>
                {data.owner.firstName} {data.owner.lastName}
              </b>
            </h4>
          </>
        ) : (
          <div className="loader">Loading...</div>
        )}
      </div>
    </div>
  );
}
