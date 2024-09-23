/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Button from "../ui/Button";

import GradientHighlight from "../ui/GradientHighlight";

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetUser } from "../features/authentication/useGetUser";
import DashboardUserProfile from "../ui/DASHBOARD/DashboardUserProfile";
import DashboardBusinessProfile from "../ui/DASHBOARD/DashboardBusinessProfile";

const Container = styled.div`
  background-color: var(--color-grey-900);
  padding: 0rem 6rem;
  padding-bottom: 4rem;
`;

// Dashboard style if there is no cusine setup yet
const ContainerDiv = styled.div`
  padding: 5rem 0rem;
  padding-bottom: 2rem;
`;
const OnStartUpCusine = styled.div`
  width: 100%;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
  & p {
    font-family: inherit;
    color: var(--color-grey-300);
    font-size: 2.6rem;
    font-weight: 500;
  }
`;
const DashboardMain = styled.div``;
const DashboardHeadText = styled.span`
  /* border: 1px solid; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  & span {
    font-size: 4rem;
    font-weight: 800;
    font-family: inherit;
    color: var(--color-grey-50);
  }
`;

const DashboardHeadMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2rem 2.3rem;
`;

const InsightsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2.3rem;
  & span {
    font-size: 3rem;
    font-weight: 800;
    color: var(--color-grey-50);
  }
`;
const InsightsDivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 1.6rem; */
`;

const InsightTab = styled.div`
  background-color: var(--color-medium-black);
  height: 25rem;
  width: 30rem;
  padding: 1.6rem 2rem;
  border-radius: 1.3rem;
  transition-property: transform, background-color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:hover {
    background-color: var(--color-grey-500);
    transform: scale(1.2);
  }
`;

const InsightTabHeadDiv = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  gap: 1rem;
  & span {
    font-size: 2.6rem;
  }
`;
const InsightTabContentDiv = styled.div`
  height: max-content;
  padding: 1rem 0.5rem;
`;

const InsightTabContentTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
`;
const InsightTabContentHead = styled.p`
  color: var(--color-grey-700);
  font-size: 2.2rem;
  font-weight: 600;
`;
const InsightTabContentTextSm = styled.p`
  color: var(--color-grey-50);
  font-size: 1.5rem;
`;
const InsightTabContentTextBg = styled.p`
  color: var(--color-grey-50);
  font-weight: 500;
  font-size: 1.5rem;
`;

const BottomContainer = styled.div`
  padding: 0 6rem;
  min-height: 20rem;
`;

// USER PROFILE DIV
// const UserProfileContainer = styled.div`
//   padding: 4rem 0;
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;
// `;

// const UserProfileContainerUpper = styled.div`
//   display: grid;
//   grid-template-columns: 40rem 1fr;
//   column-gap: 6rem;
//   /* padding: 4rem 2rem; */
// `;
// const UserProfileContainerLower = styled.div`
//   padding: 0rem 4rem;
// `;

// const CreateBussinessDiv = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const UserProfileContainerFlex = styled.div`
//   /* display: flex;
//   align-items: center;
//   justify-content: space-between; */
//   /* padding: 4rem 0; */
// `;

// const ProfileUserDetails = styled.div`
//   /* height: 35rem; */
//   /* width: 40rem; */
//   border: 3px solid;
//   border-radius: 1rem;
//   padding: 2rem;
//   position: relative;
// `;

// const ProfileImgDiv = styled.div`
//   position: absolute;
//   top: -10%;
//   right: 10%;
//   height: 10rem;
//   width: 10rem;
//   overflow: hidden;
//   border-radius: 50%;
//   outline: 3px solid var(--color-orange-50);
// `;

// const ProfileImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const DetailDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   padding: 3rem 2rem;
// `;

// const DetailDivItem = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const DetailDivTextSm = styled.p`
//   font-weight: 700;
//   color: var(--color-grey-500);
//   font-size: 1.5rem;
// `;
// const DetailDivTextBg = styled.p`
//   color: var(--color-grey-200);
//   font-size: 1.8rem;
// `;

// const SummaryContainer = styled.div`
//   //
// `;
// const SummaryTabContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   gap: 6rem;
// `;

// const SummaryTabContainerSm = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

// const SummaryTabDiv = styled.div`
//   border-radius: 5px;
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   /* justify-content: center; */
//   align-items: center;
//   ${(props) =>
//     props.type == "delivery" &&
//     css`
//       background-color: var(--color-green-700);
//     `}

