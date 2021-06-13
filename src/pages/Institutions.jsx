import React, { useRef, useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import { TweenMax, Power3 } from "gsap/gsap-core";
import axios from "axios";
import InstitutionModal from "../components/InstitutionModal";
import TypeIt from "typeit-react";
import InstitutionCard from "../components/InstitutionCard";

export default function Institutions() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(0);
  var cardContainer = useRef(null);
  var content = useRef(null);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://dummy-wireframe.iecsemanipal.com/institutions?apikey=wzo04y8hhu9fqcqrda1ib8",
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
              instance.type("The Institutions listed below are under investigation. ").pause(700).type("We have a list of 100 institutions.");

              // Remember to return it!
              return instance;
            }}
            options={{
              speed: 60,
              waitUntilVisible: true,
            }}
          />
        </div>
        <div ref={(el) => (cardContainer = el)} className="card-container">
          {show ? (
            <InstitutionModal id={selected} show={show} setShow={setShow} />
          ) : (
            <>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <InstitutionCard key={index} item={item} setSelected={setSelected} setShow={setShow} />
                </React.Fragment>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
