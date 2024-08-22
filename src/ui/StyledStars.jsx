/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

function StyledStars({ ratingsAverage }) {
  if (typeof ratingsAverage !== "number") {
    return null; // Render nothing if ratingsAverage is not a number
  }

  let fullStars = Math.floor(ratingsAverage);
  let halfStars = Math.ceil(ratingsAverage) - fullStars;
  let emptyStars = 5 - Math.ceil(ratingsAverage);

  function iconMultiplier(num, icon) {
    return [...Array(num)].map((_, index) => {
      if (icon == "fullStar") return <FaStar key={index} />;
      if (icon == "halfStar") return <FaStarHalfStroke key={index} />;
      if (icon == "emptyStar") return <FaRegStar key={index} />;
    });
    // return [...Array(num)].map((_, index) => icon);
  }

  return (
    <div>
      {iconMultiplier(fullStars, "fullStar")}
      {iconMultiplier(halfStars, "halfStar")}
      {iconMultiplier(emptyStars, "emptyStar")}
    </div>
  );
}

export default StyledStars;
