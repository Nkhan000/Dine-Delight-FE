/* eslint-disable no-unused-vars */

import styled from "styled-components";
import FeaturedReviews from "./FeaturedReviews";
import Heading from "./Heading";
import StyledStars from "./StyledStars";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const RatingsContainer = styled.div`
  align-items: center;
  gap: 1rem;
  display: grid;
  grid-template-columns: max-content 1fr;
  margin-top: 1rem;
`;
const RatingTextLight = styled.p`
  font-size: 1.3rem;
  color: var(--color-grey-300);
  font-style: italic;
`;

const RatingsHeadText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-50);
  padding-bottom: 0.4rem;
  border-bottom: 1px solid grey;
`;
// const RatingsBarContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 0 1rem;
// `;

// const RatingBarDiv = styled.div`
//   display: grid;
//   grid-template-columns: max-content auto max-content;
//   gap: 1.4rem;
//   align-items: center;

//   & svg {
//     fill: var(--color-orange-50);
//   }
// `;

// const RatingBar = styled.div`
//   height: 1.6rem;
//   width: 100%;

//   background-image: linear-gradient(
//     to right,
//     var(--color-orange-50) ${(props) => props.ratings * 20}%,
//     white 0.5%,
//     white
//   );

//   border: 1px solid;
// `;

// const RatingText = styled.p`
//   font-weight: 600;
//   font-size: 1.4rem;
//   color: var(--color-grey-50);
// `;

// const SeeAllReviewsDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   /* width: 100; */
// `;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const RatingsCircleDiv = styled.div`
  border: 3px solid var(--color-grey-600);
  border-radius: 5rem;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & span {
    color: var(--color-grey-50);
  }
`;

const RaitingsIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: var(--color-orange-50);
  }
`;

const RatingTextLg = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
`;
const RatingTextSm = styled.span`
  font-size: 1rem;
`;

function RatingsReviewBox() {
  // const avgRatings =
  return (
    <Container>
      <RatingsContainer>
        <RatingsCircleDiv>
          <RatingTextLg>4.5 </RatingTextLg>
          <RatingTextSm>
            Out of <strong>5.0</strong>
          </RatingTextSm>
        </RatingsCircleDiv>
        <RaitingsIconDiv>
          <StyledStars avgRatings={4.5} />
          <RatingTextLight>
            Rated by over 500+ verified cusomers like you
          </RatingTextLight>
        </RaitingsIconDiv>
      </RatingsContainer>
      {/* <RatingsContainer>
        <RatingTextLight>Rated by over 500+ verified users</RatingTextLight>
        <RatingsBarContainer>
          <RatingBarDiv>
            <RatingText>4.0 - 5.0</RatingText>
            <RatingBar ratings={4}>&nbsp;</RatingBar>
            <RatingText>80%</RatingText>
          </RatingBarDiv>
          <RatingBarDiv>
            <RatingText>3.0 - 4.0</RatingText>
            <RatingBar ratings={1}>&nbsp;</RatingBar>
            <RatingText>10%</RatingText>
          </RatingBarDiv>
          <RatingBarDiv>
            <RatingText>2.0 - 3.0</RatingText>
            <RatingBar ratings={0.7}>&nbsp;</RatingBar>
            <RatingText>7%</RatingText>
          </RatingBarDiv>
          <RatingBarDiv>
            <RatingText>1.0 - 2.0</RatingText>
            <RatingBar ratings={0.3}>&nbsp;</RatingBar>
            <RatingText>3%</RatingText>
          </RatingBarDiv>
        </RatingsBarContainer>
      </RatingsContainer> */}

      <ReviewsContainer>
        <RatingsHeadText>What our customer says</RatingsHeadText>
        <FeaturedReviews showLink={"no"} />
        <Button size="medium" variation="secondary">
          See all reviews
        </Button>
      </ReviewsContainer>
    </Container>
  );
}

export default RatingsReviewBox;
