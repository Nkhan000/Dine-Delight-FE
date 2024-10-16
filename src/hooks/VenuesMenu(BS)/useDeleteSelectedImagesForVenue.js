import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteSelectedImagesForVenue } from "../../services/apiBusiness";

export function useDeleteSelectedImagesForVenue() {
  const querClient = useQueryClient();
  const { mutate: deleteSelectedImagesForVenue, isPending: isDeleting } =
    useMutation({
      mutationFn: (data) => apiDeleteSelectedImagesForVenue(data),
      onSuccess: () => {
        querClient.invalidateQueries("venues-menu");
        console.log("Images deleted successfully");
      },
    });

  return { deleteSelectedImagesForVenue, isDeleting };
}
