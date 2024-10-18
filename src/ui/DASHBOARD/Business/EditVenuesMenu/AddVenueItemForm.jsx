/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "../../../Heading";

import Button from "../../../Button";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useAddANewVenue } from "../../../../hooks/VenuesMenu(BS)/useAddANewVenue";
import { ModalContext } from "../../../../utils/contexts";
import { useGetAllVenues } from "../../../../hooks/VenuesMenu(BS)/useGetAllVenues";
import { useDeleteSelectedImagesForVenue } from "../../../../hooks/VenuesMenu(BS)/useDeleteSelectedImagesForVenue";
import { useUpdateAVenue } from "../../../../hooks/VenuesMenu(BS)/useUpdateAVenue";

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

function AddVenueItemForm({ itemId }) {
  const { venuesMenu, isLoadingVenuesMenu } = useGetAllVenues();
  const { addANewVenue, isAddingANewVenue } = useAddANewVenue();
  const { deleteSelectedImagesForVenue, isDeleting } =
    useDeleteSelectedImagesForVenue();
  const { updateAVenue, isUpdatingAVenue } = useUpdateAVenue();

  const { close: closeModal } = useContext(ModalContext);
  const { register, handleSubmit, setValue } = useForm();

  let currVenue;
  if (!isLoadingVenuesMenu) {
    currVenue = venuesMenu.venueItems.filter((item) => item._id == itemId)[0];
  }

  // For image preview and send
  const [serverImages, setServerImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImagesToSend, setSelectedImagesToSend] = useState([]);
  const [fileCount, setFileCount] = useState(0);

  console.log(currVenue);
  useEffect(() => {
    if (!currVenue) return;
    setValue("name", currVenue.name);
    setValue("min", currVenue.aprPartySize.split("-")[0] || 0);
    setValue("max", currVenue.aprPartySize.split("-")[1] || 0);
    setValue(
      "goodForOccassions",
      currVenue.goodForOccassions?.join(", ") || ""
    );
    setValue("pricePerDay", currVenue.pricePerDay || 0);
    setServerImages(currVenue.images);
    setFileCount(currVenue.images.length);
  }, [setValue, currVenue]);

  // funtion to delete images which were already uploaded while updating the item
  function handleDeleteSelectedImg(img, itemId) {
    const reqObj = {
      images: [img],
      itemId,
    };
    deleteSelectedImagesForVenue(reqObj);
  }

  function onSubmit(data) {
    const formData = new FormData();
    const aprPartySize = `${data.min}-${data.max}`;

    formData.append("name", data.name);
    formData.append("aprPartySize", aprPartySize);
    formData.append("pricePerDay", data.pricePerDay);
    formData.append("goodForOccassions", data.goodForOccassions);
    if (currVenue) formData.append("itemId", currVenue._id);

    selectedImagesToSend.map((file) => formData.append("images", file));

    if (!currVenue) {
      addANewVenue(formData);
    } else {
      updateAVenue(formData);
    }
    console.log(data);
    console.log(aprPartySize);
    console.log(selectedImagesToSend);

    if (!isAddingANewVenue || isUpdatingAVenue) {
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
              min={0}
              max={50}
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
              min={0}
              max={2000}
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
          {selectedImages.length > 0 &&
            selectedImages.map((image, index) => (
              <ImagePreviewDiv key={index}>
                <ImagePreview src={image} alt={`Selected Image ${index}`} />
                <ImagesRemoveBtn
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedImages((s) =>
                      s.filter((_, idx) => idx !== index)
                    );
                    // setSelectedImagesToSend((s) =>
                    //   s.filter((_, idx) => idx !== index)
                    // );
                  }}
                >
                  X
                </ImagesRemoveBtn>
              </ImagePreviewDiv>
            ))}
          {serverImages.length > 0 &&
            serverImages.map((image, index) => (
              <ImagePreviewDiv key={index}>
                <ImagePreview
                  crossOrigin="anonymous"
                  src={`http://127.0.0.1:3000/public/${image}`}
                  alt={`Selected Image ${index}`}
                />
                <ImagesRemoveBtn
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteSelectedImg(image, currVenue._id);
                    // setSelectedImages((s) =>
                    //   s.filter((_, idx) => idx !== index)
                    // );
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
