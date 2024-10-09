/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "../../../Button";
import Spinner from "../../../Spinner";
import Modal from "../../../Modal";
import { useSearchParams } from "react-router-dom";
import StyledOptionsDiv from "../../../StyledOptionsTwo";
import { useEffect } from "react";
import { useGetAllVenues } from "../../../../hooks/VenuesMenu(BS)/useGetAllVenues";
import EditVenueItemCard from "./EditVenueItemCard";

const Container = styled.div`
  padding: 2rem 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

const HeadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const VenueItemsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 1.4rem;
  column-gap: 5rem;
`;

const VenueItemNum = styled.span`
  span {
    font-size: 3.6rem;
    font-weight: 600;
    color: var(--color-grey-800);
  }
`;

const AddNewBtnDiv = styled.div`
  margin-top: auto;

  display: flex;
  justify-content: flex-end;
`;

function EditVenuesMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useGetAllVenues();

  if (isLoading) {
    return <Spinner />;
  }
  const venues = data.venues.bookingItems;

  return (
    <Container>
      <HeadDiv>
        <HeadTextDiv>
          <span>Your Venues</span>
        </HeadTextDiv>
        <HeadOptionsDiv></HeadOptionsDiv>
      </HeadDiv>

      <VenueItemsDiv>
        {venues.length === 0 && (
          <VenueItemNum>Add Venues to update</VenueItemNum>
        )}
        {venues.map((item, ind) => (
          <EditVenueItemCard key={item._id} item={item} ind={ind} />
        ))}
      </VenueItemsDiv>
      <AddNewBtnDiv>
        {/* <Modal>
          <Modal.Open open="add-new-item">
            <Button size="large" variation="primary">
              Add a new Item
            </Button>
          </Modal.Open>
          <Modal.ModalWindow name="add-new-item">
            <AddVenueItemForm />
          </Modal.ModalWindow>
        </Modal> */}
      </AddNewBtnDiv>
    </Container>
  );
}

export default EditVenuesMenu;
