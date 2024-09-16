/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Heading from "../Heading";
import Button from "../Button";
import StyledOptions from "../StyledOptions";
import { useContext, useEffect, useReducer, useState } from "react";
import cartReducer, {
  removeItem,
  removeSingleCuisine,
  updateItemSize,
  updateNewQuantity,
} from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { useGetUser } from "../../features/authentication/useGetUser";
import { decreaseRemOrderOnAddNewOrder } from "../../features/cart/remainingOrderSlice";
import { removeVenueBooking } from "../../features/cart/venueBookingSlice";
import CartBeforeConfirmOrder from "./CartBeforeConfirmOrder";
import CartBeforeConfirmVenue from "./CartBeforeConfirmVenue";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* background-color: red; */
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OngoingOrderCusineDiv = styled.div`
  padding: 2rem 4rem;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  ${(props) =>
    props.size == "large" &&
    css`
      gap: 2rem;
    `}
  ${(props) =>
    props.size == "small" &&
    css`
      gap: 1rem;
    `}
`;

const HeadTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const OngoingOrderCusineLogoDiv = styled.div`
  ${(props) =>
    props.size == "large" &&
    css`
      height: 8rem;
      width: 8rem;
    `}
  ${(props) =>
    props.size == "small" &&
    css`
      height: 4.8rem;
      width: 4.8rem;
    `}
  overflow: hidden;
  border-radius: 5rem;
`;

const OngoingOrderItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;

  li {
    border-bottom: 1px solid;
    width: 100%;
    padding-bottom: 0.5rem;
    display: grid;
    grid-template-columns: 60% 1fr 1fr;

    align-items: center;
    ${(props) =>
      props.size == "small" &&
      css`
        display: flex !important;
        padding-bottom: 0.5rem;
      `}
  }
`;

const ItemPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-self: end;
`;

const ItemName = styled.span`
  font-weight: 600;
  color: var(--color-grey-300);
  font-size: 1.7rem;
  ${(props) =>
    props.size == "small" &&
    css`
      font-size: 1.4rem;
    `}
`;
const ItemPrice = styled.span`
  font-weight: 600;
  color: var(--color-grey-300);
  font-size: 1.7rem;

  ${(props) =>
    props.size == "small" &&
    css`
      /* font-weight: 300; */
      font-size: 1.4rem;
    `}
`;
const ItemDate = styled.span`
  font-size: 1.1rem;
  font-style: italic;
  font-weight: 500;
  color: var(--color-grey-300);
  text-align: end;
  padding-right: 2rem;
  padding-bottom: 1rem;
`;

const ItemTextTotal = styled.span`
  font-weight: 600;
  color: var(--color-grey-300);
  font-size: 1.5rem;
  align-self: flex-end;
  padding: 0.6rem 2rem;

  ${(props) =>
    props.size == "small" &&
    css`
      font-size: 1.1rem;
    `}
`;

const ItemRemarks = styled.span`
  font-size: 1.4;
  font-style: italic;
  font-weight: 300;
  color: var(--color-grey-500);
  padding: 2rem;
  text-align: center;
`;

const QuantityIncDecDiv = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;
  /* width: 30rem; */
`;

const SubTotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const CuisineDiv = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
`;

const CancelButtonDiv = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
`;

function CartBeforeConfirm({ size }) {
  const storeCart = useSelector((store) => store.cart);
  const storeVenue = useSelector((store) => store.venue);
  const { cart } = storeCart;
  const { venue } = storeVenue;

  return (
    <Container>
      {cart.length > 0 ? (
        <CartBeforeConfirmOrder size={size} cart={cart} />
      ) : Object.keys(venue).length > 1 ? (
        <CartBeforeConfirmVenue size={size} venue={venue} />
      ) : (
        <ItemRemarks>
          Please add Items to your cart before continuing 😂
        </ItemRemarks>
      )}
    </Container>
  );
}

export default CartBeforeConfirm;
