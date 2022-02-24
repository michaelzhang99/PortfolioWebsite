import { useState, useEffect } from "react";
import "./Carousel.scss";
export default function Carousel(props) {
  const images = props.images;
  const interval = props.interval; // in milliseconds
  const [img, setImg] = useState(0);

  const next = () => {
    if (img === images.length - 1) {
      setImg(0);
    } else {
      setImg((img) => img + 1);
    }
  };

  // const prev = () => {
  //   if (img === 0) {
  //     setImg(images.length - 1);
  //   } else {
  //     setImg((img) => img - 1);
  //   }
  // };

  useEffect(() => {
    const slideTimer = window.setInterval(next, interval);
    return function cleanup() {
      window.clearInterval(slideTimer);
    };
  }, [img]);

  // const prevText = "";
  // const nextText = "";

  return (
    <div className="container1">
      {/* <button
        id="1"
        style={{
          fontSize: "1em",
          padding: 0.7,
          border: "none",
          background: "none",
        }}
        className="btn"
        onClick={prev}
      >
        {prevText}
      </button> */}
      <img src={images[img]} alt="slides" />
      {/* <button
        id="2"
        style={{
          fontSize: "1em",
          padding: 0.7,
          border: "none",
          background: "none",
        }}
        className="btn"
        onClick={next}
      >
        {nextText}
      </button> */}
    </div>
  );
}
