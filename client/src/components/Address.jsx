import React, { useState, useRef, useEffect } from "react";
import "./Address.css";

const Address = ({ onAddressSelect }) => {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const debounceTimeout = useRef(null);

  const GEOCODIFY_API_KEY = import.meta.env.VITE_GEOCODIFY_API_KEY;

  const fetchSuggestions = async (query) => {
    if (query.length < 3) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }
    try {
      const response = await fetch(
        `https://api.geocodify.com/v2/autocomplete?api_key=${GEOCODIFY_API_KEY}&q=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();
      if (data.response && data.response.features) {
        const addresses = data.response.features.map((feature) => ({
          description: feature.properties.label,
          place_id: feature.properties.id,
        }));
        setSuggestions(addresses);
        setShowDropdown(true);
      }
    } catch (error) {
      console.error("Geocodify autocomplete error:", error);
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      fetchSuggestions(value);
    }, 300);
  };

  const handleSelectSuggestion = async (suggestion) => {
    try {
      const response = await fetch(
        `https://api.geocodify.com/v2/geocode?api_key=${GEOCODIFY_API_KEY}&q=${encodeURIComponent(
          suggestion.description
        )}`
      );
      const data = await response.json();
      if (
        data.response &&
        data.response.features &&
        data.response.features[0]
      ) {
        const formattedAddress = data.response.features[0].properties.label;
        setAddress(formattedAddress);
        onAddressSelect?.(formattedAddress);
        setSuggestions([]);
        setShowDropdown(false);
      }
    } catch (error) {
      console.error("Geocodify geocode error:", error);
      setAddress(suggestion.description);
      onAddressSelect?.(suggestion.description);
      setShowDropdown(false);
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://api.geocodify.com/v2/reverse?api_key=${GEOCODIFY_API_KEY}&lat=${latitude}&lng=${longitude}`
            );
            const data = await response.json();
            if (
              data.response &&
              data.response.features &&
              data.response.features[0]
            ) {
              const formattedAddress =
                data.response.features[0].properties.label;
              setAddress(formattedAddress);
              onAddressSelect?.(formattedAddress);
              setSuggestions([]);
              setShowDropdown(false);
            }
          } catch (error) {
            console.error("Geocodify reverse geocode error:", error);
            alert("Unable to fetch current location.");
          }
        },
        (error) => {
          console.error("Geolocation denied:", error);
          alert("Please enable location access.");
        }
      );
    } else {
      alert("Geolocation not supported by your browser.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedText = e.dataTransfer.getData("text/plain");
    if (droppedText) {
      setAddress(droppedText);
      onAddressSelect?.(droppedText);
      fetchSuggestions(droppedText);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="address-wrapper">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter delivery address"
          value={address}
          onChange={handleInputChange}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          ref={inputRef}
          className="address-input"
        />
        <button
          className="location-button"
          onClick={handleCurrentLocation}
          title="Use Current Location"
        >
          <i className="fas fa-location-crosshairs" />
        </button>
        {showDropdown && (
          <ul className="address-dropdown">
            <li
              className="dropdown-item current-location"
              onClick={handleCurrentLocation}
            >
              <span className="location-icon">📍</span> Use Current Location
            </li>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Address;
