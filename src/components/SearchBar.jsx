import React from "react";
import "./searchbar.css";

function searchBar(props) {
  return (
    <input
      className="searchBar"
      type="search"
      id="searchBar"
      placeholder="Search"
      onChange={props.onChange}
    ></input>
  );
}

export default searchBar;
