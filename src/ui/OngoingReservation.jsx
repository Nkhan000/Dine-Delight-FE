/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "./Heading";
import GradientHighlight from "./GradientHighlight";
import StyledTag from "./StyledTag";
import { useGetAllReservationsOfUser } from "../features/cuisines/useReservation";
import Spinner from "./Spinner";

const HeadContainer = styled.div`
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeadTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OngoingOrderCusineDiv = styled.div`
  padding-bottom: 0;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
const OngoingOrderCusineLogoDiv = styled.div`
  height: 8rem;
  width: 8rem;
  overflow: hidden;
  border-radius: 5rem;
`;

//
const ReservationDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 2rem;
`;

const ReservationDetailTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ReservationDetails = styled.div`
  padding: 1rem 2rem;
`;
// const DetailTextContainer = styled.div``;
const DetailTextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailText = styled.span`
  padding: 0.4rem 1rem;
  font-size: 1.4rem;
  color: var(--color-grey-200);
`;
const StyleGradientdSpan = styled.span`
  font-size: 1.8rem;
  font-family: "Indie Flower", cursive;
  color: var(--color-grey-200);
`;

const ReservationNoteDiv = styled.div`
  padding: 0 2rem;
  text-align: center;
  & span {
    font-size: 1.3rem;
    color: var(--color-grey-500);
    font-style: italic;
  }
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function OngoingReservation() {
  const { reservationData, isLoading } = useGetAllReservationsOfUser();

  if (isLoading) {
    return <Spinner />;
  }
  {
    return reservationData.map((item) => (
      <>
        <HeadContainer>
          <StatusContainer>
            <StyledTag type={item.status}>{item.status}</StyledTag>
          </StatusContainer>
          <OngoingOrderCusineDiv>
            <OngoingOrderCusineLogoDiv>
              <LogoImg src="./img/hotel-001.jpg" />
            </OngoingOrderCusineLogoDiv>
            <HeadTextContainer>
              <Heading as="h2" color="light">
                The BEAR Bar
              </Heading>
              <Heading as="h5" color="light">
                Kathmandu, nepal
              </Heading>
            </HeadTextContainer>
          </OngoingOrderCusineDiv>
        </HeadContainer>

        <ReservationDetailDiv>
          <ReservationDetailTextDiv>
            <GradientHighlight>
              <StyleGradientdSpan>
                You have a table reservation on
              </StyleGradientdSpan>
            </GradientHighlight>
            <Heading as="h4" color="light">
              {`${new Date(item.reservationDate).toDateString()} (${new Date(
                item.reservationDate
              ).getHours()}:${new Date(item.reservationDate).getMinutes()} ${
                new Date(item.reservationDate).getHours() < 12 ? "AM" : "PM"
              })`}
            </Heading>
          </ReservationDetailTextDiv>

          <ReservationDetails>
            <GradientHighlight>
              <StyleGradientdSpan>Booking Details :</StyleGradientdSpan>
            </GradientHighlight>

            <DetailTextDiv>
              <DetailText>ID : {item._id}</DetailText>
              <DetailText>Booked For : Nazir Khan</DetailText>
              <DetailText>Table Type : {item.tableType} </DetailText>
              <DetailText>Paid : {item.isPaid} </DetailText>
              <DetailText>O.T.P : {item.otpCode} </DetailText>
              <DetailText>
                Party size: {item.aprPartySize} person (expected)
              </DetailText>
            </DetailTextDiv>
          </ReservationDetails>
        </ReservationDetailDiv>
        <ReservationNoteDiv>
          <span>
            Customer are requested to arrive atleast 10 mins before the reserved
            time
          </span>
        </ReservationNoteDiv>
      </>
    ));
  }
}

export default OngoingReservation;
