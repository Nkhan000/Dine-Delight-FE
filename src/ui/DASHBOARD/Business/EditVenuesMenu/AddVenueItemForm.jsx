/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "../../../Heading";

import Button from "../../../Button";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useAddANewVenue } from "../../../../hooks/VenuesMenu(BS)/useAddANewVenue";
import { ModalContext } from "../../../../utils/contexts";

const Container = styled.div`
  width: 55vw;
  height: 65vh;
  padding: 1rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;
`;
const FormHeadDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const FormInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &-2 {
    flex-direction: row;
  }
`;

const FormInputDivTwo = styled.div`
  display: flex;
  gap: 5rem;
  & > div {
  }
`;

const FormLabel = styled.label`
  /* width: 15rem; */
  font-weight: 600;
  color: var(--color-grey-200);
  font-size: 1.8rem;
`;
const FormLabelTwo = styled.label`
  /* width: 15rem; */
  width: 100%;
  font-weight: 600;
  color: var(--color-grey-200);
  font-size: 1.8rem;
`;

const FormInput = styled.input`
  background-color: transparent;
  color: var(--color-grey-100);
  border: none;
  border-bottom: 1px solid var(--color-grey-800);
  outline: none;
  font-size: 1.6rem;
  padding: 0.5rem;
  border-radius: 2px;

  width: 100%;
  &::placeholder {
    color: var(--color-grey-700);
    font-style: italic;
  }
`;

const FormImageInput = styled.input`
  display: none;
`;

const FormPreviewImagesDiv = styled.div`
  height: 10rem;
  gap: 2rem;
  display: flex;
`;

const ImagePreviewDiv = styled.div`
  height: auto;
  overflow: hidden;
  position: relative;
`;

const ImagesRemoveBtn = styled.button`
  position: absolute;
  top: 0%;
  right: 0%;
  background-color: var(--color-red-700);
  color: var(--color-grey-200);
  font-weight: 600;
  font-size: 1.2rem;
  border: none;
  height: 1.6rem;
  width: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagePreview = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
`;

const FormImageInputAddBtnDiv = styled.label`
  display: block;
  border: 1px solid;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.32s ease-in-out;

  &:hover {
    border: 1px solid var(--color-orange-100);
    border-radius: 1rem;
  }
`;

const ImageAddBtnTextSm = styled.span`
  font-weight: 500;
  color: var(--color-grey-200);
  padding: 1rem;
`;

function AddVenueItemForm() {
  const { close: closeModal } = useContext(ModalContext);
  const { addANewVenue, isAddingANewVenue } = useAddANewVenue();
  const { register, handleSubmit, setValue } = useForm();
  const [fileCount, setFileCount] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImagesToSend, setSelectedImagesToSend] = useState([]);

  function onSubmit(data) {
    const formData = new FormData();
    const aprPartySize = `${data.min}-${data.max}`;

    formData.append("name", data.name);
    formData.append("aprPartySize", aprPartySize);
    formData.append("pricePerDay", data.pricePerDay);
    formData.append("goodForOcassions", data.goodForOccassions);

    selectedImagesToSend.map((file) => formData.append("images", file));

    addANewVenue(formData);

    if (!isAddingANewVenue) {
      closeModal();
    }
  }

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // Convert FileList to array
    const imagesArr = []; // To store base64-encoded images for preview
    const totalFilesSelected = selectedFiles.length; // Number of newly selected files

    // Prevent more than 5 images from being selected
    if (fileCount + totalFilesSelected > 5) {
      alert("You can only select a maximum of 5 images.");
      return;
    }
    setSelectedImagesToSend((prev) => [...prev, ...e.target.files]);

    selectedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        imagesArr.push(reader.result); // Push base64 string to imagesArr

        // Once all selected files are read, update the state
        if (imagesArr.length === totalFilesSelected) {
          setSelectedImages((prev) => [...prev, ...imagesArr]); // Update preview images
          setValue("images", [...selectedImages, ...imagesArr]); // Store selected images in form state
          setFileCount(fileCount + totalFilesSelected);
        }
      };

      reader.readAsDataURL(file); // Read file as Data URL
    });
  };

  return (
    <Container>
      <FormHeadDiv>
        <Heading as="h1" color="light">
          Add New Item
        </Heading>
      </FormHeadDiv>

      <FormDiv onSubmit={handleSubmit(onSubmit)}>
        <FormInputDiv>
          <FormLabel htmlFor="name">Name : </FormLabel>
          <FormInput
            id="name"
            type="text"
            required
            placeholder="Meeting Room"
            {...register("name")}
          />
        </FormInputDiv>

        <FormInputDivTwo>
          <div>
            <FormLabelTwo htmlFor="min">Set minimum people : </FormLabelTwo>
            <FormInput
              id="min"
              type="number"
              placeholder="10 people"
              {...register("min")}
              required
            />
          </div>
          <div>
            <FormLabelTwo htmlFor="max">Set maximum people : </FormLabelTwo>
            <FormInput
              id="max"
              type="number"
              placeholder="50 people"
              {...register("max")}
              required
            />
          </div>
        </FormInputDivTwo>
        <FormInputDiv>
          <FormLabel htmlFor="goodForOccassions">
            Good for Occassions :{" "}
          </FormLabel>
          <FormInput
            id="goodForOccassions"
            type="text"
            placeholder="meetings, confrence, ... (seperete with a comma)"
            {...register("goodForOccassions")}
            required
          />
        </FormInputDiv>

        <FormInputDiv>
          <FormLabel htmlFor="pricePerDay">Price per day : </FormLabel>
          <FormInput
            id="pricePerDay"
            type="number"
            placeholder="100"
            {...register("pricePerDay")}
            required
          />
        </FormInputDiv>

        <FormInputDiv>
          <FormLabel>Select upto 5 Images:</FormLabel>
          <FormImageInput
            id="add-image"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <FormImageInputAddBtnDiv htmlFor="add-image">
            <ImageAddBtnTextSm>Add an Image</ImageAddBtnTextSm>
          </FormImageInputAddBtnDiv>
        </FormInputDiv>

        <FormPreviewImagesDiv>
          {selectedImages.map((image, index) => (
            <ImagePreviewDiv key={index}>
              <ImagePreview src={image} alt={`Selected Image ${index}`} />
              <ImagesRemoveBtn
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedImages((s) => s.filter((_, idx) => idx !== index));
                  // setSelectedImagesToSend((s) =>
                  //   s.filter((_, idx) => idx !== index)
                  // );
                }}
              >
                X
              </ImagesRemoveBtn>
            </ImagePreviewDiv>
          ))}
        </FormPreviewImagesDiv>

        <Button size="medium" variation="primary" type="submit">
          Submit
          {/* {(isAddingANewFoodItem || isUpdatingAFoodItem) && <SpinnerMini />} */}
        </Button>
      </FormDiv>
    </Container>
  );
}

export default AddVenueItemForm;
