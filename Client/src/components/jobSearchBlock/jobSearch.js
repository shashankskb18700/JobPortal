import React, { useState } from "react";

import "./jobSearch.css";

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
      <input type="text" onChange={(e) => onChange(e)} value={input}></input>
      <button onClick={(e) => setInput(e.target.value)}>search</button>
    </div>
  );
};

export default JobSearch;
