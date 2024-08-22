/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import StyledTag from "./StyledTag";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import StyledOptions from "./StyledOptions";
import Notification from "./NotificationWindow";
import { useContext, useEffect, useState } from "react";
import { BannerContext, NotificationContext } from "../utils/contexts";
import { Link } from "react-router-dom";
// import { CartContext } from "../context/cartContext";
import { Form, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { useCusineSingle } from "../features/cuisines/useCuisines";
import BannerNotification from "./BannerNotification";
import { useGetUser } from "../features/authentication/useGetUser";
import StyledRadioBtn from "./StyledRadioBtn";
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

const QuantityTextDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const QuantityTextSm = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-500);
`;
const QuantityTextBg = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-50);
  font-weight: 500;
`;

function MenuItem({
  data,
  cuisineName,
  cuisineImage,
  cuisineAddress,
  cuisineId,
  searchParams,
  deliveryPrice,
}) {
  const { name, image, images, aprPartySize, type, prices, _id } = data;
  const [itemQuantity, setItemQuantity] = useState(1);
  const { setItemObj, setBannerText, setType } = useContext(BannerContext);
  const [selectedOption, setSelectedOption] = useState(
    prices && Object.keys(prices)?.[0]
  );
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const { data: user, isLoading, error } = useGetUser();

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
      setBannerText("Please be logged in to continue");
      setType("error-warning");
      return;
    }
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
    // For Banner notification
    setItemObj(updatedData);
    dispatch(addItem(orderObj));
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
        {" "}
        {searchParams.get("serviceType") === "delivery" ? (
          <StyledImage src={`./img/${image}`} alt="food-image" />
        ) : (
          <StyledImage src={`./img/${images[0]}`} alt="food-image" />
        )}
      </ImageDiv>
      <TextDiv>
        <TextHeadDivOutter>
          <TextHeadDivInner>
            <TextHead>{name}</TextHead>
            <input value={name} name="name" {...register("name")} />
            {searchParams.get("serviceType") === "delivery" && (
              <>
                <StyledTag type={type}>{type}</StyledTag>
                <input
                  type="text"
                  value={selectedOption}
                  name="size"
                  {...register("size")}
                />
              </>
            )}
          </TextHeadDivInner>
          <IncludesDiv>
            {data.quantityPerServing ? (
              <IncludesText>
                {" "}
                <b>Main ingredients : </b>
                {data.mainIngredients?.map((item, index) => (
                  <span key={index}>{`${item}, `}</span>
                ))}{" "}
              </IncludesText>
            ) : (
              <IncludesText>
                {" "}
                <b>Good for occassions like : </b>
                {data.goodForOcassions?.map((item, index) => (
                  <span key={index}>{`${item}, `}</span>
                ))}{" "}
              </IncludesText>
            )}
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
          {searchParams.get("serviceType") === "delivery" && (
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
          )}
          <QuantityTextDiv>
            <QuantityTextSm>Party Size : </QuantityTextSm>
            <QuantityTextBg> {aprPartySize}</QuantityTextBg>
          </QuantityTextDiv>
        </QuantityDiv>

        <ButtonsContainer>
          <ButtonsDiv>
            <BannerNotification.Open>
              <Button
                type="submit"
                size="medium"
                variation="primary"
                hover="no"
              >
                {data.quantityPerServing
                  ? "Add to cart"
                  : "Available For Booking"}
              </Button>
            </BannerNotification.Open>

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
              {data.quantityPerServing ? "Add and Checkout" : "See Images"}
            </Button>
          </ButtonsDiv>
        </ButtonsContainer>
      </TextDiv>
    </Container>
  );
}

export default MenuItem;
