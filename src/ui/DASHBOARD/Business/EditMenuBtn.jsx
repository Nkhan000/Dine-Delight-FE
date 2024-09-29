/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "../../Button";
import Modal from "../../Modal";
import CheckBeforeConfirm from "../../CART/CheckBeforeConfirm";
import AddFoodItemForm from "./AddFoodItemForm";

const BtnsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 1rem;
`;

function EditMenuBtn({ itemId, handleDeleteFoodItem }) {
  function handleDelete() {
    handleDeleteFoodItem(itemId);
  }
  return (
    <Modal>
      <BtnsDiv>
        <Modal.Open open="edit-item">
          <Button size="small" variation="primary">
            Edit
          </Button>
        </Modal.Open>
        <Modal.ModalWindow name="edit-item">
          <AddFoodItemForm itemId={itemId} />
        </Modal.ModalWindow>
        <Modal.Open open="delete-item">
          <Button size="small" variation="secondary">
            Delete
          </Button>
        </Modal.Open>
        <Modal.ModalWindow name="delete-item">
          <CheckBeforeConfirm
            text="Are you sure to delete this Item ?"
            handleClick={handleDelete}
          />
        </Modal.ModalWindow>
      </BtnsDiv>
    </Modal>
  );
}

export default EditMenuBtn;
