/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "../../../Button";
import Spinner from "../../../Spinner";
import Modal from "../../../Modal";
import { useSearchParams } from "react-router-dom";
import StyledOptionsDiv from "../../../StyledOptionsTwo";
import { useEffect } from "react";
import { useCusineBs } from "../../../../features/dashboard/useCuisineBs";
import ToggleBtn from "../../../ToggleBtn";
import AddNewItemForm from "./AddNewItemForm";
import { useAddOrRemovePartySize } from "../../../../hooks/ReservationMenu(BS)/useAddOrRemovePartySize";
import { useAddOrRemoveTableType } from "../../../../hooks/ReservationMenu(BS)/useAddOrRemoveTableType";
import { useAddOrRemoveTimeSlot } from "../../../../hooks/ReservationMenu(BS)/useAddOrRemoveTimeSlot";
// import { useGetAllReservations } from "../../../../hooks/ReservationsMenu(BS)/useGetAllReservations";
// import EditReservationItemCard from "./EditReservationItemCard";
// import AddReservationItemForm from "./AddReservationItemForm";

const Container = styled.div`
  padding: 2rem 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

const HeadDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HeadTextDiv = styled.div`
  span {
    font-weight: 600;
    font-size: 3.5rem;
    color: var(--color-grey-300);
  }
`;

const HeadOptionsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ReservationItemTextBg = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-grey-600);
  width: 100%;
`;
const ReservationItemsDiv = styled.div``;

const ItemDiv = styled.div`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ItemHeadDiv = styled.div`
  font-size: 1.8rem;
  color: var(--color-grey-200);
  font-weight: 600;
`;

const ItemTextDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const ItemTextBg = styled.div`
  font-size: 1.8rem;
  color: var(--color-grey-200);
  font-weight: 600;
`;

const ItemTextSm = styled.span`
  font-size: 1.5rem;
  color: var(--color-grey-500);
  font-weight: 400;
  font-style: italic;
`;
const ItemOptionsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ItemOption = styled.div`
  font-size: 1.6rem;
  border: 2px solid var(--color-grey-500);
  color: var(--color-grey-200);
  border-radius: 1rem;
  padding: 0.8rem;
  transition: all 0.3s ease-in;
  text-transform: capitalize;

  position: relative;

  &:hover {
    transform: translateY(-0.5rem);
    border: 2px solid var(--color-orange-100);
    cursor: pointer;

    & > button {
      visibility: visible;
    }
  }
`;

const BtnRemoveDiv = styled.button`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  color: var(color-grey-100);
  font-weight: 600;
  background-color: var(--color-red-700);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 1.6rem;
  }

  visibility: hidden;

  position: absolute;
  top: -20%;
  right: -5%;
