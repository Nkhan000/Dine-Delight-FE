/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "./Heading";
import GradientHighlight from "./GradientHighlight";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useCountDownTimer } from "../hooks/useCountDownTimer";
import ReservationWindowVerificationCode from "./ReservationWindowVerificationCode";
// import { useTimer } from "./Timer";

const Container = styled.div`
  width: 75rem;
  height: 45rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1rem;
`;

const HeadBarDiv = styled.div`
  background-color: var(--color-grey-800);
  border: 2px solid var(--color-grey-300);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const HeadBarText = styled.div`
  color: var(--color-grey-300);
  font-weight: 600;
  font-size: 1.2rem;
  /* text-align: left; */
`;

function ReservationWindowModal({ reservationObj }) {
  console.log(reservationObj);
  return (
    <Container>
      <HeadBarDiv>
        <HeadBarText>We are holding a table for you . . .</HeadBarText>
      </HeadBarDiv>

      <ReservationWindowVerificationCode
        reservationObj={reservationObj.reservationObj}
      />
    </Container>
  );
}

export default ReservationWindowModal;
