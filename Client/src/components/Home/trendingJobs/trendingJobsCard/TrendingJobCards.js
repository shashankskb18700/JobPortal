import React from "react";

import "./TrendingJobsCard.css";

import { ReactComponent as SvgBrand } from "../../../../Assets/brands/apple-brands.svg";

const TrendingJobsCards = ({ logo, name, position, ExpRequired, Apply }) => {
  return (
    <div className="TrendingJobsCards">
      {/* <img src={logo}></img> */}
      <SvgBrand className="svgBrandIcon" />
      <div className="detail"> {name}</div>
      <div className="detail">Position : {position}</div>
      <div className="detail">Experiance : {ExpRequired} </div>
      <button>Apply</button>
    </div>
  );
};

export default TrendingJobsCards;
