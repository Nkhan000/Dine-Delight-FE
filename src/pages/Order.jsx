/* eslint-disable no-unused-vars */
// import Heading from "../ui/Heading";

import styled, { css } from "styled-components";
import Heading from "../ui/Heading";
import Filter from "../ui/Filter";
import HotelCard from "../ui/HotelCard";
import SearchSection from "../ui/SearchSection";
import Button from "../ui/Button";
import { FaHeart } from "react-icons/fa6";
import Pagination from "../ui/Pagination";
import StyledOptions from "../ui/StyledOptions";

import FeaturedReservations from "../ui/FeaturedReservations";
import FeaturedReviews from "../ui/FeaturedReviews";
import ContactUs from "../ui/ContactUs";
import { useSearchParams } from "react-router-dom";
import { useCuisine } from "../features/cuisines/useCuisines";
import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";

const Container = styled.div`
  background-color: var(--color-medium-black);
`;
const ContainerUpper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: var(--color-medium-black);
  padding: 3.5rem 8rem;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-top: 3rem;
  padding: 3.5rem 8rem;

  ${(props) =>
    props.bg == "dark" &&
    css`
      background-color: var(--color-medium-black);
    `};
  ${(props) =>
    props.bg == "darker" &&
    css`
      background-color: var(--color-grey-900);
    `};
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const HeaderItemsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const HeaderFilterDiv = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  overflow: hidden;
`;

const RowDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ListDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.8rem;
  padding: 0 1rem;
`;

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 35rem), 1fr));
  column-gap: 4rem;
  row-gap: 1.8rem;
`;

const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
`;

// const datas = [
//   {
//     id: 1,
//     name: "ace bar & lounge",
//     image: "./img/Table-001.jpg",
//     address: "kathmandu, nepal",
//     services: ["delivery", "reservation", "venue booking"],
//     avgRatings: "4.5",
//     totalNumberOfRatings: "129",
//     caption:
//       "Contemporary italian restaurant - Our menu changes every 6 months",
//   },
//   {
//     id: 2,
//     name: "Restro italiano",
//     address: "kathmandu, nepal",
//     image: "./img/Table-002.jpg",
//     services: ["delivery", "reservation"],
//     avgRatings: "3.9",
//     totalNumberOfRatings: "355",
//     caption:
//       "Contemporary italian restaurant - Our menu changes every 6 months",
//   },
//   {
//     id: 3,
//     name: "mr. continental",
//     address: "kathmandu, nepal",
//     image: "./img/Table-003.jpg",
//     services: ["delivery", "reservation"],
//     avgRatings: "4.0",
//     totalNumberOfRatings: "278",
//     caption: "Continental foods - Our menu changes every 6 months",
//   },
//   {
//     id: 4,
//     name: "lords hotel & restaurant",
//     address: "kathmandu, nepal",
//     image: "./img/Table-004.jpg",
//     services: ["delivery", "reservation", "venue"],
//     avgRatings: "2.0",
//     totalNumberOfRatings: "200",
//     caption:
//       "Award winning Adriatico Trattoria Italiana, with Owner-Chef Marco Cudazzo and his lovely wife Rosettaake great pride in their quaint dining establishment. Born in the city of Ortona, Italy, on the Adriatic Sea, Chef Marco Cudazzo knows cuisine",
//   },
//   {
//     id: 5,
//     name: "Resorto classic",
//     address: "kathmandu, nepal",
//     image: "./img/Table-005.jpg",
//     services: ["reservation", "venue"],
//     avgRatings: "4.5",
//     totalNumberOfRatings: "350",
//     caption:
//       "Classic and royal place to enjoy your special occassions - Colourful, fresh, bold & simply authentic",
//   },
//   {
//     id: 6,
//     name: "ace bar & lounge",
//     address: "kathmandu, nepal",
//     image: "./img/Table-006.jpg",
//     services: ["delivery", "reservation"],
//     avgRatings: "4.5",
//     totalNumberOfRatings: "129",
//     caption: "Contemporary frecnh restaurant - Our menu changes every 6 months",
//   },
// ];

function Order() {
  const [searchParams, setSearchParams] = useSearchParams();

  if (!searchParams.has("page") && !searchParams.has("for")) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", 1);
    newSearchParams.set("for", "all");
    setSearchParams(newSearchParams);
  }

  const currentPage = +searchParams.get("page");
  const currentFilter = searchParams.get("for");
  const { isLoading, cuisineData, numberOfPages } = useCuisine(
    currentPage,
    currentFilter
  );

  const filterBtns = [
    { all: "All" },
    { delivery: "For delivery" },
    { reservation: "For reservation" },
    { venue: "For venue" },
  ];
  // if (!cuisineData) return <h1>No data found</h1>;

  // function getIntoView() {
  //   const element = document.getElementById("hotel-card-container");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  // function handleClick(e) {
  //   const elementValue = e.target.getAttribute("value");
  //   setParam((s) => (s = elementValue));

  //   searchParams.set("gap", 1);
  //   setSearchParams(searchParams);
  // }
  // function nextPage() {
  //   if (currentPage === numberOfPages) return;
  //   const next = currentPage + 1;
  //   searchParams.set("page", next);
  //   setSearchParams(searchParams);
  //   getIntoView();
  // }

  // function prevPage() {
  //   if (currentPage === 1) return;
  //   const prev = currentPage - 1;
  //   searchParams.set("page", prev);
  //   setSearchParams(searchParams);
  //   getIntoView();
  // }

  return (
    <>
      <SearchSection />
      <Container>
        <ContainerUpper id={"hotel-card-container"}>
          <HeaderDiv>
            <Heading as="h1" color="light">
              Hotels and restaurants near you
            </Heading>
            <HeaderItemsDiv>
              <HeaderFilterDiv>
                {filterBtns.map((btn, index) => (
                  <Filter
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    key={index}
                    value={Object.keys(btn)[0]}
                    valueFor={"for"}
                  >
                    {Object.values(btn)[0]}
                  </Filter>
                ))}
              </HeaderFilterDiv>
              <RowDiv>
                <StyledOptions options={["Highest rated", "Lowest rated"]} />
                <Button variation="link">
                  <FaHeart /> Favourites
                </Button>
              </RowDiv>
            </HeaderItemsDiv>
          </HeaderDiv>
          <ListDiv>
            <ListContainer>
              {isLoading ? (
                <Spinner />
              ) : (
                cuisineData?.map((data) => (
                  <HotelCard key={data.id} data={data} isLoading={isLoading} />
                ))
              )}
            </ListContainer>
            <PaginationDiv>
              <Pagination isLoading={isLoading} numberOfPages={numberOfPages} />
            </PaginationDiv>
          </ListDiv>
        </ContainerUpper>

        <StyledSection bg="dark">
          <Heading as="h2" color="light">
            Famous Reservations in your area
          </Heading>
          <FeaturedReservations />
        </StyledSection>
        <StyledSection bg="darker">
          <Heading as="h2" color="light">
            What people say{" "}
          </Heading>

          <FeaturedReviews />
        </StyledSection>
        <StyledSection bg="dark">
          <ContactUs nopaddings="no" />
        </StyledSection>
      </Container>
    </>
  );
}

export default Order;
