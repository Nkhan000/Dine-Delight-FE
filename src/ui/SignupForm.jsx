/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useForm } from "react-hook-form";
import FormLogin from "./FormLogin";
import FormSignup from "./FormSignup";
import { useOAuth } from "../features/authentication/useOAuth";
import { apiOAuth } from "../services/apiAuth";
import { useState } from "react";

const StyledFormDiv = styled.div`
  padding: 0.5rem 2.5rem;
  height: 45rem;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  // setting scrollbar width 0
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  // setting scrollbar width 0
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const InputDivContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.8rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & button {
    width: max-content;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`;

const OptionsItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  & li {
    border: 1px solid var(--color-grey-700);
    border-radius: 0.5rem;
    transition: transform 0.2s;

    & a {
      padding: 0.6rem 0.8rem;

      display: grid;
      grid-template-columns: min-content 1fr;
      align-items: center;
      gap: 1rem;
      & span {
        display: inline-block;
        width: max-content;
        color: var(--color-grey-100);
        font-size: 1.5rem;
      }

      &:active,
      &:hover,
      &:focus {
        outline: 1px solid var(--color-orange-50);
        border-radius: 0.5rem;
      }
    }
    &:hover {
      transform: translateY(-0.2rem);
      box-shadow: var(--shadow-orange-02);
    }
  }
`;

const SmallIconDiv = styled.div`
  height: 1.8rem;
  width: 1.8rem;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const FaintText = styled.span`
  display: inline-block;
  color: var(--color-grey-500);
  font-size: 1.2rem;
`;

function Form({ formTypeText }) {
  const [formObject, setFormObject] = useState({});
  return (
    <StyledFormDiv>
      {formTypeText === "login" ? (
        <FormLogin />
      ) : (
        <FormSignup setFormObject={setFormObject} />
      )}
      <OptionsContainer>
        <FaintText>Use other methods to {formTypeText}</FaintText>
        <OptionsItems>
          <li>
            <Link to="http://127.0.0.1:3000/api/v1/auth/google">
              <SmallIconDiv>
                <img src="./img/google-icon.svg" alt="icons8 google logo" />
              </SmallIconDiv>

              <span>{formTypeText} with Google</span>
            </Link>
          </li>
          <li>
            <Link as={Link} to="/loginOauth">
              <SmallIconDiv>
                <img src="./img/facebook-icon.svg" alt="icons8 facebook logo" />
              </SmallIconDiv>

              <span>{formTypeText} with Facebook</span>
            </Link>
          </li>
        </OptionsItems>
      </OptionsContainer>
    </StyledFormDiv>
  );
}

export default Form;
