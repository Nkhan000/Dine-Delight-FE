/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Heading from "../../Heading";
import OngoingVenueBooking from "../../OngoingVenueBooking";
import OngoingDelivery from "../../OngoingDelivery";
import OngoingReservation from "../../RESERVATION/OngoingReservation";

const HeadTextGrey = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-grey-400);
`;

const OngoingOrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;
const OngoingOrderDiv = styled.div`
  max-height: 55rem;
  width: 40rem;
  border: 1px solid var(--color-grey-800);
  overflow-y: scroll;
  border-radius: 5px;
  padding-bottom: 2rem;

  // setting scrollbar width 0
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const OngoingOrderHead = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  ${(props) =>
    props.type == "delivery" &&
    css`
      background-color: var(--color-green-700);
    `}
  ${(props) =>
    props.type == "reservation" &&
    css`
      background-color: var(--color-red-700);
    `}
  ${(props) =>
    props.type == "venue" &&
    css`
      background-color: var(--color-indigo-700);
    `}
  ${(props) =>
    props.type == "none" &&
    css`
      background-color: var(--color-grey-700);
    `}
  padding: 1rem 2rem;
`;

function DashboardOnGoingOrders() {
  return (
    <>
      <HeadTextGrey>Ongoing orders</HeadTextGrey>
      <OngoingOrderContainer>
        <OngoingOrderDiv>
          <OngoingOrderHead type="delivery">
            <Heading as="h3" color="light">
              Delivery
            </Heading>
          </OngoingOrderHead>
          <OngoingDelivery />
        </OngoingOrderDiv>

        <OngoingOrderDiv>
          <OngoingOrderHead type="reservation">
            <Heading as="h3" color="light">
              Reservation
            </Heading>
          </OngoingOrderHead>
          <OngoingReservation />
        </OngoingOrderDiv>
        <OngoingOrderDiv>
          <OngoingOrderHead type="venue">
            <Heading as="h3" color="light">
              Venue
            </Heading>
          </OngoingOrderHead>
          <OngoingVenueBooking type="venue" />
        </OngoingOrderDiv>
      </OngoingOrderContainer>
    </>
  );
}

export default DashboardOnGoingOrders;
