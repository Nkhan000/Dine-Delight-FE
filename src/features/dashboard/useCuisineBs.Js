/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useGetUser } from "../authentication/useGetUser";
import { getACuisinePrivate } from "../../services/apiCuisines";

export function useCusineBs() {
  // const { user, isLoading } = useGetUser();
  // const user = data.user;
  // const cuisineId = !isLoading && user.cuisineId;
  const {
    isLoading: loadingCuisineData,
    data: cuisineData,
    error,
  } = useQuery({
    queryKey: ["cusineBS"],
    queryFn: () => getACuisinePrivate(),
  });

  return { loadingCuisineData, cuisineData, error };
}
