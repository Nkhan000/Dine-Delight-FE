/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { Form } from "react-router-dom";
// import Form from "../ui/SignupForm";
// import StyledRadioBtn from "./StyledRadioBtn";
// import FormInputDiv from "./FormInputDiv";
import Button from "./Button";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import { useSignup } from "../features/authentication/useSignup";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
  /* align-items: ; */

  // setting scrollbar width 0
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
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
  gap: 2rem;
`;

const RadioLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
`;

const StyledCircle = styled.div`
  display: inline-block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  border: 2px solid var(--color-orange-50);
  position: relative;

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    background-color: var(--color-orange-50);
    display: none;
  }
`;

const RadioDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & input {
    display: none;
  }
  & input:checked + div::after {
    display: block;
  }

  & input:checked ~ label {
    color: var(--color-grey-300);
  }
`;

// input Div
const InputDiv = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  gap: 0.5rem;

  ${(props) =>
    props.direction == "row"
      ? css``
      : css`
          flex-direction: column;
        `}
`;

const StyledInputLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-grey-100);
`;
const StyledInput = styled.input`
  outline: none;
  border: 1px solid var(--color-grey-800);
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;
  width: 100%;
  padding: 1.2rem 1rem;
  background-color: transparent;

  &:focus,
  &:valid {
    background-color: var(--color-grey-200);
    border: none;
  }
  &:focus {
    outline: var(--outline-orange-01);
  }

  &:invalid:focus {
    outline: var(--outline-red-01);
  }
`;

function FormSignup({ setFormObject }) {
  const { register, handleSubmit, getValues } = useForm();
  const { signup, isSigningUp } = useSignup();

  function onSubmit(data) {
    signup(data);
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
      {/* <StyledRadioDiv>
        <RadioDiv>
          <input
            id="business"
            type="radio"
            name="role"
            value="business"
            {...register("role", {
              required: "Please select the type of account",
            })}
          />
          <StyledCircle></StyledCircle>
          <RadioLabel htmlFor="business" name="role">
            Create a new business account
          </RadioLabel>
        </RadioDiv>
        <RadioDiv>
          <input
            id="user"
            type="radio"
            name="role"
            value="user"
            {...register("role", {
              required: "Please select the type of account",
            })}
          />
          <StyledCircle></StyledCircle>
          <RadioLabel htmlFor="user" name="role">
            Create a new user account
          </RadioLabel>
        </RadioDiv>
      </StyledRadioDiv> */}
      <InputDiv>
        <StyledInputLabel htmlFor="name">Username</StyledInputLabel>
        <StyledInput
          id="name"
          type="text"
          defaultValue={"nazir khasn"}
          placeholder="enter your username"
          {...register("name", {
            required: "Please provide your name",
          })}
        />
      </InputDiv>
      <InputDiv>
        <StyledInputLabel htmlFor="email">Email</StyledInputLabel>
        <StyledInput
          id="email"
          type="email"
          defaultValue={"nazir@din.com"}
          placeholder="enter your email"
          {...register("email", { required: "Please provide your email" })}
        />
      </InputDiv>
      <InputDiv>
        <StyledInputLabel htmlFor="password">Password</StyledInputLabel>
        <StyledInput
          id="password"
          type="password"
          defaultValue={"nazir@din.com"}
          placeholder="enter your password"
          {...register("password", { required: "Please provide a password" })}
        />
      </InputDiv>
      <InputDiv>
        <StyledInputLabel htmlFor="passwordConfirm">
          Confirm password
        </StyledInputLabel>
        <StyledInput
          id="passwordConfirm"
          type="password"
          defaultValue={"nazir@din.com"}
          placeholder="enter your confirm password"
          {...register("passwordConfirm", {
            required: true,
            validate: (value) =>
              value === getValues().password ||
              "Password Confirm must be equal to password",
          })}
        />
      </InputDiv>
      <StyledRadioDiv>
        <RadioDiv>
          <input
            id="terms_agreement"
            type="radio"
            value="terms_agreement"
            {...register("terms_agreement", {
              required:
                "Please read and agree to our terms and conditions before continuing",
            })}
          />
          <StyledCircle></StyledCircle>
          <RadioLabel htmlFor="terms_agreement" name="account_type">
            Agree to our terms and conditions
          </RadioLabel>
        </RadioDiv>
      </StyledRadioDiv>{" "}
      <ButtonContainer>
        <Button
          size="medium"
          variation="primary"
          type="submit"
          disabled={isSigningUp}
        >
          Sign Up
        </Button>
      </ButtonContainer>
    </StyledForm>
  );
}

export default FormSignup;
