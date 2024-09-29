/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "../../Heading";
import Button from "../../Button";
import { useForm } from "react-hook-form";
import StyledOptionsDiv from "../../StyledOptionsTwo";
import { useCallback, useContext, useEffect, useState } from "react";
import useAddNewFoodItem from "../../../hooks/useAddNewFoodItem";
import Modal from "../../Modal";
import { ModalContext } from "../../../utils/contexts";
import SpinnerMini from "../../SpinnerMini";
import { useGetFoodMenu } from "../../../hooks/useGetFoodMenu";
import { current } from "@reduxjs/toolkit";
import Spinner from "../../Spinner";

const Container = styled.div`
  width: 55vw;
  height: 65vh;
  padding: 1rem 3rem;

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

// eslint-disable-next-line react/prop-types
function AddFoodItemForm({ itemId = "" }) {
  const { foodItems, isLoading } = useGetFoodMenu();
  const currItem = foodItems.filter((item) => item._id == itemId)[0];

  const [selectedOption, setSelectedOption] = useState("veg");
  const { register, handleSubmit, setValue } = useForm();
  const { mutate, isPending } = useAddNewFoodItem();
  const { close: closeModal } = useContext(ModalContext);

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
    const { prices } = data;
    let pricesObj = prices.split(",");
    pricesObj = pricesObj.reduce((acc, curr) => {
      const [key, value] = curr.split(":").map((item) => item.trim());
      acc[key] = Number(value);
      return acc;
    }, {});
    data.prices = pricesObj;
    // will delete later when handeling file uploads
    data.image = "food-002.jpg";
    data.quantityPerServing = "10pcs";
    console.log(data);
    // mutate(data);
    if (!isPending) {
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
          <FormInput type="file" {...register("image")} />
        </FormInputDiv>

        <Button size="medium" variation="primary" type="submit">
          Submit
          {isPending && <SpinnerMini />}
        </Button>
      </FormDiv>
    </Container>
  );
}

export default AddFoodItemForm;
