import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateAFoodItem } from "../../services/apiBusiness";

export function useUpdateAFoodItem() {
  const queryClient = useQueryClient();
  const { mutate: updateAFoodItem, isPending: isUpdatingAFoodItem } =
    useMutation({
      mutationFn: (data) => apiUpdateAFoodItem(data),
      onSuccess: () => {
        queryClient.invalidateQueries("foodMenu");
        console.log("Successfully updated the food item");
      },
      onError: () => {
        console.log("Error updating food Item. Try again");
      },
    });

  return { updateAFoodItem, isUpdatingAFoodItem };
}
