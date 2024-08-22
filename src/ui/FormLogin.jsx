/* eslint-disable no-unused-vars */
// import { Form } from "react-router-dom";
// import Form from "../ui/SignupForm";
// import StyledRadioBtn from "./StyledRadioBtn";
import FormInputDiv from "./FormInputDiv";
import Button from "./Button";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import { useLogin } from "../features/authentication/useLogin";

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;

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

// Radio button
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

function FormLogin() {
  const { register, handleSubmit } = useForm();
  const { login, isLoading } = useLogin();
  // const { login } = useAuth();

  // let isLoading = false;
  function onSubmit(data) {
    console.log(data);
    login(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        <StyledInputLabel htmlFor="email_login">Email</StyledInputLabel>
        <StyledInput
          id="email_login"
          type="email"
          placeholder="enter your email"
          name="email"
          {...register("email")}
        />
      </InputDiv>
      <InputDiv>
        <StyledInputLabel htmlFor="password_login">Password</StyledInputLabel>
        <StyledInput
          id="password_login"
          type="password"
          placeholder="enter your password"
          name="password"
          {...register("password")}
        />
      </InputDiv>

      <StyledRadioDiv>
        <RadioDiv>
          <input
            id="remember_me"
            type="checkbox"
            name="remember_me"
            {...register("remember_me")}
          />
          <StyledCircle></StyledCircle>
          <RadioLabel htmlFor="remember_me" name="remember_me">
            Remember me
          </RadioLabel>
        </RadioDiv>
      </StyledRadioDiv>

      <ButtonContainer>
        <Button
          size="medium"
          variation="primary"
          type="submit"
          disabled={isLoading}
        >
          Login
        </Button>
      </ButtonContainer>
    </StyledForm>
  );
}

export default FormLogin;
