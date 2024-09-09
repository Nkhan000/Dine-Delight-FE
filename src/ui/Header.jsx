/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import { useGetUser } from "../features/authentication/useGetUser";
import Options from "./Options";
import Notification from "./NotificationWindow";
// import { HiArrowDown, HiArrowDownCircle } from "react-icons/hi2";
import {
  FaBell,
  FaCartArrowDown,
  FaChevronDown,
  FaOutdent,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import DropDown from "./DropDown";
import { FaArrowPointer } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  z-index: 4;
  background-color: var(--color-medium-black);
  padding: 1rem 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-property: position;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  ${(props) =>
    props.isSticky &&
    css`
      // onscroll set this styles
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 4;
      margin-bottom: 10rem;
    `}
`;

const NavBtnDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

const NavLinkDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const NavLinkItems = styled.div`
  display: flex;
  gap: 1rem;

  &:last-child {
    margin-left: 2rem;
  }
`;
const NavLinkItemBg = styled(Link)`
  font-size: 1.6rem;
  padding: 1.8rem 2rem;
  font-weight: 500;

  background-color: var(--color-medium-black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-300);

  &:hover {
    color: var(--color-orange-00);
  }

  &:focus {
    outline: 1px solid var(--color-orange-50);
    outline-offset: -1px;
  }
`;

const NavLogoDiv = styled.div`
  height: 4rem;
`;
const NavLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const DropMenuDiv = styled.div`
  position: relative;
  & svg {
    height: 1.2rem;
    width: 1.2rem;
    fill: var(--color-grey-100);
  }

  &:hover div {
    /* position: absolute; */
    width: max-content;
    height: max-content;
    padding: 0.6rem 2.8rem;
    opacity: 1;
    top: 100%;
    left: 5%;
  }

  &:hover div ul {
    display: flex;
  }
`;

const HeaderDropMenuDiv = styled.div`
  position: relative;
`;

const HeaderDropMenuDivInner = styled.div`
  display: flex;
  gap: 2rem;
  padding-right: 1rem;
  align-items: center;
  cursor: pointer;
`;

const HeaderCheckbox = styled.input`
  display: none;
  &:checked + ul {
    display: block;
    transform: translateY(5rem);
    opacity: 1;
  }
  &:checked + ul + label div {
    outline: 4px solid var(--color-grey-300);
  }
`;

const HeaderDropMenuList = styled.ul`
  position: absolute;
  opacity: 0.3;
  width: calc(100% + 2rem);
  background-color: var(--color-medium-black);
  padding: 0.5rem;
  transition: transform 0.3s ease-in;
  display: none;
  border-radius: 1rem;
  z-index: 30;
  border: 1px solid;

  & li {
    display: flex;
    padding: 1.2rem;
    color: var(--color-grey-300);
    text-transform: capitalize;

    &:hover {
      background-color: var(--color-grey-500);
    }
  }
`;

const ProfileName = styled.span`
  color: var(--color-grey-100);
  font-size: 2.4rem;
  text-transform: capitalize;
  font-family: inherit;
  font-weight: 700;
`;
const ProfilePicture = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: white;
  outline: 2px solid var(--color-grey-300);
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Header() {
  const { data, isLoading, error } = useGetUser();

  let user;
  if (!isLoading) {
    user = data.user;
  }

  return (
    <StyledHeader>
      <NavLinkDiv>
        <HeaderLogo />
        <NavLinkItems>
          <NavLinkItemBg to="/order">Delivery</NavLinkItemBg>
          <NavLinkItemBg to="/reservations">Reservations</NavLinkItemBg>
          <NavLinkItemBg to="/venue">Venue Bookings</NavLinkItemBg>
          <NavLinkItemBg to="/order">FAQs</NavLinkItemBg>
        </NavLinkItems>
      </NavLinkDiv>
      <NavBtnDiv>
        {!isLoading && user ? (
          <Options>
            <Options.Menu>
              <HeaderDropMenuDiv>
                <Options.Toggle id="header-option" showToggleBtn={false}>
                  <Options.List id="header-option">
                    <Options.Button>
                      <Button
                        as={Link}
                        size="link"
                        variation="link"
                        to="/dashboard"
                      >
                        Profile
                        <FaUser />
                      </Button>
                    </Options.Button>
                    <>
                      <Notification.Open openname="cart">
                        <Options.Button addClickFunc={false}>
                          <Button size="link" variation="link">
                            Cart
                            <FaCartArrowDown />
                          </Button>
                        </Options.Button>
                      </Notification.Open>
                      <Notification.NotificationWindow name="cart">
                        {/* TEST TEST TEST TEST */}
                      </Notification.NotificationWindow>

                      <Notification.Open openname="notification">
                        <Options.Button addClickFunc={false}>
                          <Button size="link" variation="link">
                            Notification
                            <FaBell />
                          </Button>
                        </Options.Button>
                      </Notification.Open>

                      <Notification.NotificationWindow name="notification">
                        {/* NOTIFICATION NOTIFICATION NOTIFICATIONs */}
                      </Notification.NotificationWindow>
                    </>
                    <Options.Button>
                      <Button size="link" variation="link">
                        Logout
                        <FaSignOutAlt />
                      </Button>
                    </Options.Button>
                  </Options.List>

                  <HeaderDropMenuDivInner>
                    <ProfileName>{user.name}</ProfileName>
                    <ProfilePicture>
                      <ProfileImg
                        src={`${
                          user.image ? `${user.image}` : "./img/person-002.jpg"
                        }`}
                      />
                    </ProfilePicture>
                  </HeaderDropMenuDivInner>
                </Options.Toggle>
              </HeaderDropMenuDiv>
            </Options.Menu>
          </Options>
        ) : (
          <>
            <Button as={Link} to="/login" size="medium" variation="primary">
              Sign up
            </Button>
            <Button size="medium">Contact us</Button>
          </>
        )}
      </NavBtnDiv>
    </StyledHeader>
  );
}

export default Header;
// import styled from "styled-components";
// import Button from "./Button";
// import { Link } from "react-router-dom";

// const StyledHeader = styled.header`
//   position: relative;
//   background-color: var(--color-medium-black);
//   z-index: 15;
//   padding: 1rem 8rem 0 8rem;
// `;

// const StyledNavDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   z-index: 15;
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 1.2rem;
//   align-items: center;
// `;

// const HeaderBackImg = styled.img`
//   width: 100%;
//   height: 100%;
// `;
// const HeaderBackImgDiv = styled.div`
//   position: absolute;
//   width: 100%;
//   left: 0%;
//   top: -25%;
//   transform: rotate(180deg);
//   z-index: -5;
// `;

// const NavLogoDiv = styled.div`
//   width: 20rem;
//   height: 100%;
// `;
// const NavLogo = styled.img`
//   width: 100%;
//   height: 100%;
// `;

// function Header() {
//   return (
//     <StyledHeader>
//       <HeaderBackImgDiv>
//         <HeaderBackImg src="./img/wave-black.svg" alt="back-wave" />
//       </HeaderBackImgDiv>

//       <StyledNavDiv>
//         <NavLogoDiv>
//           <NavLogo src="./img/logo-white.svg" alt="" />
//         </NavLogoDiv>
//         <Nav>
//           <Button as={Link} to="/order" variation="link" size="link">
//             Order
//           </Button>
//           <Button as={Link} to="/order" variation="link" size="link">
//             Reservation
//           </Button>
//           <Button as={Link} to="/order" variation="link" size="link">
//             Pickups
//           </Button>
//           <Button size="medium">Login</Button>
//           <Button size="medium" variation="primary">
//             Sign up
//           </Button>
//         </Nav>
//       </StyledNavDiv>
//     </StyledHeader>
//   );
// }

// export default Header;
// {/* <HeaderDropMenuList>
//               <Button as={Link} size="link" variation="link" to="/dashboard">
//                 Profile
//                 <FaUser />
//               </Button>
//               <Button size="link" variation="link">
//                 Cart
//                 <FaCartArrowDown />
//               </Button>
//               <Button size="link" variation="link">
//                 Notifications
//                 <FaBell />
//               </Button>
//               <Button size="link" variation="link">
//                 Logout
//                 <FaSignOutAlt />
//               </Button>
//             </HeaderDropMenuList> */}
