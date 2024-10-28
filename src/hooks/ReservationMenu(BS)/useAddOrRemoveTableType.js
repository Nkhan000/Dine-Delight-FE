import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddTableType } from "../../services/apiReservations";

export function useAddOrRemoveTableType() {
  const queryClient = useQueryClient();
  const {
    mutate: addOrRemoveTableType,
    isPending: isAddingOrRemovingTableType,
  } = useMutation({
    mutationFn: (data) => apiAddTableType(data),
    onSuccess: () => {
      queryClient.invalidateQueries("cuisineBS");
      console.log("Table type added successfully");
    },
    onError(err) {
      console.error("something went wrong", err);
    },
  });

  return {
    addOrRemoveTableType,
    isAddingOrRemovingTableType,
  };
}
