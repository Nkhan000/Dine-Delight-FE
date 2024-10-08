/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styled from "styled-components";
import Heading from "./Heading";
import StyledOptions from "./StyledOptions";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
`;

const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuItems = styled.div`
  padding: 1rem 2.6rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 1.4rem;
`;

const HeadingDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0rem;
  z-index: 6;
  background-color: var(--color-medium-black);
  padding: 1.2rem 1.8rem;

  border-bottom: 0.5px solid #444141;
`;
const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
`;
function ItemsMenu({
  numberOfPages,
  categories,
  menuName,
  showPagination,
  children,
}) {
  return (
    <>
      <MenuContainer>
        <HeadingDiv2>
          <Heading as="h3" color="light">
            {menuName}
          </Heading>
          <FilterDiv>
            {menuName == "menu" ? (
              <>
                <StyledOptions
                  sortby={"For"}
                  options={["all", "veg", "non-veg"]}
                  setToParam={true}
                />
                <StyledOptions
                  sortby={"Category"}
                  options={["all", ...categories]}
                  setToParam={true}
                />
              </>
            ) : (
              <StyledOptions
                sortby={"party size"}
                options={["All", "10-25", "50-100", "100-200", "200-300"]}
                setToParam={true}
              />
            )}
          </FilterDiv>
        </HeadingDiv2>

        <MenuItems>{children}</MenuItems>
      </MenuContainer>
      {showPagination && (
        <PaginationDiv>
          <Pagination numberOfPages={numberOfPages} />
        </PaginationDiv>
      )}
    </>
  );
}

export default ItemsMenu;
