/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "../../../Heading";

import Button from "../../../Button";
import { useForm } from "react-hook-form";
import StyledOptionsDiv from "../../../StyledOptionsTwo";
import { useCallback, useContext, useEffect, useState } from "react";
import useAddNewFoodItem from "../../../../hooks/useAddNewFoodItem";
import { ModalContext } from "../../../../utils/contexts";
import SpinnerMini from "../../../SpinnerMini";
import { useGetFoodMenu } from "../../../../hooks/useGetFoodMenu";
import { useUpdateAFoodItem } from "../../../../hooks/FoodMenu/useUpdateAFoodItem";

const Container = styled.div`
  width: 55vw;
  height: 65vh;
  padding: 1rem 3rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const FormHeadDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const FormInputDiv = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* gap: 1rem; */
`;

const FormInputRadiosDiv = styled.div`
  display: flex;
  gap: 2rem;
`;

const FormLabel = styled.label`
  width: 15rem;
  font-weight: 600;
  color: var(--color-grey-500);
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

// eslint-disable-next-line react/prop-types
function AddFoodItemForm({ itemId = "" }) {
  const { register, handleSubmit, setValue } = useForm();
  const { foodMenu, isLoading } = useGetFoodMenu();
  const { foodItems } = foodMenu;
  const currItem = foodItems.filter((item) => item._id == itemId)[0];

  // console.log(currItem ? true : false);

  const [selectedOption, setSelectedOption] = useState("veg");
  const { addANewFoodItem, isAddingANewFoodItem } = useAddNewFoodItem();
  const { updateAFoodItem, isUpdatingAFoodItem } = useUpdateAFoodItem();

  const { close: closeModal } = useContext(ModalContext);

  const [selectedImage, setSelectedImage] = useState(
    currItem ? `http://127.0.0.1:3000/public/${currItem.image}` : null
  );

  // PREVIEW THE SELECTED IMAGE
  function handleChangeImage(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }

    setValue("image", selectedFile);
  }

  const formatPrices = useCallback(() => {
    return Object.entries(currItem?.prices)
      .map((item) => item.join(":"))
      .join(",");
  }, [currItem?.prices]);

  useEffect(() => {
    if (currItem) {
      setValue("name", currItem.name || "");
      setValue("type", currItem.type || "");
      setValue("category", currItem.category || "");
      setValue("image", currItem.image || "");
      setValue("mainIngredients", currItem.mainIngredients || "");
      setValue("prices", formatPrices(currItem.prices) || "");
    }
  }, [currItem, formatPrices, setValue]);

  function onSubmit(data) {
    const formData = new FormData();

    let pricesArr = data.prices.includes(",")
      ? data.prices.split(",").map((item) => item.trim())
      : [data.prices.trim()];

    let pricesObj = {};

    pricesArr.forEach((item) => {
      const [key, value] = item.split(":").map((part) => part.trim());

      if (key && value) {
        pricesObj[key] = Number(value);
      } else {
        console.error(
          `Invalid price format for item: "${item}". Expected format: "key : value".`
        );
      }
    });

    formData.append("name", data.name);
    formData.append("prices", JSON.stringify(pricesObj));
    formData.append("category", data.category.trim().toLowerCase());
    formData.append("type", data.type);

    const mainIngredients = currItem
      ? data?.mainIngredients?.map((ing) => ing.trim().toLowerCase())
      : data.mainIngredients.split(",").map((ing) => ing.trim().toLowerCase());

    formData.append("mainIngredients", mainIngredients);
    formData.append("quantityPerServing", "10pcs");
    formData.append("itemId", itemId ? itemId : null);

    if (selectedImage) {
      formData.append("image", data.image);
    }

    console.log(formData);

    currItem ? updateAFoodItem(formData) : addANewFoodItem(formData);

    if (!isAddingANewFoodItem || !isUpdatingAFoodItem) {
      closeModal(); // closes the modal form after submission
    }
  }

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
            placeholder="chicken steam momo"
            {...register("name")}
          />
        </FormInputDiv>

        <FormInputDiv>
          <FormLabel htmlFor="category">Category : </FormLabel>
          <FormInput
            id="category"
            type="text"
            placeholder="noodles, momo . . ."
            {...register("category")}
            required
          />
        </FormInputDiv>
        <FormInputDiv>
          <FormLabel htmlFor="mainIngredients">Main Ingredients : </FormLabel>
          <FormInput
            id="mainIngredients"
            type="text"
            placeholder="onions, carrots, ... (seperete with a comma)"
            {...register("mainIngredients")}
            required
          />
        </FormInputDiv>
        <FormInputDiv>
          <FormLabel htmlFor="prices">Price : </FormLabel>
          <FormInput
            id="prices"
            type="text"
            placeholder="eg: small : 30, 10pcs : 40 "
            {...register("prices")}
            required
          />
        </FormInputDiv>

        <FormInputRadiosDiv>
          <StyledOptionsDiv>
            <label>
              <FormLabel>Type</FormLabel>
            </label>
            <select
              name="type"
              onChange={(e) => setSelectedOption(e.target.value)}
              {...register("type")}
            >
              <option value="veg">Veg</option>
              <option value="non-veg">Non-veg</option>
            </select>
          </StyledOptionsDiv>
        </FormInputRadiosDiv>

        <FormInputDiv>
          <FormLabel>Image :</FormLabel>
          <FormInput type="file" onChange={handleChangeImage} />
        </FormInputDiv>

        {selectedImage && (
          <FormPreviewImagesDiv>
            <ImagePreviewDiv>
              <ImagePreview
                crossOrigin="anonymous"
                src={`${selectedImage}`}
                alt={`Selected food item Image`}
              />
              <ImagesRemoveBtn
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedImage();
                }}
              >
                X
              </ImagesRemoveBtn>
            </ImagePreviewDiv>
          </FormPreviewImagesDiv>
        )}

        <Button size="medium" variation="primary" type="submit">
          Submit
          {(isAddingANewFoodItem || isUpdatingAFoodItem) && <SpinnerMini />}
        </Button>
      </FormDiv>
    </Container>
  );
}

export default AddFoodItemForm;
