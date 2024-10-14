import { useMutation } from "@tanstack/react-query";
import { apiAddANewVenue } from "../../services/apiBusiness";

export function useAddANewVenue() {
  const { mutate: addANewVenue, isPending: isAddingANewVenue } = useMutation({
    mutationFn: (data) => apiAddANewVenue(data),
    onSuccess: () => {
      console.log("Venue addes successfully");
    },
    onError: () => {
      console.log("Error adding a new venue");
    },
  });
  return { addANewVenue, isAddingANewVenue };
}
