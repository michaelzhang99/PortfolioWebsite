import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import { boolean, number, text } from "@storybook/addon-knobs";

import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

// const tooglesGroupId = "Toggles";
// const valuesGroupId = "Values";

// const createCarouselItemImage = (index, options = {}) => (
//   <div key={index}>
//     <p className="legend">Legend {index}</p>
//   </div>
// );

// const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;

// const getConfigurableProps = () => ({
//   showArrows: boolean("showArrows", true, tooglesGroupId),
//   showStatus: boolean("showStatus", true, tooglesGroupId),
//   showIndicators: boolean("showIndicators", true, tooglesGroupId),
//   infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
//   showThumbs: boolean("showThumbs", true, tooglesGroupId),
//   useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
//   autoPlay: boolean("autoPlay", true, tooglesGroupId),
//   stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
//   swipeable: boolean("swipeable", true, tooglesGroupId),
//   dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
//   emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
//   autoFocus: boolean("autoFocus", false, tooglesGroupId),
//   thumbWidth: number("thumbWidth", 100, {}, valuesGroupId),
//   selectedItem: number("selectedItem", 0, {}, valuesGroupId),
//   interval: number("interval", 2000, {}, valuesGroupId),
//   transitionTime: number("transitionTime", 500, {}, valuesGroupId),
//   swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),
//   ariaLabel: text("ariaLabel", undefined),
// });

// export const fade = () => (
//   <Carousel
//     {...getConfigurableProps()}
//     animationHandler="fade"
//     swipeable={false}
//   >
//     {baseChildren.props.children}
//   </Carousel>
// );

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
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
            {data.map((d) => (
              <div className="item">
                <Carousel>
                  <div>
                    <img src={d.img} alt="" />
                    <p className="legend">Wholistic View</p>
                  </div>
                  <div>
                    <img src={d.img3} alt="" />
                    <p className="legend">Roof Top SkyGarden</p>
                  </div>
                  <div>
                    <img src={d.img2} alt="" />
                    <p className="legend">Legend 3</p>
                  </div>
                </Carousel>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bb1">
            {data.map((d) => (
              <div>
                <h3>{d.descriptionTitle}</h3>
                <> </>
                <h4 className="increasespace"> {d.descriptionBody}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
