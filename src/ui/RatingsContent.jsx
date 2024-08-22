/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import StyledStars from "./StyledStars";

const ContentRatings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const RatingsIconDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  & div svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-orange-50);
  }

  & span {
    font-size: 1.2rem;
    font-weight: 800;
  }
`;

const RatingTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & span {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

function RatingsContent({ ratingsAverage, numberOfReviews }) {
  // if (typeof ratingsAverage !== "number") {
  //   return null; // Render nothing if ratingsAverage is not a number
  // }
  // // console.log(ratingsAverage, numberOfReviews);
  // return (
  //   <ContentRatings>
  //     <RatingsIconDiv>
  //       <StyledStars ratingsAvg={ratingsAverage} />
  //       <span>({ratingsAverage})</span>
  //     </RatingsIconDiv>
  //     <RatingTextDiv>
  //       <span>{numberOfReviews} reviews</span>
  //     </RatingTextDiv>
  //   </ContentRatings>
  // );
}

export default RatingsContent;
