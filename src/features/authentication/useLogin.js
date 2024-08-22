/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiLogin } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { Children, createContext, useContext, useState } from "react";

// const AuthContext = createContext();

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: (data) => apiLogin(data),
    onSuccess: (data) => {
      const token = data;
      navigate("/order");
      localStorage.setItem("jwt", token);

      queryClient.invalidateQueries(["user"]);
    },
  });

  return { login, isLoading };
}

// export const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState(localStorage.getItem("jwt"));
//   const queryClient = useQueryClient();

//   const { mutate: login, isLoading } = useMutation({
//     mutationFn: (data) => apiLogin(data),
//     onSuccess: (data) => {
//       setAuthToken(data);
//       localStorage.setItem("jwt", data.token);
//       queryClient.invalidateQueries(["user"]);
//     },
//   });

//   return (
//     <AuthContext.Provider value={{ login, isLoading, authToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export function useLogin() {
//   const navigate = useNavigate();
//   const { mutate: login, isLoading } = useMutation({
//     mutationFn: (data) => apiLogin(data),
//     onSuccess: (user) => {
//       // console.log(user);
//       navigate("/order");
//     },
//     onError: (err) => {
//       console.log("Something went wrong while loggin in");
//       console.log(err);
//     },
//   });

//   return { login, isLoading };
// }