//   ${(props) =>
//     props.type == "reservation" &&
//     css`
//       background-color: var(--color-red-700);
//     `}

// ${(props) =>
//     props.type == "venue" &&
//     css`
//       background-color: var(--color-indigo-700);
//     `}
//   width: 10rem;
//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const SummaryTabSpanSm = styled.span`
//   color: var(--color-grey-100);
//   font-size: 1.2rem;
//   font-weight: 600;
// `;

// const SummaryTabSpanBg = styled.span`
//   font-size: 1.8rem;
//   font-weight: 700;
//   color: var(--color-grey-100);
// `;

// const SummaryListContainer = styled.div`
//   padding: 1rem;
//   padding-top: 4rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const HeadTextGrey = styled.div`
//   font-size: 3rem;
//   font-weight: 700;
// `;

// const OngoingOrderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 2rem;
// `;
// const OngoingOrderDiv = styled.div`
//   height: 35rem;
//   width: 40rem;
//   border: 1px solid;
// `;

const CreateBusinessImgDiv = styled.div``;

// BUSINESS PROFILE DIV
const BusinessProfileContainer = styled.div``;

function Dashboard() {
  const [userSide, setUserSide] = useState(true);
  const { user, isLoading } = useGetUser();
  function handleSwitchUserToBusiness() {
    setUserSide((s) => !s);
  }

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (userSide && !searchParams.get("userPanel")) {
      searchParams.set("userPanel", "profile");
      searchParams.delete("tableFor");
      setSearchParams(searchParams);
    } else if (!userSide && !searchParams.get("tableFor")) {
      searchParams.set("tableFor", "profile");
      searchParams.delete("userPanel");
      setSearchParams(searchParams);
    }
  }, [isLoading, searchParams, userSide, setSearchParams]);

  return (
    <Container>
      <ContainerDiv>
        <DashboardMain>
          <DashboardHeadText>
            <GradientHighlight>
              <span>Dashboard</span>
            </GradientHighlight>
            <Button
              onClick={handleSwitchUserToBusiness}
              size="medium"
              variation="primary"
            >
              {!userSide
                ? "Switch to user account"
                : user?.hasCuisine
                ? "Switch to business account"
                : "Start your business on DineDelight"}
            </Button>
          </DashboardHeadText>

          {userSide === true ? (
            <DashboardUserProfile
              user={user}
              isLoading={isLoading}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          ) : (
            <DashboardBusinessProfile
              user={user}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            // <BusinessProfileContainer>
            //   <InsightsDiv>
            //     <span>
            //       This week&apos;s{" "}
            //       <GradientHighlight>
            //         <span>Insights</span>
            //       </GradientHighlight>
            //     </span>
            //     <InsightsDivContainer>
            //       <InsightTab>
            //         <InsightTabHeadDiv>
            //           <span>Total Sales</span>
            //           <GradientIcon iconHeight={4}>
            //             <HiCurrencyDollar />
            //           </GradientIcon>
            //         </InsightTabHeadDiv>

            //         <InsightTabContentDiv>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               Deliveries :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>52</InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               Reservations :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>25</InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               Venue Bookings :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>10</InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextBg>
            //               Revenue :
            //             </InsightTabContentTextBg>
            //             <InsightTabContentTextBg>
            //               {" "}
            //               $324444
            //             </InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //         </InsightTabContentDiv>
            //       </InsightTab>
            //       <InsightTab>
            //         <InsightTabHeadDiv>
            //           <span>Deliveries</span>
            //           <GradientIcon iconHeight={4}>
            //             <HiTruck />
            //           </GradientIcon>
            //         </InsightTabHeadDiv>

            //         <InsightTabContentDiv>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               This week&apos;s :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>
            //               $32,333
            //             </InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               This month&apos;s :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>
            //               $324444
            //             </InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               Last month&apos;s :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>
            //               $324444
            //             </InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextBg>
            //               Profit :
            //             </InsightTabContentTextBg>
            //             <InsightTabContentTextBg> + $0</InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //         </InsightTabContentDiv>
            //       </InsightTab>
            //       <InsightTab>
            //         <InsightTabHeadDiv>
            //           <span>Reservations</span>
            //           <GradientIcon iconHeight={4}>
            //             <HiCalendar />
            //           </GradientIcon>
            //         </InsightTabHeadDiv>

            //         <InsightTabContentDiv>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               This week&apos;s :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>
            //               $32,333
            //             </InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               This month&apos;s :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>
            //               $324444
            //             </InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               Last month&apos;s :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>
            //               $324444
            //             </InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextBg>
            //               Profit :
            //             </InsightTabContentTextBg>
            //             <InsightTabContentTextBg> + $0</InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //         </InsightTabContentDiv>
            //       </InsightTab>
            //       <InsightTab>
            //         <InsightTabHeadDiv>
            //           <span>Bookings</span>
            //           <GradientIcon iconHeight={4}>
            //             <HiClipboardCheck />
            //           </GradientIcon>
            //         </InsightTabHeadDiv>

            //         <InsightTabContentDiv>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               This week&apos;s :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>
            //               $32,333
            //             </InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               This month&apos;s :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>
            //               $324444
            //             </InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextSm>
            //               Last month&apos;s :
            //             </InsightTabContentTextSm>
            //             <InsightTabContentTextBg>
            //               $324444
            //             </InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //           <InsightTabContentTextContainer>
            //             <InsightTabContentTextBg>
            //               Profit :
            //             </InsightTabContentTextBg>
            //             <InsightTabContentTextBg> + $0</InsightTabContentTextBg>
            //           </InsightTabContentTextContainer>
            //         </InsightTabContentDiv>
            //       </InsightTab>
            //     </InsightsDivContainer>
            //   </InsightsDiv>

            //   <DashboardHeadMenu id="dashboard-bottom-container">
            //     <Button
            //       value="profile"
            //       size="medium"
            //       variation={
            //         searchParams.get("tableFor") === "profile"
            //           ? "primary"
            //           : "secondary"
            //       }
            //       // onClick={handleClick}
            //     >
            //       Profile
            //     </Button>
            //     <Button
            //       value="reservation"
            //       size="medium"
            //       variation={
            //         searchParams.get("tableFor") === "reservation"
            //           ? "primary"
            //           : "secondary"
            //       }
            //       // onClick={handleClick}
            //     >
            //       Reservations
            //     </Button>
            //     <Button
            //       value="deliveries"
            //       size="medium"
            //       variation={
            //         searchParams.get("tableFor") === "deliveries"
            //           ? "primary"
            //           : "secondary"
            //       }
            //       // onClick={handleClick}
            //     >
            //       Deliveries
            //     </Button>
            //     <Button
            //       value="venue"
            //       size="medium"
            //       variation={
            //         searchParams.get("tableFor") === "venue"
            //           ? "primary"
            //           : "secondary"
            //       }
            //       // onClick={handleClick}
            //     >
            //       Bookings
            //     </Button>
            //   </DashboardHeadMenu>

            //   <BottomContainer>
            //     {searchParams.get("tableFor") === "profile" && (
            //       <DashboardProfile />
            //     )}
            //     {searchParams.get("tableFor") === "reservation" && <Table />}
            //   </BottomContainer>
            // </BusinessProfileContainer>
          )}
        </DashboardMain>
      </ContainerDiv>
    </Container>
  );
}

