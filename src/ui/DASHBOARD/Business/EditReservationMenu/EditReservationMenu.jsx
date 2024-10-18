/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "../../../Button";
import Spinner from "../../../Spinner";
import Modal from "../../../Modal";
import { useSearchParams } from "react-router-dom";
import StyledOptionsDiv from "../../../StyledOptionsTwo";
import { useEffect } from "react";
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

const ItemDiv = styled.div``;

const ItemHeadDiv = styled.div``;

function EditReservationMenu() {
  const [searchParams, setSearchParams] = useSearchParams();

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

      <ReservationItemsDiv></ReservationItemsDiv>
      {/* <AddNewBtnDiv>
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
      </AddNewBtnDiv> */}
    </Container>
  );
}

export default EditReservationMenu;
