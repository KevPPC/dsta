import { useMutation } from "react-query";
import { axios } from "@/lib/axios";

export const loginMutationFn = (data) => {
  return axios.post("/auth/login", data);
};

export const useLogin = ({ config = {} }) => {
  return useMutation({
    ...config,
    mutationFn: loginMutationFn,
  });
};
