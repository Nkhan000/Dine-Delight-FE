/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "./Heading";
import StyledOptions from "./StyledOptions";
import GradientHighlight from "./GradientHighlight";
import StyledRadioBtn from "./StyledRadioBtn";
import Button from "./Button";
import { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import ReservationWindowModal from "./ReservationWindowModal";
import { useSendVerificationCodeForReservation } from "../features/cuisines/useReservation";
import { useGetUser } from "../features/authentication/useGetUser";
import { BannerContext } from "../utils/contexts";
import BannerNotification from "./BannerNotification";
import { useForm } from "react-hook-form";
import StyledOptionsDiv from "./StyledOptionsTwo";

const Container = styled.form`
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 5rem;
`;

// const OptionDivs = styled.div``;

const OptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--color-grey-700);

  /* & select {
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--color-grey-50);
    font-size: 1.6rem;
    width: 100%;
    & option {
      background-color: var(--color-grey-50);
      outline: none;
       color: var(--color-grey-700);
    } 
  }
  */
  & input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--color-grey-50);
  }
`;

const OptionLable = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--color-grey-50);
`;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const FilterDiv = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

const QuantityDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const QuantityHead = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 0 5rem; */
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-grey-500);

  & span {
    font-weight: 600;
    font-size: 2rem;
    color: var(--color-grey-50);
  }
`;
const QuantityDetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 0 6rem; */
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-grey-700);

  & span {
    /* font-weight: 600; */
    font-size: 1.6rem;
    color: var(--color-grey-50);
  }
`;

const InformationI = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  height: 2.1rem;
  width: 2.1rem;
  border-radius: 5rem;
  background-color: var(--color-grey-900);
  font-size: 1.4rem;
  font-weight: 600;
  /* font-style: italic; */
  font-family: "Indie Flower", cursive;
  position: relative;
  cursor: pointer;

  &:hover div {
    cursor: pointer;
    display: block;
  }
`;

const HoverInformationBtn = styled.div`
  display: flex;
  background-color: var(--color-grey-900);
  position: absolute;
  font-weight: 500;
  color: var(--color-grey-50);
  left: 130%;
  padding: 1.2rem;
  width: 40rem;
  border-radius: 1rem;
  display: none;
`;

const RadioBtnsDiv = styled.div``;
const RadioBtnDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;

const RemakrsInputDivContianer = styled.div`
  height: auto;
  width: 100%;
`;

const RemarksInput = styled.textarea`
  font-family: inherit;
  color: var(--color-grey-50);
  background-color: transparent;
  border-radius: 1rem;
  border: 2px solid var(--color-orange-50);
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  height: 10rem;
  width: 100%;
