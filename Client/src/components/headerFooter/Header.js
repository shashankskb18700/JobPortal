import React from "react";

import img1 from "../../Assets/chandigarh-university-seal.png";

import { ReactComponent as Svg1 } from "../../Assets/icons/home.svg";
import { ReactComponent as Svg2 } from "../../Assets/icons/search3.svg";
import { ReactComponent as Svg3 } from "../../Assets/icons/person.svg";

import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      {/* <div> JOB Portal</div> */}
      <img src={img1}></img>
      <div className="pagesOption">
        <Svg1 className="homePageSvg" />
        <Svg2 className="homePageSvg" style={{ height: "1.23em" }} />
        <Svg3 className="homePageSvg" />
        {/* <span>home</span>
        <span>search</span> */}
        {/* <span>saved</span> */}
        {/* <span>account</span> */}
      </div>
    </div>
  );
};

export default Header;
