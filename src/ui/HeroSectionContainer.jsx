/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import StyledSection from "./StyledSection";
// import OptionRibbon from "./OptionRibbon";

const StyledSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--color-medium-black);
  padding-top: 4rem;

  justify-content: center;
  align-items: center;
  gap: 4rem;
`;
const HeadingText = styled.p`
  font-family: "Indie Flower", cursive;
  font-size: 4.6rem;
  font-weight: 600;
  color: var(--color-grey-100);
`;

const GradientHiglight = styled.span`
  /* text-transform: capitalize; */
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--orange-gradient-02);
`;
const fakeData = [
  {
    id: 1,
    image: "Table-002.jpg",
    smallHeading: "Hassle free",
    heading: "reservation",
    detailList: [
      "Table reservations at your favorite restaurant",
      "Venue bookings for your special ocassions",
      "Pre-order available",
      "User freindly interface",
      "Quick and seamless process",
    ],
  },
  {
    id: 2,
    image: "delivery-001.jpg",
    smallHeading: "Swift",
    heading: "Delivery",
    detailList: [
      "Get your order good and fast",
      "Multiple orders, multiple cuisines? we got you covered",
      "Reasonable price",
      "No hidden charges",
    ],
  },
  {
    id: 3,
    image: "takeaway-001.jpg",
    smallHeading: "Smooth",
    heading: "Takeaway",
    detailList: [
      "No fuss, no waiting – just smooth takeaways",
      "Prioritize your order",
      "Best quality",
      "No hidden charges",
    ],
  },
];

function HeroSectionContainer() {
  return (
    <StyledSectionContainer>
      <HeadingText>
        Our <GradientHiglight>Services</GradientHiglight>
      </HeadingText>
      {fakeData.map((data) => (
        <StyledSection data={data} key={data.id}></StyledSection>
      ))}
    </StyledSectionContainer>
  );
}

export default HeroSectionContainer;
