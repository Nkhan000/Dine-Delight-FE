import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteAFoodItem } from "../../services/apiBusiness";

export function useDeleteFoodItem() {
  const queryClient = useQueryClient();
  const { mutate: deleteAFoodItem, isPending: isDeletingAFoodItem } =
    useMutation({
      mutationFn: (data) => apiDeleteAFoodItem(data),
      onSuccess: () => {
        console.log("Food item was removed successfully");
        queryClient.invalidateQueries("foodMenu");
      },
      onError: () => {
        console.log("Error removing the selected Item. Try again.");
      },
    });

  return { deleteAFoodItem, isDeletingAFoodItem };
}
