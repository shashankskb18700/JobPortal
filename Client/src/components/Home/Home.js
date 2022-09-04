import React from "react";
import Header from "../headerFooter/Header";

import JobSearch from "../jobSearchBlock/jobSearch";

import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="homeHeader">
        <Header />
        <JobSearch />
      </div>
    </div>
  );
};

export default Home;
