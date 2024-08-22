/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCuisineSingle, getCusines } from "../../services/apiCuisines";
import { PAGE_LIMIT } from "../../utils/constants";

export function useCuisine(currentPage, currentFilter) {
  // FETCHING DATA
  const { isLoading, data } = useQuery({
    queryKey: ["cuisines", currentPage, currentFilter],
    queryFn: () => getCusines(currentPage, currentFilter),
  });

  // console.log(typeof currentPage);
  const queryClient = useQueryClient();
  // PRE-FETCHING DATA
  queryClient.prefetchQuery({
    queryKey: ["cuisines", currentPage + 1, currentFilter],
    queryFn: () => getCusines(currentPage + 1, currentFilter),
  });

  // console.log(data);
  const cuisineData = data?.data.allCuisines;
  const numberOfPages = Math.ceil(data?.totalDocsLength / PAGE_LIMIT);

  return { isLoading, cuisineData, numberOfPages };
}

export function useCusineSingle(id, serviceName) {
  // FETCHING DATA
  const { isLoading, data, error } = useQuery({
    queryKey: ["cuisine", id, serviceName],
    queryFn: () => getCuisineSingle(id, serviceName),
  });

  return { isLoading, data, error };
}
