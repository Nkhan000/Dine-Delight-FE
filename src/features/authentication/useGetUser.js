/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiGetCurrUserDataFromJWT } from "../../services/apiAuth";

export function useGetUser() {
  const token = localStorage.getItem("jwt");
  const { isLoading, data, error } = useQuery({
    queryKey: ["user", token],
    queryFn: () => apiGetCurrUserDataFromJWT(),
    enabled: !!token,
  });

  return { data, isLoading, error };
}
