import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  apiCreateDelivery,
  apiGetADeliveryData,
} from "../../services/apiDelivery";

export function useCreateDelivery() {
  // FETCHING DATA
  const navigate = useNavigate();
  const {
    mutate: newOrder,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (data) => apiCreateDelivery(data),
    onSuccess: () => {
      localStorage.removeItem("persist:root");
      navigate("/dashboard?userPanel=ongoingOrders");
    },
    onError: (err) => {
      console.log("Something went wrong while creating a new Order", err);
    },
  });

  return { isLoading, newOrder, error };
}

export function useGetADelivery(userId) {
  const { data: deliveryData, isLoading } = useQuery({
    queryKey: ["onGoingDelivery", userId],
    queryFn: () => apiGetADeliveryData(userId),
  });
  return { deliveryData, isLoading };
}
