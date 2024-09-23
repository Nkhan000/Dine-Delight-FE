/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";

const StyledPagination = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

const CircleButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: 1.3rem;
  color: var(--color-grey-50);
  font-weight: 600;
  padding: 0.8rem;
  border-radius: 5rem;

  ${(props) =>
    props.active == "true" &&
    css`
      background-color: var(--color-orange-50);
    `}
  &:hover {
    background-color: var(--color-orange-50);
  }
`;

const PageNumDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PaginationButton = styled.button`
  background-color: transparent;
  color: ${(props) =>
    props.active ? " var(--color-orange-50)" : "var(--color-grey-50)"};
  border: none;
  outline: var(--outline-orange-02);
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-orange-50);
    color: var(--color-grey-50);
  }
`;
function Pagination({ isLoading, numberOfPages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function createAscendingArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(i + 1); // Add values starting from 1
    }
    return array;
  }

  const array = createAscendingArray(numberOfPages);
  const currentPage = +searchParams.get("page");

  // shal remove this function in future
  function getIntoView(id = "hotel-card-container") {
    // const element = document.getElementById("hotel-card-container");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function nextPage() {
    if (currentPage === numberOfPages) return;
    const next = currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
    getIntoView();
  }

  function prevPage() {
    if (currentPage === 1) return;
    const prev = currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
    getIntoView();
  }
  // console.log(arrat);

  return (
    <StyledPagination>
      <Buttons>
        <PaginationButton onClick={prevPage} disabled={isLoading}>
          <FaArrowLeft />
          <P>Prev</P>
        </PaginationButton>
        {/* TO IMPLEMENT : PAGINATION WHERE ONLY FEW NUMBERS OF PAGES ARE SEEN AND THE LAST NUMBER OF THE PAGE IS WITH ... IN BETWEEN */}
        <PageNumDiv>
          {!isLoading &&
            array.map((el) => (
              <CircleButton
                key={el}
                active={`${searchParams.get("page") == el}`}
              >
                <span>0{el}</span>
              </CircleButton>
            ))}
        </PageNumDiv>
        <PaginationButton onClick={nextPage} disabled={isLoading}>
          <P>Next</P>
          <FaArrowRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
