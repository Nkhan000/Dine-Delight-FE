/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "./Button";
import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BannerContext } from "../utils/contexts";

const Container = styled.div`
  width: 100%;
  /* height: 4rem; */
  background-color: var(--color-orange-100);
  transition: top 0.3s ease-in-out;
  padding: 1rem 0.5rem;
  z-index: 20;

  ${(props) =>
    props.show == true
      ? css`
          position: fixed;
          top: 0;
        `
      : css`
          position: fixed;
          top: -50%;
        `}
  ${(props) =>
    props.show == true && props.bannerType == "error-warning"
      ? css`
          top: 3%;
          left: 35%;
          width: fit-content;
          padding: 2rem;
          border-radius: 1.5rem;
        `
      : css`
          top: -10%;
          left: 35%;
          width: fit-content;
          padding: 2rem;
          border-radius: 1.5rem;
        `}
  ${(props) =>
    props.show == true && props.bannerType == "addItemToCart"
      ? css`
          top: 0%;
          left: 0%;
          width: 100%;
          padding: 1rem;
          border-radius: 0;
        `
      : css`
          top: -10%;
          width: 100%;
          left: 0%;
          padding: 1rem;
          border-radius: 0;
        `}
  display: grid;
  grid-template-columns: 95% 1fr;
  justify-content: center;
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1.5rem;
`;

const BannerText = styled.span`
  color: var(--color-grey-100);
  font-weight: 600;
  font-size: 1.5rem;
`;
const BannerTextStrong = styled.span`
  color: var(--color-grey-100);
  font-weight: 600;
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-grey-100);
`;

const BannerTextSm = styled.span`
  color: var(--color-grey-100);
  font-size: 1.5rem;
`;
const BannerLink = styled(Link)`
  color: var(--color-grey-100);
  font-weight: 300;
  font-size: 1.5rem;
  /* font-style: italic; */
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
`;

// ERROR BANNER

// const BannerContext = createContext();
// BannerContext

function BannerNotification({ children }) {
  const [bannerOpen, setBannerOpen] = useState(false);
  const [itemObj, setItemObj] = useState({});
  const [bannerText, setBannerText] = useState("");
  const [bannerType, setBannerType] = useState("addingToCart");
  const [time, setTime] = useState(10000);
  const close = () => setBannerOpen(false);
  const open = () => setBannerOpen(true);

  // setTime(5000);

  useEffect(() => {
    // const timeout = 10000;
    setTimeout(() => {
      close();
    }, time);
  });

  return (
    <BannerContext.Provider
      value={{
        bannerOpen,
        setItemObj,
        setBannerOpen,
        setTime,
        setBannerText,
        bannerText,
        bannerType,
        setBannerType,
        // setItemsToItemObj,
        itemObj,
        close,
        open,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
}

function Open({ children }) {
  const { open, setTime } = useContext(BannerContext);
  function handleClick() {
    close();
    setTime(5000);
    open();
  }
  return <div onClick={handleClick}>{children}</div>;
}

function Banner() {
  const { bannerOpen, close, itemObj, bannerText, bannerType } =
    useContext(BannerContext);
  const { name, price, quantity } = itemObj;

  return createPortal(
    <Container bannerType={bannerType} show={bannerOpen}>
      {bannerType == "addItemToCart" && (
        <TextContainer>
          <div>
            <BannerTextStrong>{quantity}</BannerTextStrong>
            <BannerTextStrong>&nbsp;x&nbsp;</BannerTextStrong>
            <BannerTextStrong>{name}</BannerTextStrong>{" "}
            <BannerTextSm>for </BannerTextSm>
            <BannerTextStrong>${price} </BannerTextStrong>{" "}
            <BannerTextSm>has been added to the cart</BannerTextSm>
          </div>
          <BannerLink to={"/checkout"}>(Proceed to checkout)</BannerLink>
        </TextContainer>
      )}
      {bannerType == "error-warning" && (
        <TextContainer>
          <BannerTextSm>{bannerText}</BannerTextSm>
          <BannerLink to={"/login"}>(Click here to login)</BannerLink>
        </TextContainer>
      )}
      <ButtonContainer>
        <Button size="small" variation="secondary" hover="no" onClick={close}>
          X
        </Button>
      </ButtonContainer>
    </Container>,
    document.body
  );
}
BannerNotification.Open = Open;
BannerNotification.Banner = Banner;
export default BannerNotification;

// <Container show={bannerOpen}>
//         <TextContainer>
//           <div>
//             <BannerTextStrong>{itemQuanity}</BannerTextStrong>
//             <BannerTextStrong>&nbsp;x&nbsp;</BannerTextStrong>
//             <BannerTextStrong>{itemName}</BannerTextStrong>{" "}
//             <BannerTextSm>has been added to the cart</BannerTextSm>
//           </div>
//           <BannerLink to={"/checkout"}>(Proceed to checkout)</BannerLink>
//         </TextContainer>

//         <ButtonContainer>
//           <Button size="small" variation="secondary" hover="no">
//             X
//           </Button>
//         </ButtonContainer>
//       </Container>
