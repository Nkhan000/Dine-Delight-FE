/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "../../Button";
import Modal from "../../Modal";
import CheckBeforeConfirm from "../../CART/CheckBeforeConfirm";
import AddFoodItemForm from "./EditFoodMenu/AddFoodItemForm";
import { useDeleteFoodItem } from "../../../hooks/FoodMenu/useDeleteFoodItem";
import AddVenueItemForm from "./EditVenuesMenu/AddVenueItemForm";

const BtnsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 1rem;
`;

function EditMenuBtn({
  type = "foodMenu",
  itemId,
  handleDeleteAVenue,
  handleDeleteAFoodItem,
  isLoading,
}) {
  return (
    <Modal>
      <BtnsDiv>
        <Modal.Open open="edit-item">
          <Button size="small" variation="primary">
            Edit
          </Button>
        </Modal.Open>
        <Modal.ModalWindow name="edit-item">
          {type == "foodMenu" && <AddFoodItemForm itemId={itemId} />}
          {type == "venueMenu" && <AddVenueItemForm itemId={itemId} />}
        </Modal.ModalWindow>

        <Modal.Open open="delete-item">
          <Button size="small" variation="danger">
            Delete
          </Button>
        </Modal.Open>
        <Modal.ModalWindow name="delete-item">
          <CheckBeforeConfirm
            text="Are you sure to delete this Item ?"
            handleClick={
              type == "foodMenu" ? handleDeleteAFoodItem : handleDeleteAVenue
            }
            isLoading={isLoading}
          />
        </Modal.ModalWindow>
      </BtnsDiv>
    </Modal>
  );
}

export default EditMenuBtn;
