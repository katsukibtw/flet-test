import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCommentsByPost = (postId) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      return axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      );
    },
    select: ({ data }) => data,
  });
};
