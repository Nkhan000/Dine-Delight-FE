/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Button from "./Button";
import TableItem from "./TableItem";
import Heading from "./Heading";
// import CartBeforeConfirm from "./CartBeforeConfirm";
import OngoingVenueBooking from "./OngoingVenueBooking";
// import { useSearchParams } from "react-router-dom";
import OngoingDelivery from "./OngoingDelivery";
import { useGetADelivery } from "../features/delivery/useDelivery";
import { useGetABookedVenueData } from "../features/cuisines/useVenue";
import OngoingReservation from "./OngoingReservation";

// USER PROFILE DIV
const UserProfileContainer = styled.div`
  /* padding: 4rem 0; */
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const UserProfileContainerUpper = styled.div`
  display: grid;
  grid-template-columns: 1fr 40rem;
  column-gap: 6rem;
  /* padding: 4rem 2rem; */
`;
const UserProfileContainerLower = styled.div`
  padding: 0rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const UserProfileContainerFlex = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  /* padding: 4rem 0; */
`;

const ProfileUserDetails = styled.div`
  border: 3px solid;
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
`;

const ProfileImgDiv = styled.div`
  position: absolute;
  top: -10%;
  right: 10%;
  height: 10rem;
  width: 10rem;
  overflow: hidden;
  border-radius: 50%;
  outline: 3px solid var(--color-orange-50);
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 2rem;
`;

const DetailDivItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailDivTextSm = styled.p`
  font-weight: 700;
  color: var(--color-grey-500);
  font-size: 1.5rem;
`;
const DetailDivTextBg = styled.p`
  color: var(--color-grey-200);
  font-size: 1.8rem;
`;

const SummaryContainer = styled.div`
  //
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
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

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
  height: 55rem;
  width: 40rem;
  border: 1px solid var(--color-grey-800);
  overflow-y: scroll;
  border-radius: 5px;

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

const NoOrderDiv = styled.div`
  display: flex;
  justify-content: center;

  & span {
    color: var(--color-grey-500);
    font-size: 2rem;
    font-weight: 600;
    padding: 5rem 2rem;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 4rem 0;
`;

