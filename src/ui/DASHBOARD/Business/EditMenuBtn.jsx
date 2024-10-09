/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "../../Button";
import Modal from "../../Modal";
import CheckBeforeConfirm from "../../CART/CheckBeforeConfirm";
import AddFoodItemForm from "./EditFoodMenu/AddFoodItemForm";
import { useDeleteFoodItem } from "../../../hooks/FoodMenu/useDeleteFoodItem";

const BtnsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 1rem;
`;

function EditMenuBtn({ type = "food-menu", itemId, itemCategory }) {
  const { removeFoodItem, removingFoodItem } = useDeleteFoodItem();

  function handleDeleteFoodItem(id) {
    const reqObj = {
      itemId: id,
      itemCategory,
    };
    console.log(reqObj);
    removeFoodItem(reqObj);
  }
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
        {type === "venue" && (
          <>
            <Modal.Open open="edit-item">
              <Button size="small" variation="primary">
                Edit Images
              </Button>
            </Modal.Open>
            <Modal.ModalWindow name="edit-item">
              <AddFoodItemForm itemId={itemId} />
            </Modal.ModalWindow>
          </>
        )}

        <Modal.Open open="delete-item">
          <Button size="small" variation="danger">
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
