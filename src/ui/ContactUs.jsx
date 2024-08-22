/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const Container = styled.div`
  /* background-color: var(--color-medium-black); */
  background-color: var(--color-grey-900);
  height: 80vh;
  padding: 4rem 8rem;
  /* padding-top: 8rem; */
  /* margin-top: 4rem; */
  ${(props) =>
    props.nopaddings == "no" &&
    css`
      padding: 0rem;
      background-color: var(--color-medium-black);
    `}
`;

const ContentContainer = styled.div`
  background-image: var(--orange-gradient-03);
  border-radius: 4rem;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 45% 1fr;
  gap: 8rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2.5rem 4rem;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.4rem;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  color: var(--color-grey-50);
  font-family: "Indie Flower", cursive;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: var(--color-grey-800);
`;
const ImageOverlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background-color: var(--color-orange-50);
  opacity: 0.3;
  z-index: 3;
`;

const ImageDiv = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const LogoDiv = styled.div`
  height: 3.5rem;
  position: absolute;
  bottom: 5%;
  right: 4%;
  z-index: 4;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LogoText = styled.p`
  font-size: 2rem;
  font-family: "Indie Flower", cursive;
  font-weight: 800;
  color: var(--color-grey-50);
`;

const GradientHiglight = styled.span`
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--orange-gradient-01);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 1.4rem;
`;

function ContactUs({ nopaddings }) {
  return (
    <Container nopaddings={nopaddings}>
      <ContentContainer>
        <TextContainer>
          <TextDiv>
            <Heading as="h1" color="light">
              Elevate your bussiness with us.
            </Heading>
            <Text>
              Picture this as your kitchen&apos;s encore – more exposure, more
              orders, and more love from the community.
            </Text>
            <Text>We&apos;re not just a platform,</Text>
            <Text>
              We&apos;re your marketing wingman, your reservations guru, and
              your takeaway powerhouse—all rolled into one delicious
              partnership.
            </Text>
          </TextDiv>

          <ButtonDiv>
            <Button size="large" variation="primary">
              Contact us
            </Button>
            <Button size="large" variation="secondary">
              Learn more
            </Button>
          </ButtonDiv>
        </TextContainer>

        <ImageContainer>
          <LogoDiv>
            <LogoImg src="./img/logo-svg.svg" />
            <LogoText>
              Din<GradientHiglight>Delight</GradientHiglight>
            </LogoText>
          </LogoDiv>
          <ImageDiv>
            <Image src="./img/cooking-002.jpg" alt="food image" />
          </ImageDiv>
          <ImageOverlay />
        </ImageContainer>
      </ContentContainer>
    </Container>
  );
}

export default ContactUs;
