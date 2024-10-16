import { useQuery } from "@tanstack/react-query";
import { apiGetAllVenues } from "../../services/apiBusiness";

export function useGetAllVenues() {
  const { data: venuesMenu, isLoading: isLoadingVenuesMenu } = useQuery({
    queryKey: ["venues-menu"],
    queryFn: apiGetAllVenues,
  });

  return { venuesMenu, isLoadingVenuesMenu };
}
