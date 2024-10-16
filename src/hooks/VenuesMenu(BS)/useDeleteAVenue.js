import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteAVenue } from "../../services/apiBusiness";

export function useDeleteAVenue() {
  const queryClient = useQueryClient();
  const { mutate: deleteAVenue, isPending: isDeletingAVenue } = useMutation({
    mutationFn: (data) => apiDeleteAVenue(data),
    onSuccess: () => {
      queryClient.invalidateQueries("venues-menu");
      console.log("A venue was deleted successfully");
    },
    onError: () => {
      console.log("Error deleting the venue Item");
    },
  });

  return { deleteAVenue, isDeletingAVenue };
}
