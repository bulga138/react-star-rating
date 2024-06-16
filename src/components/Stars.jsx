import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Stars() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              className="radio-buttons"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>The rating is {rating}.</p>
    </>
  );
}

export default Stars;
