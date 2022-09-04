import React, { useState } from "react";

import "./jobSearch.css";

import { ReactComponent as SearchSvg } from "../../Assets/icons/search3.svg";

const arr = [
  "All our dreams can come true—if we have the courage to pursue them. —Walt Disney",
  "Choose a job you love, and you will never have to work a day in your life. —Confucius",
  "It is never too late to be what you might have been. —George Eliot",
  "Keep your face to the sunshine and you cannot see the shadows. —Helen Keller",

  "It's time to start living the life we've imagined. —Henry James",
  "The greatest thing in this world is not so much where we stand, as in what direction we are moving. —Oliver Wendell Holmes",
  "Far and away the best prize that life offers is the chance to work hard at work worth doing. —Theodore Roosevelt",

  "Do something for somebody every day for which you do not get paid. —Albert Schweitzer",
  "One person with courage makes a majority. —Andrew Jackson",
  "Only those who dare to fail greatly can ever achieve greatly. —Robert F. Kennedy",
];

const JobSearch = () => {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onClick = (e) => {
    console.log(e.target);
  };
  return (
    <div className="jobSearchContainer">
      <div className="quote">{arr[Math.floor(Math.random() * 10)]}</div>
      {/* <div>At Chandigarh university we strive for better tommorow</div> */}

      <div className="SearchBar">
        <input type="text" onChange={(e) => onChange(e)} value={input}></input>
        <button onClick={(e) => setInput(e.target.value)}>Search</button>
      </div>
    </div>
  );
};

export default JobSearch;
