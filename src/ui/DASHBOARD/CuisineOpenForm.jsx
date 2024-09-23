/* eslint-disable no-unused-vars */
import styled from "styled-components";
import GradientHighlight from "../GradientHighlight";
import { HiLocationMarker } from "react-icons/hi";
import Button from "../Button";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Container = styled.div`
  width: 75vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  /* overflow-x: hidden; */
  overflow-y: scroll;

  /* &:first-child {
    padding-top: 4rem;
  } */
`;

const FormHeadDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 1rem; */
`;

const FormHeadTextBg = styled.p`
  font-size: 3.6rem;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-grey-700);
`;

const FormHeadTextSm = styled.p`
  font-size: 2.6rem;
  font-weight: 600;
  font-family: inherit;
  color: var(--color-grey-500);
`;

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const FormInputContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 0 2rem;
`;

const FormInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormInputHead = styled.label`
  font-family: inherit;
  font-weight: 500;
  color: var(--color-grey-500);
  font-size: 1.8rem;
`;
const FormInputDivInner = styled.div`
  position: relative;

  & button {
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translate(-3%, -50%);
  }

  & svg {
    font-size: 2rem;
  }
`;
const FormInput = styled.input`
  font-size: 1.6rem;
  padding: 1rem 2rem;
  position: relative;
  width: 100%;

  /* border: 2px solid var(--color-grey-300); */
  border: none;
  border-radius: 0.5rem;
  outline: 2px var(--color-grey-200) solid;
  /* outline: 5px grey; */

  &:focus {
    outline: 2px var(--color-grey-500) solid;

    /* border: 2px solid var(--color-grey-700); */
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 2rem;

  border: none;
  border-radius: 0.5rem;
  outline: 2px var(--color-grey-200) solid;

  &:focus {
    outline: 2px var(--color-grey-500) solid;
  }
`;

const FormPaginationBtnDiv = styled.div`
  display: flex;
  gap: 3rem;
`;

const FormBottomDiv = styled.div`
  padding: 0 3rem;
  & ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & li {
      font-size: 1.4rem;
      list-style: disc;
      color: var(--color-grey-600);
      font-style: italic;
    }
  }
`;
// const AcceptRadioBtnDo

function CuisineOpenForm() {
  const numberOfPagesOfForm = 3;
  const [currPage, setCurrPage] = useState(0);
  console.log(Array(numberOfPagesOfForm).fill(1));
  // if currPage is equal to index of the current form then display that page
  // const transformValue =
  function nextBtn() {
    setCurrPage((s) =>
      currPage === numberOfPagesOfForm ? currPage : (s += 1)
    );
  }
  function prevBtn() {
    setCurrPage((s) => (currPage === 0 ? currPage : (s -= 1)));
  }

  return (
    <Container>
      <FormHeadDiv>
        <FormHeadTextBg>
          Set up your{" "}
          <GradientHighlight>
            <span>Cuisine</span>
          </GradientHighlight>
        </FormHeadTextBg>
      </FormHeadDiv>
      <FormInputContainer transform={currPage}>
        <FormInputContainerInner>
          <FormHeadTextSm>General Information </FormHeadTextSm>
          <FormDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="name-input">
                Name of the cuisine
              </FormInputHead>
              <FormInput
                id="name-input"
                type="text"
                placeholder="input your name"
              />
            </FormInputDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="address-input">
                Cusine Address
              </FormInputHead>
              <FormInputDivInner>
                <FormInput
                  id="address-input"
                  type="text"
                  placeholder="input your name"
                />
                <button>
                  <HiLocationMarker />
                </button>
              </FormInputDivInner>
            </FormInputDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="services-input">
                Services included
              </FormInputHead>
              <FormInput
                id="services-input"
                type="text"
                placeholder="['delivery', 'reservation', 'venue']. use (,) as a seperator"
              />
            </FormInputDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="name-owner-input">
                Cuisine Owned by
              </FormInputHead>
              <FormInput
                id="name-owner-input"
                type="text"
                placeholder="input your name"
              />
            </FormInputDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="name-input">Business email</FormInputHead>
              <FormInput
                id="name-input"
                type="text"
                placeholder="input your name"
              />
            </FormInputDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="name-input">Owner email</FormInputHead>
              <FormInput
                id="name-input"
                type="text"
                placeholder="input your name"
              />
            </FormInputDiv>
          </FormDiv>
        </FormInputContainerInner>

        <FormInputContainerInner>
          <FormHeadTextSm>Legal Information </FormHeadTextSm>
          <FormDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="name-input">PAN No.</FormInputHead>
              <FormInput
                id="name-input"
                type="text"
                placeholder="input your name"
              />
            </FormInputDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="address-input">
                License Number
              </FormInputHead>
              <FormInputDivInner>
                <FormInput
                  id="address-input"
                  type="text"
                  placeholder="input your name"
                />
              </FormInputDivInner>
            </FormInputDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="services-input">
                PAN Card Copy
              </FormInputHead>
              <FormInput
                id="services-input"
                type="file"
                placeholder="Upload a copy of your PAN card in pdf/jpeg format"
              />
            </FormInputDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="name-owner-input">
                License Copy
              </FormInputHead>
              <FormInput
                id="name-owner-input"
                type="file"
                placeholder="Upload a copy of your License certificate in pdf/jpeg format"
              />
            </FormInputDiv>
          </FormDiv>
        </FormInputContainerInner>

        <FormInputContainerInner>
          <FormHeadTextSm>Profile Information </FormHeadTextSm>
          <FormDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="name-input">
                Logo or Profile Image
              </FormInputHead>
              <FormInput
                id="name-input"
                type="file"
                placeholder="input your name"
              />
            </FormInputDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="name-input">Facebook Page</FormInputHead>
              <FormInput
                id="name-input"
                type="text"
                placeholder="Provide a link to your facebook profile"
              />
            </FormInputDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="name-input">Instagram Page</FormInputHead>
              <FormInput
                id="name-input"
                type="text"
                placeholder="Provide a link to your instagram profile"
              />
            </FormInputDiv>
            <FormInputDiv>
              <FormInputHead htmlFor="address-input">
                Introductory Caption
              </FormInputHead>
              <FormInputDivInner>
                <FormTextarea
                  type="text"
                  placeholder="Enter a small and catchy introduction for your cuisine"
                ></FormTextarea>
              </FormInputDivInner>
            </FormInputDiv>
          </FormDiv>
        </FormInputContainerInner>
      </FormInputContainer>
      <FormBottomDiv>
        <ul>
          <li>
            By clicking &apos;Accept and Continue&apos;, you agree to our terms
            and conditions for becoming a Dine Delights partner.
          </li>
          <li>
            After completing the account verification process, you can easily
            upload your menu and highlights.
          </li>
        </ul>
      </FormBottomDiv>
      <FormPaginationBtnDiv>
        <Button size="large" variation="primary" onClick={nextBtn}>
          Accept & Continue
          <FaChevronRight />
        </Button>
      </FormPaginationBtnDiv>
    </Container>
  );
}

export default CuisineOpenForm;
