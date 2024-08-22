/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";
import GradientIcon from "./GradientIcon";
import styled, { css } from "styled-components";
import { useState } from "react";

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 2rem;
`;

const SingleStarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: translateY(-1rem);
    cursor: pointer;
  }

  /* ${(props) =>
    props.isClicked == false &&
    css`
      filter: brightness(0.5);
    `} */
`;

const StarEmoji = styled.span`
  font-size: 2rem;
  display: flex;
  gap: 2rem;
`;

const StarText = styled.span`
  font-size: 1.2rem;
  color: var(--color-grey-300);
  font-weight: 700;
`;

function Star({ value, onRate, rating, isClicked }) {
  const emojiObj = {
    1: "😣",
    2: "😐",
    3: "🙂",
    4: "😊",
    5: "😍",
  };
  const textObj = {
    1: "Poor",
    2: "Not Good",
    3: "Average",
    4: "Good",
    5: "Deliciuos",
  };
  return (
    <SingleStarContainer onClick={onRate} rating={rating} isClicked={isClicked}>
      <StarEmoji>{emojiObj[value + 1]}</StarEmoji>
      <GradientIcon iconHeight={4}>
        <FaStar />
      </GradientIcon>
      <StarText>{textObj[value + 1]}</StarText>
    </SingleStarContainer>
  );
}

function CreateRatingStar({ maxLength = 5, rating, setRating }) {
  // const [rating, setRating] = useState(0);

  return (
    <StarsContainer>
      {Array.from({ length: maxLength }, (_, i) => (
        <Star
          onRate={() => setRating(i + 1)}
          value={i}
          key={i}
          rating={rating}
          isClicked={rating === i + 1}
        >
          {" "}
        </Star>
      ))}
    </StarsContainer>
  );
}

export default CreateRatingStar;
