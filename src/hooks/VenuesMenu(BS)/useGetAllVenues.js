import { useQuery } from "@tanstack/react-query";
import { apiGetAllVenues } from "../../services/apiBusiness";

export function useGetAllVenues() {
  const { data, isLoading } = useQuery({
    queryKey: ["venue-menu"],
    queryFn: apiGetAllVenues,
  });

  return { data, isLoading };
}
