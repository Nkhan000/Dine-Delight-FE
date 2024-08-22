/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";

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

function StyledRadioBtn({
  name = "account_type",
  inpType = "radio",
  labelId,
  children,
}) {
  return (
    <RadioDiv>
      <input type={inpType} id={labelId} name={name} />
      <StyledCircle></StyledCircle>
      <RadioLabel htmlFor={labelId} name={name}>
        {children}
      </RadioLabel>
    </RadioDiv>
  );
}
export default StyledRadioBtn;
