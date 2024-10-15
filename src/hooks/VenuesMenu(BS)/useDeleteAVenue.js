import { useMutation } from "@tanstack/react-query";
import { apiDeleteAVenue } from "../../services/apiBusiness";

export function useDeleteAVenue() {
  const { mutate: deleteAVenue, isPending: isDeletingAVenue } = useMutation({
    mutationFn: (data) => apiDeleteAVenue(data),
    onSuccess: () => {
      console.log("A venue was deleted successfully");
    },
    onError: () => {
      console.log("Error deleting the venue Item");
    },
  });

  return { deleteAVenue, isDeletingAVenue };
}
