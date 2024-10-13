import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddANewFoodItem } from "../services/apiBusiness";

export default function useAddNewFoodItem() {
  const queryClient = useQueryClient();

  const { mutate: addANewFoodItem, isPending: isAddingANewFoodItem } =
    useMutation({
      mutationFn: (data) => apiAddANewFoodItem(data),
      onSuccess: () => {
        queryClient.invalidateQueries("foodMenu");
        console.log("Food item added to the menu");
      },
      onError: () => {
        console.log("Error adding the food item to the menu");
      },
    });

  return { addANewFoodItem, isAddingANewFoodItem };
}
