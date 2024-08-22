/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "./Button";
import DashboardProfile from "./DashboardProfile";
import Table from "./Table";
import GradientHighlight from "./GradientHighlight";
import GradientIcon from "./GradientIcon";
import {
  HiCalendar,
  HiCheck,
  HiCheckBadge,
  HiCheckCircle,
  HiCurrencyDollar,
  HiTruck,
} from "react-icons/hi2";
import { HiClipboardCheck } from "react-icons/hi";
import { useCusineBs } from "../features/dashboard/useCuisineBs.Js";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";
import CuisineOpenForm from "./cuisineOpenForm";
import CuisineOpenUI from "./CuisineOpenUi";

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
const CreateBusinessImgDiv = styled.div``;

// BUSINESS PROFILE DIV
const BusinessProfileContainer = styled.div``;

function DashboardBusinessProfile({ user, searchParams, setSearchParams }) {
  const { cuisineData, loadingCuisineData, error } = useCusineBs();

  console.log(cuisineData);
  function handleClick(e) {
    const elemenetValue = e.target.getAttribute("value");
    searchParams.set("tableFor", elemenetValue);
    setSearchParams(searchParams);
  }

  if (!user.hasCuisine) return <CuisineOpenUI />;

  return (
    <BusinessProfileContainer>
      <InsightsDiv>
        <span>
          This week&apos;s{" "}
          <GradientHighlight>
            <span>Insights</span>
          </GradientHighlight>
        </span>
        <InsightsDivContainer>
          <InsightTab>
            <InsightTabHeadDiv>
              <span>Total Sales</span>
              <GradientIcon iconHeight={4}>
                <HiCurrencyDollar />
              </GradientIcon>
            </InsightTabHeadDiv>

            <InsightTabContentDiv>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>Deliveries :</InsightTabContentTextSm>
                <InsightTabContentTextBg>52</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>
                  Reservations :
                </InsightTabContentTextSm>
                <InsightTabContentTextBg>25</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>
                  Venue Bookings :
                </InsightTabContentTextSm>
                <InsightTabContentTextBg>10</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextBg>Revenue :</InsightTabContentTextBg>
                <InsightTabContentTextBg> $324444</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
            </InsightTabContentDiv>
          </InsightTab>
          <InsightTab>
            <InsightTabHeadDiv>
              <span>Deliveries</span>
              <GradientIcon iconHeight={4}>
                <HiTruck />
              </GradientIcon>
            </InsightTabHeadDiv>

            <InsightTabContentDiv>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>
                  This week&apos;s :
                </InsightTabContentTextSm>
                <InsightTabContentTextBg>$32,333</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>
                  This month&apos;s :
                </InsightTabContentTextSm>
                <InsightTabContentTextBg>$324444</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>
                  Last month&apos;s :
                </InsightTabContentTextSm>
                <InsightTabContentTextBg>$324444</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextBg>Profit :</InsightTabContentTextBg>
                <InsightTabContentTextBg> + $0</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
            </InsightTabContentDiv>
          </InsightTab>
          <InsightTab>
            <InsightTabHeadDiv>
              <span>Reservations</span>
              <GradientIcon iconHeight={4}>
                <HiCalendar />
              </GradientIcon>
            </InsightTabHeadDiv>

            <InsightTabContentDiv>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>
                  This week&apos;s :
                </InsightTabContentTextSm>
                <InsightTabContentTextBg>$32,333</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>
                  This month&apos;s :
                </InsightTabContentTextSm>
                <InsightTabContentTextBg>$324444</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>
                  Last month&apos;s :
                </InsightTabContentTextSm>
                <InsightTabContentTextBg>$324444</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextBg>Profit :</InsightTabContentTextBg>
                <InsightTabContentTextBg> + $0</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
            </InsightTabContentDiv>
          </InsightTab>
          <InsightTab>
            <InsightTabHeadDiv>
              <span>Bookings</span>
              <GradientIcon iconHeight={4}>
                <HiClipboardCheck />
              </GradientIcon>
            </InsightTabHeadDiv>

            <InsightTabContentDiv>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>
                  This week&apos;s :
                </InsightTabContentTextSm>
                <InsightTabContentTextBg>$32,333</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>
                  This month&apos;s :
                </InsightTabContentTextSm>
                <InsightTabContentTextBg>$324444</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextSm>
                  Last month&apos;s :
                </InsightTabContentTextSm>
                <InsightTabContentTextBg>$324444</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
              <InsightTabContentTextContainer>
                <InsightTabContentTextBg>Profit :</InsightTabContentTextBg>
                <InsightTabContentTextBg> + $0</InsightTabContentTextBg>
              </InsightTabContentTextContainer>
            </InsightTabContentDiv>
          </InsightTab>
        </InsightsDivContainer>
      </InsightsDiv>

      <DashboardHeadMenu id="dashboard-bottom-container">
        <Button
          value="profile"
          size="medium"
          variation={
            searchParams.get("tableFor") === "profile" ? "primary" : "secondary"
          }
          onClick={handleClick}
        >
          Profile
        </Button>
        <Button
          value="reservation"
          size="medium"
          variation={
            searchParams.get("tableFor") === "reservation"
              ? "primary"
              : "secondary"
          }
          onClick={handleClick}
        >
          Reservations
        </Button>
        <Button
          value="deliveries"
          size="medium"
          variation={
            searchParams.get("tableFor") === "deliveries"
              ? "primary"
              : "secondary"
          }
          onClick={handleClick}
        >
          Deliveries
        </Button>
        <Button
          value="venue"
          size="medium"
          variation={
            searchParams.get("tableFor") === "venue" ? "primary" : "secondary"
          }
          onClick={handleClick}
        >
          Bookings
        </Button>
      </DashboardHeadMenu>

      <BottomContainer>
        {searchParams.get("tableFor") === "profile" && <DashboardProfile />}
        {searchParams.get("tableFor") === "reservation" && <Table />}
      </BottomContainer>
    </BusinessProfileContainer>
  );
}

export default DashboardBusinessProfile;
