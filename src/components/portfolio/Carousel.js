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
      setImg(img + 1);
    }
  };

  const prev = () => {
    if (img === 0) {
      setImg(images.length - 1);
    } else {
      setImg(img - 1);
    }
  };

  useEffect(() => {
    const slideTimer = window.setInterval(next, interval);
    return function cleanup() {
      window.clearInterval(slideTimer);
    };
  }, []);

  const prevText = "<";
  const nextText = ">";

  return (
    <div style={{ height: "100%", width: "100%" }} className="img-wrapper">
      <button
        style={{
          fontSize: "5em",
          padding: 0,
          border: "none",
          background: "none",
        }}
        className="btn btn-md btn-success"
        onClick={prev}
      >
        {prevText}
      </button>
      <img
        style={{ height: "100%", width: "100%", borderRadius: "20px" }}
        className="img-responsive"
        src={images[img]}
      />
      <button
        style={{
          fontSize: "5em",
          padding: 0,
          border: "none",
          background: "none",
        }}
        className="btn btn-md btn-success"
        onClick={next}
      >
        {nextText}
      </button>
    </div>
  );
}
