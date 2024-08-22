/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import ReviewItemLarge from "./ReviewItemLarge";
import FeaturedListContainer from "./FeaturedListContainer";

function FeaturedReviews({ showLink }) {
  return (
    <FeaturedListContainer>
      <ReviewItemLarge showLink={showLink} />
      <ReviewItemLarge showLink={showLink} />
      <ReviewItemLarge showLink={showLink} />
      <ReviewItemLarge showLink={showLink} />
      <ReviewItemLarge showLink={showLink} />
    </FeaturedListContainer>
  );
}

export default FeaturedReviews;
