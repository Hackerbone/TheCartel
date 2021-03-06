import React, { useRef, useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import { TweenMax, Power3 } from "gsap/gsap-core";
import DataCard from "../components/DataCard";
import axios from "axios";
import Modal from "../components/Modal";
import TypeIt from "typeit-react";

export default function Profiles() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(0);
  var cardContainer = useRef(null);
  var content = useRef(null);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://dummy-wireframe.iecsemanipal.com/social-media/users?apikey=wzo04y8hhu9fqcqrda1ib8",
    }).then((res) => {
      console.log(res.data);
      setData(res.data.data);
    });

    TweenMax.from(cardContainer, 3, {
      delay: 6.5,
      position: "relative",
      top: 400,
      opacity: 0,
      ease: Power3.easeOut,
    });

    TweenMax.to(content, 1, {
      delay: 6.5,
      overflowY: "scroll",
      opacity: 1,
      ease: Power3.easeOut,
    });
    TweenMax.to(cardContainer, 3, {
      delay: 6.5,
      opacity: 1,
      top: 0,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="container profile-container">
      <TopNav />
      <div className="profile-content" ref={(el) => (content = el)}>
        <div className="profile-header">
          {" "}
          <TypeIt
            element={"div"}
            getBeforeInit={(instance) => {
              instance.type("Social Media Users have been compromised. ").pause(700).type("We have profiles of 100 users.").pause(400).type(" Hover to reveal their facade");

              // Remember to return it!
              return instance;
            }}
            options={{
              speed: 50,
              waitUntilVisible: true,
            }}
          />
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