`;

const AddMoreDiv = styled.div``;

function ButtonModel({ type, children }) {
  return (
    <Modal>
      <Modal.Open open={type}>
        <Button size="small" variation="primary">
          +
        </Button>
      </Modal.Open>
      <Modal.ModalWindow name={type}>{children}</Modal.ModalWindow>
    </Modal>
  );
}

function EditReservationMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { cuisineData, isLoadingCuisineData } = useCusineBs();
  const { addPartySize, isAddingPartySize } = useAddOrRemovePartySize();
  const { addOrRemoveTableType, isAddingOrRemovingTableType } =
    useAddOrRemoveTableType();
  const { addOrRemoveTimeSlot, isAddingOrRremovingTimeSlot } =
    useAddOrRemoveTimeSlot();

  // PARTY SIZE
  function handleAddPartySize(data) {
    addPartySize(data);
  }
  function handleRemovePartySize(val) {
    const reqObj = { partySize: val, typeOfOp: "remove" };
    addPartySize(reqObj);
  }
  //

  // TABLE TYPE
  function handleAddTableType(data) {
    addOrRemoveTableType(data);
  }
  function handleRemoveTableType(val) {
    const reqObj = { tableType: val, typeOfOp: "remove" };
    addOrRemoveTableType(reqObj);
  }
  //

  // TIME SLOT
  function handleAddTimeSlots(data) {
    console.log(data);
    addOrRemoveTimeSlot(data);
  }
  function handleRemoveTimeSlots(val) {
    console.log(val);
    const reqObj = { timeSlot: val, typeOfOp: "remove" };
    addOrRemoveTimeSlot(reqObj);
  }
  //
  if (isLoadingCuisineData) {
    return <Spinner />;
  }
  const {
    reservationPartySizeOptions,
    availableTableReservationTimeSlots,
    tableTypeOptions,
  } = cuisineData;

  return (
    <Container>
      <HeadDiv>
        <HeadTextDiv>
          <span>Table Reservations</span>
        </HeadTextDiv>
        <ReservationItemTextBg>
          Include the following information and the types of tables available
          for reservation.
        </ReservationItemTextBg>
        <HeadOptionsDiv></HeadOptionsDiv>
      </HeadDiv>

      <ReservationItemsDiv>
        <ItemDiv>
          <ItemHeadDiv>Receive Reservations :</ItemHeadDiv>
          <ItemTextDiv>
            <ToggleBtn itemId="isReserving" />
            <ItemTextSm>
              Stop receiving reservations until turned back on
            </ItemTextSm>
          </ItemTextDiv>
        </ItemDiv>
        <ItemDiv>
          <ItemHeadDiv>Party Size :</ItemHeadDiv>

          <ItemOptionsDiv>
            {reservationPartySizeOptions?.length === 0 ? (
              <ItemOption>Add Party Sizes</ItemOption>
            ) : (
              reservationPartySizeOptions?.map((item, idx) => (
                <ItemOption value={item} key={idx}>
                  {item} people
                  <BtnRemoveDiv onClick={() => handleRemovePartySize(item)}>
                    <span>-</span>
                  </BtnRemoveDiv>
                </ItemOption>
              ))
            )}

            <ButtonModel type="partySize">
              <AddNewItemForm
                submitFunction={handleAddPartySize}
                isLoading={isAddingPartySize}
                type="partySize"
              />
            </ButtonModel>
          </ItemOptionsDiv>
          <AddMoreDiv></AddMoreDiv>
        </ItemDiv>
        <ItemDiv>
          <ItemHeadDiv>Available Time Slots :</ItemHeadDiv>
          <ItemOptionsDiv>
            {availableTableReservationTimeSlots.length === 0 ? (
              <ItemOption>Add Time Slots</ItemOption>
            ) : (
              availableTableReservationTimeSlots.map((item, idx) => (
                <ItemOption value={item} key={idx}>
                  {item} hours
                  <BtnRemoveDiv onClick={() => handleRemoveTimeSlots(item)}>
                    <span>-</span>
                  </BtnRemoveDiv>
                </ItemOption>
              ))
            )}
            <ButtonModel type="timeSlot">
              <AddNewItemForm
                submitFunction={handleAddTimeSlots}
                isLoading={isAddingOrRremovingTimeSlot}
                type="timeSlot"
              />
            </ButtonModel>
          </ItemOptionsDiv>
          <AddMoreDiv></AddMoreDiv>
        </ItemDiv>
        <ItemDiv>
          <ItemHeadDiv>Types of Table available</ItemHeadDiv>
          <ItemOptionsDiv>
            {tableTypeOptions.length === 0 ? (
              <ItemOption>Add Options for Available Types</ItemOption>
            ) : (
              tableTypeOptions.map((item, idx) => (
                <ItemOption value={item} key={idx}>
                  {item}
                  <BtnRemoveDiv onClick={() => handleRemoveTableType(item)}>
                    <span>-</span>
                  </BtnRemoveDiv>
                </ItemOption>
              ))
            )}
            <ButtonModel type="tableType">
              <AddNewItemForm
                submitFunction={handleAddTableType}
                isLoading={isAddingOrRemovingTableType}
                type="tableType"
              />
            </ButtonModel>
          </ItemOptionsDiv>
          <AddMoreDiv></AddMoreDiv>
        </ItemDiv>
      </ReservationItemsDiv>
    </Container>
  );
}

export default EditReservationMenu;

{
  /* <AddNewBtnDiv>
  <Modal>
    <Modal.Open open="add-new-item">
      <Button size="large" variation="primary">
        Add a new Item
      </Button>
    </Modal.Open>
    <Modal.ModalWindow name="add-new-item">
      <AddReservationItemForm />
    </Modal.ModalWindow>
  </Modal>
</AddNewBtnDiv> */
}
