import styled from "styled-components";
import Button from "./Button";
// import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div`
  z-index: 3;
  /* height: 2rem; */
  /* background-color: var(--color-grey-900); */
  background-color: var(--color-medium-black);
  opacity: 0;
  position: absolute;
  top: 100%;
  left: -5%;
  transition: top 0.3s, left 0.3s, opacity 0.2s;
  width: 0;
  height: 0;
  padding: 0;
  border: 1px solid var(--color-grey-700);
  border-radius: 0.4rem;
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  display: none;
`;

const LinkItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

function DropDown() {
  return (
    <Container>
      <LinksList>
        <LinkItem as={Link} to="/reservations">
          <Button variation="link" size="link">
            Order food
            {/* <FaChevronRight /> */}
          </Button>
        </LinkItem>
        <LinkItem as={Link} to="/order">
          <Button variation="link" size="link">
            Pickup
            {/* <FaChevronRight /> */}
          </Button>
        </LinkItem>
        <LinkItem as={Link} to="/reservations">
          <Button variation="link" size="link">
            reservations
            {/* <FaChevronRight /> */}
          </Button>
        </LinkItem>
        <LinkItem as={Link} to="/venue-bookings">
          <Button variation="link" size="link">
            Venue Booking
            {/* <FaChevronRight /> */}
          </Button>
        </LinkItem>
      </LinksList>
    </Container>
  );
}

export default DropDown;
