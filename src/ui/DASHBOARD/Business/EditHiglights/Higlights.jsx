/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Button from "../../../Button";
import { useCusineBs } from "../../../../features/dashboard/useCuisineBs";
import Spinner from "../../../Spinner";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  padding: 2rem 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HeadDiv = styled.div`
  span {
    font-size: 3.5rem;
    color: var(--color-grey-300);
    font-weight: 600;
  }
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding: 1rem;
  padding-bottom: 3rem;
  column-gap: 5rem;
`;
const SliderContainer = styled.div`
  border-radius: 1px solid red;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  /* flex-direction: column; */
`;

const SliderImageDiv = styled.div`
  height: 40rem;
  width: 55rem;
  border-radius: 1px solid;
  overflow: hidden;
  border: 3px solid var(--color-orange-100);
  border-radius: 2rem;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const SliderBtnsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* flex-direction: column; */
`;

const ImagesContainer = styled.div`
  border: 1px solid;
  height: min-content;
  max-height: 45rem;
  overflow-y: scroll;
  padding: 3rem;
  border-radius: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 2rem;
  column-gap: 2rem;
  justify-items: center;
  align-items: start;
`;

const ImageDiv = styled.div`
  height: 10rem;
  width: 10rem;
  border: 1px solid;
  transition: all 0.1s ease-in;
  border: 0.3rem solid var(--color-grey-300);
  overflow: hidden;

  &:hover {
    border: 0.2rem solid var(--color-orange-50);
    border-radius: 1rem;
    box-shadow: 0.1rem 0.1rem 1rem var(--color-orange-50);
  }

  ${(props) =>
    props.selected === "selected" &&
    css`
      border: 0.2rem solid var(--color-orange-50);
      border-radius: 1rem;
      box-shadow: 0.1rem 0.1rem 1rem var(--color-orange-50);
    `}
`;

const AddImageLabel = styled.label`
  height: 10rem;
  width: 10rem;
  border: 1px solid;
  /* padding: 1rem; */

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    color: var(--color-grey-100);
    cursor: pointer;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const LabelTextBg = styled.span`
  font-size: 4.6rem;
  font-weight: 600;
`;
const LabelTextSm = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

function EditHighlights() {
  const { cuisineData, isLoadingCuisineData } = useCusineBs();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const paramURL = new URLSearchParams(searchParams);
    console.log(paramURL);
  });
  //   console.log(cuisineData);

  if (isLoadingCuisineData) {
    return <Spinner />;
  }
  const { highlightImages } = cuisineData;
  return (
    <Container>
      <HeadDiv>
        <span>Edit Highlights</span>
      </HeadDiv>

      <InnerContainer>
        <ImagesContainer>
          <AddImageLabel htmlFor="images">
            <div>
              <LabelTextBg>+</LabelTextBg>
              <LabelTextSm>Add Images</LabelTextSm>
            </div>
          </AddImageLabel>
          {/* // <ImageDiv selected="selected"> */}
          {highlightImages.map((img, idx) => (
            <ImageDiv key={idx}>
              <StyledImg
                crossOrigin="anonymous"
                src={`http://127.0.0.1:3000/public/${img}`}
              />
            </ImageDiv>
          ))}

          <ImageInput
            id="images"
            type="file"
            accept="image/jpg, image/png, image/jpeg"
          />
        </ImagesContainer>
        <SliderContainer>
          <SliderImageDiv>
            <StyledImg src="./img/Table-004.jpg" />{" "}
          </SliderImageDiv>

          <SliderBtnsDiv>
            <Button size="medium" variation="primary">
              {"<"} Prev
            </Button>
            <Button size="medium" variation="primary">
              Next {">"}
            </Button>
          </SliderBtnsDiv>
        </SliderContainer>
      </InnerContainer>
    </Container>
  );
}

export default EditHighlights;
