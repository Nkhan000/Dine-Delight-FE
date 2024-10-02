/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { apiGetAllFoodItems } from "../services/apiBusiness";

export function useGetFoodMenu() {
  const {
    data: foodMenu,
    isLoading: isLoadingFoodMenu,
    error,
  } = useQuery({
    queryKey: ["foodMenu"],
    queryFn: apiGetAllFoodItems,
  });

  return { foodMenu, isLoadingFoodMenu };
}
