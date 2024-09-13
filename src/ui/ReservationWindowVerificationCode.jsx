import styled from "styled-components";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useCountDownTimer } from "./useCountDownTimer";
import GradientHighlight from "./GradientHighlight";
import Spinner from "./Spinner";
const VerficationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

const HeadTextDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const HeadTextSpan = styled.span`
  font-weight: 600;
  font-size: 4.5rem;
  font-family: inherit;
`;

const VerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const VerificationText = styled.p`
  font-family: inherit;
  font-size: 1.6rem;
  color: var(--color-grey-100);
`;

const VerificationTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const VerificationButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: end;
`;

const VerificationInputDiv = styled.div`
  width: 100%;

  & input {
    width: 100%;
    background-color: transparent;
    outline: 2px solid var(--color-grey-800);
    border: none;
    color: var(--color-grey-400);
    padding: 1rem 2rem;
    border-radius: 2rem;
    &:focus {
      outline: 2px solid var(--color-orange-50);
      color: var(--color-grey-100);
    }
  }
`;

const ResendTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  p {
  }
`;

const ResendTextLink = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: var(--color-grey-400);
  }
`;

const VerifiedContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* align-items: center; */
  /* border: 4px solid; */
  height: 100%;
  width: 100%;
`;

const VerifiedText = styled.span`
  display: inline-block;
  font-size: 5rem;
  font-weight: 600;
`;

const VerifiedTextSm = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-300);
`;

function ReservationWindowVerificationCode() {
  const INITIAL_WAITING_MINUTES = 5;
  const INITIAL_WAITING_SECOND = 0;

  const [isCodeSentAgain, setIsCodeSentAgain] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { timer, startTimer, stopTimer, isRunning } = useCountDownTimer(
    INITIAL_WAITING_MINUTES,
    INITIAL_WAITING_SECOND,
    1
  );
  // Control when the "Send Code Again" logic resets
  useEffect(() => {
    if (isCodeSentAgain) {
      startTimer();
      // stop the timer after given minutes (1000 * 60 * 5 => 5 minutes)
      let timeOutId = setTimeout(() => {
        stopTimer();
        setIsCodeSentAgain(false);
      }, 1000 * 60 * INITIAL_WAITING_MINUTES);

      return () => clearTimeout(timeOutId);
    }
  }, [isCodeSentAgain, startTimer, stopTimer]);

  useEffect(() => {
    let timeOutId;
    if (isVerifying) {
      timeOutId = setTimeout(() => {
        setIsVerifying(false);
        setIsVerified(true);
      }, 5000);
    }

    return () => clearTimeout(timeOutId);
  }, [isVerifying]);

  function handleVerifying() {
    setIsVerifying(true);
  }

  function handleCodeSentAgain() {
    setIsCodeSentAgain(true);
    console.log("set to true");
  }

  if (isVerifying) {
    return <Spinner />;
  }
  if (isVerified) {
    return (
      <VerifiedContainer>
        <GradientHighlight>
          <VerifiedText>VERIFIED</VerifiedText>
        </GradientHighlight>
        <VerifiedTextSm>
          You will be now Redirected to Checkout Page
        </VerifiedTextSm>
      </VerifiedContainer>
    );
  }

  return (
    <VerficationContainer>
      <VerificationContainer>
        <VerificationTextDiv>
          <HeadTextDiv>
            <GradientHighlight>
              <HeadTextSpan>VERIFICATION</HeadTextSpan>
            </GradientHighlight>
          </HeadTextDiv>
          <VerificationText>
            Please enter the code sent to {"email"} for verification.
          </VerificationText>

          <VerificationInputDiv>
            <input type="text" placeholder="enter the verification code" />
          </VerificationInputDiv>

          <ResendTextDiv>
            <p>Verification is only valid upto 10 minutes after it is sent.</p>
            {isCodeSentAgain && isRunning ? (
              // <p>{`${timer.minutes} : ${timer.seconds} ${time}`}</p>
              <p>{`0${timer.minutes} : ${timer.seconds}`}</p>
            ) : (
              <ResendTextLink onClick={handleCodeSentAgain}>
                Did not get a code? Resent the code.
              </ResendTextLink>
            )}
          </ResendTextDiv>
        </VerificationTextDiv>
        <VerificationButtonDiv>
          <Button onClick={handleVerifying} variation="primary" size="medium">
            Continue
          </Button>
          <Button variation="secondary" size="medium">
            Cancel
          </Button>
        </VerificationButtonDiv>
      </VerificationContainer>
    </VerficationContainer>
  );
}

export default ReservationWindowVerificationCode;
