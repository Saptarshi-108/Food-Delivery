import React, { useState, useEffect } from "react";
import "./recommend.css";

const Recommend = ({ name, cuisine, rating, image, address }) => {
  return (
    <div className="recommend-card">
      <img
        src={image}
        alt={name}
        className="recommend-image"
        onError={(e) => {
          console.error(`Failed to load image: ${image}`);
          e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
        }}
      />
      <div className="recommend-content">
        <h3 className="recommend-title">{name}</h3>
        <p className="recommend-cuisine">{cuisine}</p>
        <div className="recommend-rating">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < Math.round(rating) ? "star filled" : "star"}
            >
              ★
            </span>
          ))}
          <span>({rating.toFixed(1)})</span>
        </div>
        <p className="recommend-address">{address}</p>
      </div>
    </div>
  );
};

const RecommendList = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/food-places");
        if (!response.ok) throw new Error("Failed to fetch food places");
        const data = await response.json();
        setPlaces(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  if (loading) {
    return <div className="recommend-loading">Loading...</div>;
  }

  if (error) {
    return <div className="recommend-error">Error: {error}</div>;
  }

  return (
    <div className="recommend-list">
      {places.map((place) => (
        <Recommend
          key={place._id}
          name={place.name}
          cuisine={place.cuisine}
          rating={place.rating}
          image={place.image}
          address={place.address}
        />
      ))}
    </div>
  );
};

export default RecommendList;
