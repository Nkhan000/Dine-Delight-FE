/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styled, { css } from "styled-components";

import GradientHighlight from "./GradientHighlight";
import GradientIcon from "./GradientIcon";
import { FaCartShopping } from "react-icons/fa6";
import Button from "./Button";
// import CartBeforeConfirm from "./CartBeforeConfirm";
import CartBeforeConfirm from "./CART/CartBeforeConfirm";
import { useContext, useRef, useState } from "react";
import { NotificationContext } from "../utils/contexts";
import NotificationItem from "./NotificationItem";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 100vh;
  width: 50rem;
  position: fixed;
  background-color: var(--color-grey-800);
  top: 0%;
  right: 0%;
  z-index: 100;
  transition: all 0.3s ease-in; /* Specify which property to transition */

  padding: 2rem 0rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const HeadingDiv = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2rem;
  padding: 0 3rem;

  & span {
    font-weight: 600;
    font-size: 3.6rem;
    font-family: "Indie Flower", cursive;
    text-transform: capitalize;
  }
`;

const CloseBtnDiv = styled.div`
  position: absolute;
  top: 2%;
  right: 5%;
`;

const ConfirmDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-grey-900);
  /* padding: 1rem; */

  ${(props) =>
    props.addpadding &&
    css`
      padding: 0.5rem 2rem 2rem 2rem;
    `}
`;

const ConfirmBtnDiv = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  /* justify-content: space-between; */
  gap: 2rem;
  align-items: center;
`;

const ConfirmGrandTotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;

  & div {
    display: flex;
    justify-content: space-between;
  }

  & span {
    font-weight: 600;
    color: var(--color-grey-300);
    font-size: 1.7rem;
  }
`;

const CartContentDiv = styled.div`
  overflow-y: scroll;
  /* display: flex; */

  ${(props) =>
    props.addpadding &&
    css`
      padding: 0 3rem;
    `}
  &::-webkit-scrollbar {
    display: none; // for chrome and safari
  }
  scrollbar-width {
    width: 0;
  }
`;

// CREATE A CONTEXT
// const NotificationContext = createContext();
// NotificationContext

function Notification({ children }) {
  const [openNotification, setOpenNotification] = useState("");
  const close = () => setOpenNotification("");
  const openWindow = (name) => setOpenNotification(name);

  return (
    <NotificationContext.Provider
      value={{ openNotification, close, openWindow }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

function Open({ children, openname }) {
  const { openWindow, openNotification } = useContext(NotificationContext);
  function handleClick() {
    console.log("open btn was clicked", openNotification);
    openWindow(openname);
  }
  return <div onClick={handleClick}>{children}</div>;
}
function NotificationWindow({ children, name }) {
  const { openNotification, close } = useContext(NotificationContext);
  const cartTotal = useSelector((state) => state.cartTotal);
  const ref = useRef();

  if (openNotification === name)
    return (
      <Container ref={ref}>
        <CloseBtnDiv>
          <Button size="large" variation="link" onClick={close}>
            x
          </Button>
        </CloseBtnDiv>
        <HeadingDiv>
          <GradientHighlight>
            <span>{name}</span>
          </GradientHighlight>
          <GradientIcon iconHeight={2.5}>
            <FaCartShopping />
          </GradientIcon>
        </HeadingDiv>
        {/* <CartContentDiv addpadding={name === "cart"}> */}
        <CartContentDiv>
          {name === "cart" && <CartBeforeConfirm size="small" />}

          {name === "notification" && <NotificationItem />}
        </CartContentDiv>
        {name === "cart" && (
          <ConfirmDiv addpadding={name === "cart"}>
            <ConfirmGrandTotalDiv>
              <div>
                <span>VAT (13%) :</span>{" "}
                <span>
                  ${cartTotal > 0 ? (cartTotal * 0.13).toFixed(2) : 0}
                </span>
              </div>
              <div>
                <span>Grand Total :</span>{" "}
                <span>
                  $
                  {cartTotal > 0
                    ? (cartTotal * 0.13 + cartTotal + 10).toFixed(2)
                    : 0}
                </span>
              </div>
            </ConfirmGrandTotalDiv>
            <ConfirmBtnDiv>
              <Button size="medium" variation="primary">
                Confirm & Checkout{" "}
              </Button>
              <Button size="medium" variation="secondary">
                Cancel
              </Button>
            </ConfirmBtnDiv>
          </ConfirmDiv>
        )}
        {children}
      </Container>
    );
  return null;
}
Notification.Open = Open;
Notification.NotificationWindow = NotificationWindow;

export default Notification;

// return (
//   <Container ref={ref} isVisible={isVisible}>
//     <HeadingDiv>
//       <GradientHighlight>
//         <span>Cart</span>
//       </GradientHighlight>
//       <GradientIcon iconHeight={2.5}>
//         <FaCartShopping />
//       </GradientIcon>
//     </HeadingDiv>
//     <CartContentDiv>
//       <CartBeforeConfirm size="small" />
//     </CartContentDiv>
//     <ConfirmDiv>
//       <Button size="large" variation="primary">
//         Confirm & Checkout{" "}
//       </Button>
//       <Button size="large" variation="secondary">
//         Cancel
//       </Button>
//     </ConfirmDiv>
//   </Container>
// );
// }
