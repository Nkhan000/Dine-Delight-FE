/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Filter from "./Filter";
import StyledOptions from "./StyledOptions";
import TableItem from "./TableItem";
import Button from "./Button";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-800);
  /* height: 50rem; */
  padding: 1.6rem 4rem;
  font-size: 1.4rem;
  border-radius: 7px;
  /* overflow: hidden; */

  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;
const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TableHeadFilterDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const TableeTextTabHead = styled.p`
  font-weight: 600;
  font-family: inherit;
  color: var(--color-grey-500);
  font-size: 3.2rem;
`;

const FilterBtnDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  border: 1px solid;
  padding: 0.3rem 0rem;
  border-radius: 1rem;
`;
const FilterSortDiv = styled.div``;

const TableContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const TableSearchDiv = styled.form`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const TableSearchInput = styled.input`
  /* color: var(--color-black-medium); */
  color: var(--color-grey-50);
  background-color: transparent;
  border: 1px solid var(--color-grey-500);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

const TableSearchBtnDiv = styled.div``;

function Table() {
  return (
    <StyledTable>
      <TableHead>
        <TableeTextTabHead>Reservations</TableeTextTabHead>
        <TableHeadFilterDiv>
          <FilterSortDiv>
            <StyledOptions options={["Most recent", "Most dated"]} />
          </FilterSortDiv>
          <FilterBtnDiv>
            <Filter value={"all"}>All</Filter>
            <Filter value={"confirmed"}>Confirmed</Filter>
            <Filter value={"unconfirmed"}>Unconfirmed</Filter>
            <Filter value={"cancled"}>Cancled</Filter>
          </FilterBtnDiv>
        </TableHeadFilterDiv>
      </TableHead>
      <TableContentDiv>
        <TableSearchDiv>
          <TableSearchInput
            type="text"
            placeholder="Search customer security code/ID"
          />
          <TableSearchBtnDiv>
            <Button size="medium" variation="primary">
              Search
            </Button>
          </TableSearchBtnDiv>
        </TableSearchDiv>

        <TableItem tableType={"reservationListForBusiness"} />
      </TableContentDiv>
    </StyledTable>
  );
}

export default Table;
