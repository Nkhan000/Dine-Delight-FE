/* eslint-disable no-unused-vars */
import styled from "styled-components";
import StyledOptions from "../../StyledOptions";
import StyledTag from "../../StyledTag";
import Button from "../../Button";
import { useGetFoodMenu } from "../../../hooks/useGetFoodMenu";
import Spinner from "../../Spinner";
import Modal from "../../Modal";
import AddFoodItemForm from "./AddFoodItemForm";
import { useDeleteFoodItem } from "../../../hooks/FoodMenu/useDeleteFoodItem";
import EditMenuBtn from "./EditMenuBtn";
import { useSearchParams } from "react-router-dom";

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

const FoodItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1.2rem 0.5rem;
  border-bottom: 2px solid var(--color-grey-800);
  border-radius: 1rem;

  &:hover {
    border-bottom: 3px solid var(--color-grey-400);
  }
`;

const ImageAndNameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PriceAndBtnDiv = styled.div`
  display: flex;
  align-items: center;
`;

const FoodItemNum = styled.span`
  span {
    font-size: 3.6rem;
    font-weight: 600;
    color: var(--color-grey-800);
  }
`;

const FoodItemImgDiv = styled.div`
  height: 7rem;
  width: 7rem;
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
const FoodItemTextDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 80%;
`;

const FoodItemName = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const FoodItemPriceSizeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const FoodItemTextSm = styled.span`
  font-weight: 600;
  color: var(--color-grey-200);
  font-size: 1.15rem;
  text-transform: capitalize;
`;
const FoodItemTextBg = styled.span`
  font-weight: 600;
  color: var(--color-grey-200);
  font-size: 2rem;
`;

const AddNewBtnDiv = styled.div`
  margin-top: auto;

  display: flex;
  justify-content: flex-end;
`;

function EditFoodMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { foodItems, isLoading } = useGetFoodMenu();
  const { removeFoodItem, removingFoodItem } = useDeleteFoodItem();

  if (isLoading) {
    return <Spinner />;
  }

  function handleDeleteFoodItem(id) {
    const reqObj = {
      itemId: id,
    };
    console.log(reqObj);
    removeFoodItem(reqObj);
  }

  return (
    <Container>
      <HeadDiv>
        <HeadTextDiv>
          <span>Your Food Menu</span>
        </HeadTextDiv>
        <HeadOptionsDiv>
          <StyledOptions
            sortby="Type"
            options={["All", "Veg", "Non-veg"]}
          ></StyledOptions>
          <StyledOptions
            sortby="Category"
            options={["momo", "noodles", "pizza", "burgers"]}
          ></StyledOptions>
        </HeadOptionsDiv>
      </HeadDiv>

      <FoodItemsDiv>
        {foodItems.length === 0 && (
          <FoodItemNum>No food Items To Show</FoodItemNum>
        )}
        {foodItems.map((item, ind) => (
          <FoodItem key={item._id}>
            <ImageAndNameDiv>
              <FoodItemNum>
                <span>0{ind + 1}</span>
              </FoodItemNum>
              <FoodItemImgDiv>
                <img src={`./img/${item.image}`} alt="food-item" />
              </FoodItemImgDiv>
              <FoodItemTextDiv>
                <FoodItemName>
                  <FoodItemTextBg>{item.name}</FoodItemTextBg>
                </FoodItemName>
                <StyledTag type={item.type}>{item.type}</StyledTag>
              </FoodItemTextDiv>
            </ImageAndNameDiv>

            <PriceAndBtnDiv>
              <FoodItemTextDiv2>
                <FoodItemPriceSizeDiv>
                  <FoodItemTextSm>Category :- {item.category}</FoodItemTextSm>
                </FoodItemPriceSizeDiv>
                <FoodItemPriceSizeDiv>
                  <FoodItemTextSm>
                    Prices :-{" "}
                    {Object.entries(item.prices).map(([size, price]) => (
                      <FoodItemTextSm key={size}>
                        {size} : ${price}
                        {", "}
                      </FoodItemTextSm>
                    ))}
                  </FoodItemTextSm>
                </FoodItemPriceSizeDiv>

                <FoodItemPriceSizeDiv>
                  <FoodItemTextSm>
                    Main Ingredients :-{" "}
                    {item.mainIngredients.map((item, idx) => (
                      <FoodItemTextSm key={`${item}-${idx}`}>
                        {item}
                        {", "}
                      </FoodItemTextSm>
                    ))}{" "}
                  </FoodItemTextSm>
                </FoodItemPriceSizeDiv>
              </FoodItemTextDiv2>

              <EditMenuBtn
                itemId={item._id}
                handleDeleteFoodItem={handleDeleteFoodItem}
              />
            </PriceAndBtnDiv>
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
