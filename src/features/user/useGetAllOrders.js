/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { apiGetAllOrders } from "../../services/apiUser";

export function useGetAllOrders() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["AllOnGoingOrders"],
    queryFn: apiGetAllOrders,
  });

  return { allOrders: data, isLoading, error };
}
