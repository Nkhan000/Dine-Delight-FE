/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import { HiCurrencyDollar, HiHandThumbUp } from "react-icons/hi2";

import { FaTruckMoving, FaMap } from "react-icons/fa";
import Heading from "../ui/Heading";
import GradientIcon from "./GradientIcon";
// import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  gap: 3rem;
  /* padding-right: 20rem; */
`;

// const StyledDivIcon = styled.div`
//   width: 5rem;
//   height: 5rem;
//   border-radius: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;

//   & svg {
//     display: inline-block;
//     width: 4.6rem;
//     height: 4.6rem;
//     background-color: transparent;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// `;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;
const StyledText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-600);
`;

function HiglightItem({ data }) {
  const { heading, text, id, icon } = data;
  return (
    <Container>
      <GradientIcon iconHeight={5}>
        {icon === "money" && <HiCurrencyDollar />}
        {icon === "map" && <FaMap />}
        {icon === "delivery" && <FaTruckMoving />}
        {icon === "quality" && <HiHandThumbUp />}
      </GradientIcon>

      <StyledTextContainer>
        <Heading as="h3" color="light">
          {heading}
        </Heading>
        <StyledText>{text}</StyledText>
      </StyledTextContainer>
    </Container>
  );
}

export default HiglightItem;
