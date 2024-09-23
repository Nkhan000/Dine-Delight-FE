/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import StyledTag from "./StyledTag";
import Pagination from "./Pagination";
import { useGetAllOrders } from "../features/user/useGetAllOrders";
import Spinner from "./Spinner";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

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
    color: var(--color-grey-300);
    justify-content: center;
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
function TableItem({ tableType, allOrders, isLoading }) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const currentPageNumber = searchParams.get("page");
  const skipValue = 5;
  const totalNumberOfPages = Math.ceil(allOrders.length / skipValue);

  console.log(allOrders);
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
          {isLoading && <Spinner />}
          {!isLoading && tableType == "lastSevenDaysList" && (
            <>
              {allOrders
                .slice(
                  (currentPageNumber - 1) * skipValue,
                  currentPageNumber * skipValue
                )
                .map((orderItem, oIdx) => (
                  <TableItemContent
                    key={`${orderItem.type}${oIdx}`}
                    tableType={tableType}
                  >
                    <span>0{oIdx + 1}</span>
                    <span>{orderItem.cuisineId.name}</span>
                    <span>
                      {new Date(
                        orderItem.reservationDate || orderItem.deliveryDate
                      ).toLocaleDateString()}
                    </span>
                    <StyledTag type={orderItem.type}>
                      {orderItem.type}
                    </StyledTag>
                    <span>${orderItem.total.toFixed(2)}</span>
                    <RemarksSpan remarks={orderItem.remarks}>
                      Hover to see remarks
                    </RemarksSpan>
                  </TableItemContent>
                ))}
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
      {tableType == "lastSevenDaysList" && (
        <PaginationDiv>
          <Pagination numberOfPages={totalNumberOfPages} />
        </PaginationDiv>
      )}
    </TableItemDiv>
  );
}

export default TableItem;