function DashboardUserProfile({ user, searchParams, setSearchParams }) {
  function handleClick(e) {
    const elementValue = e.target.getAttribute("value");
    searchParams.set("userPanel", elementValue);
    setSearchParams(searchParams);
  }

  return (
    <>
      <ButtonDiv>
        <Button
          value="profile"
          size="medium"
          variation={
            searchParams.get("userPanel") === "profile"
              ? "primary"
              : "secondary"
          }
          onClick={handleClick}
        >
          Profile
        </Button>
        <Button
          value="ongoingOrders"
          size="medium"
          variation={
            searchParams.get("userPanel") === "ongoingOrders"
              ? "primary"
              : "secondary"
          }
          onClick={handleClick}
        >
          Ongoing orders
        </Button>
        <Button
          value="userSettings"
          size="medium"
          variation={
            searchParams.get("userPanel") === "userSettings"
              ? "primary"
              : "secondary"
          }
          onClick={handleClick}
        >
          User settings
        </Button>
      </ButtonDiv>

      <UserProfileContainer>
        {searchParams.get("userPanel") === "profile" && (
          <UserProfileContainerUpper>
            <SummaryContainer>
              <SummaryTabContainer>
                <SummaryTabContainerSm>
                  <SummaryTabDiv type="delivery">
                    <SummaryTabSpanBg>23</SummaryTabSpanBg>{" "}
                    <SummaryTabSpanSm>Orders</SummaryTabSpanSm>
                  </SummaryTabDiv>
                  <SummaryTabDiv type="delivery">
                    <SummaryTabSpanBg>$230</SummaryTabSpanBg>
                    <SummaryTabSpanSm>Highest Paid</SummaryTabSpanSm>
                  </SummaryTabDiv>
                </SummaryTabContainerSm>
                <SummaryTabContainerSm>
                  <SummaryTabDiv type="reservation">
                    <SummaryTabSpanBg>23</SummaryTabSpanBg>{" "}
                    <SummaryTabSpanSm>Reservations</SummaryTabSpanSm>
                  </SummaryTabDiv>
                  <SummaryTabDiv type="reservation">
                    <SummaryTabSpanBg>$230</SummaryTabSpanBg>
                    <SummaryTabSpanSm>Highest Paid</SummaryTabSpanSm>
                  </SummaryTabDiv>
                </SummaryTabContainerSm>
                <SummaryTabContainerSm>
                  <SummaryTabDiv type="venue">
                    <SummaryTabSpanBg>23</SummaryTabSpanBg>{" "}
                    <SummaryTabSpanSm>Bookings</SummaryTabSpanSm>
                  </SummaryTabDiv>
                  <SummaryTabDiv type="venue">
                    <SummaryTabSpanBg>$230</SummaryTabSpanBg>{" "}
                    <SummaryTabSpanSm>Highest Paid</SummaryTabSpanSm>
                  </SummaryTabDiv>
                </SummaryTabContainerSm>
              </SummaryTabContainer>

              <SummaryListContainer>
                <HeadTextGrey>From last 7 days</HeadTextGrey>
                <TableItem tableType={"lastSevenDaysList"} />
              </SummaryListContainer>
            </SummaryContainer>
            <UserProfileContainerFlex>
              <ProfileUserDetails>
                <ProfileImgDiv>
                  <ProfileImg src={user.image} alt="user-img" />
                </ProfileImgDiv>
                <DetailDiv>
                  <DetailDivItem>
                    <DetailDivTextSm>NAME</DetailDivTextSm>
                    <DetailDivTextBg>{user.name}</DetailDivTextBg>
                  </DetailDivItem>
                  <DetailDivItem>
                    <DetailDivTextSm>EMAIL</DetailDivTextSm>
                    <DetailDivTextBg>{user.email}</DetailDivTextBg>
                  </DetailDivItem>

                  <DetailDivItem>
                    <DetailDivTextSm>CONTACT NO.</DetailDivTextSm>
                    <DetailDivTextBg>Add a Contact no.</DetailDivTextBg>
                  </DetailDivItem>

                  <DetailDivItem>
                    <DetailDivTextSm>ADDRESS</DetailDivTextSm>
                    <DetailDivTextBg>Add an address</DetailDivTextBg>
                  </DetailDivItem>

                  <Button size="large" variation="primary">
                    Edit your Profile
                  </Button>
                </DetailDiv>
              </ProfileUserDetails>
            </UserProfileContainerFlex>
          </UserProfileContainerUpper>
        )}
        {searchParams.get("userPanel") === "ongoingOrders" && (
          <UserProfileContainerLower>
            <HeadTextGrey>Ongoing orders</HeadTextGrey>
            <OngoingOrderContainer>
              <OngoingOrderDiv>
                <OngoingOrderHead type="delivery">
                  <Heading as="h3" color="light">
                    Delivery
                  </Heading>
                </OngoingOrderHead>
                <OngoingDelivery
                // deliveryData={!isLoading && deliveryData.data}
                // isLoading={isLoading}
                />
              </OngoingOrderDiv>

              <OngoingOrderDiv>
                <OngoingOrderHead type="reservation">
                  <Heading as="h3" color="light">
                    Reservation
                  </Heading>
                </OngoingOrderHead>
                <OngoingReservation />
                {/* <Venue /> */}
              </OngoingOrderDiv>
              <OngoingOrderDiv>
                <OngoingOrderHead type="venue">
                  <Heading as="h3" color="light">
                    Venue
                  </Heading>
                </OngoingOrderHead>
                <OngoingVenueBooking
                  type="venue"
                  // data={!isLoading && bookedVenue.bookedVenue}
                />

                {/* <NoOrderDiv>
                  <span>No items to show</span>
                </NoOrderDiv> */}
              </OngoingOrderDiv>
            </OngoingOrderContainer>
          </UserProfileContainerLower>
        )}
      </UserProfileContainer>
    </>
  );
}

export default DashboardUserProfile;
