/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import StyledOptions from "./StyledOptions";
import { useContext, useEffect, useReducer, useState } from "react";
import cartReducer, {
  removeItem,
  removeSingleCuisine,
  updateItemSize,
  updateNewQuantity,
} from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { useGetUser } from "../features/authentication/useGetUser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* background-color: red; */
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OngoingOrderCusineDiv = styled.div`
  padding: 2rem 4rem;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  ${(props) =>
    props.size == "large" &&
    css`
      gap: 2rem;
    `}
  ${(props) =>
    props.size == "small" &&
    css`
      gap: 1rem;
    `}
`;

const HeadTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const OngoingOrderCusineLogoDiv = styled.div`
  ${(props) =>
    props.size == "large" &&
    css`
      height: 8rem;
      width: 8rem;
    `}
  ${(props) =>
    props.size == "small" &&
    css`
      height: 4.8rem;
      width: 4.8rem;
    `}
  overflow: hidden;
  border-radius: 5rem;
`;

const OngoingOrderItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;

  li {
    border-bottom: 1px solid;
    width: 100%;
    padding-bottom: 0.5rem;
    display: grid;
    grid-template-columns: 70% 1fr 1fr;
    align-items: center;
    ${(props) =>
      props.size == "small" &&
      css`
        display: flex !important;
        padding-bottom: 0.5rem;
      `}/*
    ${(props) =>
      props.size == "large" &&
      css`
        display: grid;
        grid-template-columns: 80% 1fr 1fr;
      `} */
  }
`;

const ItemPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ItemName = styled.span`
  font-weight: 600;
  color: var(--color-grey-300);
  font-size: 1.7rem;
  ${(props) =>
    props.size == "small" &&
    css`
      font-size: 1.4rem;
    `}
`;
const ItemPrice = styled.span`
  font-weight: 600;
  color: var(--color-grey-300);
  font-size: 1.7rem;

  ${(props) =>
    props.size == "small" &&
    css`
      /* font-weight: 300; */
      font-size: 1.4rem;
    `}
`;
const ItemDate = styled.span`
  font-size: 1.1rem;
  font-style: italic;
  font-weight: 500;
  color: var(--color-grey-300);
  text-align: end;
  padding-right: 2rem;
  padding-bottom: 1rem;
`;

const ItemTextTotal = styled.span`
  font-weight: 600;
  color: var(--color-grey-300);
  font-size: 1.5rem;
  align-self: flex-end;
  padding: 0.6rem 2rem;

  ${(props) =>
    props.size == "small" &&
    css`
      font-size: 1.1rem;
    `}
`;

const ItemRemarks = styled.span`
  font-size: 1.4;
  font-style: italic;
  font-weight: 300;
  color: var(--color-grey-500);
  padding: 2rem;
  text-align: center;
`;

const QuantityIncDecDiv = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;
  /* width: 30rem; */
`;

const SubTotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const CuisineDiv = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
`;

const CancelButtonDiv = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
`;

