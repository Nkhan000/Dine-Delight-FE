/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useCallback } from "react";

export const useCountDownTimer = (
  initialMinutes,
  initialSeconds,
  onComplete = null
) => {
  const [timer, setTimer] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds,
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTime) => {
          const { minutes, seconds } = prevTime;

          // Decrease seconds if seconds are greater than 0
          if (seconds > 0) {
            return { minutes, seconds: seconds - 1 };
          }
          // If seconds are 0 but minutes are still greater than 0
          else if (seconds === 0 && minutes > 0) {
            return { minutes: minutes - 1, seconds: 59 };
          }
          // Timer finished, trigger callback
          else {
            clearInterval(intervalId);
            if (typeof onComplete === "function") {
              onComplete(); // Call the completion function only if it's valid
            }
            // setIsRunning(false);
            return { minutes: 0, seconds: 0 };
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId); // Cleanup interval
  }, [isRunning, onComplete]);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);
  const resetTimer = () =>
    setTimer({ minutes: initialMinutes, seconds: initialSeconds });

  return { timer, startTimer, resetTimer, stopTimer, isRunning };
};

// useEffect(() => {
//   let intervalId = null;
//   if (isCodeSentAgain) {
//     intervalId = setInterval(() => {
//       setTimer((prevTime) => {
//         const { minutes, seconds } = prevTime;

//         // Decrease seconds if seconds are greater than 0
//         if (seconds > 0) {
//           return { minutes, seconds: seconds - 1 };
//         }
//         // If seconds are 0 but minutes are still greater than 0
//         else if (seconds === 0 && minutes > 0) {
//           return { minutes: minutes - 1, seconds: 59 };
//         }
//         return { minutes: 0, seconds: 0 };
//       });
//     }, 1000);
//   }

//   return () => clearInterval(intervalId); // Cleanup interval on unmount or change
// }, [isCodeSentAgain]);
