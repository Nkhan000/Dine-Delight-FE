import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddNewPartySize } from "../../services/apiReservations";

export function useAddOrRemovePartySize() {
  const queryClient = useQueryClient();
  const {
    mutate: addPartySize,
    isPending: isAddingPartySize,
    error: errorAddingPartySize,
  } = useMutation({
    mutationFn: (data) => apiAddNewPartySize(data),
    onSuccess: () => {
      queryClient.invalidateQueries("cuisineBS");
      console.log("Party size updated");
    },
  });

  return { addPartySize, isAddingPartySize, errorAddingPartySize };
}
