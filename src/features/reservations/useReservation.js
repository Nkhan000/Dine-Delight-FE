import { useMutation, useQuery } from "@tanstack/react-query";
import {
  apiCreateReservation,
  apiSendVerificationCode,
  apiVerifyReservationCode,
  getAllReservationOfUser,
} from "../../services/apiReservations";
import { useDispatch } from "react-redux";
import { removeReservation } from "../cart/reservationSlice";
import { useNavigate } from "react-router-dom";
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
  const mutation = useMutation({
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
  } = mutation;

  return { verifyReservationCode, isVerifying, isSuccess, isError };
}

export function useCreateANewReservation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data) => apiCreateReservation(data),
    onSuccess: () => {
      console.log("reservation was created");
      dispatch(removeReservation());
      navigate("/dashboard?userPanel=ongoingOrders");
    },
    onError: () => {
      console.log("Error creating a reservation");
    },
  });

  const {
    mutate: createANewReservation,
    isPending,
    isSuccess,
    isError,
  } = mutation;

  return { createANewReservation, isPending, isSuccess, isError };
}

export function useGetAllReservationsOfUser() {
  const token = localStorage.getItem("jwt");
  const {
    data: reservationData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Reservations", token],
    queryFn: getAllReservationOfUser,
  });

  return { reservationData, isLoading, error };
}
