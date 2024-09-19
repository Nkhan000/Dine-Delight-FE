/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "./Heading";
import StyledRadioBtn from "./StyledRadioBtn";
import Button from "./Button";
import { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import ReservationWindowModal from "./ReservationWindowModal";
import { useGetUser } from "../features/authentication/useGetUser";
import { BannerContext } from "../utils/contexts";
import BannerNotification from "./BannerNotification";
import { useForm } from "react-hook-form";
import StyledOptionsDiv from "./StyledOptionsTwo";
import {
  addNewReservation,
  removeReservation,
} from "../features/cart/reservationSlice";
import { useDispatch, useSelector } from "react-redux";
import CheckBeforeConfirm from "./CART/CheckBeforeConfirm";
import { removeAllDeliveries } from "../features/cart/cartSlice";
import { removeVenueBooking } from "../features/cart/venueBookingSlice";
import { useCusineSingle } from "../features/cuisines/useCuisines";

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
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--color-grey-700);

  & input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--color-grey-50);
    font-size: 1.4rem;

    &:disabled {
      background-color: none;
      color: var(--color-grey-400);
    }
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
    text-transform: capitalize;
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
    text-transform: capitalize;
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
  transition-property: height, display;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const RemarksInput = styled.textarea`
  transition-property: height, width, display, opacity;
  transition-duration: 0.2s;
  transition-delay: ease-in;

  /* transition: opacity 5s ease-in-out; */
  font-family: inherit;
  color: var(--color-grey-50);
  background-color: transparent;
  border-radius: 1rem;
  border: 2px solid var(--color-orange-50);
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  height: 12rem;
  width: 100%;
  opacity: 1;
  display: block;
`;

const ButtonDivs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;

  justify-content: flex-end;
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

