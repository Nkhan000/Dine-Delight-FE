import { useMutation } from "@tanstack/react-query";
import { apiOAuth } from "../../services/apiAuth";

export function useOAuth() {
  const { mutate: googleOAuth, isLoading } = useMutation({
    mutationFn: apiOAuth,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { googleOAuth, isLoading };
}
