import React, { useRef, useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import { TweenMax, Power3 } from "gsap/gsap-core";
import axios from "axios";
import TypeIt from "typeit-react";
import StockCard from "../components/StockCard";
import StockModal from "../components/StockModal";

export default function Stocks() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(0);
  var cardContainer = useRef(null);
  var content = useRef(null);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://dummy-wireframe.iecsemanipal.com/stocks?apikey=wzo04y8hhu9fqcqrda1ib8",
    }).then((res) => {
      console.log(res.data);
      setData(res.data.data);
    });

    TweenMax.from(cardContainer, 3, {
      delay: 5,
      position: "relative",
      top: 400,
      opacity: 0,
      ease: Power3.easeOut,
    });

    TweenMax.to(content, 1, {
      delay: 5,
      overflowY: "scroll",
      opacity: 1,
      ease: Power3.easeOut,
    });
    TweenMax.to(cardContainer, 3, {
      delay: 5,
      opacity: 1,
      top: 0,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="container stocks-container">
      <TopNav />
      <div className="stocks-content" ref={(el) => (content = el)}>
        <div className="stocks-header">
          <TypeIt
            element={"div"}
            getBeforeInit={(instance) => {
              instance
                .type("We have had some stocks under our radar. ")
                .pause(700)

                .type("Here is the compiled list of 25 stocks with their details.");
              return instance;
            }}
            options={{
              speed: 50,
            }}
          />
        </div>
        <div ref={(el) => (cardContainer = el)} className="card-container">
          {show ? (
            <StockModal id={selected} show={show} setShow={setShow} />
          ) : (
            <div className="stocks-table">
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <StockCard key={index} item={item} setSelected={setSelected} setShow={setShow} />
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
