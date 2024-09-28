import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddANewFoodItem } from "../services/apiBusiness";

export default function useAddNewFoodItem() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => apiAddANewFoodItem(data),
    onSuccess: () => {
      console.log("Food item added to the menu");
      queryClient.invalidateQueries("food menu");
    },
    onError: () => {
      console.log("Error adding the food item to the menu");
    },
  });

  return { mutate, isPending };
}
