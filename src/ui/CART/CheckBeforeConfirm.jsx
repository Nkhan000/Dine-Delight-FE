/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "../Button";

const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

// Check Before Confirm Div
const CheckContainer = styled.div`
  /* margin: 0.2rem; */
  width: 40rem;
  height: 15rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
`;

const CheckTextDiv = styled.div`
  width: 100%;
  & span {
    text-align: center;
    font-weight: 500;
    color: var(--color-grey-200);
    /* text-justify: inter-ideograph; */
  }
`;

function CheckBeforeConfirm({ type, dataObj, handleClick }) {
  return (
    <CheckContainer>
      <CheckTextDiv>
        <span>
          You already have some ongoing order. Do you wish Overwrite the
          previous order with new one?
        </span>
      </CheckTextDiv>
      <ButtonsDiv>
        <Button
          size="medium"
          variation="primary"
          // onClick={type === "cart" ? handleClickCart : handleClickVenue}
          onClick={handleClick}
          className="no-outside-click"
        >
          Continue order
        </Button>
        <Button size="medium" variation="secondary">
          Cancel
        </Button>
      </ButtonsDiv>
    </CheckContainer>
  );
}

export default CheckBeforeConfirm;
