import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUser = (userId) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    },
    select: ({ data }) => data,
  });
};
