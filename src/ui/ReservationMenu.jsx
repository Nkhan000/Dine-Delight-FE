/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "./Heading";
import StyledOptions from "./StyledOptions";
import GradientHighlight from "./GradientHighlight";
import StyledRadioBtn from "./StyledRadioBtn";
import Button from "./Button";

const Container = styled.div`
  /* padding: 2.4rem 4rem;
  border: 2px solid var(--color-grey-900); */
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 5rem;
  /* justify-content: center; */
`;

// const OptionDivs = styled.div``;

const OptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--color-grey-700);

  & select {
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--color-grey-50);
    font-size: 1.6rem;
    width: 100%;
    & option {
      background-color: var(--color-medium-black);
      outline: none;
      /* color: var(--color-grey-700); */
    }
  }
  & input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--color-grey-50);
  }
`;

const OptionLable = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--color-grey-50);
`;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const FilterDiv = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

const QuantityDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* width: 100%; */
  /* margin: 0 5rem; */
`;

const QuantityHead = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 0 5rem; */
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-grey-500);

  & span {
    font-weight: 600;
    font-size: 2rem;
    color: var(--color-grey-50);
  }
`;
const QuantityDetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 0 6rem; */
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-grey-700);

  & span {
    /* font-weight: 600; */
    font-size: 1.6rem;
    color: var(--color-grey-50);
  }
`;

const InformationI = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  height: 2.1rem;
  width: 2.1rem;
  border-radius: 5rem;
  background-color: var(--color-grey-900);
  font-size: 1.4rem;
  font-weight: 600;
  /* font-style: italic; */
  font-family: "Indie Flower", cursive;
  position: relative;
  cursor: pointer;

  &:hover div {
    cursor: pointer;
    display: block;
  }
`;

const HoverInformationBtn = styled.div`
  display: flex;
  background-color: var(--color-grey-900);
  position: absolute;
  font-weight: 500;
  color: var(--color-grey-50);
  left: 130%;
  padding: 1.2rem;
  width: 40rem;
  border-radius: 1rem;
  display: none;
`;

const RadioBtnsDiv = styled.div``;
const RadioBtnDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;

const RadioElementContainer = styled.div``;

const ButtonDivs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;

const ImportantInfoDiv = styled.ol`
  display: flex;
  flex-direction: column;
  color: var(--color-grey-50);
  & span {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  & li {
    font-size: 1.4rem;
    list-style: lower-roman;
    margin: 0.6rem 2rem;
    word-spacing: 0.1rem;
    /* margin-bottom: 0.6rem; */
  }
`;

function ReservationMenu() {
  return (
    <Container>
      <HeaderDiv>
        <FilterDiv>
          <OptionDiv>
            <OptionLable>Party Size</OptionLable>
            <select>
              <option>2 person</option>
              <option>3 person</option>
              <option>4 person</option>
            </select>
          </OptionDiv>
          <OptionDiv>
            <OptionLable>Prefered Time</OptionLable>
            <select>
              <option>4:30 PM</option>
              <option>5:30 PM</option>
              <option>6:30 PM</option>
            </select>
          </OptionDiv>
          <OptionDiv>
            <OptionLable>Date</OptionLable>
            <input type="date" />
          </OptionDiv>
        </FilterDiv>
      </HeaderDiv>

      <RadioBtnsDiv>
        <RadioBtnDiv>
          <StyledRadioBtn inpType="checkbox" labelId={"welcome-priority"}>
            Prioritze your reservation
          </StyledRadioBtn>
          <InformationI>
            <span>i</span>
            <HoverInformationBtn>
              Adds extra time (30mins) to your reservation and charges
              accordingly. You can always add more waiting time to your
              reservation before or after checking out 😊
            </HoverInformationBtn>
          </InformationI>
        </RadioBtnDiv>
      </RadioBtnsDiv>

      <QuantityDiv>
        <QuantityHead>
          <span>Quantity</span>
          <span>Price</span>
        </QuantityHead>
        <QuantityDetailsDiv>
          <span>2 x person</span>
          <span>$ 99.00</span>
        </QuantityDetailsDiv>
        <QuantityDetailsDiv>
          <span>prioroty (+8%)</span>
          <span>$ 7.92</span>
        </QuantityDetailsDiv>
        <QuantityHead>
          <span>Grand total</span>
          <span>$106.92</span>
        </QuantityHead>
      </QuantityDiv>

      <ImportantInfoDiv>
        <span>Important considerations :</span>
        <li>
          You will start getting reminder on your phone and application before
          15 mins of arrival time.
        </li>
        <li>Your reservation held for extra 15 mins after the arrival time.</li>
        <li>
          If canceled 1 hour before the arrival time you will get refunded 65%
          of your money.
        </li>
      </ImportantInfoDiv>

      <ButtonDivs>
        <Button size="large" variation="primary">
          Continue your reservation
        </Button>
      </ButtonDivs>
    </Container>
  );
}

export default ReservationMenu;
