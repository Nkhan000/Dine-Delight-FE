/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import StyledTag from "./StyledTag";
import Pagination from "./Pagination";

const TableItemDiv = styled.div`
  padding: 1rem 0rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const TableItemHead = styled.div`
  display: grid;
  ${(props) =>
    props.tableType === "reservationListForBusiness" &&
    css`
      grid-template-columns: 5rem repeat(7, 16rem);
    `}
  ${(props) =>
    props.tableType === "lastSevenDaysList" &&
    css`
      grid-template-columns: 5rem repeat(5, 17rem);
    `}
  padding: 1.4rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background-color: var(--color-grey-600);
  & span {
    display: flex;
    font-weight: 600;
    color: var(--color-grey-300);
    justify-content: center;
  }
`;
const TableItemContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const TableItemContent = styled.div`
  display: grid;
  ${(props) =>
    props.tableType === "reservationListForBusiness" &&
    css`
      grid-template-columns: 5rem repeat(7, 16rem);
    `}
  ${(props) =>
    props.tableType === "lastSevenDaysList" &&
    css`
      grid-template-columns: 5rem repeat(5, 17rem);
    `}
  padding: 1.4rem;
  position: relative;
  background-color: var(--color-medium-black);
  &:hover {
    cursor: pointer;
    background-color: var(--color-grey-500);
  }

  & span,
  div {
    display: flex;
    /* font-weight: 600; */
    color: var(--color-grey-300);
    justify-content: center;
    /* border-bottom: 1px solid; */
  }
`;

const PaginationDiv = styled.div`
  justify-self: end;
  align-self: end;
`;

const RemarksSpan = styled.span`
  position: relative;
  overflow: visible;

  &::after {
    position: absolute;
    content: ${({ remarks }) => `"${remarks}"`};
    left: -100%;
    top: -100%;
    color: var(--color-grey-50);
    font-size: 1.4rem;
    background-color: var(--color-medium-black);
    background-color: var(--color-grey-900);
    padding: 1rem;
    border: 1px solid var(--color-grey-700);
    display: none;
  }

  &:hover::after {
    display: block;
  }
`;
function TableItem({ tableType }) {
  return (
    <TableItemDiv>
      <div>
        {tableType == "reservationListForBusiness" && (
          <TableItemHead tableType={tableType}>
            <span>S.No.</span>
            <span>Cutomer name</span>
            <span>Party Size</span>
            <span>Reservation ID.</span>
            <span>Status</span>
            <span>Charge</span>
            <span>Paid</span>
            <span>Remarks</span>
          </TableItemHead>
        )}
        {tableType == "lastSevenDaysList" && (
          <TableItemHead tableType={tableType}>
            <span>S.No.</span>
            <span>Cuisine name</span>
            <span>Date</span>
            <span>Type</span>
            <span>Charge</span>
            <span>Remarks</span>
          </TableItemHead>
        )}

        <TableItemContentDiv>
          {tableType == "lastSevenDaysList" && (
            <>
              <TableItemContent tableType={tableType}>
                <span>001</span>
                <span>The Bar</span>
                <span>2024-05-09</span>
                <StyledTag type="delivery">delivery</StyledTag>
                <span>$47.99</span>
                <RemarksSpan remarks="Delivered on Time by The bar delivery guy">
                  Food was delivered
                </RemarksSpan>
              </TableItemContent>
              <TableItemContent tableType={tableType}>
                <span>002</span>
                <span>The Bar</span>
                <span>2024-05-09</span>
                <StyledTag type="reservation">reservation</StyledTag>
                <span>$47.99</span>
                <RemarksSpan remarks="Delivered on Time by The bar delivery guy">
                  Food was delivered
                </RemarksSpan>
              </TableItemContent>
              <TableItemContent tableType={tableType}>
                <span>001</span>
                <span>The Bar</span>
                <span>2024-05-09</span>
                <StyledTag type="venue">venue</StyledTag>
                <span>$47.99</span>
                <RemarksSpan remarks="Delivered on Time by The bar delivery guy">
                  Food was delivered
                </RemarksSpan>
              </TableItemContent>
            </>
          )}
          {tableType == "reservationListForBusiness" && (
            <TableItemContent tableType={tableType}>
              <span>001</span>
              <span>The Bar</span>
              <span>2024-05-09</span>
              <StyledTag type="delivery">delivery</StyledTag>
              <span>$47.99</span>
              <RemarksSpan remarks="customer arrived on time">
                Customer has arrived
              </RemarksSpan>
            </TableItemContent>
          )}
          {/* <TableItemContent>
            <span>001</span>
            <span>Jonas Schemdd</span>
            <span>4 poeple</span>
            <span>660c8fd4748e8e35724a9697</span>
            <StyledTag type="verified">Verified</StyledTag>
            <span>$47.99</span>
            <StyledTag type="yes">Yes</StyledTag>
            <RemarksSpan remarks="customer arrived on time">
              Customer has arrived
            </RemarksSpan>
          </TableItemContent>
          <TableItemContent>
            <span>002</span>
            <span>Customer Fins</span>
            <span>4 poeple</span>
            <span>660c8fd4748e8e35724a9697</span>
            <StyledTag type="cancled">Cancled</StyledTag>
            <span>$47.99</span>
            <StyledTag type="no">--</StyledTag>
            <RemarksSpan remarks="Reservation was cancled as customer did not show up on time">
              Reservation cancled
            </RemarksSpan>
          </TableItemContent>
          <TableItemContent>
            <span>003</span>
            <span>Jhon doe</span>
            <span>4 poeple</span>
            <span>660c8fd4748e8e35724a9697</span>
            <StyledTag type="cancled">Cancled</StyledTag>
            <span>$47.99</span>
            <StyledTag type="no">--</StyledTag>
            <RemarksSpan remarks="Reservation was cancled by customer, Money was not refunded">
              Reservation cancled
            </RemarksSpan>
          </TableItemContent>
          <TableItemContent>
            <span>004</span>
            <span>Nazir Khan</span>
            <span>4 poeple</span>
            <span>660c8fd4748e8e35724a9697</span>
            <StyledTag type="cancled">Cancled</StyledTag>
            <span>$47.99</span>
            <StyledTag type="no">--</StyledTag>
            <RemarksSpan remarks="Reservation was cancled as customer did not show up on time. Money was not refunded.">
              Reservation cancled
            </RemarksSpan>
          </TableItemContent> */}
        </TableItemContentDiv>
      </div>
      {tableType == "reservationListForBusiness" && (
        <PaginationDiv>
          <Pagination numberOfPages={4} />
        </PaginationDiv>
      )}
    </TableItemDiv>
  );
}

export default TableItem;
