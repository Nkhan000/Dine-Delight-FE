/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled, { css } from "styled-components";

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

const InputLabel = styled.label`
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

function FormInputDiv({ name, placeholder, type = "text", register }) {
  return (
    // <InputDiv>
    // <InputLabel htmlFor={name}>{`${name
    //   .split("_" || "")
    //   .join(" ")
    //   .toUpperCase()}`}</InputLabel>
    <StyledInput
      placeholder={placeholder}
      id={name}
      defaultValue={"name@gmail.com"}
      type={type}
      // {...register("name")}
    />
    // {/* </InputDiv> */}
  );
}

export default FormInputDiv;
