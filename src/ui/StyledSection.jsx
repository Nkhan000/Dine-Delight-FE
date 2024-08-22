/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import SectionTextDiv from "./SectionTextDiv";
import SectionImgDiv from "./SectionImgDiv";

const StyledSectionDiv = styled.section`
  position: relative;
  overflow: hidden;
  &:last-child {
    padding-bottom: 4rem;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  /* padding: 4rem 15rem; */
  padding: 4rem 20rem;

  grid-template-columns: 1fr 1fr;

  /* ${(props) =>
    props.align === "left" &&
    css`
      grid-template-columns: 1fr 58%;
    `}
    */
  ${(props) =>
    props.align === "right" &&
    css`
      /* grid-template-columns: 58% 1fr; */
      background-color: var(--color-grey-900);
    `}align-items: center;
`;

function StyledSection({ data }) {
  const align = data.id % 2 == 0 ? "right" : "left";
  const { image } = data;
  return (
    <StyledSectionDiv>
      {align === "left" && (
        <ContentContainer align={align}>
          <SectionImgDiv align={align} image={image} />
          <SectionTextDiv data={data} />
        </ContentContainer>
      )}
      {align === "right" && (
        <ContentContainer align={align}>
          <SectionTextDiv data={data} />
          <SectionImgDiv align={align} image={image} />
        </ContentContainer>
      )}
    </StyledSectionDiv>
  );
}

export default StyledSection;
