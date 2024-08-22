/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled, { css } from "styled-components";
import Heading from "./Heading";
import StyledStars from "./StyledStars";
import { Link } from "react-router-dom";
import AddressSpan from "./AddressSpan";

const Container = styled.li`
  list-style: none;
  padding-top: 0.5rem;
`;

const StyledContainerInner = styled.div`
  width: 30rem;
  overflow: hidden;
  border-radius: 1rem;
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;

  height: 35rem;

  background-color: var(--color-medium-black);

  transition-property: box-shadow, transform;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: var(--shadow-orange-03);
  }
  &:hover a {
    background-color: var(--color-grey-900);
  }

  ${(props) =>
    props.showLink == "no" &&
    css`
      & a {
        display: none !important;
      }
      height: min-content;
      transform: translateY(0) !important;
    `}

  display : flex;
`;

const ReviewDiv = styled.div`
  padding: 1.4rem 2rem;
  padding-bottom: 0;
`;

const LinkDiv = styled(Link)`
  padding: 1.4rem 2rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const HeadDiv = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 0.6rem;
`;

const ImageDiv = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 5rem;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const UserName = styled.span`
  color: var(--color-grey-50);
  font-size: 1.8rem;
  text-transform: capitalize;
  font-weight: 600;
`;

const RatingsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  & svg {
    margin-top: 0.6rem;
    fill: var(--color-orange-50);
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const StyledDate = styled.span`
  font-size: 1.2rem;
`;

const TextDiv = styled.div``;

const ReviewText = styled.div`
  & p {
    color: var(--color-grey-300);
    font-size: 1.3rem;
    line-height: 1.8;
  }
  & button {
    font-size: 1.4rem;
    color: var(--color-orange-50);
    font-weight: 600;
    background-color: transparent;
    border: none;
    padding: 0.3rem;
    margin-left: -0.5rem;
    border-radius: 1rem;

    &:focus {
      outline: var(--outline-orange-01);
    }
  }
`;

const TextSmall = styled.span`
  font-size: 1.2rem;
  font-style: italic;
  color: var(--color-grey-500);
`;

const LinkTextDiv = styled.div``;

function ReviewItemLarge({ showLink }) {
  return (
    <Container>
      <StyledContainerInner showLink={showLink}>
        <ReviewDiv>
          <HeadDiv>
            <ImageDiv>
              <StyledImage src="./img/person-002.jpg" alt="test-image" />
            </ImageDiv>
            <UserDiv>
              <UserName>Jhon Doe</UserName>
              <AddressSpan address="kathmandu, nepal" />
              <RatingsDiv>
                <StyledStars avgRatings={2.8} />
                <StyledDate>4 days ago</StyledDate>
              </RatingsDiv>
            </UserDiv>
          </HeadDiv>

          <TextDiv>
            <TextSmall>A verified customer like you</TextSmall>
            <ReviewText>
              <p>
                Lorem ipsum dolor sit amet consec Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Accusantium ratione sint animi,
                accusamus eaqut dolores? Tempore!
              </p>
              <button>Read More. . .</button>
            </ReviewText>
          </TextDiv>
        </ReviewDiv>

        <LinkDiv>
          <LinkTextDiv>
            <Heading as="h4" color="light">
              RCED Bar & lounge
            </Heading>
            <AddressSpan address={"Kathmandu, nepal"} />
          </LinkTextDiv>
        </LinkDiv>
      </StyledContainerInner>
    </Container>
  );
}

export default ReviewItemLarge;
