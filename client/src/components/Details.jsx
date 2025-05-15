import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="details-container">
      <h1>
        Order your food anytime, anywhere.
        <br />
        At your doorstep in minutes.
      </h1>
      <div className="location-input">
        <label>
          <input type="text" placeholder="Enter the delivery location" />
        </label>
      </div>
      <div className="source-details">
        <a href="/search" className="source-details-link">
          <label>
            <input
              type="text"
              placeholder="Search name of the Restaurants and items"
            />
          </label>
        </a>
      </div>
    </div>
  );
};

export default Details;
