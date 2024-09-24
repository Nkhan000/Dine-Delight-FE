/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { apiGetAllFoodItems } from "../services/apiBusiness";

export function useGetFoodMenu() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["food menu"],
    queryFn: apiGetAllFoodItems,
  });

  return { foodItems: data, isLoading };
}
