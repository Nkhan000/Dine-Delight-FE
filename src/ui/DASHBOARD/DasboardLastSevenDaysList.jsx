/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import TableItem from "../TableItem";

const SummaryContainer = styled.div`
  /* height: auto; */
`;
const SummaryTabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 6rem;
`;

const SummaryTabContainerSm = styled.div`
  display: flex;
  gap: 1rem;
`;

const SummaryTabDiv = styled.div`
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
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
  width: 10rem;
  &:hover {
    opacity: 0.8;
  }
`;

const SummaryTabSpanSm = styled.span`
  color: var(--color-grey-100);
  font-size: 1.2rem;
  font-weight: 600;
`;

const SummaryTabSpanBg = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-grey-100);
`;

const SummaryListContainer = styled.div`
  padding: 1rem;
  padding-top: 0;
  /* padding-top: 4rem; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HeadTextGrey = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-grey-400);
`;

function DashboardLastSevenDaysList({ allOrders }) {
  return (
    <SummaryContainer>
      <SummaryListContainer>
        <HeadTextGrey>From last 7 days</HeadTextGrey>
        <SummaryTabContainer>
          <SummaryTabContainerSm>
            <SummaryTabDiv type="delivery">
              <SummaryTabSpanBg>
                {allOrders.totalDeliveryOrders}
              </SummaryTabSpanBg>{" "}
              <SummaryTabSpanSm>Deliveries</SummaryTabSpanSm>
            </SummaryTabDiv>
            <SummaryTabDiv type="delivery">
              <SummaryTabSpanBg>
                ${allOrders.highestDelivery.toFixed(2)}
              </SummaryTabSpanBg>
              <SummaryTabSpanSm>Highest Paid</SummaryTabSpanSm>
            </SummaryTabDiv>
          </SummaryTabContainerSm>
          <SummaryTabContainerSm>
            <SummaryTabDiv type="reservation">
              <SummaryTabSpanBg>
                {allOrders.totalReservationOrders}
              </SummaryTabSpanBg>{" "}
              <SummaryTabSpanSm>Reservations</SummaryTabSpanSm>
            </SummaryTabDiv>
            <SummaryTabDiv type="reservation">
              <SummaryTabSpanBg>
                ${allOrders.highestReservation.toFixed(2)}
              </SummaryTabSpanBg>
              <SummaryTabSpanSm>Highest Paid</SummaryTabSpanSm>
            </SummaryTabDiv>
          </SummaryTabContainerSm>
          <SummaryTabContainerSm>
            <SummaryTabDiv type="venue">
              <SummaryTabSpanBg>{allOrders.totalVenueOrders}</SummaryTabSpanBg>{" "}
              <SummaryTabSpanSm>Bookings</SummaryTabSpanSm>
            </SummaryTabDiv>
            <SummaryTabDiv type="venue">
              <SummaryTabSpanBg>
                ${allOrders.highestVenueBooking.toFixed(2)}
              </SummaryTabSpanBg>{" "}
              <SummaryTabSpanSm>Highest Paid</SummaryTabSpanSm>
            </SummaryTabDiv>
          </SummaryTabContainerSm>
        </SummaryTabContainer>
        <TableItem
          allOrders={allOrders.totalOrdersArr}
          tableType={"lastSevenDaysList"}
        />
      </SummaryListContainer>
    </SummaryContainer>
  );
}

export default DashboardLastSevenDaysList;
