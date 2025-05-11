import React from "react";
import "./Details.css";
import mapointer from "../../public/location-sign-svgrepo-com.svg"; // Kept for CSS background-image

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
        <label>
          <input
            type="text"
            placeholder="Search name of the Restaurants and items"
          />
        </label>
      </div>
    </div>
  );
};

export default Details;
