/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from "styled-components";
import Button from "../../../Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ModalContext } from "../../../../utils/contexts";

const Container = styled.div`
  width: 35rem;
  height: 10rem;
`;
const TextHeadDiv = styled.div`
  width: 100%;
  span {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-grey-200);
    text-transform: capitalize;
  }
`;

const StyledForm = styled.form`
  display: flex;
  padding-top: 2rem;
  /* align-items: center; */
  /* height: 100%; */
  width: 100%;
`;
const InputDiv = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: var(--color-grey-100);
`;
const StyledInput = styled.input`
  font-size: 1.5rem;
  width: 25rem;
  padding: 1rem;
  border: 1px solid;
  outline: none;
  border-radius: 0.5rem;
  background-color: transparent;
`;

function AddNewItemForm({ type, submitFunction, isLoading }) {
  const { register, handleSubmit } = useForm();
  const { close } = useContext(ModalContext);

  const text =
    type === "partySize"
      ? "Add new party size :"
      : type === "tableType"
      ? "Add new Table Type"
      : "Add new Time Slot (in hours) :";

  function onSubmit(data) {
    const reqObj = { ...data };
    reqObj.typeOfOp = "add";
    console.log(reqObj);
    submitFunction(reqObj);
    if (!isLoading) {
      close();
    }
  }

  return (
    <Container>
      <TextHeadDiv>
        <span>{text}</span>
      </TextHeadDiv>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputDiv>
          <StyledInput
            type="text"
            placeholder={`add a new ${type}`}
            {...register(`${type}`)}
          />
        </InputDiv>
        <Button
          type="submit"
          className="no-outside-click"
          size="medium"
          variation="primary"
        >
          Add
        </Button>
      </StyledForm>
    </Container>
  );
}

export default AddNewItemForm;
