import React, { useRef, useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import Typical from "react-typical";
import { TweenMax, Power3 } from "gsap/gsap-core";
import axios from "axios";
import PostsCard from "../components/PostsCard";
import PostModal from "../components/PostModal";

export default function Posts() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(0);
  var cardContainer = useRef(null);
  var content = useRef(null);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://dummy-wireframe.iecsemanipal.com/social-media/posts?apikey=wzo04y8hhu9fqcqrda1ib8",
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
    <div className="container posts-container">
      <TopNav />
      <div className="posts-content" ref={(el) => (content = el)}>
        <div className="posts-header">
          {" "}
          <Typical wrapper="div" steps={["Our analysis shows that these 201 social media posts are linked to the 100 subjects", 5000]} />
        </div>
        <div ref={(el) => (cardContainer = el)} className="card-container">
          {show ? (
            <PostModal id={selected} show={show} setShow={setShow} />
          ) : (
            <>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <PostsCard key={index} item={item} setSelected={setSelected} setShow={setShow} />
                </React.Fragment>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
