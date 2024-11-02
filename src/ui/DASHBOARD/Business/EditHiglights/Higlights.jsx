/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Button from "../../../Button";
import { useCusineBs } from "../../../../features/dashboard/useCuisineBs";
import Spinner from "../../../Spinner";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../../../Modal";
import AddHighlightForm from "./AddHighlightForm";

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
  width: 40rem;
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
  /* height: min-content; */
  max-height: 45rem;
  overflow-y: scroll;
  padding: 3rem;
  border-radius: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 10rem;
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
  /* overflow: hidden; */
  position: relative;
  cursor: pointer;

  &:hover {
    border: 0.2rem solid var(--color-orange-50);
    /* border-radius: 1rem; */
    box-shadow: 0.1rem 0.1rem 1rem var(--color-orange-50);

    & > button {
      display: flex;
    }
  }

  ${(props) =>
    props.selected === "selected" &&
    css`
      border: 0.2rem solid var(--color-orange-50);
      /* border-radius: 1rem; */
      box-shadow: 0.1rem 0.1rem 1rem var(--color-orange-50);

      & > button {
        display: flex;
      }
    `}
`;

const RemoveImageBtn = styled.button`
  position: absolute;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: var(--color-red-700);
  border: none;
  top: -10%;
  right: -5%;
  color: var(--color-grey-200);
  font-size: 1.5rem;
  font-weight: 600;

  display: none;
  align-items: center;
  justify-content: center;
`;

const AddImageDiv = styled.label`
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
  const [currImage, setCurrImage] = useState(1);

  // SET IMAGE-NUMBER PARAMS TO 1 ON PAGE LOAD
  useEffect(() => {
    const URLParam = new URLSearchParams(searchParams);
    URLParam.set("image-number", 1);
    setSearchParams(URLParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // REMOVES THE UNWANTED PARAMS FROM THE URL
  useEffect(() => {
    const URLParam = new URLSearchParams(searchParams);
    URLParam.delete("item-type");
    URLParam.delete("item-category");
    setSearchParams(URLParam);
  }, [searchParams, setSearchParams]);

  // SETS THE CURRENT IMAGE ON PARAM CHANGE
  useEffect(() => {
    searchParams.set("image-number", currImage.toString());
    setSearchParams(searchParams);
  }, [currImage, searchParams, setSearchParams]);

  if (isLoadingCuisineData) {
    return <Spinner />;
  }
  const { highlightImages } = cuisineData;

  function handleImageChange(type = "next", index) {
    const totalImages = highlightImages.length;

    if (type === "next") {
      const nextImg = currImage + 1 > totalImages ? 1 : currImage + 1;
      setCurrImage(nextImg);
    }
    if (type === "prev") {
      const prevImg = currImage - 1 < 0 ? currImage : currImage - 1;
      setCurrImage(prevImg);
    }

    if (type === "random") {
      setCurrImage(index + 1);
    }
  }

  return (
    <Container>
      <HeadDiv>
        <span>Edit Highlights</span>
      </HeadDiv>

      <InnerContainer>
        <ImagesContainer>
          <Modal>
            <Modal.Open open="add-highlight-form">
              <AddImageDiv>
                <div>
                  <LabelTextBg>+</LabelTextBg>
                  <LabelTextSm>Add Images</LabelTextSm>
                </div>
              </AddImageDiv>
            </Modal.Open>
            <Modal.ModalWindow name="add-highlight-form">
              <AddHighlightForm existingImgsLength={highlightImages.length} />
            </Modal.ModalWindow>
          </Modal>
          {highlightImages.map((img, idx) => (
            <ImageDiv
              selected={currImage - 1 === idx ? "selected" : ""}
              onClick={() => handleImageChange("random", idx)}
              key={idx}
            >
              <StyledImg
                crossOrigin="anonymous"
                src={`http://127.0.0.1:3000/public/${img}`}
              />
              <RemoveImageBtn>-</RemoveImageBtn>
            </ImageDiv>
          ))}
        </ImagesContainer>
        <SliderContainer>
          <SliderImageDiv>
            <StyledImg
              crossOrigin="anonymous"
              src={`http://127.0.0.1:3000/public/${
                highlightImages[Number(searchParams.get("image-number")) - 1]
              }`}
            />{" "}
          </SliderImageDiv>

          <SliderBtnsDiv>
            <Button
              size="medium"
              variation="primary"
              onClick={() => handleImageChange("prev")}
            >
              {"<"} Prev
            </Button>
            <Button
              size="medium"
              variation="primary"
              onClick={() => handleImageChange("next")}
            >
              Next {">"}
            </Button>
          </SliderBtnsDiv>
        </SliderContainer>
      </InnerContainer>
    </Container>
  );
}

export default EditHighlights;
