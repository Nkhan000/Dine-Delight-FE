/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import StyledTag from "./StyledTag";
import Button from "./Button";
import StyledOptions from "./StyledOptions";
import { useContext, useEffect, useState } from "react";
import { BannerContext, NotificationContext } from "../utils/contexts";
import { Link } from "react-router-dom";
// import { CartContext } from "../context/cartContext";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import BannerNotification from "./BannerNotification";
import { useGetUser } from "../features/authentication/useGetUser";
import {
  decreaseRemOrderOnAddNewOrder,
  setInitialRemOrders,
} from "../features/cart/remainingOrderSlice";

const Container = styled.form`
  /* display: flex; */
  display: grid;
  grid-template-columns: 13rem 1fr;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;

  & * input {
    color: var(--color-grey-50);
    font-family: "Indie Flowers", cursive;
    font-weight: 600;
    background-color: transparent;
    border: none;
    outline: none;
    display: none;
    &:focus {
      outline: none;
      border: none;
      caret-color: transparent;
    }
  }
`;

const ImageDiv = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  padding: 0rem 1.4rem;
`;

const TextHeadDivOutter = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextHeadDivInner = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
`;

const TextHead = styled.span`
  font-size: 2.4rem;
  color: var(--color-grey-50);
  font-family: "Indie Flowers", cursive;
  font-weight: 600;
`;

const IncludesDiv = styled.div`
  /* grid-column: 1 / -1; */
`;
const IncludesText = styled.span`
  font-size: 1.3rem;
  font-style: italic;
  color: var(--color-grey-500);
`;

const TextPrice = styled.span`
  color: var(--color-grey-50);
  font-size: 2rem !important;
  font-weight: 600;
`;

const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const QuantityText = styled.span`
  color: var(--color-grey-500);
  font-size: 1.4rem;
  font-weight: 600;
`;

const ButtonsDiv = styled.div`
  column-gap: 1.4rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

const QuantityInputDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: auto;
`;
const QuantityInputValueShow = styled.span`
  font-size: 1.8rem;
  height: 3rem;
  width: 3rem;
  color: var(--color-grey-200);
  padding: 0.5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuantityInput = styled.input`
  display: none;
