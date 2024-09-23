/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Heading from "./Heading";
import Spinner from "./Spinner";
import StyledTag from "./StyledTag";
import { useGetADelivery } from "../features/delivery/useDelivery";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OngoingOrderCusineDiv = styled.div`
  padding: 2rem;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeadTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const OngoingOrderCusineLogoDiv = styled.div`
  height: 4.8rem;
  width: 4.8rem;
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
    grid-template-columns: 80% 1fr 1fr;
    align-items: center;
  }
`;

const ItemName = styled.span`
  font-weight: 600;
  color: var(--color-grey-300);
  font-size: 1.4rem;
  width: max-content;
  display: block;
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
  font-size: 1.6rem;
  align-self: flex-end;
  padding: 0.6rem;

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

const QuantityDiv = styled.div`
  display: grid;
  grid-template-columns: 90% 1fr 1fr;
  gap: 1rem;
`;

const SubTotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const CuisineDiv = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const SingleCusineContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IndexSpan = styled.span`
  font-weight: 600;
  font-size: 3.4rem;
  color: var(--color-grey-800);
`;

function OngoingDelivery({ size }) {
  const { deliveryData, isLoading } = useGetADelivery();

  if (isLoading) return <Spinner />;
  if (deliveryData.length == 0)
    return (
      <Container>
        <ItemRemarks>You do not have any ongoing orders😊</ItemRemarks>
      </Container>
    );

  return (
    <Container>
      <>
        <CuisineDiv>
          {deliveryData.map((order, oIdx) => (
            <SingleCusineContainer key={`${order.cuisineId}${oIdx}`}>
              <StatusContainer>
                <IndexSpan>0{oIdx + 1}</IndexSpan>
                <StyledTag type={order.status}>{order.status}</StyledTag>
              </StatusContainer>
              <OngoingOrderCusineDiv size={size}>
                <OngoingOrderCusineLogoDiv size={size}>
                  <LogoImg src="./img/hotel-001.jpg" alt="cuisine logo" />
                </OngoingOrderCusineLogoDiv>
                <HeadTextContainer>
                  <Heading as={size === "large" ? "h2" : "h4"} color="light">
                    {order.cuisineName}
                  </Heading>
                  <Heading as={size === "large" ? "h5" : "h6"} color="light">
                    {order.cuisineAddress}
                  </Heading>
                </HeadTextContainer>
              </OngoingOrderCusineDiv>
              <ItemDate>ordered at : 2024/03/14 (10:55 am)</ItemDate>
              <OngoingOrderItemList>
                {order.orderItems.map((item) => (
                  <li key={item.id}>
                    <QuantityDiv>
                      <ItemName>
                        {item.quantity} X {item.name}
                      </ItemName>
                      <ItemName>{item.size}</ItemName>
                      <ItemName>${item.price}</ItemName>
                    </QuantityDiv>
                  </li>
                ))}
              </OngoingOrderItemList>
              <SubTotalDiv>
                <ItemTextTotal size={size}>Delivery : $11</ItemTextTotal>
                <ItemTextTotal size={size}>
                  Total : ${order.total}
                </ItemTextTotal>
              </SubTotalDiv>
            </SingleCusineContainer>
          ))}
        </CuisineDiv>

        <ItemRemarks>
          Your order will be delivered shortly on your doorsteps 😊
        </ItemRemarks>
      </>
    </Container>
  );
}

export default OngoingDelivery;
