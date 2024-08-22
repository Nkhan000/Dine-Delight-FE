/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Heading from "./Heading";

const GridContainer = styled.div`
  width: auto;
  display: flex;
  /* padding-bottom: 6rem; */
  /* border: 5px solid yellow; */
  /* margin-top: -1rem; */
`;

const GridImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(9, 6rem);
  /* gap: -0.1rem; */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  /* transform: scale(1.1); */
  /* background-color: var(--color-orange-50); */
`;

// Image divs
const ImgDiv1 = styled.div`
  grid-row: 7 / 9;
  grid-column: 2 / 7;
  /* border-style: inset; */
  border: 0.2rem solid var(--color-orange-50);
`;
const ImgDiv2 = styled.div`
  grid-row: 4 / 7;
  grid-column: 3 / 9;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 20rem;
    width: 40rem;
    top: 34%;
    left: -16.7%;
    /* background-color: var(--color-orange-50); */
    border: 0.7rem solid var(--color-orange-50);

    border-bottom-right-radius: var(--border-radius-lg);
    z-index: -3;
  }
  &::before {
    content: "";
    position: absolute;
    height: 25rem;
    width: 22rem;
    top: -75%;
    left: 50%;
    border: 0.7rem solid var(--color-orange-50);
    border-top-left-radius: var(--border-radius-lg);
    z-index: -3;
  }
`;
const ImgDiv3 = styled.div`
  grid-row: 2 / 4;
  grid-column: 4 / 8;
  /* border: 0.2rem solid var(--color-orange-50); */
`;
const ImgDiv4 = styled.div`
  grid-row: 3 / 4;
  grid-column: 8 / 11;
  overflow: hidden;
  border-top-right-radius: var(--border-radius-lg);
  border: 0.2rem solid var(--color-orange-50);
`;
const ImgDiv5 = styled.div`
  grid-row: 4 / 6;
  grid-column: 9 / 13;
`;
const ImgDiv6 = styled.div`
  grid-row: 6 / 8;
  grid-column: 9 / 11;
  border: 0.2rem solid var(--color-orange-50);
  border-bottom-right-radius: var(--border-radius-lg);
  overflow: hidden;
`;
const ImgDiv7 = styled.div`
  grid-row: 5 / 7;
  grid-column: 1 / 3;
  border: 0.2rem solid var(--color-orange-50);
  /* border-top-left-radius: var(--border-radius-lg); */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 25rem;
    width: 27rem;
    top: -120%;
    left: 68%;
    /* background-color: var(--color-orange-50); */
    border: 1rem solid var(--color-orange-50);
    border-top-left-radius: var(--border-radius-lg);
    z-index: -3;
  }
`;
const ImgDiv8 = styled.div`
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  overflow: hidden;
  /* background-color: var(--color-orange-50); */
  /* border-style: inset; */
  border: 3px solid var(--color-orange-50);
  border-top-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
`;

function HeroGridDiv() {
  return (
    <GridContainer>
      <GridImageContainer>
        <ImgDiv1>
          <ImageContainer>
            <Image src="./img/Table-001.jpg" />
          </ImageContainer>
        </ImgDiv1>

        <ImgDiv2>
          <ImageContainer>
            <Image src="./img/food-006.jpg" />
          </ImageContainer>
        </ImgDiv2>

        <ImgDiv3>
          <ImageContainer>
            <Image src="./img/Table-002.jpg" />
          </ImageContainer>
        </ImgDiv3>

        <ImgDiv4>
          <ImageContainer>
            <Image src="./img/food-001.jpg" />
          </ImageContainer>
        </ImgDiv4>

        <ImgDiv5>
          <ImageContainer>
            <Image src="./img/delivery-001.jpg" />
          </ImageContainer>
        </ImgDiv5>

        <ImgDiv6>
          <ImageContainer>
            <Image src="./img/food-003.jpg" />
          </ImageContainer>
        </ImgDiv6>

        <ImgDiv7>
          <ImageContainer>
            <Image src="./img/chef-001.jpg" />
          </ImageContainer>
        </ImgDiv7>

        <ImgDiv8>
          <ImageContainer>
            <Image src="./img/food-004.jpg" />
          </ImageContainer>
        </ImgDiv8>
      </GridImageContainer>
    </GridContainer>
  );
}

export default HeroGridDiv;

// const GridContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const GridDiv = styled.div`
//   width: fit-content;
//   display: flex;
//   flex-direction: column;
//   transition: all 0.3s;
//   position: relative;
//   overflow: hidden;
//   border-radius: var(--border-radius-sm);

//   ${(props) =>
//     props.margin === "first" &&
//     css`
//       margin-top: 1rem;
//     `};
//   ${(props) =>
//     props.margin === "second" &&
//     css`
//       margin-top: 2.7rem;
//     `};
//   ${(props) =>
//     props.margin === "third" &&
//     css`
//       margin-top: 5.5rem;
//     `};

//   &::after {
//     position: absolute;
//     color: var(--color-grey-50);
//     content: "";
//     font-size: 2.2rem;
//     font-weight: 600;
//     font-family: "Indie Flower", cursive;

//     top: 0;
//     left: 0;
//     width: 0%;
//     height: fit-content;
//     transition: all 0.3s;
//     background-color: var(--color-orange-50);
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     color: transparent;
//     width: 80%;
//     z-index: 15;
//     transition: all 0.3s;
//     font-weight: 600;
//   }

//   &:hover {
//     background-color: var(--color-orange-50);
//     transform: translateY(-1rem);
//     cursor: pointer;
//   }

//   &:hover div {
//     filter: blur(0.1rem) opacity(0.8);
//   }

//   &:hover::after {
//     /* content: "food"; */
//     ${(props) =>
//       props.title &&
//       css`
//         content: "${props.title}";
//       `}
//     width: 100%;
//     padding: 0.5rem 1.2rem;
//   }

//   &:hover::before {
//     content: "All of your hunger solutions at one place";
//     color: var(--color-grey-50);
//     width: 100%;
//     transition: all 0.3s;
//     padding: 0.5rem 1.2rem;
//   }
// `;

// const GridImgDiv = styled.div`
//   position: relative;
//   overflow: hidden;
//   height: 32rem;
//   width: 20rem;

//   border-top-right-radius: var(--border-radius-lg);
//   border-top-left-radius: var(--border-radius-lg);
// `;

// const GridImg = styled.img`
//   width: 100%;
//   height: 100%;
//   transform: scale(1.08);

//   &::selection {
//     background-color: transparent;
//   }
// `;

// function HeroGridDiv({ title, img, margin }) {
//   return (
//     <GridContainer>
//       <GridDiv margin={margin} title={title}>
//         <GridImgDiv>
//           <GridImg src={`./img/${img}.jpg`} alt="" />
//         </GridImgDiv>
//       </GridDiv>
//     </GridContainer>
//   );
// }
