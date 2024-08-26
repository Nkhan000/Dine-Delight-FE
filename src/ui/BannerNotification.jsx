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
  transition: top 0.5s ease-in-out;
  border-inline: 5px solid var(--color-grey-100);
  padding: 1rem 0.5rem;
  z-index: 20;
  position: fixed;
  top: -50%;
  display: flex;
  gap: 1rem;
  align-items: center;

  ${(props) => {
    if (props.show && props.bannerType === "addItemToCart") {
      return css`
        position: fixed;
        top: 0%;
        left: 0%;
        opacity: 1;
      `;
    }

    if (props.show && props.bannerType === "error-warning") {
      return css`
        position: fixed;
        top: 2%;
        left: 25%;
        width: max-content;
        padding: 2rem;
        border-radius: 1.5rem;
        opacity: 1;
      `;
    }

    // Default hidden state for both cases
    return css`
      position: fixed;
      top: -50%;
      opacity: 0;
    `;
  }}

  display: grid;
  grid-template-columns: 95% 1fr;
  justify-content: center;
`;
const TextContainer = styled.div`
  display: flex;
  height: 100%;
  width: max-content;
  /* gap: 5rem; */
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
  ${(props) =>
    props.hasUnderline == true &&
    css`
      border-bottom: 2px solid var(--color-grey-100);
    `}
`;

const BannerTextSm = styled.span`
  color: var(--color-grey-100);
  font-size: 1.5rem;
`;
const BannerLink = styled(Link)`
  display: inline-block;
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
  const [bannerItemObj, setBannerItemObj] = useState({});
  const [bannerText, setBannerText] = useState("");
  const [bannerType, setBannerType] = useState("addingToCart");
  const [time, setTime] = useState(10000);
  const close = () => setBannerOpen(false);
  const open = () => setBannerOpen(true);

  useEffect(() => {
    if (bannerOpen) {
      const timer = setTimeout(() => {
        close();
      }, time);

      return () => clearTimeout(timer); // Clear timeout if component unmounts or state changes
    }
  }, [bannerOpen, time]); // Depend on bannerOpen and time

  return (
    <BannerContext.Provider
      value={{
        bannerOpen,
        bannerText,
        bannerType,
        bannerItemObj,
        setBannerItemObj,
        setBannerOpen,
        setTime,
        setBannerText,
        setBannerType,
        close,
        open,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
}

function Banner() {
  const { bannerOpen, close, bannerItemObj, bannerText, bannerType } =
    useContext(BannerContext);
  const { name, price, quantity } = bannerItemObj;
  if (bannerOpen) {
    return createPortal(
      <Container bannerType={bannerType} show={bannerOpen}>
        {bannerType == "addItemToCart" && (
          <TextContainer>
            <div>
              <BannerTextStrong hasUnderline={true}>
                {quantity}
              </BannerTextStrong>
              <BannerTextStrong hasUnderline={true}>
                &nbsp;x&nbsp;
              </BannerTextStrong>
              <BannerTextStrong>{name}</BannerTextStrong>{" "}
              <BannerTextSm>for </BannerTextSm>
              <BannerTextStrong hasUnderline={true}>
                ${price}{" "}
              </BannerTextStrong>{" "}
              <BannerTextSm>has been added to the cart</BannerTextSm>
            </div>
            <BannerLink to={"/checkout"}>(Proceed to checkout)</BannerLink>
          </TextContainer>
        )}
        {bannerType == "error-warning" && (
          <TextContainer>
            <BannerTextStrong>{bannerText}</BannerTextStrong>
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
}
// BannerNotification.Open = Open;
BannerNotification.Banner = Banner;
export default BannerNotification;
