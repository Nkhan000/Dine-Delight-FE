/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  apiCreateDelivery,
  apiGetADeliveryData,
} from "../../services/apiDelivery";
import { useDispatch } from "react-redux";
import { clearCartFromReduxState } from "../cart/cartSlice";

export function useCreateDelivery() {
  const dispatch = useDispatch();
  // FETCHING DATA
  const navigate = useNavigate();
  const {
    mutate: newOrder,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (data) => apiCreateDelivery(data),
    onSuccess: () => {
      // localStorage.removeItem("persist:root");
      dispatch(clearCartFromReduxState());
      navigate("/dashboard?userPanel=ongoingOrders");
    },
    onError: (err) => {
      console.log("Something went wrong while creating a new Order", err);
    },
  });

  return { isLoading, newOrder, error };
}

export function useGetADelivery() {
  // const token = localStorage.getItem("jwt");
  const { data: deliveryData, isLoading } = useQuery({
    queryKey: ["onGoingDelivery"],
    queryFn: () => apiGetADeliveryData(),
  });
  return { deliveryData, isLoading };
}
