import { useMutation } from "@tanstack/react-query";
import {
  apiSendVerificationCode,
  apiVerifyReservationCode,
} from "../../services/apiReservations";
// import { isPending } from "@reduxjs/toolkit";

export function useSendVerificationCodeForReservation() {
  const mutation = useMutation({
    mutationFn: apiSendVerificationCode,
    onSuccess: () => {
      console.log("Verification code was sent");
    },
  });

  const { mutate: sendVerificationCode, isPending: isSendingVerificationCode } =
    mutation;

  return { sendVerificationCode, isSendingVerificationCode };
}

export function useVerifyReservationCode() {
  const mutate = useMutation({
    mutationFn: (data) => apiVerifyReservationCode(data),
    onSuccess: () => {
      console.log("Verified Successfully");
    },
    onError: () => {
      console.log("Error verifying the reservation code");
    },
  });

  const {
    mutate: verifyReservationCode,
    isPending: isVerifying,
    isSuccess,
    isError,
  } = mutate;

  return { verifyReservationCode, isVerifying, isSuccess, isError };
}
