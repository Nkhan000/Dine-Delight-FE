import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdataAVenue } from "../../services/apiBusiness";

export function useUpdateAVenue() {
  const queryClient = useQueryClient();
  const { mutate: updateAVenue, isPending: isUpdatingAVenue } = useMutation({
    mutationFn: (data) => apiUpdataAVenue(data),
    onSuccess: () => {
      queryClient.invalidateQueries("venues-menu");
      console.log("venue update was successfull");
    },
  });

  return { updateAVenue, isUpdatingAVenue };
}
