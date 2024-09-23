/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "../Button";

import { HiPencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ProfileDiv = styled.div`
  display: grid;
  grid-template-columns: 65% auto;
  grid-gap: 3rem;
`;

const ProfileTabsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-bottom: 1.6rem;
`;

const ProfileTabsHead = styled.div`
  /* padding-bottom: 1rem; */
`;
const ProfileTabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfileTextTab = styled.div`
  position: relative;
  /* width: fit-content; */
  padding: 1rem 3rem;
  border-radius: 1rem;
  transition: border 0.3s;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--color-grey-400);

    & button {
      display: block;
    }
  }
`;
const ProfileTextTabHead = styled.p`
  font-weight: 600;
  font-family: inherit;
  color: var(--color-grey-500);
  font-size: 1.8rem;
`;
const ProfileTextTabSpan = styled.span`
  color: var(--color-grey-50);
  font-size: 2rem;
`;
const ProfileEditBtn = styled.button`
  /* background-color: grey; */
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  position: absolute;
  top: 3%;
  right: 1%;
  display: none;
  border: none;
  & svg {
    fill: white;
  }
`;

const ProfileMenusDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 2rem;
  padding: 1rem 2rem;
  /* padding-top: 4rem; */
  gap: 1.7rem;
  position: relative;
`;

const ProfileMenusHead = styled.p`
  /* position: absolute;
  top: 1%;
  left: 2%; */
  color: var(--color-grey-500);
  font-weight: 700;
  font-size: 2.8rem;
`;

const ProfileMenusTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
`;
const ProfileMenusTabTex = styled.p`
  font-family: inherit;
  font-size: 1.8rem;
  color: var(--color-grey-100);
`;

function DashboardProfile() {
  return (
    <ProfileDiv>
      <ProfileTabs>
        <ProfileTabsHead>
          <ProfileMenusHead>Your Cuisine&apos;s Deatils</ProfileMenusHead>
        </ProfileTabsHead>
        <ProfileTabsContainer>
          <ProfileTextTab>
            <ProfileTextTabHead>Name</ProfileTextTabHead>
            <ProfileTextTabSpan>Durbar bar and lounge</ProfileTextTabSpan>
            <ProfileEditBtn>
              <HiPencilSquare />
            </ProfileEditBtn>
          </ProfileTextTab>
          <ProfileTextTab>
            <ProfileTextTabHead>Address</ProfileTextTabHead>
            <ProfileTextTabSpan>Kathmandu, Nepal</ProfileTextTabSpan>
            <ProfileEditBtn>
              <HiPencilSquare />
            </ProfileEditBtn>
          </ProfileTextTab>

          <ProfileTextTab>
            <ProfileTextTabHead>Services</ProfileTextTabHead>
            <ProfileTextTabSpan>
              Delivery, Reservations and Venue
            </ProfileTextTabSpan>
            <ProfileEditBtn>
              <HiPencilSquare />
            </ProfileEditBtn>
          </ProfileTextTab>
          <ProfileTextTab>
            <ProfileTextTabHead>Contact No.</ProfileTextTabHead>
            <ProfileTextTabSpan>+977-9271972193</ProfileTextTabSpan>
            <ProfileEditBtn>
              <HiPencilSquare />
            </ProfileEditBtn>
          </ProfileTextTab>
          <ProfileTextTab>
            <ProfileTextTabHead>Email</ProfileTextTabHead>
            <ProfileTextTabSpan>durbarlonge.bar@gmail.com</ProfileTextTabSpan>
            <ProfileEditBtn>
              <HiPencilSquare />
            </ProfileEditBtn>
          </ProfileTextTab>
          <ProfileTextTab>
            <ProfileTextTabHead>Reservation Charge</ProfileTextTabHead>
            <ProfileTextTabSpan>$59 per person</ProfileTextTabSpan>
            <ProfileEditBtn>
              <HiPencilSquare />
            </ProfileEditBtn>
          </ProfileTextTab>
        </ProfileTabsContainer>

        <Button size="large" variation="primary">
          Edit your cuisine
        </Button>
      </ProfileTabs>

      <ProfileMenusDiv>
        <ProfileMenusHead>Menus / Lists</ProfileMenusHead>
        <ProfileMenusTab>
          <ProfileMenusTabTex>Add/Edit Food menu</ProfileMenusTabTex>
          <Button
            as={Link}
            to="/update-cuisine?type=food-menu"
            size="small"
            variation="primary"
          >
            Click here
          </Button>
        </ProfileMenusTab>
        <ProfileMenusTab>
          <ProfileMenusTabTex>Add/Edit Venue</ProfileMenusTabTex>
          <Button
            as={Link}
            to="/update-cuisine?type=venue"
            size="small"
            variation="primary"
          >
            Click here
          </Button>
        </ProfileMenusTab>
        <ProfileMenusTab>
          <ProfileMenusTabTex>Edit Reservations</ProfileMenusTabTex>
          <Button
            as={Link}
            to="/update-cuisine?type=reservation"
            size="small"
            variation="primary"
          >
            Click here
          </Button>
        </ProfileMenusTab>
        <ProfileMenusTab>
          <ProfileMenusTabTex>Add/Remove Highlights</ProfileMenusTabTex>
          <Button
            as={Link}
            to="/update-cuisine?type=highlights"
            size="small"
            variation="primary"
          >
            Click here
          </Button>
        </ProfileMenusTab>
      </ProfileMenusDiv>
    </ProfileDiv>
  );
}

export default DashboardProfile;
