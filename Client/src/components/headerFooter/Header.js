import React, { useState, useEffect } from "react";

import { ReactComponent as LogoSvg } from "../../Assets/cu-logo.svg";
import { ReactComponent as Svg1 } from "../../Assets/icons/home.svg";
import { ReactComponent as Svg2 } from "../../Assets/icons/search3.svg";
import { ReactComponent as Svg3 } from "../../Assets/icons/person1.svg";

import "./Header.css";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    console.log(scroll);
  }, []);

  console.log(scroll);
  return (
    <div className={scroll ? "header sticky" : "header"}>
      <div className="logo">
        {/* <span style={{ fontFamily: "sans-serif" }}>CHANDIGARH UNIVERSITY</span> */}
        <LogoSvg style={{ width: "200px", height: "fit-content" }} />
        <span style={{ paddingLeft: "1em" }}>
          | <span style={{ paddingLeft: "1em" }}>CARRERS</span>
        </span>
      </div>
      {/* <img src={img1}></img> */}
      <div className="pagesOption">
        <Svg1 className="homePageSvg" />
        <Svg2 className="homePageSvg" style={{ height: "1.23rem" }} />
        <Svg3 className="homePageSvg" style={{ height: "1.23rem" }} />
        {/* <span>home</span>
        <span>search</span> */}
        {/* <span>saved</span> */}
        {/* <span>account</span> */}
      </div>
    </div>
  );
};

export default Header;