`;

function FoodMenuItem({
  data,
  cuisineName,
  cuisineImage,
  cuisineAddress,
  cuisineId,
  searchParams,
  deliveryPrice,
}) {
  const { name, image, type, prices, _id } = data;
  const [itemQuantity, setItemQuantity] = useState(1);
  const {
    data: userObj,
    isLoading: isLoadingUser,
    error,
    remainingOrders,
  } = useGetUser();

  const { setBannerItemObj, setBannerText, setBannerType, open } =
    useContext(BannerContext);

  const [selectedOption, setSelectedOption] = useState(
    prices && Object.keys(prices)?.[0]
  );
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const user = !isLoadingUser && userObj?.user;
  const storeCart = useSelector((store) => store.cart);
  const storeRemainingOrders = useSelector(
    (store) => store.remainingOrders
  ).remainingOrders;

  useEffect(() => {
    if (!isLoadingUser && remainingOrders) {
      if (storeRemainingOrders === null || storeRemainingOrders === undefined) {
        dispatch(setInitialRemOrders({ remainingOrders }));
      }
    }
  }, [remainingOrders, isLoadingUser, dispatch, storeRemainingOrders]);

  // console.log("test", storeRemainingOrders);

  function handleIncreaseQuantity(e) {
    e.preventDefault();
    setItemQuantity((s) => (s === 12 ? s : s + 1));
  }
  function handleDecreaseQuantity(e) {
    e.preventDefault();
    setItemQuantity((s) => (s === 1 ? s : s - 1));
  }
  function onSubmit(data) {
    if (!user) {
      setBannerText("Please login to place an order");
      setBannerType("error-warning");
      open();
      return;
    }
    // const parsedCart = JSON.parse(storeCart.cart);
    const updatedData = { ...data, _id, prices };
    const orderObj = {
      cuisineName,
      cuisineId,
      cuisineImage,
      cuisineAddress,
      deliveryPrice,
      discount: 0,
      orderItems: [updatedData],
    };
    // console.log(parsedCart);
    console.log(storeCart);
    // if (storeCart.cart.some((item) => item.cuisineName === cuisineName)) {
    //   setBannerItemObj(updatedData);
    //   setBannerType("addItemToCart");
    //   open();
    //   dispatch(addItem(orderObj));
    //   console.log(
    //     parsedCart.cart.some((item) => item.cuisineName === cuisineName)
    //   );
    // } else {
    //   setBannerItemObj(updatedData);
    //   setBannerType("addItemToCart");
    //   open();
    //   dispatch(addItem(orderObj));
    //   console.log(parsedCart);
    //   const newRemainingOrder = storeRemainingOrders - 1;
    //   dispatch(
    //     decreaseRemOrderOnAddNewOrder({ remainingOrders: newRemainingOrder })
    //   );
    // }
    // if (storeRemainingOrders === 0) {
    //   setBannerText(
    //     "User already has the maximum number of ongoing orders. Wait until one finishes."
    //   );
    //   setBannerType("error-warning");
    //   open();
    // }

    // if (storeCart.cart.map((item) => item.cuisineName).includes(cuisineName)) {
    //   console.log(
    //     storeCart.cart.map((item) => item.cuisineName).includes(cuisineName)
    //   );
    //   console.log(orderObj);
    // } else {
    //   const newRemainingOrder = storeRemainingOrders - 1;
    //   dispatch(
    //     decreaseRemOrderOnAddNewOrder({ remainingOrders: newRemainingOrder })
    //   );
    // }
  }

  // IMPORTANT FOR INPUT VALUES WHEN STATES are CHANGED
  useEffect(() => {
    setValue("quantity", itemQuantity);
    setValue("size", selectedOption);
    setValue("price", prices && itemQuantity * prices[selectedOption]);
  }, [setValue, selectedOption, itemQuantity, prices]);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <ImageDiv>
        <StyledImage src={`./img/${image}`} alt="food-image" />
      </ImageDiv>
      <TextDiv>
        <TextHeadDivOutter>
          <TextHeadDivInner>
            <TextHead>{name}</TextHead>
            <input value={name} name="name" {...register("name")} />
            <>
              <StyledTag type={type}>{type}</StyledTag>
              <input
                type="text"
                value={selectedOption}
                name="size"
                {...register("size")}
              />
            </>
          </TextHeadDivInner>
          <IncludesDiv>
            <IncludesText>
              <b>Main ingredients : </b>
              {data.mainIngredients?.map((item, index) => (
                <span key={index}>{`${item}, `}</span>
              ))}
            </IncludesText>
          </IncludesDiv>
        </TextHeadDivOutter>

        <QuantityDiv>
          <TextPrice>
            ${prices && itemQuantity * prices[selectedOption]}
          </TextPrice>
          <input
            value={prices && itemQuantity * prices[selectedOption]}
            name="price"
            {...register("price")}
          />
          <StyledOptions
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            sortby={"size"}
            options={Object.keys(prices)}
          />

          <QuantityText>{type == "venue" && data?.partySize}</QuantityText>
          <QuantityInputDiv>
            <Button
              size="small"
              variation="primary"
              hover="no"
              onClick={handleDecreaseQuantity}
            >
              -
            </Button>
            <QuantityInput type="number" value={itemQuantity} />
            <input
              value={itemQuantity}
              name="quantity"
              {...register("quantity")}
            />
            <QuantityInputValueShow>{itemQuantity}</QuantityInputValueShow>
            <Button
              size="small"
              variation="primary"
              hover="no"
              onClick={handleIncreaseQuantity}
            >
              +
            </Button>
          </QuantityInputDiv>
        </QuantityDiv>

        <ButtonsContainer>
          <ButtonsDiv>
            <Button type="submit" size="medium" variation="primary" hover="no">
              Add to cart
            </Button>
            <BannerNotification.Banner></BannerNotification.Banner>
          </ButtonsDiv>
          <ButtonsDiv>
            <Button
              as={Link}
              to="/checkout"
              size="medium"
              variation="secondary"
              hover="no"
            >
              Add and Checkout
            </Button>
          </ButtonsDiv>
        </ButtonsContainer>
      </TextDiv>
    </Container>
  );
}

export default FoodMenuItem;
