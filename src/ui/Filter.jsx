/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.li`
  display: inline-block;
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  display: flex;
  gap: 0.4rem;
`;

// const FilterButton = styled(Link)`
const FilterButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-grey-50);
  outline: none;
  border: none;

  &.active {
    background-color: none;
    background-color: var(--color-orange-50);
  }

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-orange-50);
    `}
  ${(props) =>
    props.size === "large" &&
    css`
      font-size: 10rem;
    `}
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:focus {
    outline: var(--outline-orange-01);
  }

  &:hover:not(:disabled) {
    background-color: var(--color-orange-50);
  }
`;
function Filter({
  setSearchParams,
  searchParams,
  id = "filter-btn-1",
  value,
  valueFor,
  children,
}) {
  function handleClick(e) {
    searchParams.set(valueFor, value);
    setSearchParams(searchParams);
    e.target.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    const elements = document.querySelectorAll(`#${id}`);
    elements.forEach((el) => {
      if (el.getAttribute("value") === searchParams?.get(valueFor)) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }, [searchParams, valueFor, id]);

  return (
    <StyledFilter>
      <FilterButton
        id={id}
        value={value}
        valueFor={valueFor}
        onClick={handleClick}
      >
        {children}
      </FilterButton>
    </StyledFilter>
  );
}

export default Filter;
