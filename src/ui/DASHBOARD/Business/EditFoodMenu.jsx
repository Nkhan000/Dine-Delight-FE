/* eslint-disable no-unused-vars */
import styled from "styled-components";
import StyledOptions from "../../StyledOptions";
import StyledTag from "../../StyledTag";
import Button from "../../Button";
import { useGetFoodMenu } from "../../../hooks/useGetFoodMenu";
import Spinner from "../../Spinner";
import Modal from "../../Modal";
import AddFoodItemForm from "./AddFoodItemForm";

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
  /* height: 100%; */
  /* justify-self: flex-end; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 1.4rem;

  /* justify-content: flex-start;
  justify-self: flex-start; */
`;

const FoodItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  width: fit-content;
  padding: 1.2rem 0.5rem;
  border-bottom: 2px solid var(--color-grey-800);
  border-radius: 1rem;

  &:hover {
    border-bottom: 3px solid var(--color-grey-400);
  }
`;

const FoodItemNum = styled.span`
  span {
    font-size: 4.5rem;
    font-weight: 600;
    color: var(--color-grey-800);
  }
`;

const FoodItemImgDiv = styled.div`
  height: 8rem;
  width: 8rem;
  border-radius: 1rem;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    background-size: cover;
  }
`;

const FoodItemTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FoodItemName = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

const FoodItemPriceSizeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const FoodItemTextSm = styled.span`
  font-weight: 600;
  color: var(--color-grey-200);
  font-size: 1.2rem;
`;
const FoodItemTextBg = styled.span`
  font-weight: 600;
  color: var(--color-grey-200);
  font-size: 2.5rem;
`;

const BtnsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 1rem;
`;

const AddNewBtnDiv = styled.div`
  margin-top: auto;

  display: flex;
  justify-content: flex-end;
`;

function EditFoodMenu() {
  const { foodItems, isLoading } = useGetFoodMenu();

  if (isLoading) {
    return <Spinner />;
  }

  console.log(foodItems);

  return (
    <Container>
      <HeadDiv>
        <HeadTextDiv>
          <span>Your Food Menu</span>
        </HeadTextDiv>
        <HeadOptionsDiv>
          <StyledOptions
            sortby="Type"
            options={["non-veg", "veg"]}
          ></StyledOptions>
          <StyledOptions
            sortby="Category"
            options={["momo", "noodles", "pizza", "burgers"]}
          ></StyledOptions>
        </HeadOptionsDiv>
      </HeadDiv>

      <FoodItemsDiv>
        {foodItems.map((item, ind) => (
          <FoodItem key={item._id}>
            <FoodItemNum>
              <span>0{ind + 1}</span>
            </FoodItemNum>
            <FoodItemImgDiv>
              <img src="./img/food-001.jpg" alt="food-item" />
            </FoodItemImgDiv>
            <FoodItemTextDiv>
              <FoodItemName>
                <FoodItemTextBg>{item.name}</FoodItemTextBg>
                <StyledTag type={item.type}>{item.type}</StyledTag>
              </FoodItemName>
              <FoodItemPriceSizeDiv>
                <FoodItemTextSm>
                  Prices :-{" "}
                  {Object.entries(item.prices).map(([size, price]) => (
                    <FoodItemTextSm key={size}>
                      {size} : ${price}
                      <FoodItemTextSm>, </FoodItemTextSm>
                    </FoodItemTextSm>
                  ))}
                </FoodItemTextSm>
              </FoodItemPriceSizeDiv>
            </FoodItemTextDiv>

            <BtnsDiv>
              <Button size="small" variation="primary">
                Edit
              </Button>
              <Button size="small" variation="secondary">
                Delete
              </Button>
            </BtnsDiv>
          </FoodItem>
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
