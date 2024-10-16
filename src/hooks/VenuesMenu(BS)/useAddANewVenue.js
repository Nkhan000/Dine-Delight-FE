import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddANewVenue } from "../../services/apiBusiness";

export function useAddANewVenue() {
  const queryClient = useQueryClient();
  const { mutate: addANewVenue, isPending: isAddingANewVenue } = useMutation({
    mutationFn: (data) => apiAddANewVenue(data),
    onSuccess: () => {
      queryClient.invalidateQueries("venues-menu");
      console.log("Venue addes successfully");
    },
    onError: () => {
      console.log("Error adding a new venue");
    },
  });
  return { addANewVenue, isAddingANewVenue };
}
