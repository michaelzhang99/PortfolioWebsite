import { useState } from "react";
import "./Resume.scss";
import styled from "styled-components";

// import { Button, Icon } from "semantic-ui-react";
// import Commission from "./Downloadables/NYURevitComission.pdf";
// import MZResume from "./Downloadables/Michael-Zhang-Resume.pdf";
// import Plants from "./Downloadables/Plantsfor881SanJude.xlsx";
// import Landscape from "./Downloadables/LANDSCAPE.pdf";

export default function Resume() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/writing.png",
      title: "Resume",
      dtitle: "Resume",
      desc:
        "Hi check out my resume: school involvement, additional projects such as a custom made bike etc ",
      downloads: "./Downloadables/Michael-Zhang-Resume.pdf",
      downloadName: "Download",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Linkedin Profile",
      dtitle: "Linkedin",
      desc: "Check out my Linkedin profile and come say hi :)",
      downloads: "https://www.linkedin.com/in/michaelzhang1219/",
      downloadName: "Visit my",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "More Info NYU Revit",
      dtitle: "NYU Revit Commission",
      desc:
        " Find a whole commision report with floor plans of every floor, vision statement to the right",
      downloads: "./Downloadables/NYURevitComission.pdf",
      downloadName: "Download",
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      title: "More Info San Jude",
      dtitle: "San Jude Plans",
      desc:
        "More information regarding the 881 San Jude Landscape: full pdf of the landscape drawing and plant slections can be found to the right",
      downloads: "./Downloadables/LANDSCAPE.pdf",
      downloadName: "Download",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    width: 350px;
    height: 120px;
    border-radius: 10px;
    margin: 10px 0px;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
      background-color: #605e54;

  `;

  return (
    <div className="Resume" id="Resume">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <a href={d.downloads} download={d.dtitle}>
                  <Button>
                    <h2>
                      {d.downloadName} {d.title}
                    </h2>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
