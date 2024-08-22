/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import Notification from "../ui/NotificationWindow";
// import Heading from "./Heading";

const StyledHeroTextDiv = styled.div`
  height: 75vh;
  margin-top: 2rem;
  margin-bottom: 4.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  justify-content: center;
  align-items: flex-start;
  /* padding: 1rem 4rem 0rem 4rem; */
`;

const StyledSpan = styled.span`
  display: inline-block;
  /* text-align: center; */
  color: var(--color-grey-300);
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2;
`;

const HiglightText = styled.span`
  display: inline-block;
  font-family: "Indie Flower", cursive;
  font-weight: 900;
  font-size: 1.8rem;
`;

const HeadingDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled.span`
  display: inline-block;
  font-family: "Indie Flower", cursive;
  color: transparent;
  color: var(--color-grey-50);
  font-size: 4.4rem;
  font-weight: 800;
  /* text-shadow: var(--color-medium-black-02) 1px 10px 30px; */
`;

const GradientHiglight = styled.span`
  /* text-transform: capitalize; */
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--orange-gradient-01);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const HeroTagDiv = styled.div`
  padding: 0.1rem 1.5rem;
  background-color: var(--color-orange-50);
  border-radius: var(--border-radius-lg);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-0.5rem);
  }
  &:hover span {
    text-decoration: underline;
  }
`;
const HeroTag = styled.span`
  color: var(--color-grey-50);
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 600;
  word-spacing: 0.1rem;
`;

const ButtonDiv = styled.div`
  display: flex;

  gap: 2rem;
  margin-top: 2.5rem;
`;

function HeroTextGrid() {
  return (
    <StyledHeroTextDiv>
      <Link to="/order">
        <HeroTagDiv>
          <HeroTag>Savor the moment with 20% off on your first order</HeroTag>
        </HeroTagDiv>
      </Link>

      <HeadingDiv>
        <StyledHeading>
          Effortless <GradientHiglight>Dining,</GradientHiglight>
        </StyledHeading>
        <StyledHeading>
          <GradientHiglight>Every</GradientHiglight> Time
        </StyledHeading>
      </HeadingDiv>
      <TextContainer>
        <StyledSpan>
          Experience the epitome of convenience with us, where simplicity meets
          choice. Our one-stop service hub is designed for your convenience.
        </StyledSpan>
      </TextContainer>

      <ButtonDiv>
        <Button variation="primary" size="large">
          Start ordering now
        </Button>
        <Button size="large" variation="secondary">
          Learn more
        </Button>
      </ButtonDiv>
    </StyledHeroTextDiv>
  );
}

export default HeroTextGrid;

// {/* <StyledSpan>
//           Our unique feature allows you to place delivery orders from{" "}
//           <HiglightText>more than one hotel </HiglightText>, ensuring a diverse
//           and satisfying experience.
//         </StyledSpan> */}

// {/* <StyledSpan>
//   Our one-stop service hub is designed for your convenience. Whether you
//   crave a tasty meal <HiglightText>delivered to your door</HiglightText>
//   , <HiglightText> a quick pickup,</HiglightText>
//   or a <HiglightText>hassle-free</HiglightText> hotel{" "}
//   <HiglightText>reservation</HiglightText> we&apos;ve got you covered.
// </StyledSpan> */}
