/* eslint-disable no-unused-vars */
import styled from "styled-components";
import HiglightItem from "./HiglightItem";
import { HiCurrencyDollar, HiMap } from "react-icons/hi2";
import Heading from "./Heading";

const Container = styled.div`
  background-color: var(--color-medium-black);
  background-color: var(--color-grey-900);
  /* border: 1px solid grey; */
  padding: 5rem 25rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4.2rem;
`;

const FeatureContainer = styled.div`
  width: 100%;

  /* --min: 30ch; */
  /* grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr)); */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 35rem), 1fr));
  grid-gap: 7.5rem;
`;

// const HeadingDiv = styled.div``;

const HeadingText = styled.p`
  font-family: "Indie Flower", cursive;
  font-size: 4rem;
  font-weight: 600;
  color: var(--color-grey-100);
`;

const GradientHiglight = styled.span`
  /* text-transform: capitalize; */
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--orange-gradient-02);
`;

const datas = [
  {
    id: 1,
    icon: "map",
    heading: "Wide Network",
    text: "Our wide networks feature spans across a diverse array of restaurants, catering to various cuisines and dining preferences",
  },
  {
    id: 2,
    icon: "delivery",
    heading: "Fast delivery",
    text: " From sizzling hot pizzas to fresh gourmet delights, we prioritize speed without compromising the quality of your dining experience.",
  },
  {
    id: 3,
    icon: "quality",
    heading: "Best Quality",
    text: "You're not just ordering a meal; you're immersing yourself in a world of flavors, where authenticity and quality meet in perfect harmony",
  },
  {
    id: 4,
    icon: "money",
    heading: "Value for Money",
    text: "Enjoy a flavorful experience without breaking the bank. Welcome to a world where great food meets great value!",
  },
];

function HighlightDetails() {
  return (
    <Container>
      <HeadingText>
        Why <GradientHiglight>Choose us?</GradientHiglight>
      </HeadingText>
      <FeatureContainer>
        {datas.map((data) => (
          <HiglightItem data={data} key={data.id} />
        ))}
      </FeatureContainer>
    </Container>
  );
}

export default HighlightDetails;
