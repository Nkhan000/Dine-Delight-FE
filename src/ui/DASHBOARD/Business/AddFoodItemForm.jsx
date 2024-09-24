/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "../../Heading";
import StyledRadioBtn from "../../StyledRadioBtn";
import Button from "../../Button";

const Container = styled.div`
  width: 55vw;
  height: 65vh;
  padding: 1rem 3rem;

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  gap: 2rem;
`;
const FormHeadDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const FormInputDiv = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* gap: 1rem; */
`;

const FormInputRadiosDiv = styled.div`
  display: flex;
  gap: 2rem;
`;

const FormLabel = styled.label`
  width: 15rem;
  font-weight: 600;
  color: var(--color-grey-500);
  font-size: 1.8rem;
`;

const FormInput = styled.input`
  background-color: transparent;
  color: var(--color-grey-100);
  border: none;
  border-bottom: 1px solid var(--color-grey-800);
  outline: none;
  font-size: 1.6rem;
  padding: 0.5rem;
  border-radius: 2px;

  width: 100%;
  &::placeholder {
    color: var(--color-grey-700);
    font-style: italic;
  }
`;

const RadioDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

function AddFoodItemForm() {
  return (
    <Container>
      <FormHeadDiv>
        <Heading as="h1" color="light">
          Add New Item
        </Heading>
      </FormHeadDiv>

      <FormDiv>
        <FormInputDiv>
          <FormLabel htmlFor="name">Name : </FormLabel>
          <FormInput
            id="name"
            type="text"
            required
            placeholder="chicken steam momo"
          />
        </FormInputDiv>

        <FormInputDiv>
          <FormLabel htmlFor="category">Category : </FormLabel>
          <FormInput
            id="category"
            type="text"
            placeholder="noodles, momo . . ."
            required
          />
        </FormInputDiv>
        <FormInputDiv>
          <FormLabel htmlFor="category">Price : </FormLabel>
          <FormInput
            id="category"
            type="text"
            placeholder="eg: {small : 30, medium : 50} (seperated them with a comma)"
            required
          />
        </FormInputDiv>

        <FormInputRadiosDiv>
          <FormLabel>Type :</FormLabel>
          <RadioDiv>
            <StyledRadioBtn name="type" labelId="veg">
              Veg
            </StyledRadioBtn>
            <StyledRadioBtn name="type" labelId="non-veg">
              Non-veg
            </StyledRadioBtn>
          </RadioDiv>
        </FormInputRadiosDiv>

        <FormInputDiv>
          <FormLabel>Image :</FormLabel>
          <FormInput type="file" required />
        </FormInputDiv>
      </FormDiv>

      <Button size="medium" variation="primary" type="submit">
        Submit
      </Button>
    </Container>
  );
}

export default AddFoodItemForm;
