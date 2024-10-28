import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddTimeSlot } from "../../services/apiReservations";

export function useAddOrRemoveTimeSlot() {
  const queryClient = useQueryClient();
  const {
    mutate: addOrRemoveTimeSlot,
    isPending: isAddingOrRremovingTimeSlot,
  } = useMutation({
    mutationFn: (data) => apiAddTimeSlot(data),
    onSuccess: () => {
      queryClient.invalidateQueries("cuisineBS");
      console.log("Successfully added a time slot");
    },
    onError: (err) => {
      console.log(err);
      console.log("Error adding or removing the file");
      throw err;
    },
  });

  return { addOrRemoveTimeSlot, isAddingOrRremovingTimeSlot };
}