function ReservationMenu({ cuisineId }) {
  const partySizeOption = [2, 3, 4, 5, 6];

  const dispatch = useDispatch();
  const { cuisineData } = useCusineSingle(cuisineId);

  const {
    name: cuisineName,
    logoImage: cuisineImage,
    availableTableReservationTime: availableTime,
    address: cuisineAddress,
    tableTypeOptions,
    reservationPrice,
  } = cuisineData;
  // console.log(cuisineName, cuisineImage);
  const { setBannerText, setBannerType, open } = useContext(BannerContext);
  const { handleSubmit, setValue, reset, register } = useForm();
  const { user, isLoading, error } = useGetUser();

  const [partySize, setPartySize] = useState(partySizeOption[0]);
  const [availableTimeSlot, setAvailableTimeSlot] = useState(availableTime[0]);
  const [reservationDate, setReservationDate] = useState();
  const [tableType, setTableType] = useState(tableTypeOptions[0]);
  const [addPriority, setAddPriority] = useState(false);
  const [allFieldsValid, setAllFeildsValid] = useState(false);
  const [total, setTotal] = useState(reservationPrice);
  const [reservationObj, setReservationObj] = useState();

  function formateDate(time, date) {
    const [hours, minutes] = time.split(":");
    const updatedDate = new Date(date);
    updatedDate.setHours(hours);
    updatedDate.setMinutes(minutes);
    console.log(updatedDate);
    return updatedDate;
  }

  function handleAddPriority() {
    setAddPriority((s) => !s);
  }

  useEffect(() => {
    if (addPriority) setTotal(reservationPrice + reservationPrice * 0.08);
  }, [reservationPrice, addPriority]);

  function handlePartySize(e) {
    setPartySize(e.target.value);
  }

  function handleAvailableTime(e) {
    setAvailableTimeSlot(e.target.value);
  }

  function handleTableType(e) {
    setTableType(e.target.value);
  }

  function handleDateChange(e) {
    const reserveDate = new Date(e.target.value);
    const updatedDate = formateDate(availableTimeSlot, reserveDate);
    setReservationDate(updatedDate);
  }
  useEffect(() => {
    // Updates reservationDate when availableTimeSlot changes
    if (reservationDate) {
      const updatedDate = formateDate(availableTimeSlot, reservationDate);
      setReservationDate(updatedDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableTimeSlot]);

  function onReset() {
    reset();
    setAllFeildsValid(false);
  }

  function onSubmit(data) {
    if (!user) {
      setBannerText("Please login to create reservation");
      setBannerType("error-warning");
      open();
      return;
    }
    const updatedDate = {
      cuisineId,
      cuisineName,
      cuisineImage,
      cuisineAddress,
      ...data,
    };
    setAllFeildsValid(true);
    setReservationObj(updatedDate);
  }

  function handleEmptyTheCart() {
    dispatch(removeAllDeliveries());
    dispatch(removeReservation());
    dispatch(removeVenueBooking());
  }

  useEffect(() => {
    setValue("aprPartySize", partySize);
    setValue("reservationDate", reservationDate);
    setValue("tableType", tableType);
    setValue("priority", addPriority);
    setValue("total", total);
  }, [total, partySize, reservationDate, tableType, addPriority, setValue]);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <HeaderDiv>
        <FilterDiv>
          <OptionDiv>
            <OptionLable htmlFor="aprPartySize">Party Size*</OptionLable>
            <StyledOptionsDiv>
              <select
                name="aprPartySize"
                disabled={allFieldsValid}
                required
                onChange={handlePartySize}
              >
                {partySizeOption.map((item, i) => (
                  <option value={item} key={`${item}-${i}`}>
                    {item} Person
                  </option>
                ))}
              </select>
            </StyledOptionsDiv>
          </OptionDiv>
          <OptionDiv>
            <OptionLable htmlFor="availableTime">Available Time*</OptionLable>
            <StyledOptionsDiv>
              <select
                name="availableTime"
                required
                onChange={handleAvailableTime}
                disabled={allFieldsValid}
              >
                {availableTime.map((item, i) => (
                  <option value={item} key={`${item}-${i}`}>
                    {item} Hours
                  </option>
                ))}
              </select>
            </StyledOptionsDiv>
          </OptionDiv>
          <OptionDiv>
            <OptionLable htmlFor="tableType">Table Type*</OptionLable>
            <StyledOptionsDiv>
              <select
                name="tableType"
                disabled={allFieldsValid}
                required
                onChange={handleTableType}
              >
                {tableTypeOptions.map((item, i) => (
                  <option value={item} key={`${item}=${i}`}>
                    {item}
                  </option>
                ))}
              </select>
            </StyledOptionsDiv>
          </OptionDiv>
          <OptionDiv>
            <OptionLable htmlFor="reservationDate">Date*</OptionLable>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]} // todays date
              name="reservationDate"
              onChange={handleDateChange}
              disabled={allFieldsValid}
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
            disabled={allFieldsValid}
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
      <RemakrsInputDivContianer>
        <Heading as="h3" color="light">
          Remarks/Special Note
        </Heading>
        <label htmlFor="remarks" />
        <RemarksInput
          name="remarks"
          placeholder="[OPTIONAL] Any specail request ?"
          {...register("remarks")}
        />
      </RemakrsInputDivContianer>
      {allFieldsValid && (
        <>
          <QuantityDetailsDiv>
            <span>{tableType}</span>
            <span>${reservationPrice.toFixed(2)}</span>
          </QuantityDetailsDiv>
          {addPriority && (
            <QuantityDetailsDiv>
              <span>priority(+8%)</span>
              <span>${(partySize * reservationPrice * 0.08).toFixed(2)}</span>
            </QuantityDetailsDiv>
          )}
          <QuantityHead>
            <span>Total</span>
            <span>${total?.toFixed(2)}</span>
          </QuantityHead>
        </>
      )}

      <ButtonDivs>
        {!allFieldsValid ? (
          <>
            <Button size="medium" variation="primary" type="submit">
              Continue your reservation
            </Button>
            <BannerNotification.Banner />
          </>
        ) : (
          <Modal>
            <Modal.Open open="reservation-window">
              <Button
                onClick={handleEmptyTheCart}
                size="medium"
                variation="primary"
                type="submit"
              >
                Confirm your reservation
              </Button>
            </Modal.Open>
            <Modal.ModalWindow name="reservation-window">
              <ReservationWindowModal reservationObj={reservationObj} />
            </Modal.ModalWindow>
          </Modal>
        )}

        <Button
          size="medium"
          variation="secondary"
          onClick={onReset}
          type="reset"
        >
          Reset
        </Button>
      </ButtonDivs>
    </Container>
  );
}

export default ReservationMenu;

// ) : isCartEmpty ? (
// <Modal>
//   <Modal.Open open="reservation-window">
//     <Button size="medium" variation="primary" type="submit">
//       Confirm your reservation
//     </Button>
//   </Modal.Open>
//   <Modal.ModalWindow name="reservation-window">
//     <ReservationWindowModal reservationObj={reservationObj} />
//   </Modal.ModalWindow>
// </Modal>
// ) : (
// <Modal>
//   <Modal.Open open="venue-confirmation-window">
//     <Button size="medium" variation="primary">
//       Confirm Booking
//     </Button>
//   </Modal.Open>
//   <Modal.ModalWindow name="venue-confirmation-window">
//     <CheckBeforeConfirm dataObj={reservationObj} type="reservation" />
//   </Modal.ModalWindow>
// </Modal>
// )
