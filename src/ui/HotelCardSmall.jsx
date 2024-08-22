/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Heading";
// import StyledStars from "./StyledStars";
import Button from "./Button";
import { FaChartLine, FaMoneyBill1Wave } from "react-icons/fa6";
// import { FaDollarSign } from "react-icons/fa";
import RatingsContent from "./RatingsContent";

const Container = styled.li`
  list-style: none;
  & a {
    width: 27rem;
    background-color: var(--color-grey-900);
    overflow: hidden;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;

    &:hover img {
      transform: scale(1.15);
    }
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  overflow: hidden;
  height: 20rem;

  /* height: 50%; */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-in;
`;

const TextContainer = styled.div`
  padding: 1rem;
  /* padding-bottom: 0; */

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HighlightText = styled.span`
  font-size: 1.3rem;
  /* font-weight: 600; */
  color: var(--color-grey-50);

  display: flex;
  align-items: center;
  gap: 1rem;

  & svg {
    width: 1.1rem;
    height: 1.1rem;
    fill: var(--color-orange-50);
  }
`;

function HotelCardSmall({ name, img }) {
  return (
    <Container>
      <Link to="/">
        <ImageDiv>
          <Image src={`./img/Table-${img}.jpg`} alt="hotel-img" />
        </ImageDiv>
        <TextContainer>
          <Heading as="h4" color="light">
            {name}
          </Heading>
          <RatingsContent avgRatings={3.5} totalNumberOfRatings={21} />
          <HighlightText>
            {" "}
            <FaChartLine />
            <span> Booked 21 times this week</span>
          </HighlightText>
          <HighlightText>
            {" "}
            <FaMoneyBill1Wave />
            <span> $99.00 per person</span>
          </HighlightText>
        </TextContainer>
        <Button size="medium" variation="primary" hover="no">
          Reserve now
        </Button>
      </Link>
    </Container>
  );
}

export default HotelCardSmall;
