import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return axios.get("https://jsonplaceholder.typicode.com/posts");
    },
    select: ({ data }) => data,
  });
};
