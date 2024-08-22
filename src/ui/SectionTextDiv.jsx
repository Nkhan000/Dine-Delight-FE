/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Button from "./Button";
import GradientIcon from "./GradientIcon";
import { FaCheck } from "react-icons/fa";
import GradientHighlight from "./GradientHighlight";
import SectionList from "./SectionList";

const Container = styled.div`
  padding: 4rem 8rem;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;
const StyledTextDiv = styled.div`
  color: var(--color-grey-100);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  text-align: left;
`;

const StyledListDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeadingSmall = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-100);
  display: inline-block;
`;
const StyledHeadingBig = styled.span`
  display: inline-block;
  font-size: 3.4rem;
  font-family: "Indie Flower", cursive;
  font-weight: 800;
  text-transform: capitalize;
`;

const StyledText = styled.p`
  font-size: 1.7rem;
  line-height: 2;
  font-weight: 500;
  color: var(--color-grey-500);
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

function SectionTextDiv({ data, align }) {
  return (
    <Container>
      <StyledTextDiv align={align}>
        <StyledHeadingDiv>
          <GradientHighlight>
            <StyledHeadingSmall>{data.smallHeading}</StyledHeadingSmall>
          </GradientHighlight>
          <StyledHeadingBig>{data.heading}</StyledHeadingBig>
        </StyledHeadingDiv>
        <StyledListDiv>
          <StyledText>Our {data.heading} service includes :</StyledText>
          <SectionList iconSize={1.6} data={data.detailList} />
        </StyledListDiv>
      </StyledTextDiv>

      <ButtonDiv>
        <Button size="large" variation="primary">
          Start ordering now
        </Button>
      </ButtonDiv>
    </Container>
  );
}

export default SectionTextDiv;
