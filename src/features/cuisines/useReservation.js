import { useMutation } from "@tanstack/react-query";
import {
  apiSendVerificationCode,
  apiVerifyReservationCode,
} from "../../services/apiReservations";

export function useSendVerificationCodeForReservation() {
  const { mutate: sendVerificationCode, isLoading } = useMutation({
    mutationFn: apiSendVerificationCode,
    onSuccess: () => {
      console.log("Verification code was sent");
    },
  });
  return { sendVerificationCode, isLoading };
}

export function useVerifyCodeForReservation() {
  const { mutate: verifyReservationCode, isLoading } = useMutation({
    mutationFn: (data) => apiVerifyReservationCode(data),
    onSuccess: () => {
      console.log("verification done successfully");
    },
    onError: () => {
      console.log("error verifying verification code");
    },
  });

  return { verifyReservationCode, isLoading };
}
