/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import GradientHighlight from "./GradientHighlight";
import Button from "./Button";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAVenueBooking,
  removeVenueBooking,
} from "../features/cart/venueBookingSlice";
import Modal from "./Modal";
import CheckBeforeConfirm from "./CART/CheckBeforeConfirm";
import { removeAllDeliveries } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { removeReservation } from "../features/cart/reservationSlice";

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`;
const ImageDivSmall = styled.div`
  /* width: 12rem; */
  width: auto;
  height: auto;
  border-radius: 2rem;

  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const ModalHead = styled.span`
  font-size: 4rem;
  font-weight: 400;
`;

const ModalDivDetails = styled.div`
  width: 60rem;
  /* height: 25rem; */
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 3rem;
`;

const ModalTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ModalDateDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ModalDateDivInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  padding: 0 1rem;
`;

const ModalDateInputDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ModalDateInput = styled.input`
  font-size: 1.3rem;
  background-color: transparent;
  border: 1px solid var(--color-grey-700);
  padding: 0.2rem 0.5rem;
  color: var(--color-grey-100);
`;

const TextHead = styled.span`
  font-size: 2.4rem;
  color: var(--color-grey-50);
  font-family: "Indie Flowers", cursive;
  font-weight: 600;
`;

const PriceDivContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1.4rem;
  padding-top: 1rem;
  border-top: 1px solid;
  width: 100%;
  justify-items: center;
`;

const PriceDiv = styled.div``;

const GrandTotalDiv = styled.div`
  padding: 0 2rem;

  align-self: center;
  & span {
    font-size: 2rem;
    font-weight: 600;
    color: var(--color-grey-200);
  }
`;

const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

