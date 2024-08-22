/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { BannerContext } from "../utils/contexts";
import { Link } from "react-router-dom";
import { useGetUser } from "../features/authentication/useGetUser";
import Modal from "./Modal";
import VenueBookingModelDiv from "./VenueBookingModelDiv";
import { useForm } from "react-hook-form";

const Container = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 13rem 1fr;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;

  & * input {
    color: var(--color-grey-50);
    font-family: "Indie Flowers", cursive;
    font-weight: 600;
    background-color: transparent;
    border: none;
    outline: none;
    display: none;
    &:focus {
      outline: none;
      border: none;
      caret-color: transparent;
    }
  }
`;

const ImageDiv = styled.div`
  /* width: 12rem; */
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  padding: 0rem 1.4rem;
`;

const TextHeadDivOutter = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextHeadDivInner = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
`;

const TextHead = styled.span`
  font-size: 2.4rem;
  color: var(--color-grey-50);
  font-family: "Indie Flowers", cursive;
  font-weight: 600;
`;

const IncludesDiv = styled.div`
  /* grid-column: 1 / -1; */
`;
const IncludesText = styled.span`
  font-size: 1.3rem;
  font-style: italic;
  color: var(--color-grey-500);
`;

const TextPrice = styled.span`
  color: var(--color-grey-50);
  font-size: 2rem !important;
  font-weight: 600;
`;

const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ButtonsDiv = styled.div`
  column-gap: 1.4rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* align-self: flex-end; */
  justify-content: space-between;
`;

const QuantityTextDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const QuantityTextSm = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-500);
`;
const QuantityTextBg = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-50);
  font-weight: 500;
`;

function VenueMenuItem({
  data,
  cuisineName,
  cuisineImage,
  cuisineAddress,
  cuisineId,
  searchParams,
  deliveryPrice,
}) {
  const { name, images, aprPartySize, pricePerDay, _id } = data;
  const { setItemObj, setBannerText, setType } = useContext(BannerContext);

  const { data: user, isLoading, error } = useGetUser();
  const { register, handleSubmit, setValue } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  function handleClickWhenNoUser(e) {
    e.preventDefault();
    if (!user) {
      setBannerText("Please be logged in to continue");
      setType("error-warning");
      return;
    }
  }

  return (
    <Container>
      <ImageDiv>
        <StyledImage src={`./img/${images[0]}`} alt="food-image" />
      </ImageDiv>
      <TextDiv>
        <TextHeadDivOutter>
          <TextHeadDivInner>
            <TextHead>{name}</TextHead>
          </TextHeadDivInner>
          <IncludesDiv>
            <IncludesText>
              <b>Good for occassions like : </b>
              {data.goodForOcassions?.map((item, index) => (
                <span key={index}>{`${item}, `}</span>
              ))}
            </IncludesText>
          </IncludesDiv>
        </TextHeadDivOutter>

        <QuantityDiv>
          <TextPrice>${pricePerDay}/day</TextPrice>
          <QuantityTextDiv>
            <QuantityTextSm>Good For : </QuantityTextSm>
            <QuantityTextBg>{aprPartySize} People</QuantityTextBg>
          </QuantityTextDiv>
        </QuantityDiv>

        <ButtonsContainer>
          <ButtonsDiv>
            {user ? (
              <Modal>
                <Modal.Open name="open-venue-booking-model">
                  <Button
                    size="medium"
                    variation="primary"
                    hover="no"
                    // type="submit"
                  >
                    Available For Booking
                  </Button>
                </Modal.Open>
                <Modal.ModalWindow bg={"dark"}>
                  <VenueBookingModelDiv
                    name={name}
                    aprPartySize={aprPartySize}
                    images={images}
                    pricePerDay={pricePerDay}
                    cuisineId={cuisineId}
                    cuisineImage={cuisineImage}
                    cuisineName={cuisineName}
                    cuisineAddress={cuisineAddress}
                  />
                </Modal.ModalWindow>
              </Modal>
            ) : (
              <Button
                size="medium"
                variation="primary"
                hover="no"
                onClick={handleClickWhenNoUser}
              >
                Available For Booking
              </Button>
            )}
          </ButtonsDiv>
          <ButtonsDiv>
            <Button
              as={Link}
              to="/checkout"
              size="medium"
              variation="secondary"
              hover="no"
            >
              See Images
            </Button>
          </ButtonsDiv>
        </ButtonsContainer>
      </TextDiv>
    </Container>
  );
}

export default VenueMenuItem;
