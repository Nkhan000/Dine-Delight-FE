/* eslint-disable no-unused-vars */
// import styled, { css } from "styled-components";
import HotelCardSmall from "./HotelCardSmall";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FeaturedListContainer from "./FeaturedListContainer";

// const ListDivSmall = styled.div`
//   position: relative;
// `;

// const ListContainerSmall = styled.div`
//   display: flex;
//   overflow-x: auto;
//   gap: 2.5rem;
//   padding: 0 1.8rem;

//   // setting scrollbar width 0
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   scrollbar-width: none;
// `;

// const ArrowIconButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   padding: 0.8rem;
//   border-radius: 5rem;
//   background-color: var(--color-grey-50);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: none;
//   &:focus {
//     outline: var(--orange-outline-01);
//   }

//   & svg {
//     fill: var(--color-grey-900);
//     width: 2.2rem;
//     height: 2.2rem;
//   }

//   ${(props) =>
//     props.direction === "left" &&
//     css`
//       left: -0%;
//     `}
//   ${(props) =>
//     props.direction === "right" &&
//     css`
//       right: -0%;
//     `} /* left: 0; */
// `;

function FeaturedReservations() {
  return (
    <FeaturedListContainer>
      <HotelCardSmall img={"006"} name={"RDEN Bar & Restaurant"} />
      <HotelCardSmall img={"001"} name={"Ace Lounge & Bar"} />
      <HotelCardSmall img={"002"} name={"LORDS International"} />
      <HotelCardSmall img={"003"} name={"The Smokey House"} />
      <HotelCardSmall img={"004"} name={"RDEN Bar & Restaurant"} />
      <HotelCardSmall img={"005"} name={"Ace Lounge & Bar"} />
      <HotelCardSmall img={"007"} name={"LORDS International"} />
      <HotelCardSmall img={"008"} name={"The Smokey House"} />
    </FeaturedListContainer>
    // <ListDivSmall>
    //   <ListContainerSmall>
    //     <HotelCardSmall img={"006"} name={"RDEN Bar & Restaurant"} />
    //     <HotelCardSmall img={"001"} name={"Ace Lounge & Bar"} />
    //     <HotelCardSmall img={"002"} name={"LORDS International"} />
    //     <HotelCardSmall img={"003"} name={"The Smokey House"} />
    //     <HotelCardSmall img={"004"} name={"RDEN Bar & Restaurant"} />
    //     <HotelCardSmall img={"005"} name={"Ace Lounge & Bar"} />
    //     <HotelCardSmall img={"007"} name={"LORDS International"} />
    //     <HotelCardSmall img={"008"} name={"The Smokey House"} />

    //     <ArrowIconButton direction="left">
    //       <IoIosArrowBack />
    //     </ArrowIconButton>
    //     <ArrowIconButton direction="right">
    //       <IoIosArrowForward />
    //     </ArrowIconButton>
    //   </ListContainerSmall>
    // </ListDivSmall>
  );
}

export default FeaturedReservations;
