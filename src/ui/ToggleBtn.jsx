/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 5rem;
`;

const ToggleCheckbox = styled.input`
  display: none;

  &:checked ~ label {
    background-color: var(--color-red-700);
  }

  &:checked ~ label > div {
    left: calc(100% - 2rem); /* Moves the button to the end of the container */
    transition: left 0.3s ease-in-out;
  }
`;

const ToggleContianer = styled.label`
  position: relative;
  height: 2rem;
  width: 100%;
  display: flex;
  background-color: var(--color-green-700);
  border-radius: 1.5rem;
`;

const ToggleBtnDiv = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%; /* Center it vertically */
  /* Start at the beginning */
  left: 0.5rem;
  transform: translateY(-50%); /* Center it vertically */
  transition: left 0.3s ease-in-out;
`;

function ToggleBtn({ itemId, selected = false }) {
  const [isChecked, setIsChecked] = useState(selected);
  return (
    <Container>
      <ToggleCheckbox
        checked={isChecked}
        onChange={() => setIsChecked((s) => !s)}
        id={itemId}
        type="checkbox"
      />
      <ToggleContianer htmlFor={itemId}>
        <ToggleBtnDiv></ToggleBtnDiv>
      </ToggleContianer>
    </Container>
  );
}

export default ToggleBtn;