function VenueBookingModelDiv({
  name,
  images,
  venueId,
  aprPartySize,
  pricePerDay,
  cuisineName,
  cuisineId,
  cuisineAddress,
  cuisineImage,
}) {
  const [venueBookingStartDate, setVenueBookingStartDate] = useState("");
  const [venueBookingEndDate, setVenueBookingEndDate] = useState("");
  const [numOfDays, setNumOfDays] = useState(null);
  const [isCartEmpty, setIsCartEmpty] = useState();

  const dispatch = useDispatch();

  // function to calculate difference in date
  const calculateDate = useCallback(() => {
    if (!venueBookingStartDate || !venueBookingEndDate) return;
    const start = new Date(venueBookingStartDate);
    const end = new Date(venueBookingEndDate);
    if (end < start) {
      return;
    }
    const diffrenceTime = Math.abs(end - start) + 1;
    const differenceDays = Math.ceil(diffrenceTime / (1000 * 60 * 60 * 24));
    console.log(differenceDays);
    setNumOfDays(differenceDays);
  }, [venueBookingStartDate, venueBookingEndDate]); // to memoize the function and only re-render when start date and end date changes

  function handleStartDateChange(e) {
    setVenueBookingStartDate(e.target.value);
  }
  function handleEndDateChange(e) {
    setVenueBookingEndDate(e.target.value);
  }

  // to check whether the cart is empty or has some ongoing orders
  const storeCart = useSelector((store) => store.cart);
  const storeVenue = useSelector((store) => store.venue);
  const storeReservation = useSelector((store) => store.reservation);

  useEffect(() => {
    setIsCartEmpty(
      storeCart.cart.length === 0 &&
        Object.keys(storeVenue.venue).length === 0 &&
        Object.keys(storeReservation.reservation).length === 0
    );
  }, [storeCart, storeReservation, storeVenue]);

  // Use useEffect to calculate difference whenever dates change
  useEffect(() => {
    calculateDate();
  }, [venueBookingStartDate, calculateDate, venueBookingEndDate]);

  const orderObj = {
    cuisineName,
    cuisineAddress,
    cuisineId,
    cuisineImage,
    name,
    venueId,
    aprPartySize,
    venueBookingStartDate,
    venueBookingEndDate,
    numOfDays,
    pricePerDay,
    totalPrice: pricePerDay * numOfDays * 0.13 + pricePerDay * numOfDays,
  };
  const navigate = useNavigate();

  // if cart has some ongoing orders than alert the user with overwrite warning else add the order to the cart
  function handleConfirmClick() {
    if (isCartEmpty) {
      dispatch(addAVenueBooking(orderObj));
    } else {
      dispatch(removeAllDeliveries());
      dispatch(removeVenueBooking());
      dispatch(removeReservation());
      dispatch(addAVenueBooking(orderObj));
    }
    navigate("/checkout");
    console.log(orderObj);
  }
  return (
    <ModalDiv>
      <GradientHighlight>
        <ModalHead>Continue Booking</ModalHead>
      </GradientHighlight>
      <ModalDivDetails>
        <ImageDivSmall>
          <StyledImage src={`./img/${images[0]}`} alt="food-image" />
        </ImageDivSmall>
        <ModalTextDiv>
          <TextHead>{name}</TextHead>
          <QuantityTextDiv>
            <QuantityTextBg>Good For : {aprPartySize} People</QuantityTextBg>
          </QuantityTextDiv>
          <QuantityTextDiv>
            <QuantityTextBg>Available From : Aug 13,2025</QuantityTextBg>
            <QuantityTextSm>(7 days from today)</QuantityTextSm>
          </QuantityTextDiv>
          <ModalDateDiv>
            <QuantityTextBg>Select Date : </QuantityTextBg>

            <ModalDateDivInner>
              <ModalDateInputDiv>
                <QuantityTextSm>*From :</QuantityTextSm>
                <ModalDateInput
                  type="date"
                  min="2024-08-20"
                  max="2024-08-27"
                  onChange={handleStartDateChange}
                  required
                />
              </ModalDateInputDiv>
              <ModalDateInputDiv>
                <QuantityTextSm>*To :</QuantityTextSm>
                <ModalDateInput
                  type="date"
                  min="2024-08-20"
                  max="2024-08-27"
                  onChange={handleEndDateChange}
                  required
                />
              </ModalDateInputDiv>
            </ModalDateDivInner>
          </ModalDateDiv>
        </ModalTextDiv>
      </ModalDivDetails>
      {numOfDays > 0 && (
        <>
          <PriceDivContainer>
            <PriceDiv>
              <QuantityTextBg>No. of Days : </QuantityTextBg>
              <QuantityTextBg>{numOfDays}</QuantityTextBg>
            </PriceDiv>
            <PriceDiv>
              <QuantityTextBg>Rate/Day : </QuantityTextBg>
              <QuantityTextBg> ${pricePerDay}</QuantityTextBg>
            </PriceDiv>
            <PriceDiv>
              <QuantityTextBg>Total : </QuantityTextBg>
              <QuantityTextBg>${pricePerDay * numOfDays}</QuantityTextBg>
            </PriceDiv>
          </PriceDivContainer>

          <GrandTotalDiv>
            <span>
              Grand Total (13% tax) : $
              {pricePerDay * numOfDays * 0.13 + pricePerDay * numOfDays}
            </span>
          </GrandTotalDiv>

          <ButtonsDiv>
            {isCartEmpty ? (
              <Button
                size="medium"
                variation="primary"
                onClick={handleConfirmClick}
              >
                Confirm Booking
              </Button>
            ) : (
              <Modal>
                <Modal.Open open="venue-confirmation-window">
                  <Button size="medium" variation="primary">
                    Confirm Booking
                  </Button>
                </Modal.Open>
                <Modal.ModalWindow name="venue-confirmation-window">
                  <CheckBeforeConfirm handleClick={handleConfirmClick} />
                </Modal.ModalWindow>
              </Modal>
            )}
            <Button size="medium" variation="secondary">
              Cancel
            </Button>
          </ButtonsDiv>
        </>
      )}
    </ModalDiv>
  );
}

export default VenueBookingModelDiv;