export default Dashboard;

// EDIT CUISINE
// CONTACT US
// VERIFY
//

// {
//   /* <OnStartUpCusine>
//         <p>OH NO 😣! Looks like you have not set up your cuisine yet</p>
//         <Button size="large" variation="primary">
//           Start setting up NOW !
//         </Button>
//       </OnStartUpCusine> */
// }

// {/* {data?.user.role === "business" && data?.user.verified && (
//         <>
//           <OnStartUpCusine>
//             <p>OH NO 😣! Looks like you have not set up your cuisine yet</p>
//             <Button size="large" variation="primary" onClick={handleOpenModal}>
//               Start setting up NOW !
//             </Button>
//           </OnStartUpCusine>

//           {isModalOpen && (
//             <Modal modalCloseFunc={handleCloseModal}>
//               <CuisineOpenForm />
//             </Modal>
//           )}
//         </>
//       )}
//       {data?.user.role === "business" && !data?.user.verified && (
//         <>
//           <OnStartUpCusine>
//             <p>
//               Looks like you are not verified yet. Please wait until
//               verification is completed 😊
//             </p>
//             <span>
//               It nomarly takes upto 72 hours to complete the verification
//               process. Thank you for your patients.
//             </span>
//           </OnStartUpCusine>

//           {isModalOpen && (
//             <Modal modalCloseFunc={handleCloseModal}>
//               <CuisineOpenForm />
//             </Modal>
//           )}
//         </>
//       )} */}
