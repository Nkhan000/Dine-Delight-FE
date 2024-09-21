/* eslint-disable no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  apiCreateANewVenueBooking,
  apiGetABookedVenueData,
} from "../../services/apiVenue";
import { useDispatch } from "react-redux";
import { removeAllDeliveries } from "../cart/cartSlice";
import { removeVenueBooking } from "../cart/venueBookingSlice";
import { removeReservation } from "../cart/reservationSlice";
import { useNavigate } from "react-router-dom";

export function useCreateANewBooking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    mutate: createANewVenueBooking,
    isLoading: isCreatingNewVenueBooking,
    error,
  } = useMutation({
    mutationFn: (data) => apiCreateANewVenueBooking(data),
    onSuccess: (data) => {
      dispatch(removeVenueBooking());
      navigate("/dashboard?userPanel=ongoingOrders");
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { createANewVenueBooking, isCreatingNewVenueBooking };
}

export function useGetABookedVenueData() {
  const { data: bookedVenue, isLoading } = useQuery({
    queryKey: ["bookedVenue"],
    queryFn: () => apiGetABookedVenueData(),
  });
  return { bookedVenue, isLoading };
}
