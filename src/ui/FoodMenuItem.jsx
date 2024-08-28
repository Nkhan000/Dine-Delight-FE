/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import StyledTag from "./StyledTag";
import Button from "./Button";
import StyledOptions from "./StyledOptions";
import { useContext, useEffect, useState } from "react";
import {
  AllowOrderContext,
  BannerContext,
  NotificationContext,
} from "../utils/contexts";
import { Link } from "react-router-dom";
// import { CartContext } from "../context/cartContext";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import BannerNotification from "./BannerNotification";
import { useGetUser } from "../features/authentication/useGetUser";
// BannerContext

// const Container = styled.div`
//   background-color: var(--color-grey-900);
//   display: grid;
//   grid-template-columns: min-content 1fr;
//   align-items: center;
//   height: min-content;
//   width: 100%;
//   border-radius: 1rem;
//   border-top-left-radius: 10rem;
//   border-bottom-left-radius: 10rem;
//   overflow: hidden;
// `;
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
  /* width: 12rem; */
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
  /* align-self: flex-end; */
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
  /* border: 1px solid; */
  padding: 0.5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuantityInput = styled.input`
  display: none;
`;

const StyledRadioDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0rem;
`;

const RadioLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
`;

const StyledCircle = styled.div`
  display: inline-block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  border: 2px solid var(--color-orange-50);
  position: relative;

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    background-color: var(--color-orange-50);
    display: none;
  }
`;

const RadioDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & input {
    display: none;
  }
  & input:checked + div::after {
    display: block;
  }

  & input:checked ~ label {
    color: var(--color-grey-300);
  }
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
  const { data: userObj, isLoading, error } = useGetUser();
  const { setBannerItemObj, setBannerText, setBannerType, open } =
    useContext(BannerContext);

  // const { tempRemainingOrders, setTempRemainingOrders } =
  //   useContext(AllowOrderContext);
  const [tempRemainingOrders, setTempRemainingOrders] = useState(0);
  localStorage.setItem("remaining-orders", tempRemainingOrders);
  const [selectedOption, setSelectedOption] = useState(
    prices && Object.keys(prices)?.[0]
  );
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const user = !isLoading && userObj?.user;
  const onGoingDeliveries = user?.onGoingDeliveriesId;
  const storeVenue = useSelector((store) => store.venue);
  const storeCart = useSelector((store) => store.cart);
  const isVenueCartEmpty = Object.keys(storeVenue.venue).length === 0;

  const onGoingOrdersCuisines = storeCart.cart.map((item) => item.cuisineName);

  function handleIncreaseQuantity(e) {
    e.preventDefault();
    setItemQuantity((s) => (s === 12 ? s : s + 1));
  }
  function handleDecreaseQuantity(e) {
    e.preventDefault();
    setItemQuantity((s) => (s === 1 ? s : s - 1));
  }

  // useEffect(() => {
  //   setTempRemainingOrders((s) => (s = 3 - onGoingDeliveries.length));
  // }, [onGoingDeliveries, setTempRemainingOrders, tempRemainingOrders]);

  // console.log(localStorage.getItem("remaining-orders"));

  console.log(storeCart.remainingOrders);

  function onSubmit(data) {
    if (!user) {
      setBannerText("Please login to place an order");
      setBannerType("error-warning");
      open();
      return;
    }

    if (onGoingDeliveries.length === 3) {
      setBannerText(
        "User already has the maximum number of ongoing orders. Wait until one finishes."
      );
      setBannerType("error-warning");
      open();
      return;
    }

    const updatedData = { ...data, _id, prices };
    setTempRemainingOrders((s) => (s = 3 - onGoingDeliveries.length));
    const orderObj = {
      cuisineName,
      cuisineId,
      cuisineImage,
      cuisineAddress,
      deliveryPrice,
      discount: 0,
      orderItems: [updatedData],
    };

    // if (onGoingOrdersCuisines.includes(cuisineName)) {
    //   setBannerItemObj(updatedData);
    //   setBannerType("addItemToCart");
    //   open();
    //   console.log(tempRemainingOrders);

    //   dispatch(addItem(orderObj));
    //   return;
    // }
    // if (tempRemainingOrders > 0 || tempRemainingOrders <= 3) {
    //   setBannerItemObj(updatedData);
    //   setBannerType("addItemToCart");
    //   open();

    //   dispatch(addItem(orderObj));
    //   console.log(tempRemainingOrders);
    //   setTempRemainingOrders((s) => s - 1);
    // }
    // else {
    //   setBannerText(
    //     "User has the maximum number of items in the cart. Clear the cart before continuing."
    //   );
    //   setBannerType("error-warning");
    //   console.log(tempRemainingOrders, "working");

    //   open();
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
