/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
import Heading from "./Heading";
import Button from "./Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StyledTag from "./StyledTag";
// import RatingsContent from "./RatingsContent";
import AddressSpan from "./AddressSpan";
import StyledStars from "./StyledStars";
import SpinnerMini from "./SpinnerMini";

const StyledCard = styled.li`
  width: 100%;
  background-color: var(--color-grey-900);
  border-radius: 1rem;
  overflow: hidden;
  transition-property: transform, background-color;
  transition-duration: 0.3s;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: var(--shadow-orange-03);
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 25rem;
  padding: 1rem;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;

  object-fit: cover;
`;

const ContentDiv = styled.div`
  padding: 1rem 2rem;
  padding-top: 0rem;
`;

const ContentHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const HeadingDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagsDiv = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const ContentText = styled.div`
  font-size: 1.6rem;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 1rem 0.5rem;
  column-gap: 0.8rem;

  /* padding-bottom: 2rem; */
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;

// RATINGS DIV
const ContentRatings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const RatingsIconDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  & div svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-orange-50);
  }

  & span {
    font-size: 1.2rem;
    font-weight: 800;
  }
`;

const RatingTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & span {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

function HotelCard({ data, isLoading }) {
  const [isLiked, setIsLiked] = useState(false);
  const [compressedImage, setCompressedImage] = useState(null);

  const {
    _id,
    name,
    services,
    address,
    logoImage,
    description,
    ratingsAverage,
    numberOfReviews,
  } = data;
  console.log(data);

  const shrinkedDescription = description.split(" ").splice(0, 15).join(" ");

  useEffect(() => {
    // Create a new image element
    const img = new Image();
    img.src = `./img/${logoImage}`;

    // When the image is loaded
    img.onload = () => {
      // Create a canvas element
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Set canvas dimensions to desired low resolution
      canvas.width = 350; // Adjust width as needed
      canvas.height = 250; // Adjust height as needed

      // Draw the high resolution image onto the canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Get the data URL of the canvas as a lower resolution image
      const lowResolutionDataUrl = canvas.toDataURL("image/jpeg", 0.5); // Adjust quality (0.1 - 1)

      // Set the low resolution image URL in state
      setCompressedImage(lowResolutionDataUrl);
    };
  }, [logoImage]); // Trigger effect when imageUrl changes

  return (
    <StyledCard>
      <ImageDiv>
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <StyledImage
            src={compressedImage && `${compressedImage}`}
            alt="table"
            loading="lazy"
          />
        )}
      </ImageDiv>

      <ContentDiv>
        <ContentHead>
          <TagsDiv>
            {typeof services === "object" ? (
              services.map((service, index) => (
                <StyledTag key={index} type={service}>
                  {service}
                </StyledTag>
              ))
            ) : (
              <StyledTag type={services}>{services}</StyledTag>
            )}
          </TagsDiv>
          <HeadingDiv>
            <Heading as="h4" color="light">
              {name}
            </Heading>
            <AddressSpan address={address} />
          </HeadingDiv>
        </ContentHead>

        {
          <ContentRatings>
            <RatingsIconDiv>
              <StyledStars ratingsAverage={ratingsAverage} />
              <span>({ratingsAverage})</span>
            </RatingsIconDiv>
            <RatingTextDiv>
              <span>{numberOfReviews} reviews</span>
            </RatingTextDiv>
          </ContentRatings>
        }

        <ContentText>{shrinkedDescription}. . .</ContentText>
        <ButtonDiv>
          <StyledLink to={`/cuisine?id=${_id}`}>
            <Button size="large" variation="primary">
              Start ordering now !
            </Button>
          </StyledLink>
          <Button
            size="noBorderLarge"
            variation="secondary"
            liked={isLiked}
            onClick={() => setIsLiked((s) => !s)}
          >
            {isLiked && <FaHeart />}
            {!isLiked && <FaRegHeart />}
          </Button>
        </ButtonDiv>
      </ContentDiv>
    </StyledCard>
  );
}

export default HotelCard;
