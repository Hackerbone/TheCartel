import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

export default function Modal({ show, setShow, id }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://dummy-wireframe.iecsemanipal.com/social-media/user/" + id + "?apikey=wzo04y8hhu9fqcqrda1ib8",
    }).then((res) => {
      console.log(res.data);
      console.log("HI?");
      setData(res.data.data);
    });
  }, [id]);
  return (
    <div style={show ? { display: "block" } : { display: "none" }} className="modal-container">
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
          <div class="loader">Loading...</div>
        )}
      </div>
    </div>
  );
}
