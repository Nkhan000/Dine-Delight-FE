/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  /* width: 100%; */
  /* border: 1px solid var(--color-orange-50); */
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
`;

const StyledDivContainer = styled.div`
  position: relative;
  /* width: 100%;
  height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-1rem);
  }

  /* &:hover div {
    transform: translate(2%, 0%);
  } */
`;

const StyleDiv1 = styled.div`
  height: 105%;
  width: 100%;
  background-color: var(--color-orange-50);
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: var(--shadow-orange);
  transition: transform 0.3s;

  /* Apply the gradient as a border image */
  /* border: 2px solid transparent; */
  /* border-image: var(--orange-gradient-02); Adjust colors as needed
  border-image-slice: 1; Specifies where the image will be sliced */

  &::after {
    position: absolute;
    content: "";

    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    background-color: var(--color-orange-50);
    /* background-image: var(--orange-gradient-01); */
  }
  &::before {
    position: absolute;
    content: "Get 20% off on your first order";

    height: 14rem;
    width: 14rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: var(--color-orange-50);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-grey-50);
    font-family: "Indie Flower", cursive;
    font-size: 1.8rem;
    text-align: center;
    /* background-image: var(--orange-gradient-01); */
  }

  ${(props) =>
    props.align === "left" &&
    css`
      &::after {
        top: 5%;
        left: 80%;
      }

      &::before {
        bottom: -5%;
        right: 80%;
      }
    `}
  ${(props) =>
    props.align === "right" &&
    css`
      &::after {
        top: 5%;
        right: 80%;
      }

      &::before {
        bottom: -5%;
        left: 80%;
      }
    `}
`;
const StyleDiv2 = styled.div`
  height: 50rem;
  width: 50rem;
  overflow: hidden;
  z-index: 3;
  border-radius: 50%;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* transform: scale(0.9999); */
`;

function SectionImgDiv({ align, image }) {
  return (
    <Container>
      <StyledDivContainer>
        <StyleDiv1 align={align}></StyleDiv1>
        <StyleDiv2 align={align}>
          <StyledImg src={`./img/${image}`} alt="food-img" />
        </StyleDiv2>
      </StyledDivContainer>
    </Container>
  );
}

export default SectionImgDiv;

// const StyleDiv1 = styled.div`
//   height: 100%;
//   width: 83%;
//   overflow: hidden;
//   background-image: var(--orange-gradient-02);
//   z-index: 1;
//   position: absolute;
//   top: 0%;
//   border-radius: 5rem;
//   box-shadow: var(--shadow-orange);
//   transition: transform 0.3s;

//   /* Apply the gradient as a border image */
//   /* border: 2px solid transparent; */
//   /* border-image: var(--orange-gradient-02); Adjust colors as needed
//   border-image-slice: 1; Specifies where the image will be sliced */

//   ${(props) =>
//     props.align === "left" &&
//     css`
//       left: 56%;
//       transform: translate(-55%, 0%);
//     `}
//   ${(props) =>
//     props.align === "right" &&
//     css`
//       right: 56%;
//       transform: translate(55%, 0%);
//     `}
// `;
// const StyleDiv2 = styled.div`
//   height: 45rem;
//   width: 85%;
//   overflow: hidden;
//   z-index: 3;
//   border-radius: 5rem;
// `;