`;

const ButtonDivs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;

const ImportantInfoDiv = styled.ol`
  display: flex;
  flex-direction: column;
  color: var(--color-grey-50);
  & span {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  & li {
    font-size: 1.4rem;
    list-style: lower-roman;
    margin: 0.6rem 2rem;
    word-spacing: 0.1rem;
    /* margin-bottom: 0.6rem; */
  }
`;

function ReservationMenu() {
  const partySizeOption = ["2 person", "3 person", "4 person", "5 person"];
  const reservationPrice = 49;
  const availableTime = [
    "10:30 hours",
    "11:00 hours",
    "12:00 hours",
    "13:00 hours",
    "17:00 hours",
    "18:00 hours",
    "20:00 hours",
  ];

  const tableTypeOption = [
    "private/cabin",
    "centered Ground floor",
    "centered top floor",
    "cornerd Ground floor",
    "cornered Ground floor",
  ];

  const { handleSubmit, setValue, register } = useForm();
  const [partySize, setPartySize] = useState(partySizeOption[0]);
  const [availableTimeSlot, setAvailableTimeSlot] = useState(availableTime[0]);
  const [reservationDate, setReservationDate] = useState();
  const [tableType, setTableType] = useState(tableTypeOption[0]);
  const [addPriority, setAddPriority] = useState(false);
  const { user, isLoading, error } = useGetUser();

  const { setBannerText, setBannerType, open } = useContext(BannerContext);

  let partySizeNum = parseInt(partySize.split(" ")[0], 10);
  const [total, setTotal] = useState(partySizeNum * reservationPrice);

  const { sendVerificationCode, isSendingVerificationCode } =
    useSendVerificationCodeForReservation();

  function formateDate(time, date) {
    const [hours, minutes] = time.split(":");
    const updatedDate = new Date(date);
    updatedDate.setHours(hours);
    updatedDate.setMinutes(minutes);
    return updatedDate;
  }

  function handleAddPriority() {
    setAddPriority((s) => !s);
  }

  function handleContinueReservation() {
    if (!user) {
      setBannerText("Please login to create reservation");
      setBannerType("error-warning");
      open();
      return;
    }
    const reservationObj = {
      partySize: partySizeNum,
      priority: addPriority,
      reservationDate,
      tableType,
    };
    sendVerificationCode();
    console.log(reservationObj);
  }

  function handleDateChange(e) {
    console.log(e.target.value);
    const reserveDate = new Date(e.target.value);
    const time = availableTimeSlot.split(" ").shift();
    const updatedDate = formateDate(time, reserveDate);
    console.log(updatedDate);
    setReservationDate(updatedDate);
  }
  useEffect(() => {
    // Updates reservationDate when availableTimeSlot changes
    if (reservationDate) {
      const time = availableTimeSlot.split(" ").shift();
      const updatedDate = formateDate(time, reservationDate);
      setReservationDate(updatedDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableTimeSlot]);

  useEffect(() => {
    const time = availableTimeSlot.split(" ").shift();
  }, [availableTimeSlot]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    partySizeNum = parseInt(partySize.split(" ")[0], 10);
  }, [partySize]);

  return (
    <Container>
      <HeaderDiv>
        <FilterDiv>
          <OptionDiv>
            <OptionLable htmlFor="aprPartySize">Party Size</OptionLable>
            <StyledOptionsDiv>
              <select
                name="aprPartySize"
                required
                onChange={(e) => {
                  setPartySize(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option>2 person</option>
                <option>3 person</option>
                <option>5 person</option>
              </select>
            </StyledOptionsDiv>
          </OptionDiv>
          <OptionDiv>
            <OptionLable htmlFor="availableTime">Available Time</OptionLable>
            <StyledOptionsDiv>
              <select
                name="availableTime"
                required
                onChange={(e) => {
                  setAvailableTimeSlot(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {availableTime.map((item, i) => (
                  <option key={`${item}=${i}`}>{item}</option>
                ))}
              </select>
            </StyledOptionsDiv>
          </OptionDiv>
          <OptionDiv>
            <OptionLable htmlFor="tableType">Table Type</OptionLable>
            <StyledOptionsDiv>
              <select
                name="tableType"
                required
                onChange={(e) => {
                  setTableType(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {tableTypeOption.map((item, i) => (
                  <option key={`${item}=${i}`}>{item}</option>
                ))}
              </select>
            </StyledOptionsDiv>
          </OptionDiv>
          <OptionDiv>
            <OptionLable htmlFor="reservationDate">Date</OptionLable>
            <input
              type="date"
              name="reservationDate"
              onChange={handleDateChange}
              required
            />
          </OptionDiv>
        </FilterDiv>
      </HeaderDiv>

      <RadioBtnsDiv>
        <RadioBtnDiv>
          <StyledRadioBtn
            onClickFn={handleAddPriority}
            inpType="checkbox"
            labelId={"welcome-priority"}
          >
            Prioritze your reservation
          </StyledRadioBtn>
          <InformationI>
            <span>i</span>
            <HoverInformationBtn>
              Adds extra time (30mins) to your reservation and charges
              accordingly. You can always add more waiting time to your
              reservation before or after checking out 😊
            </HoverInformationBtn>
          </InformationI>
        </RadioBtnDiv>
      </RadioBtnsDiv>
      <ButtonDivs>
        {!user ? (
          <>
            <Button
              onClick={handleContinueReservation}
              size="large"
              variation="primary"
            >
              Continue your reservation
            </Button>
            <BannerNotification.Banner />
          </>
        ) : (
          <Modal>
            <Modal.Open open="reservation-window">
              <Button size="large" variation="primary" type="submit">
                Continue your reservation
              </Button>
            </Modal.Open>
            <Modal.ModalWindow name="reservation-window">
              <ReservationWindowModal />
            </Modal.ModalWindow>
          </Modal>
        )}
      </ButtonDivs>
    </Container>
  );
}

export default ReservationMenu;
