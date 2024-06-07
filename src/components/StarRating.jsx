import { useState } from "react";
import Star from "./Star.jsx";

// This component manages the state (rating and hover).
// Renders a series of Star components, passing the necessary props to each.
// Contains the h2 element to display the current rating.

// This object contains the messages to display based on the rating.
// Defines rating messages similar to C# enums
const ratingMessages = {
  1: "Very bad",
  2: "Bad",
  3: "Okay",
  4: "Good",
  5: "Excellent",
  default: "No rating selected",
};

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleClick = (ratingValue) => setRating(ratingValue);
  const handleMouseEnter = (ratingValue) => setHover(ratingValue);
  const handleMouseLeave = () => setHover(null);

  const getRatingMessage = (rating) => {
    return ratingMessages[rating] || ratingMessages.default;
  };

  return (
    <>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;

        return (
          <Star
            key={ratingValue}
            ratingValue={ratingValue}
            hover={hover}
            rating={rating}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
        );
      })}
      <h2>{getRatingMessage(rating)}</h2>
    </>
  );
}

export default StarRating;
