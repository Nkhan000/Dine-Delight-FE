/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import StyledTag from "../StyledTag";
import Button from "../Button";
import StyledOptions from "../StyledOptions";
import { useContext, useEffect, useState } from "react";
import { BannerContext, NotificationContext } from "../../utils/contexts";
import { Link, useLocation } from "react-router-dom";
// import { CartContext } from "../context/cartContext";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeAllDeliveries } from "../../features/cart/cartSlice";
import BannerNotification from "../BannerNotification";
import { useGetUser } from "../../features/authentication/useGetUser";
import { decreaseRemOrderOnAddNewOrder } from "../../features/cart/remainingOrderSlice";
import Modal from "../Modal";
import CheckBeforeConfirm from "../CART/CheckBeforeConfirm";
import {
  addAVenueBooking,
  removeVenueBooking,
} from "../../features/cart/venueBookingSlice";
import { removeReservation } from "../../features/cart/reservationSlice";
import { useCusineSingle } from "../../features/cuisines/useCuisines";

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
  cuisineAddress,
  cuisineImage,
  cuisineId,
  deliveryPrice,
}) {
  const { name, image, type, prices, _id } = data;
  const [itemQuantity, setItemQuantity] = useState(1);
  const {
    user,
    isLoading: isLoadingUser,
    error,
    // remainingOrders,
  } = useGetUser();

  const { setBannerItemObj, setBannerText, setBannerType, open } =
    useContext(BannerContext);

  const [selectedOption, setSelectedOption] = useState(
    prices && Object.keys(prices)?.[0]
  );

  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  // const user = !isLoadingUser && userObj?.user;
  let hasUserPremium, remainingBatchOrders;
  if (user) {
    hasUserPremium = user.hasUserPremium;
    remainingBatchOrders = user.remainingBatchOrders;
  }

  const {
    cart: storeCartObj,
    remainingOrders: storeRemainingOrders,
    venue: storeVenueObj,
    reservation: storeReservationObj,
  } = useSelector((store) => store);

  const storeCart = storeCartObj?.cart;
  const storeVenue = storeVenueObj?.venue;
  const storeReservation = storeReservationObj?.reservation;

  useEffect(() => {
    dispatch(
      decreaseRemOrderOnAddNewOrder({ remainingOrders: remainingBatchOrders })
    );
  }, [remainingBatchOrders, dispatch]);

  const remainingOrders = storeRemainingOrders.remainingOrders;
  const [overWriteWarning, setOverWriteWarning] = useState(false);
  const [currentCuisine, setCurrentCusine] = useState(cuisineName);
  const location = useLocation();

  useEffect(() => {
    setOverWriteWarning(
      !hasUserPremium &&
        remainingOrders === 0 &&
        (storeCart.length === 1 ||
          Object.keys(storeVenue).length >= 1 ||
          Object.keys(storeReservation).length >= 1)
    );
  }, [
    location,
    remainingOrders,
    storeCart,
    storeVenue,
    hasUserPremium,
    storeReservation,
  ]);

  useEffect(() => {
    setCurrentCusine(cuisineName);
  }, [location, cuisineName]);

  function handleIncreaseQuantity(e) {
    e.preventDefault();
    setItemQuantity((s) => (s === 12 ? s : s + 1));
  }
  function handleDecreaseQuantity(e) {
    e.preventDefault();
    setItemQuantity((s) => (s === 1 ? s : s - 1));
  }
  let orderObj;
  function onSubmit(data) {
    if (!user) {
      setBannerText("Please login to place an order");
      setBannerType("error-warning");
      open();
      return;
    }

    const updatedData = { ...data, _id, prices };
    orderObj = {
      cuisineName,
      cuisineId,
      cuisineImage,
      cuisineAddress,
      deliveryPrice,
      discount: 0,
      orderItems: [updatedData],
    };
    if (storeCart.some((item) => item.cuisineName === cuisineName)) {
      dispatch(addItem(orderObj));
      setBannerItemObj(updatedData);
      setBannerType("addItemToCart");
      open();
      return;
    }
    if (!overWriteWarning && storeCart.length === 0) {
      dispatch(addItem(orderObj));
      setBannerItemObj(updatedData);
      setBannerType("addItemToCart");
      open();
      return;
    }

    if (!hasUserPremium) {
      if (storeCart.length === 3 && remainingOrders === 1) {
        setBannerText(
          "Maximum numbers of cuisines added. Complete previous order to continue."
        );
        setBannerType("error-warning");
        open();
      } else if (storeCart.length < 3 && remainingOrders === 1) {
        dispatch(addItem(orderObj));
        setBannerItemObj(updatedData);
        setBannerType("addItemToCart");
        open();
      }
    }

    // if noPremium and has no batch orders left and trying to add more than one cuisines to the cart -> send error

    // if has noPremium has batch orders left (meaning only 1 batchOrder is left) then

    // 1. Allow upto three cuisines to be added to cart and decrease remainingOrders to 0

    // 2. see if there are already 3 cuisines in the cart -> send error saying maximum numbers of cusines has been added

    // 3. Allow adding from the cusine which are already present in the cart
  }
  function handleClickCart() {
    dispatch(removeAllDeliveries());
    dispatch(removeVenueBooking());
    dispatch(removeReservation());
    dispatch(addItem(orderObj));

    // navigate("/checkout");
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
            {overWriteWarning &&
            currentCuisine !== storeCart[0]?.cuisineName ? (
              <Modal>
                <Modal.Open open="delivery-confirmation-window">
                  <Button type="submit" size="medium" variation="primary">
                    Add to cart
                  </Button>
                </Modal.Open>
                <Modal.ModalWindow name="delivery-confirmation-window">
                  <CheckBeforeConfirm handleClick={handleClickCart} />
                </Modal.ModalWindow>
              </Modal>
            ) : (
              <>
                <Button
                  type="submit"
                  size="medium"
                  variation="primary"
                  hover="no"
                >
                  Add to cart
                </Button>
                <BannerNotification.Banner />
              </>
            )}
          </ButtonsDiv>
          <ButtonsDiv>
            <Button
              as={Link}
              to="/checkout"
              size="medium"
              variation="secondary"
              hover="no"
            >
              Go to Cart
            </Button>
          </ButtonsDiv>
        </ButtonsContainer>
      </TextDiv>
    </Container>
  );
}

export default FoodMenuItem;
