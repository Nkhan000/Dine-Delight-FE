/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const OptionsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  & span {
    font-size: 1.4rem;
    color: var(--color-grey-500);
    font-weight: 600;
    text-transform: capitalize;
  }
  & label {
    font-size: 1.5rem;
  }

  & select {
    background-color: transparent;
    border: none;
    color: var(--color-grey-50);
    font-size: 1.4rem;
    padding: 0.5rem;
    padding-right: 0;

    &:focus,
    &:active {
      outline: var(--outline-orange-01);
    }

    & option {
      color: var(--color-grey-900);
    }
  }
`;

function StyledOptions({
  sortby = "sort by",
  options,
  selectedOption,
  setSelectedOption,
  itemId,
  cuisineId,
  dispatch,
  dispatchFn,

  setToParam,
}) {
  // const [selectedOption, setSelectedOption] = useState(options[0]);
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(e) {
    if (setToParam) {
      searchParams.set(`${sortby.toLowerCase()}`, e.target.value.toLowerCase());
      setSearchParams(searchParams);
      return;
    }
    setSelectedOption(e.target.value);
    dispatch(dispatchFn({ cuisineId, itemId, newSize: e.target.value }));
  }
  return (
    <OptionsDiv>
      <label>{sortby}:</label>
      <select value={selectedOption} onChange={handleChange}>
        {options?.map((opt, index) => (
          <option key={index}>{opt}</option>
        ))}
      </select>
    </OptionsDiv>
  );
}

export default StyledOptions;
