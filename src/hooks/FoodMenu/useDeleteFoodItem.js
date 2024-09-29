import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteAFoodItem } from "../../services/apiBusiness";

export function useDeleteFoodItem() {
  const queryClient = useQueryClient();
  const { mutate: removeFoodItem, isPending: removingFoodItem } = useMutation({
    mutationFn: (data) => apiDeleteAFoodItem(data),
    onSuccess: () => {
      console.log("Food item was removed successfully");
      queryClient.invalidateQueries("food menu");
    },
    onError: () => {
      console.log("Error removing the selected Item. Try again.");
    },
  });

  return { removeFoodItem, removingFoodItem };
}
