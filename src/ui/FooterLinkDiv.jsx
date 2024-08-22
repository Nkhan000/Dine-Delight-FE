/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Heading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;
const StyledLinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 0 0.5rem;
`;

// const HeadingDiv = styled.div``;

const StyledLink = styled(Link)`
  color: var(--color-grey-500);
  font-size: 1.3rem;
  padding: 0.1rem 0.5rem;
  transition: color 0.3s;
  text-transform: capitalize;

  &:focus {
    outline: 1px solid var(--color-orange-50);
    outline-offset: 1px;
    color: var(--color-grey-50);
  }

  &:hover {
    color: var(--color-grey-50);
  }
`;

function FooterLinkDiv({ type }) {
  const datas = [
    {
      id: "our services",
      dataObj: [
        { order: "order" },
        { reservation: "reservation" },
        { pickup: "pickup" },
        { booking: "Venue Booking" },
      ],
    },
    {
      id: "for bussiness",
      dataObj: [
        { deliveryHero: "become a Delivery Hero" },
        { bussinessPartnership: "bussiness partnership" },
        { jobs: "work with us" },
        { internship: "internships" },
      ],
    },
    {
      id: "contact us",
      dataObj: [
        { tel: "+987-5418778" },
        { mailto: "dindelight@gmail.com" },
        { address: "Manhattan 07-streert 5" },
      ],
    },
  ];

  return (
    <Container>
      <Heading as="h3" color="light">
        {type}
      </Heading>
      <StyledLinkDiv>
        {datas.map(
          (data) =>
            data.id === type &&
            data.dataObj.map((item) => {
              let linkAddress = `${Object.keys(item)}`;
              if (type === "for bussiness")
                linkAddress = `bussiness/${Object.keys(item)}`;
              //   if (type === "contact us")
              //     linkAddress = `contact/${Object.keys(item)}`;
              return (
                <>
                  {Object.keys(item) !== "tel" ||
                  Object.keys(item) !== "mailto" ? (
                    <StyledLink to={`/${linkAddress}`} key={Object.keys(item)}>
                      {Object.values(item)}
                    </StyledLink>
                  ) : (
                    <a href={`${Object.keys(item)}:${Object.values(item)}`}>
                      {Object.values(item)}
                    </a>
                  )}
                </>
              );
            })
        )}
      </StyledLinkDiv>
    </Container>
  );
}

export default FooterLinkDiv;

{
  /* <StyledLink to="/order">Food Delivery</StyledLink>
        <StyledLink to="/order">Hotel reservation</StyledLink>
        <StyledLink to="/order">Takeaways</StyledLink>
        <StyledLink to="/order">Venue Booking</StyledLink> */
}
