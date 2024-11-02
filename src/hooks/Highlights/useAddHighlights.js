/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddHighlights } from "../../services/apiCuisines";

export function useAddHighlights() {
  const queryClient = useQueryClient();
  const { mutate: addHighlight, isPending: isAddingHiglight } = useMutation({
    mutationFn: (data) => apiAddHighlights(data),
    onSuccess: () => {
      queryClient.invalidateQueries("cuisineBS");
      console.log("Highlights added Successfully");
    },
    onError: (err) => {
      console.log("Error updating highlight images ", err);
      throw new Error(err);
    },
  });

  return { addHighlight, isAddingHiglight };
}
