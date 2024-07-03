import { useQuery } from "react-query";
import { storage } from "@/utils";
import { setProfile } from "@/stores";
import { axios } from "@/lib";

export const getUserProfileQueryFn = () => {
  return axios.get("/profile");
};

export const GET_USER = "getUserProfile";

export const useGetProfile = () => {
  const token = storage.getToken();
  return useQuery({
    queryKey: [GET_USER],
    queryFn: () => getUserProfileQueryFn(),
    onSuccess: (data) => {
      setProfile(data);
      storage.setUser(data);
    },
    enabled: !!token,
  });
};
