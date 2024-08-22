import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import GradientHighlight from "./GradientHighlight";
import { FaLocationDot } from "react-icons/fa6";
import SearchSuggestion from "./SearchSuggestion";

const Container = styled.div`
  background-color: var(--color-grey-900);
  width: 100%;
  /* height: 25rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  /* padding: 2.5rem 0; */
  padding: 5rem 0rem;
  padding-bottom: 3rem;
`;

const SearchDiv = styled.form`
  display: grid;
  grid-template-columns: 70rem 1fr;
  gap: 1rem;
  /*
  display: flex;
  width: 100%;
  justify-content: center; */
  padding: 0 20rem;
`;
const LocationDiv = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  color: var(--color-grey-50);
`;
const GetLocationBtn = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-orange-50);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  & svg {
    fill: var(--color-orange-50);
  }

  &:active,
  &:focus {
    border: none;
    outline: var(--outline-orange-01);
  }

  &:hover {
    text-decoration: underline 1px var(--color-orange-50);
  }
`;
const SearchInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.8rem 2rem;
  border: 1px solid white;
  font-size: 1.6rem;
  opacity: 0.7;
  transition: opacity 0.1s ease-in;

  &:active,
  &:focus {
    outline: var(--outline-orange-01);
    border: var(--outline-orange-01);
    opacity: 1;
  }

  &:valid {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    & + div {
      top: 100%;
      display: block;
    }
  }

  &:not(:focus) {
    border-radius: 0.5rem;

    & + div {
      display: none;
    }
  }
  &:invalid {
    border-radius: 0.5rem;
    & + div {
      top: 0%;
      display: none;
    }
  }
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SuggestionsDiv = styled.div`
  width: 100%;
  position: absolute;
  transition-property: transform, display;
  transition-duration: 0.3s;
  display: none;
  top: 0%;
  left: 0%;
`;

const data = [
  {
    id: 1,
    type: "restaurant",
    name: "New york Cheescakes",
    address: "New york",
  },
  {
    id: 2,
    type: "location",
    name: "smallville street",
    address: "smallville street, New york",
  },
  {
    id: 3,
    type: "restaurant",
    name: "New york Cheescakes",
    address: "New york",
  },
  {
    id: 4,
    type: "location",
    name: "smallville street",
    address: "smallville street, New york",
  },
];

function SearchSection() {
  return (
    <Container>
      <Heading as="h1" color="light" family="second">
        Search from <GradientHighlight>Best </GradientHighlight>cusines around
        you
      </Heading>
      <SearchDiv>
        <InputDiv>
          <SearchInput
            placeholder="Search for Location, cuisines & hotels . . ."
            required
          />
          <SuggestionsDiv>
            {data.map((item) => (
              <SearchSuggestion dataItem={item} key={item.id} />
            ))}
          </SuggestionsDiv>
        </InputDiv>
        <Button size="large" variation="primary">
          Search
        </Button>
      </SearchDiv>
      <LocationDiv>
        <span>Looks like you are in Kathmandu, Not correct ?</span>
        <GetLocationBtn type="location">
          <FaLocationDot />
          <span> Get current Location </span>
        </GetLocationBtn>
      </LocationDiv>
    </Container>
  );
}

export default SearchSection;
