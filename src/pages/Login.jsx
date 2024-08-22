/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Form from "../ui/SignupForm";
import GradientHighlight from "../ui/GradientHighlight";
import { useState } from "react";
import HeaderLogo from "../ui/HeaderLogo";

const Container = styled.div`
  height: 100vh;
  width: 100%;

  overflow: hidden;
  background-image: url("./img/food-006.jpg");
  background-size: cover;
  position: relative;

  display: flex;
  justify-content: space-between;

  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-color: var(--color-orange-50);
    z-index: 1;
    opacity: 0.3;
  }
`;

const Div1 = styled.div`
  position: relative;
  padding: 2rem 3rem;
  transition-property: transform, opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  z-index: 2;
  width: 40%;
  ${(props) =>
    props.side === "left" &&
    css`
      background-color: var(--color-grey-900);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    `}
  ${(props) =>
    props.side === "right" &&
    css`
      background-color: var(--color-grey-900);
      transform: translateX(-100%);
    `}
`;
const Div2 = styled.div`
  position: relative;
  padding: 2rem 3rem;
  transition-property: transform, opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  width: 40%;
  z-index: 2;

  ${(props) =>
    props.side === "left" &&
    css`
      background-color: var(--color-grey-900);
      transform: translateX(100%);
    `}
  ${(props) =>
    props.side === "right" &&
    css`
      background-color: var(--color-grey-900);
      /* margin-left: 0; */
    `}
`;

const FormHeadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormHeading = styled.span`
  font-family: "Indie Flower", cursive;
  font-size: 5.2rem;
  font-weight: 800;
  display: inline-block;
`;

const StyledLayoutBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  &:focus {
    outline: 0;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & button {
    width: max-content;
  }
`;

const StyledRadioDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0rem;
`;

const FormDiv = styled.div``;
function Login() {
  const [direction, setDirection] = useState(true);
  const side = direction ? "left" : "right";

  function handleDirection(e) {
    e.preventDefault();
    setDirection((s) => !s);
  }

  return (
    <Container>
      <Div1 side={side}>
        <HeaderLogo />
        <FormHeadingDiv>
          <FormHeading>
            <GradientHighlight>Sign up</GradientHighlight>
          </FormHeading>

          <StyledLayoutBtn type="click" onClick={(e) => handleDirection(e)}>
            Already have an account ?
          </StyledLayoutBtn>
        </FormHeadingDiv>
        <FormDiv>
          <Form formTypeText={"signup"} />
        </FormDiv>
      </Div1>

      <Div2 side={side}>
        <HeaderLogo />
        <FormHeadingDiv>
          <FormHeading>
            <GradientHighlight>Login</GradientHighlight>
          </FormHeading>

          <StyledLayoutBtn type="click" onClick={(e) => handleDirection(e)}>
            Don&apos;t have an account ?
          </StyledLayoutBtn>
        </FormHeadingDiv>
        <FormDiv>
          <Form formTypeText={"login"} />
        </FormDiv>
      </Div2>
    </Container>
  );
}

export default Login;
