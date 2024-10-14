/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import StyledTag from "../../../StyledTag";
import EditMenuBtn from "../EditMenuBtn";

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
  text-transform: capitalize;
  color: var(--color-grey-200);
  font-size: 2rem;
`;

function EditFoodMenuItemCard({ item, ind, handleDeleteFoodItem }) {
  return (
    <FoodItem>
      <ImageAndNameDiv>
        <FoodItemNum>
          <span>{ind + 1 < 10 ? `0${ind + 1}` : `${ind + 1}`}</span>
        </FoodItemNum>
        <FoodItemImgDiv>
          <img
            crossOrigin="anonymous"
            src={`http://127.0.0.1:3000/public/${item.image}`}
            alt="food-item"
          />
          {/* <img
            src="http://127.0.0.1:3000/public/img/foodmenu/dummy&pizza-66dd6182db1bc091514f23ab-1728676099821.jpeg"
            alt="food-item"
          /> */}
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
              Main Ingredients :- {console.log(item.mainIngredients)}
              {item.mainIngredients.map((ing, idx) => (
                <FoodItemTextSm key={`${ing}-${idx}`}>
                  {ing}
                  {item.mainIngredients.length == idx + 1 ? "." : ", "}
                </FoodItemTextSm>
              ))}
            </FoodItemTextSm>
          </FoodItemPriceSizeDiv>
        </FoodItemTextDiv2>

        <EditMenuBtn
          itemId={item._id}
          itemCategory={item.category}
          handleDeleteFoodItem={handleDeleteFoodItem}
        />
      </PriceAndBtnDiv>
    </FoodItem>
  );
}

export default EditFoodMenuItemCard;
