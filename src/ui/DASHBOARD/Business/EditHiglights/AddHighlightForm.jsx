/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "../../../Button";
import { useContext, useState } from "react";
import { ModalContext } from "../../../../utils/contexts";
import { useForm } from "react-hook-form";
import { useAddHighlights } from "../../../../hooks/Highlights/useAddHighlights";

// import Proptypes from "prop-types";

const Container = styled.form`
  width: 75rem;
  height: 45rem;
  display: grid;
  grid-template-rows: 5rem 1fr 10rem;
  gap: 3rem;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  padding: 1.6rem 0;
`;

const StyledHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const HeaderTextBg = styled.span`
  font-weight: 600;
  font-size: 3rem;
  color: var(--color-grey-200);
  text-transform: capitalize;
`;
const HeaderTextSm = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-transform: capitalize;
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
  font-size: 1.6rem;
  font-weight: 600;

  display: none;
  align-items: center;
  justify-content: center;
`;
const ItemDiv = styled.div`
  height: 10rem;
  width: 10rem;
  border: 1px solid;
  position: relative;

  &:hover > button {
    display: flex;
  }
`;

const AddImageDiv = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    color: var(--color-grey-100);
    cursor: pointer;
  }
`;
const LabelTextBg = styled.span`
  font-size: 4.6rem;
  font-weight: 600;
`;
const LabelTextSm = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;
const ImageInput = styled.input`
  display: none;
`;

const StyledBtnDiv = styled.div`
  align-self: flex-end;

  display: flex;

  gap: 2rem;
`;

function AddHighlightForm({ existingImgsLength }) {
  const { handleSubmit } = useForm();
  const { close: closeModal } = useContext(ModalContext);
  const [fileCount, setFileCount] = useState(existingImgsLength);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImagesToSend, setSelectedImagesToSend] = useState([]);
  const { addHighlight, isAddingHiglight } = useAddHighlights();

  function onSubmit() {
    const formData = new FormData();
    selectedImagesToSend.forEach((img) => formData.append("highlights", img));
    addHighlight(formData);

    if (!isAddingHiglight) {
      closeModal();
    }
  }

  function handleImageChange(e) {
    const selectedFiles = Array.from(e.target.files);
    const imagesArr = [];
    const totalFilesSelected = selectedFiles.length;

    if (totalFilesSelected + fileCount > 15) {
      alert("You are only allowed to upload maximum of 15 images");
      return;
    }

    setSelectedImagesToSend((prev) => [...prev, ...selectedFiles]);

    selectedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        imagesArr.push(reader.result); // Push base64 string to imagesArr for previewing

        // Once all selected files are read, update the state
        if (imagesArr.length === totalFilesSelected) {
          setSelectedImages((prev) => [...prev, ...imagesArr]); // Update preview images
          setFileCount(totalFilesSelected + fileCount);
        }
      };
      reader.readAsDataURL(file); // Read file as Data URL
    });
  }
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <StyledHead>
        <HeaderTextBg>Add Higlights</HeaderTextBg>
        <HeaderTextSm>
          {fileCount == 15
            ? "maximum files has been added"
            : `Image preview can take few seconds . . . (remaining upload : ${
                15 - fileCount
              })`}
        </HeaderTextSm>
      </StyledHead>
      <ItemsContainer>
        <ItemDiv>
          <AddImageDiv htmlFor="add-highlight">
            <LabelTextBg>+</LabelTextBg>
            <LabelTextSm>Add Images</LabelTextSm>
          </AddImageDiv>
          <ImageInput
            id="add-highlight"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            disabled={fileCount == 15}
          />
        </ItemDiv>
        {selectedImages.map((image, indx) => (
          <ItemDiv key={indx + 2}>
            <StyledImg src={image} alt="highlight" />
            <RemoveImageBtn
              onClick={(e) => {
                e.preventDefault();
                setSelectedImages((s) => s.filter((_, idx) => idx !== indx));
              }}
            >
              -
            </RemoveImageBtn>
          </ItemDiv>
        ))}
      </ItemsContainer>
      <StyledBtnDiv>
        <Button size="medium" variation="primary" type="submit">
          Upload
        </Button>
        <Button onClick={closeModal} size="medium" variation="secondary">
          Cancel
        </Button>
      </StyledBtnDiv>
    </Container>
  );
}

export default AddHighlightForm;
