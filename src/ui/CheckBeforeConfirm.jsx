/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addAVenueBooking,
  removeVenueBooking,
} from "../features/cart/venueBookingSlice";
import { clearCartFromReduxState } from "../features/cart/cartSlice";

const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

// Check Before Confirm Div
const CheckContainer = styled.div`
  /* margin: 0.2rem; */
  width: 40rem;
  height: 15rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
`;

const CheckTextDiv = styled.div`
  width: 100%;
  & span {
    text-align: center;
    font-weight: 500;
    color: var(--color-grey-200);
    /* text-justify: inter-ideograph; */
  }
`;

function CheckBeforeConfirm({ orderObj }) {
  const [tempOrder, setTempOrder] = useState();
  const storeCart = useSelector((store) => store.cart);
  const storeVenue = useSelector((store) => store.venue);

  console.log(storeCart, storeVenue);
  // console.log(store);
  const dispatch = useDispatch();
  function handleConfirmClick() {
    // dispatch(clearCartFromReduxState());
    // dispatch(removeVenueBooking());
    // dispatch(addAVenueBooking(orderObj));
    console.log(orderObj);
  }
  return (
    <CheckContainer>
      <CheckTextDiv>
        <span>
          You already have some ongoing order. Do you wish Overwrite the
          previous order with new one?
        </span>
      </CheckTextDiv>
      <ButtonsDiv>
        <Button
          size="medium"
          variation="primary"
          onClick={handleConfirmClick}
          className="no-outside-click"
        >
          Continue order
        </Button>
        <Button size="medium" variation="secondary">
          Cancel
        </Button>
      </ButtonsDiv>
    </CheckContainer>
  );
}

export default CheckBeforeConfirm;
