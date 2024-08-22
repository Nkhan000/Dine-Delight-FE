/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaHotel } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Suggestions = styled(Link)`
  display: grid;
  grid-template-columns: 3rem 1fr;
  background-color: var(--color-grey-50);
  padding: 1rem 1.8rem;
  gap: 1.2rem;

  &:hover {
    background-color: var(--color-grey-200);
  }
`;

const SuggestionIconDiv = styled.div`
  border-right: 2px solid var(--color-grey-400);
  /* border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem; */

  & svg {
    height: 2rem;
    width: 2rem;
    fill: var(--color-grey-400);
  }
`;

const SuggestionTextDiv = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;

function SearchSuggestion({ dataItem }) {
  return (
    <Suggestions>
      <SuggestionIconDiv>
        {dataItem.type == "restaurant" ? <FaHotel /> : <FaMapLocation />}
      </SuggestionIconDiv>
      <SuggestionTextDiv>
        {dataItem.type == "location"
          ? dataItem.address
          : `${dataItem.name}, ${dataItem.address}`}
      </SuggestionTextDiv>
    </Suggestions>
  );
}

export default SearchSuggestion;
