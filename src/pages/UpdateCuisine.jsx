/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "../ui/Button";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import EditFoodMenu from "../ui/DASHBOARD/Business/EditFoodMenu";

const Container = styled.div`
  height: 100vh;
  background-color: var(--color-grey-900);
  padding: 6rem 10rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const HeadBtnDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const EditMenuDiv = styled.div`
  width: 100%;
  height: 80vh;
  border: 1px solid var(--color-grey-800);
  border-radius: 3rem;
`;

function UpdateCuisine() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChangeParam(e) {
    const elemenetValue = e.target.getAttribute("value");
    searchParams.set("updateType", elemenetValue);
    setSearchParams(searchParams);
  }

  useEffect(() => {
    if (!searchParams.get("updateType")) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("updateType", "food-menu");
      setSearchParams(newParams);
    }
  }, [searchParams, setSearchParams]);

  const HeadBtns = (val, label) => {
    return (
      <Button
        value={val}
        variation={
          searchParams.get("updateType") === val ? "primary" : "secondary"
        }
        size="medium"
        onClick={handleChangeParam}
      >
        {label}
      </Button>
    );
  };
  return (
    <Container>
      <HeadBtnDiv>
        {HeadBtns("food-menu", "Food Menu")}
        {HeadBtns("reservation-menu", "Reservation Menu")}
        {HeadBtns("venues-menu", "Venues Menu")}
        {HeadBtns("highlights", "Highlights")}
      </HeadBtnDiv>

      <EditMenuDiv>
        {searchParams.get("updateType") === "food-menu" && <EditFoodMenu />}
      </EditMenuDiv>
    </Container>
  );
}

export default UpdateCuisine;
