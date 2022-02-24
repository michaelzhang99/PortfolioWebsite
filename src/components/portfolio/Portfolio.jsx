import { useEffect, useState, useRef } from "react";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import { Rerousel } from "rerousel";

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

// import Carousel from "nuka-carousel";

import Carousel from "../portfolio/Carousel";

import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const carouselRef = useRef(null);
  const list = [
    {
      id: "renovation",
      title: "NYU Building Renovation",
    },
    {
      id: "Reverse",
      title: "Reverse Product Engineering",
    },
    {
      id: "Bike",
      title: "Custom Built Bike",
    },
    {
      id: "Cad",
      title: "CAD",
    },
    {
      id: "881",
      title: "881 Sand Jude Landscaping",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "renovation":
        setData(featuredPortfolio);
        break;
      case "Reverse":
        setData(webPortfolio);
        break;
      case "Bike":
        setData(mobilePortfolio);
        break;
      case "Cad":
        setData(designPortfolio);
        break;
      case "881":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
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
                images={[data.img, data.img2, data.img3, data.img4]}
                interval={1000}
              />

              {/* <Rerousel itemRef={carouselRef} interval={5000} stop={false}>
                <img src={data.img} key="img" ref={carouselRef} />
                <img src={data.img2} key="img2" ref={carouselRef} />
                <img src={data.img3} key="img3" ref={carouselRef} />
                <img src={data.img4} key="img4" ref={carouselRef} />
                <img src={data.img5} key="img5" ref={carouselRef} />
              </Rerousel> */}
              {/* 
<CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> */}

              {/* <Carousel>
                <img src={data.img} alt="" />
                <img
                  src={require("../portfolio/nyuRevit/SkyGarden.png")}
                  alt=""
                />
                <img src={data.img2} alt="" />
                <img src={data.img3} alt="" />
                <img src={data.img4} alt="" />
                <img src={data.img5} alt="" /> */}
              {/* </Carousel> */}
              {/* <Rerousel>
                  <div className="slides">
                    <img src={data.img} alt="" />
                  </div>
                  <div className="slides">
                    <img src={data.img2} alt="" />
                  </div>
                  <div className="slides">
                    <img src={data.img3} alt="" />
                  </div>
                  <div className="slides">
                    <img src={data.img} alt="" />
                  </div>
                </Rerousel> */}
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
