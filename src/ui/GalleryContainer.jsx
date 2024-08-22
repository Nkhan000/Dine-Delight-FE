/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styled, { css } from "styled-components";
import Heading from "./Heading";
import AddressSpan from "./AddressSpan";
import GradientHighlight from "./GradientHighlight";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import RatingsReviewBox from "./RatingsReviewBox";
import Button from "./Button";

const StyledGalleryContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url("./img/Table-011.jpg");
  background-size: cover;
  background-position: 0rem -45rem;
  position: sticky;
  top: 0%;
  z-index: 1;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #151414cf;
  position: absolute;
  z-index: 2;
  top: 0%;
  left: 0%;
`;

const ContentContainer = styled.div`
  padding: 3rem 10rem;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;

  display: grid;
  grid-template-columns: 65% 1fr;
  column-gap: 2.2rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TextHeader = styled.span`
  font-size: 4.5rem;
  font-weight: 600;
  font-family: "Indie Flower", cursive;
  color: var(--color-grey-50);
`;

const TextDetails = styled.div`
  font-size: 1.4rem;
  color: var(--color-grey-50);
  font-weight: 600;
  line-height: 2;
  word-spacing: 0.3rem;
`;

const RatingsContainer = styled.div`
  padding: 3rem;
  border-radius: 2rem;
  height: 100%;
  background-color: var(--color-medium-black);
  grid-column: 2 / -1;
  grid-row: 1 / 3;
  width: 43rem;
`;

const SocialMediaListContainer = styled.div``;
const SocialMediaList = styled.ul`
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* flex-direction: column; */
  gap: 2rem;
  padding: 1rem;
  & li {
    & a {
      display: flex;
      align-items: center;
      width: fit-content;
      gap: 2rem;
      & span {
        font-size: 1.6rem;
        color: var(--color-grey-50);
        font-weight: 600;
      }
      & svg {
        width: 2rem;
        height: 2rem;
        fill: var(--color-grey-50);
      }
    }
  }
`;

const HeaderDiv = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr;
  align-items: start;
  gap: 1.6rem;
`;

const HeaderImgDiv = styled.div`
  width: 100%;
  border-radius: 3rem;
  overflow: hidden;
`;

const StyledBannerImg = styled.img`
  height: 100%;
  width: 100%;
`;
const HeaderTextDiv = styled.div`
  /* align-self: self-start; */
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const HiglightDiv = styled.div`
  width: 100%;
  /* height: 8rem; */
  padding: 1rem;

  background-color: var(--color-medium-black);
  display: flex;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;

  /* & span {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-grey-50);
    text-align: center;
    padding: 1rem;
  } */

  & div {
    height: 8rem;
    width: 100%;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    & div {
      background-color: var(--color-medium-black);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
`;

function GalleryContainer({ data }) {
  const { name, address, description } = data;
  // let name, address, description;
  // console.log(data);
  return (
    <StyledGalleryContainer>
      <Overlay>&nbsp;</Overlay>
      <ContentContainer>
        <TextContainer>
          <HeaderDiv>
            <HeaderImgDiv>
              <StyledBannerImg
                src="./img/hotel-001.jpg"
                alt="receb bar & lounge banner"
              />
            </HeaderImgDiv>

            <HeaderTextDiv>
              <GradientHighlight>
                <TextHeader>{name}</TextHeader>
              </GradientHighlight>
              <AddressSpan address={address} sizes="large" />
              <TextDetails>{description}</TextDetails>
            </HeaderTextDiv>
          </HeaderDiv>
          <HiglightDiv>
            <div>
              <div>
                <img src="./img/dancing-001.jpg" alt="highlights" />
              </div>
              <div>
                <img src="./img/food-002.jpg" alt="highlights" />
              </div>
              <div>
                <img src="./img/food-003.jpg" alt="highlights" />
              </div>
              <div>
                <img src="./img/dancing-002.jpg" alt="highlights" />
              </div>

              <div>
                <img src="./img/dancing-003.jpg" alt="highlights" />
              </div>
              <div>
                <Button sizes="small" variations="link" hover="no">
                  See this week&apos;s highlights
                </Button>
              </div>
            </div>
          </HiglightDiv>
        </TextContainer>
        <RatingsContainer>
          <Heading as="h2" color="light" family="second">
            <GradientHighlight>Ratings & Reviews</GradientHighlight>
          </Heading>
          <RatingsReviewBox />
        </RatingsContainer>
        <SocialMediaListContainer>
          <Heading as="h2" color="light" family="second">
            <GradientHighlight>Follow us on:</GradientHighlight>
          </Heading>
          <SocialMediaList>
            <li>
              <a href="https://www.facebook.com" target="_">
                <FaFacebook /> <span>Durbar Bar & Lounge</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_">
                <FaInstagram /> <span>@DurbarOfficial_2023</span>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_">
                <FaXTwitter /> <span>@DurbarOfficial_2023</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_">
                <FaYoutube /> <span>Durbar Bar & Lounge</span>
              </a>
            </li>
          </SocialMediaList>
        </SocialMediaListContainer>
      </ContentContainer>
    </StyledGalleryContainer>
  );
}

export default GalleryContainer;
