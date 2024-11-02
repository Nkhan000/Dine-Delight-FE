import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRemoveHighlights } from "../../services/apiCuisines";

export function useRemoveHighlights() {
  const queryClient = useQueryClient();
  const { mutate: removeHighlights, isPending: isRemovingHighlights } =
    useMutation({
      mutationFn: (data) => apiRemoveHighlights(data),
      onSuccess: () => {
        queryClient.invalidateQueries("cuisineBS");
        console.log("Highlights removed successfully");
      },
      onError: (err) => {
        throw new Error(err);
      },
    });

  return { removeHighlights, isRemovingHighlights };
}
