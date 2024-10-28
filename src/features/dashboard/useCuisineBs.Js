/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useGetUser } from "../authentication/useGetUser";
import { getACuisineBS } from "../../services/apiCuisines";

export function useCusineBs() {
  const {
    isLoading: isLoadingCuisineData,
    data: cuisineData,
    error,
  } = useQuery({
    queryKey: ["cuisineBS"],
    queryFn: () => getACuisineBS(),
  });

  return { isLoadingCuisineData, cuisineData, error };
}