function CartBeforeConfirm({ size }) {
  // let cuisineId;
  const dispatch = useDispatch();
  const { data: user, isLoading } = useGetUser();
  const order = useSelector((store) => store.cart);
  const { cart, cartTotal } = order;
  const [newItemQuantity, setNewItemQuantity] = useState(
    cart.map((order) => order?.orderItems.map((item) => item.quantity))
  );
  const [selectedOptions, setSelectedOptions] = useState(
    cart.map((order) => order?.orderItems.map((item) => item.size))
  );

  const handleSizeChange = (orderIndex, itemIndex, newSize) => {
    const newSelectedOptions = selectedOptions.map((orderOptions, oIdx) =>
      orderOptions.map((itemSize, iIdx) =>
        oIdx === orderIndex && iIdx === itemIndex ? newSize : itemSize
      )
    );
    setSelectedOptions(newSelectedOptions);
  };

  function handleIncreaseQuantity(orderIndex, itemIndex) {
    const newQuantities = newItemQuantity.map((orderQuantities, oIdx) =>
      orderQuantities.map((quantity, iIdx) =>
        oIdx === orderIndex && iIdx === itemIndex
          ? quantity + 1 <= 12
            ? quantity + 1
            : quantity
          : quantity
      )
    );
    setNewItemQuantity(newQuantities);
    // dispatch(updateNewQuantity({ cuisineId, itemId }));
  }
  function handleDecreaseQuantity(orderIndex, itemIndex) {
    const newQuantities = newItemQuantity.map((orderQuantities, oIdx) =>
      orderQuantities.map((quantity, iIdx) =>
        oIdx === orderIndex && iIdx === itemIndex
          ? quantity - 1 >= 1
            ? quantity - 1
            : quantity
          : quantity
      )
    );
    setNewItemQuantity(newQuantities);
  }

  function handleUpdateQuanAndSizeAfterDispatch(orderIndex, itemIndex) {
    const cuisineId = cart[orderIndex].cuisineId;
    const itemId = cart[orderIndex].orderItems[itemIndex]._id;
    dispatch(removeItem({ cuisineId, itemId }));
    console.log({ cuisineId, itemId });

    // Update local state after dispatch
    const newQuantities = newItemQuantity.map((orderQuantities, oIdx) =>
      oIdx === orderIndex
        ? orderQuantities.filter((_, iIdx) => iIdx !== itemIndex)
        : orderQuantities
    );
    const newSelectedOptions = selectedOptions.map((orderOptions, oIdx) =>
      oIdx === orderIndex
        ? orderOptions.filter((_, iIdx) => iIdx !== itemIndex)
        : orderOptions
    );
    setNewItemQuantity(newQuantities);
    setSelectedOptions(newSelectedOptions);
  }

  function handleUpdateQuantity(cuisineId, itemId, newQuantity) {
    dispatch(updateNewQuantity({ cuisineId, itemId, newQuantity }));
  }

  function handleOnIncreaseQuantity(
    orderIndex,
    itemIndex,
    cuisineId,
    itemId,
    newQuantity,
    newSize
  ) {
    handleIncreaseQuantity(orderIndex, itemIndex);
    handleUpdateQuantity(cuisineId, itemId, newQuantity, newSize);
  }
  function handleOnDecreaseQuantity(
    orderIndex,
    itemIndex,
    cuisineId,
    itemId,
    newQuantity,
    newSize
  ) {
    handleDecreaseQuantity(orderIndex, itemIndex);
    handleUpdateQuantity(cuisineId, itemId, newQuantity, newSize);
  }

  return (
    <Container>
      {cart.length == 0 ? (
        <ItemRemarks>Please add Items to your cart 😊</ItemRemarks>
      ) : (
        <>
          {cart.map((order, orderIndex) => (
            <CuisineDiv key={order?.name}>
              <CancelButtonDiv>
                <Button
                  size="small"
                  variation="secondary"
                  onClick={() =>
                    dispatch(
                      removeSingleCuisine({ cuisineId: order.cuisineId })
                    )
                  }
                >
                  Cancel Order
                </Button>
              </CancelButtonDiv>
              <OngoingOrderCusineDiv size={size}>
                <OngoingOrderCusineLogoDiv size={size}>
                  <LogoImg src="./img/hotel-001.jpg" alt="cuisine logo" />
                </OngoingOrderCusineLogoDiv>
                <HeadTextContainer>
                  <Heading as={size === "large" ? "h2" : "h4"} color="light">
                    {order?.cuisineName}
                  </Heading>
                  <Heading as={size === "large" ? "h5" : "h6"} color="light">
                    {order?.cuisineAddress}
                  </Heading>
                </HeadTextContainer>
              </OngoingOrderCusineDiv>
              <ItemDate>ordered at : 2024/03/14 (10:55 am)</ItemDate>
              <OngoingOrderItemList>
                {order?.orderItems?.map((item, itemIndex) => {
                  return (
                    // eslint-disable-next-line react/no-unknown-property
                    <li key={item.name} cuisineid={order.cuisineId}>
                      <QuantityIncDecDiv>
                        <Button
                          size="small"
                          variation="primary"
                          onClick={() =>
                            handleOnDecreaseQuantity(
                              orderIndex,
                              itemIndex,
                              order.cuisineId,
                              item._id,
                              newItemQuantity[orderIndex][itemIndex] - 1 > 0
                                ? newItemQuantity[orderIndex][itemIndex] - 1
                                : newItemQuantity[orderIndex][itemIndex]
                            )
                          }
                        >
                          -
                        </Button>
                        <ItemName size={item.size}>
                          {newItemQuantity[orderIndex][itemIndex]}
                        </ItemName>
                        <Button
                          size="small"
                          variation="primary"
                          onClick={() =>
                            handleOnIncreaseQuantity(
                              orderIndex,
                              itemIndex,
                              order.cuisineId,
                              item._id,
                              newItemQuantity[orderIndex][itemIndex] + 1 <= 12
                                ? newItemQuantity[orderIndex][itemIndex] + 1
                                : newItemQuantity[orderIndex][itemIndex]
                            )
                          }
                        >
                          +
                        </Button>
                        <ItemName size={size}>{item.name}</ItemName>
                      </QuantityIncDecDiv>

                      <StyledOptions
                        sortby={"size"}
                        options={item.prices && Object.keys(item?.prices)}
                        selectedOption={selectedOptions[orderIndex][itemIndex]}
                        setSelectedOption={(newSize) =>
                          handleSizeChange(orderIndex, itemIndex, newSize)
                        }
                        cuisineId={order.cuisineId}
                        itemId={item._id}
                        dispatch={dispatch}
                        dispatchFn={updateItemSize}
                      />

                      <ItemPriceContainer>
                        <ItemPrice size={size}>
                          $
                          {item.prices &&
                            newItemQuantity[orderIndex][itemIndex] *
                              item?.prices[
                                selectedOptions[orderIndex][itemIndex]
                              ]}
                        </ItemPrice>
                        <Button
                          size="small"
                          variation="danger"
                          onClick={() =>
                            handleUpdateQuanAndSizeAfterDispatch(
                              orderIndex,
                              itemIndex
                            )
                          }
                        >
                          X
                        </Button>
                      </ItemPriceContainer>
                    </li>
                  );
                })}
              </OngoingOrderItemList>
              <SubTotalDiv>
                <ItemTextTotal size={size}>
                  Delivery : ${order?.deliveryPrice?.toFixed(2)}
                </ItemTextTotal>
                <ItemTextTotal size={size}>Discount : $0.00</ItemTextTotal>
                <ItemTextTotal size={size}>
                  VAT(13%): ${(order?.total * 0.13).toFixed(2)}
                </ItemTextTotal>
                <ItemTextTotal size={size}>
                  Total : $
                  {(
                    order.total * 0.13 +
                    order.total +
                    order.deliveryPrice
                  ).toFixed(2)}
                </ItemTextTotal>
              </SubTotalDiv>
            </CuisineDiv>
          ))}

          <ItemRemarks>
            Proceed to checkout to redeem offers. Your order will be delivered
            shortly on your doorsteps 😊
          </ItemRemarks>
        </>
      )}
    </Container>
  );
}

export default CartBeforeConfirm;
