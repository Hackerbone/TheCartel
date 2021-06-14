import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import { TweenMax } from "gsap";
import { Power3 } from "gsap/gsap-core";
export default function Modal({ show, setShow, id }) {
  const [data, setData] = useState([]);

  let modalContainer = useRef(null);

  const closeModal = () => {
    TweenMax.from(modalContainer, 0.2, {
      transform: "scale(1)",
      ease: Power3.easeInOut,
    });
    TweenMax.to(modalContainer, 0.2, {
      transform: "scale(0)",
    });

    setTimeout(() => {
      setShow(!show);
      setData("");
    }, 350);
  };
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://dummy-wireframe.iecsemanipal.com/social-media/user/" + id + "?apikey=wzo04y8hhu9fqcqrda1ib8",
    }).then((res) => {
      console.log(res.data);
      console.log("HI?");
      setData(res.data.data);
    });

    TweenMax.from(modalContainer, 0.2, {
      transform: "scale(0.4)",
    });
    TweenMax.to(modalContainer, 0.2, {
      transform: "scale(1)",
      ease: Power3.easeInOut,
    });
  }, [id]);
  return (
    <div style={show ? { display: "flex", opacity: "1" } : { display: "none", opacity: "0" }} className="modal-container" ref={(el) => (modalContainer = el)}>
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
          closeModal();
        }}
      >
        <FaTimes />
        Close
      </button>
      <div className="modal-card">
        {data.firstName ? (
          <>
            <div className="profile-img" style={{ backgroundImage: `url('${data.picture}')` }}></div>
            <div>
              <h1>
                {data.firstName} {data.lastName}
              </h1>
              <p className="text-muted">
                Email : <b>{data.email}</b>
              </p>
              <p className="text-muted">
                Phone: <b>{data.phone}</b>
              </p>
              <p className="text-muted">
                Register Date: <b>{new Date(data.registerDate).toDateString()}</b>
              </p>
              <p className="text-muted">
                Gender: <b>{data.gender}</b>
              </p>
              <p className="text-muted">
                Date of Birth: <b>{new Date(data.dateOfBirth).toDateString()}</b>
              </p>
            </div>

            <div className="location">
              <h3>Past Known Location</h3>
              <p className="text-muted">
                {data.location.street}, {data.location.city}, {data.location.state}, {data.location.country}{" "}
              </p>
              <p className="text-muted">
                Timezone: <b>{data.location.timezone}</b>
              </p>
            </div>
          </>
        ) : (
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        )}
      </div>
    </div>
  );
}
