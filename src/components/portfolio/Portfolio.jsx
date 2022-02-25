import { useEffect, useState, useRef } from "react";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import { Rerousel } from "rerousel";

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

// import Carousel from "nuka-carousel";

import Carousel from "../portfolio/Carousel";

import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  NYURevitPortfolio,
  RvsEngPortfolio,
  PendulumPortfolio,
  FEAPortfolio,
  SanJudePortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const carouselRef = useRef(null);
  const list = [
    {
      id: "Reverse",
      title: "Reverse Product Engineering",
    },
    {
      id: "Pendulum",
      title: "Product Design: Inverted Pendulum",
    },
    {
      id: "FEA",
      title: "Finite Element on Subway Wheel ",
    },
    {
      id: "renovation",
      title: "NYU Building Renovation",
    },
    {
      id: "881",
      title: "881 Sand Jude Landscaping",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Reverse":
        setData(RvsEngPortfolio);
        break;
      case "Pendulum":
        setData(PendulumPortfolio);
        break;
      case "FEA":
        setData(FEAPortfolio);
        break;
      case "881":
        setData(SanJudePortfolio);
        break;
      case "renovation":
        setData(NYURevitPortfolio);
        break;
      default:
        setData(RvsEngPortfolio);
    }
  }, [selected]);

  return (
    <div>
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
      </div>

      <hr className="increasespeace" />

      <div className="bb3">
        <div className="box1">
          <div className="container">
            <div className="item">
              <Carousel
                style={{ marginRight: "1em" }}
                images={[data.img, data.img2, data.img3, data.img4]}
                interval={5000}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bb1">
            <div>
              <h3>{data.descriptionTitle}</h3>
              <> </>
              <h4 className="increasespace"> {data.descriptionBody}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
