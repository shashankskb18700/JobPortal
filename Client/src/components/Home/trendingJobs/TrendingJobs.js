import React from "react";

import "./TrendingJobs.css";

import TrendingJobsCards from "./trendingJobsCard/TrendingJobCards";

const TrendingJobs = () => {
  return (
    <div className="trendingJobs">
      <h2 style={{ marginBottom: "1em" }}>Trending jobs</h2>
      <div className="trendingBlock">
        <TrendingJobsCards
          logo={"https://i.ibb.co/XfBSBRK/firebase.png"}
          name={"Apple computer Inc"}
          position={"developer"}
          ExpRequired={"5 year"}
          Apply={"submit"}
        />
        <TrendingJobsCards
          logo={"https://i.ibb.co/XfBSBRK/firebase.png"}
          name={"Apple computer Inc"}
          position={"developer"}
          ExpRequired={"5 year"}
          Apply={"submit"}
        />
        <TrendingJobsCards
          logo={"https://i.ibb.co/XfBSBRK/firebase.png"}
          name={"Apple computer Inc"}
          position={"developer"}
          ExpRequired={"5 year"}
          Apply={"submit"}
        />
        <TrendingJobsCards
          logo={"https://i.ibb.co/XfBSBRK/firebase.png"}
          name={"Apple computer Inc"}
          position={"developer"}
          ExpRequired={"5 year"}
          Apply={"submit"}
        />

        {/* <div className="jobs">apple</div>
        <div className="jobs">google</div>
        <div className="jobs"> microsoft</div>
        <div className="jobs"> Goldman</div>
        <div className="jobs"> flipkart </div> */}
      </div>
    </div>
  );
};

export default TrendingJobs;
