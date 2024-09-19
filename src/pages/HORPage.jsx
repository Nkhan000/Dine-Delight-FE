/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import Pagination from "../ui/Pagination";
import GradientHighlight from "../ui/GradientHighlight";
import FoodMenu from "../ui/FoodMenu";
import GalleryContainer from "../ui/GalleryContainer";
import ReservationMenu from "../ui/ReservationMenu";
import VenueMenu from "../ui/VenueMenu";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import CreateReview from "../ui/CreateReview";
import { useCusineSingle } from "../features/cuisines/useCuisines";
import Spinner from "../ui/Spinner";

const StyledContainer = styled.div`
  background-color: var(--color-medium-black);
  /* background-color: white; */
  position: relative;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 7rem;
  display: flex;
  justify-content: center;
  z-index: 3;
  position: sticky;
  top: 0%;
  background-color: var(--color-grey-900);
  padding-bottom: 5rem;
`;

const ContentDiv1 = styled.div`
  width: 80rem;
  background-color: var(--color-medium-black);
  z-index: 2;
  position: relative;
  padding-bottom: 3rem;
`;
const ContentDiv2 = styled.div`
  width: 43rem;
  background-color: var(--color-medium-black);
  z-index: 2;
  position: relative;
`;

const ContentHead = styled.div`
  width: 100%;
  padding: 1.2rem 1.8rem;
  overflow: hidden;
  background-color: var(--color-medium-black);
  border-bottom: 1px solid;

  position: sticky;
  top: 5.3rem;
  transform: translateY(-5.5rem);
  z-index: 5;
`;

const HeadMenuItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  & li {
    font-weight: 600;
    color: var(--color-grey-50);
  }
`;

const HeadingDiv = styled.div`
  margin-top: -5rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
`;

const CaptionTxt = styled.div`
  font-size: 1.4rem;
  color: var(--color-grey-50);
  line-height: 2;
  word-spacing: 0.4rem;
`;

const OfferDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    color: var(--color-grey-400);
    font-weight: 600;
    font-size: 2rem;
  }
`;

// spinner
const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: var(--color-grey-800);
  z-index: 5;
`;

function HORPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // setting initial params in the url for intial functioning
  useEffect(() => {
    if (
      !searchParams.has("serviceType") &&
      !searchParams.has("serviceOption")
    ) {
      searchParams.set("serviceType", "delivery");
      searchParams.set("serviceOption", "offers");
      searchParams.set("page", "1");
      searchParams.set("for", "all");
      searchParams.set("category", "all");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const { cuisineData, isLoading, error } = useCusineSingle(
    searchParams.get("id")
    // searchParams.get("serviceType") || "delivery"
  );
  // console.log(!isLoading && data);

  if (isLoading)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  // console.log(cuisineData);
  const { name, logoImage, address, deliveryPrice, reservationPrice, _id } =
    cuisineData;

  return (
    <StyledContainer>
      <GalleryContainer data={cuisineData} />
      <ContentContainer>
        <ContentDiv1>
          <ContentHead>
            <HeadMenuItems>
              <Filter
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                value="delivery"
                valueFor={"serviceType"}
              >
                Delivery/Takeout
              </Filter>
              <Filter
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                value="venue-booking"
                valueFor={"serviceType"}
              >
                Venue Booking
              </Filter>
              <Filter
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                value="table-reservation"
                valueFor={"serviceType"}
              >
                Table Reservation
              </Filter>
            </HeadMenuItems>
          </ContentHead>
          <HeadingDiv>
            <Heading as="h1" color="light" align="center" family="second">
              <GradientHighlight>Order</GradientHighlight> a good memory with us
            </Heading>
            <CaptionTxt>
              Offering a unique &apos;Royal Indian&apos; experience, this
              restaurant is ideal for those wanting to enjoy an Indian
              vegetarian meal. Shakahari offers a plethora of diverse and
              delectable cuisines from various parts of India.
            </CaptionTxt>
          </HeadingDiv>
          {searchParams.get("serviceType") === "delivery" && (
            <FoodMenu
              searchParams={searchParams}
              foodMenu={cuisineData.foodMenu}
              cuisineImage={logoImage}
              cuisineName={name}
              cuisineAddress={address}
              deliveryPrice={deliveryPrice}
            />
          )}
          {searchParams.get("serviceType") === "table-reservation" && (
            <ReservationMenu
              searchParams={searchParams}
              cuisineImage={logoImage}
              cuisineName={name}
              cuisineAddress={address}
              reservationPrice={reservationPrice}
              cuisineId={_id}
            />
          )}
          {searchParams.get("serviceType") === "venue-booking" && (
            <VenueMenu
              searchParams={searchParams}
              venueMenu={cuisineData.venueMenu}
              cuisineImage={logoImage}
              cuisineName={name}
              cuisineAddress={address}
            />
          )}
        </ContentDiv1>

        <ContentDiv2>
          <ContentHead>
            <HeadMenuItems>
              <Filter
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                id="filter-btn-2"
                value="offers"
                valueFor={"serviceOption"}
              >
                Offers
              </Filter>
              <Filter
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                id="filter-btn-2"
                value="rate_us"
                valueFor={"serviceOption"}
              >
                Rate us !
              </Filter>
            </HeadMenuItems>
          </ContentHead>
          {searchParams.get("serviceOption") === "rate_us" && <CreateReview />}
          {searchParams.get("serviceOption") === "offers" && (
            <OfferDiv>
              <span>No offers available right now</span>
            </OfferDiv>
          )}
        </ContentDiv2>
      </ContentContainer>
    </StyledContainer>
  );
}

export default HORPage;
