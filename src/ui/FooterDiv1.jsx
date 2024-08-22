/* eslint-disable no-unused-vars */

import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { HiAcademicCap } from "react-icons/hi2";

const StyledFooterDiv1 = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: auto 1fr;
  align-items: start;
  column-gap: 2rem;
  row-gap: 3rem;
`;

const FooterLogDiv = styled.div`
  grid-row: 1 / 2;
  height: 10rem;
  width: 10rem;
  padding-top: 0.8rem;
`;

const FooterLogo = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`;
// const HeadingText = styled.p``;

const GradientHiglight = styled.span`
  /* text-transform: capitalize; */
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--orange-gradient-02);
`;

const FooterHeadingMain = styled.p`
  font-family: "Indie Flower", cursive;
  font-size: 3.2rem;
  font-weight: 600;
  color: var(--color-grey-100);
`;

const FooterTextDiv = styled.p`
  grid-column: 2 / -1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:last-of-type {
    color: var(--color-grey-400);
    font-size: 1.4rem;
  }
`;

const FooterSocialDiv = styled.div`
  grid-column: 2 / -1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & span {
    font-weight: 500;
    font-size: 1.8rem;
    color: var(--color-grey-50);
  }
`;

const FooterIconDiv = styled.div`
  display: flex;
  gap: 3.6rem;
`;

const FooterIcon = styled.a`
  height: 2.3rem;
  width: 2.3rem;
  overflow: hidden;

  & svg {
    display: inline-block;
    width: 2.3rem;
    height: 2.3rem;
    stroke: white;
    fill: white;
  }
`;

function FooterDiv1() {
  return (
    <StyledFooterDiv1>
      <FooterLogDiv>
        <FooterLogo src="./img/logo-svg.svg" alt="trst" />
      </FooterLogDiv>

      <FooterTextDiv>
        <FooterHeadingMain>
          Din<GradientHiglight>Delight</GradientHiglight>
        </FooterHeadingMain>
        <span>
          Experience the epitome of convenience with us, where simplicity meets
          choice. Our one-stop service hub is designed for your convenience.
        </span>
      </FooterTextDiv>

      <FooterSocialDiv>
        <span>Follow us :</span>
        <FooterIconDiv>
          <FooterIcon target="_" href="https://www.facebook.com">
            <FaFacebook />
          </FooterIcon>
          <FooterIcon target="_" href="https://www.instagram.com">
            <FaInstagram />
          </FooterIcon>
          <FooterIcon target="_" href="https://www.twitter.com">
            <FaTwitter />
          </FooterIcon>
          <FooterIcon target="_" href="https://www.youtube.com">
            <FaYoutube />
          </FooterIcon>
        </FooterIconDiv>
      </FooterSocialDiv>
    </StyledFooterDiv1>
  );
}

export default FooterDiv1;
