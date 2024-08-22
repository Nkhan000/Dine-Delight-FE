/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { apiSignup } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: (data) => apiSignup(data),
    onSuccess: (data) => {
      // console.log(data);
      navigate(`/dashboard`);
    },
    onError: (err) => {
      console.log("Something went wrong");
      console.log(err);
    },
  });

  return { signup, isSigningUp };
}
