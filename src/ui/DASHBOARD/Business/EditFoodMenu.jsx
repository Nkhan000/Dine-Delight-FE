/* eslint-disable no-unused-vars */
import styled from "styled-components";
import StyledOptions from "../../StyledOptions";
import Button from "../../Button";
import { useGetFoodMenu } from "../../../hooks/useGetFoodMenu";
import Spinner from "../../Spinner";
import Modal from "../../Modal";
import AddFoodItemForm from "./AddFoodItemForm";
import { useSearchParams } from "react-router-dom";
import StyledOptionsDiv from "../../StyledOptionsTwo";
import { useEffect } from "react";
import EditFoodMenuItemCard from "./EditFoodMenuItemCard";

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

const FoodItemsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 1.4rem;
  column-gap: 5rem;
`;

const FoodItemNum = styled.span`
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

function EditFoodMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { foodMenu, isLoadingFoodMenu } = useGetFoodMenu();

  useEffect(() => {
    if (!searchParams.get("item-type")) {
      const URLParam = new URLSearchParams(searchParams);
      URLParam.set("item-type", "all");
      URLParam.set("item-category", "all");
      setSearchParams(URLParam);
    }
  }, [searchParams, setSearchParams]);

  if (isLoadingFoodMenu) {
    return <Spinner />;
  }

  const { foodItems, categories } = foodMenu;
  function handleParamChange(e, type = "type") {
    const changedVal = e.target.value;
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set(
      `${type == "type" ? "item-type" : "item-category"}`,
      changedVal
    );
    setSearchParams(urlParams);
  }

  return (
    <Container>
      <HeadDiv>
        <HeadTextDiv>
          <span>Your Food Menu</span>
        </HeadTextDiv>
        <HeadOptionsDiv>
          <StyledOptionsDiv>
            <label>Type</label>
            <select onChange={handleParamChange}>
              <option value="all">All</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non-veg</option>
            </select>
          </StyledOptionsDiv>
          <StyledOptionsDiv>
            <label>Category : </label>
            <select onChange={(e) => handleParamChange(e, "category")}>
              <option value="all">All</option>
              {categories.map((cat, idx) => (
                <option key={`0${idx}`} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </StyledOptionsDiv>
        </HeadOptionsDiv>
      </HeadDiv>

      <FoodItemsDiv>
        {foodItems.length === 0 && (
          <FoodItemNum>No food Items To Show</FoodItemNum>
        )}
        {foodItems
          .filter((item) => {
            const typeFilter =
              searchParams.get("item-type") == "all" ||
              item.type === searchParams.get("item-type");
            const categoryFilter =
              searchParams.get("item-category") == "all" ||
              item.category === searchParams.get("item-category");

            return typeFilter && categoryFilter;
          })
          .map((item, ind) => (
            <EditFoodMenuItemCard key={item._id} item={item} ind={ind} />
          ))}
      </FoodItemsDiv>
      <AddNewBtnDiv>
        <Modal>
          <Modal.Open open="add-new-item">
            <Button size="large" variation="primary">
              Add a new Item
            </Button>
          </Modal.Open>
          <Modal.ModalWindow name="add-new-item">
            <AddFoodItemForm />
          </Modal.ModalWindow>
        </Modal>
      </AddNewBtnDiv>
    </Container>
  );
}

export default EditFoodMenu;
