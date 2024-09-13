/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "./Heading";
import StyledOptions from "./StyledOptions";
import GradientHighlight from "./GradientHighlight";
import StyledRadioBtn from "./StyledRadioBtn";
import Button from "./Button";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import ReservationWindowModal from "./ReservationWindowModal";

const Container = styled.div`
  /* padding: 2.4rem 4rem;
  border: 2px solid var(--color-grey-900); */
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 5rem;
  /* justify-content: center; */
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
  /* width: 100%; */
  /* margin: 0 5rem; */
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

  const [partySize, setPartySize] = useState(partySizeOption[0]);
  const [availableTimeSlot, setAvailableTimeSlot] = useState(availableTime[0]);
  const [reservationDate, setReservationDate] = useState();
  const [tableType, setTableType] = useState(tableTypeOption[0]);
  const [addPriority, setAddPriority] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);

  let partySizeNum = parseInt(partySize.split(" ")[0], 10);
  const [total, setTotal] = useState(partySizeNum * reservationPrice);

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
    const reservationObj = {
      partySize: partySizeNum,
      priority: addPriority,
      // time: availableTimeSlot,
      reservationDate,
      tableType,
    };
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
            <OptionLable>Party Size</OptionLable>
            <StyledOptions
              sortby=""
              selectedOption={partySize}
              setSelectedOption={setPartySize}
              options={partySizeOption}
            ></StyledOptions>
          </OptionDiv>
          <OptionDiv>
            <OptionLable>Prefered Time</OptionLable>
            <StyledOptions
              sortby=""
              selectedOption={availableTimeSlot}
              setSelectedOption={setAvailableTimeSlot}
              options={availableTime}
            ></StyledOptions>
          </OptionDiv>
          <OptionDiv>
            <OptionLable>Table type</OptionLable>
            <StyledOptions
              sortby=""
              selectedOption={tableType}
              setSelectedOption={setTableType}
              options={tableTypeOption}
            ></StyledOptions>
          </OptionDiv>
          <OptionDiv>
            <OptionLable>Date</OptionLable>
            <input onChange={handleDateChange} type="date" />
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
        <Modal>
          <Modal.Open open="reservation-window">
            <Button
              onClick={handleContinueReservation}
              size="large"
              variation="primary"
            >
              Continue your reservation
            </Button>
          </Modal.Open>
          <Modal.ModalWindow name="reservation-window">
            <ReservationWindowModal></ReservationWindowModal>
          </Modal.ModalWindow>
        </Modal>
      </ButtonDivs>

      {/* {reservationDate && availableTimeSlot && partySize && (
        <>
          <RemakrsInputDivContianer>
            <RemarksInput placeholder="Enter a Remarks or Instruction for your reservation" />
          </RemakrsInputDivContianer>

          <QuantityDiv>
            <QuantityHead>
              <span>Quantity</span>
              <span>Price</span>
            </QuantityHead>
            <QuantityDetailsDiv>
              <span>{partySizeNum} x person</span>
              <span>
                {partySizeNum} X ${reservationPrice} {` = $${total}`}
              </span>
            </QuantityDetailsDiv>
            <QuantityDetailsDiv>
              <span>V.A.T (+13%)</span>
              <span>${(total * 0.13).toFixed(2)}</span>
            </QuantityDetailsDiv>
            {addPriority === true && (
              <QuantityDetailsDiv>
                <span>Priority (+8%)</span>
                <span>
                  ${(partySizeNum * reservationPrice * 0.08).toFixed(2)}
                </span>
              </QuantityDetailsDiv>
            )}
            <QuantityHead>
              <span>Grand Total </span>
              <span>{grandTotal}</span>
            </QuantityHead>
          </QuantityDiv>

          <ImportantInfoDiv>
            <span>Important considerations :</span>
            <li>
              You will start getting reminder on your phone and application
              before 15 mins of arrival time.
            </li>
            <li>
              Your reservation held for extra 15 mins after the arrival time.
            </li>
            <li>
              If canceled 1 hour before the arrival time you will get refunded
              65% of your money.
            </li>
          </ImportantInfoDiv>

          <ButtonDivs>
            <Button
              onClick={handleContinueReservation}
              size="large"
              variation="primary"
            >
              Continue your reservation
            </Button>
          </ButtonDivs>
        </>
      )} */}
    </Container>
  );
}

export default ReservationMenu;
