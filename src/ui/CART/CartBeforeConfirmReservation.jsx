/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Heading from "../Heading";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { removeReservation } from "../../features/cart/reservationSlice";

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
    grid-template-columns: 45% auto;

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
  text-transform: capitalize;
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

function CartBeforeConfirmReservation({ size, reservation }) {
  const currentDate = new Date().toISOString().split("T")[0];
  const formatedDate = new Date(reservation.reservationDate).toDateString();
  const reservationHour = new Date(reservation.reservationDate).getHours();
  const reservationMinutes = new Date(reservation.reservationDate).getMinutes();
  const reservationTime = `${reservationHour}:${reservationMinutes}`;

  const dispatch = useDispatch();
  return (
    <>
      <CuisineDiv>
        <CancelButtonDiv>
          <Button
            size="small"
            variation="secondary"
            onClick={() => dispatch(removeReservation())}
          >
            Cancel Order
          </Button>
        </CancelButtonDiv>
        <OngoingOrderCusineDiv size={size}>
          <OngoingOrderCusineLogoDiv size={size}>
            <LogoImg src="./img/hotel-001.jpg" alt="cuisine logo" />
          </OngoingOrderCusineLogoDiv>
          <HeadTextContainer>
            <Heading as={size === "large" ? "h2" : "h4"} color="light">
              {reservation.cuisineName}
            </Heading>
            <Heading as={size === "large" ? "h5" : "h6"} color="light">
              {reservation.cuisineAddress}
            </Heading>
          </HeadTextContainer>
        </OngoingOrderCusineDiv>
        <ItemDate>booked at : {currentDate}</ItemDate>
        <OngoingOrderItemList>
          <li className="venueList">
            <QuantityIncDecDiv>
              <ItemName size={size}>Table: {reservation.tableType}</ItemName>
            </QuantityIncDecDiv>

            <ItemPriceContainer>
              <ItemPrice size={size}>
                Total : ${reservation.total.toFixed(2)}
              </ItemPrice>
            </ItemPriceContainer>
          </li>
        </OngoingOrderItemList>
        <SubTotalDiv>
          <ItemTextTotal size={size}>
            Party Size : {reservation.aprPartySize} person
          </ItemTextTotal>
          <ItemTextTotal size={size}>On : {formatedDate}</ItemTextTotal>
          <ItemTextTotal size={size}>
            Time : {reservationTime} {reservationHour < 12 ? "AM" : "PM"}
          </ItemTextTotal>
        </SubTotalDiv>
      </CuisineDiv>

      <ItemRemarks>
        You are requested to be on time. You will get notified through calls or
        messages for your Booking 😊
      </ItemRemarks>
    </>
  );
}

export default CartBeforeConfirmReservation;
