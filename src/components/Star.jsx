import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// This component represents a single star.
// - Receives props for ratingValue, hover, rating, onMouseEnter,
// onMouseLeave, and onClick.
// - Contains the logic for rendering the FontAwesomeIcon and the input element.

function Star({
  ratingValue,
  hover,
  rating,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) {
  return (
    <>
      <label>
        <input
          className="radio-buttons"
          type="radio"
          name="rating"
          value={ratingValue}
          onClick={() => onClick(ratingValue)}
        />
        <FontAwesomeIcon
          icon={faStar}
          className="star"
          color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
          onMouseEnter={() => onMouseEnter(ratingValue)}
          onMouseLeave={() => onMouseLeave()}
        />
      </label>
    </>
  );
}

export default Star;
