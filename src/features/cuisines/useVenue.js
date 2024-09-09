/* eslint-disable no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  apiCreateANewVenueBooking,
  apiGetABookedVenueData,
} from "../../services/apiVenue";

export function useCreateANewBooking() {
  const queryClient = useQueryClient();
  const {
    mutate: createANewVenueBooking,
    isLoading: isCreatingNewVenueBooking,
    error,
  } = useMutation({
    mutationFn: (data) => apiCreateANewVenueBooking(data),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { createANewVenueBooking, isCreatingNewVenueBooking };
}

export function useGetABookedVenueData() {
  const queryClient = useQueryClient();
  const { data: bookedVenue, isLoading } = useQuery({
    queryKey: ["bookedVenue"],
    queryFn: () => apiGetABookedVenueData(),
  });
  // everytime a new data is fetched this will reinvalidate or update it to the new data in the cache
  // queryClient.invalidateQueries("bookedVenue");

  return { bookedVenue, isLoading };
}
