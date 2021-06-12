import React, { useRef, useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import Typical from "react-typical";
import { TweenMax, Power3 } from "gsap/gsap-core";
// import useGetData from "../components/useGetData";
import DataCard from "../components/DataCard";
import axios from "axios";
import Modal from "../components/Modal";

export default function Profiles() {
  // const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(0);

  // const [pageNumber, setPageNumber] = useState(1);
  //   useGetData(query, pageNumber);
  var header = useRef(null);
  var cardContainer = useRef(null);
  var content = useRef(null);

  // const data = [
  //   {
  //     location: {
  //       state: "Rheinland-Pfalz",
  //       street: "4118, Schulstraße",
  //       city: "Fellbach",
  //       timezone: "-7:00",
  //       country: "Germany",
  //     },

  //     _id: "60a883fbba5fc728ad27da58",
  //     id: "0F8JIqi4zwvb77FGz6Wt",
  //     lastName: "Fiedler",
  //     firstName: "Heinz-Georg",
  //     email: "heinz-georg.fiedler@example.com",
  //     title: "mr",
  //     picture: "https://randomuser.me/api/portraits/men/81.jpg",
  //     __v: "0",
  //     dateOfBirth: "1974-03-12T21:15:08.878Z",
  //     gender: "male",
  //     phone: "0700-3090279",
  //     registerDate: "2020-03-07T00:42:32.221Z",
  //   },
  // ];

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://dummy-wireframe.iecsemanipal.com/social-media/users?apikey=wzo04y8hhu9fqcqrda1ib8",
    }).then((res) => {
      console.log(res.data);
      setData(res.data.data);
    });

    TweenMax.to(header, 3, {
      delay: 4.5,
      opacity: 1,
      fontSize: "1.2rem",
      ease: Power3.easeOut,
    });

    TweenMax.from(cardContainer, 3, {
      delay: 7,
      position: "relative",
      top: 400,
      opacity: 0,
      ease: Power3.easeOut,
    });

    TweenMax.to(content, 1, {
      delay: 7,
      overflowY: "scroll",
      opacity: 1,
      ease: Power3.easeOut,
    });
    TweenMax.to(cardContainer, 3, {
      delay: 7,
      opacity: 1,
      top: 0,
      ease: Power3.easeOut,
    });
    // setQuery("Test");
    // setPageNumber(1);
  }, []);

  return (
    <div className="container profile-container">
      <TopNav />
      <div className="profile-content" ref={(el) => (content = el)}>
        <div className="profile-header" ref={(el) => (header = el)}>
          {" "}
          <Typical wrapper="h1" steps={["Social Media Users have been compromised, we have profiles of 100 users. Hover to reveal their facade", 3000]} />
        </div>
        <div ref={(el) => (cardContainer = el)} className="card-container">
          {show ? (
            <Modal id={selected} show={show} setShow={setShow} />
          ) : (
            <>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="stack-lines top-card">
                    <div className="stack-lines">
                      <div className="stack-lines">
                        <DataCard key={index} item={item} setSelected={setSelected} setShow={setShow} />
                      </div>
                    </div>{" "}
                  </div>
                </React.Fragment>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
