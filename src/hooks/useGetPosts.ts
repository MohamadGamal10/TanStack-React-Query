import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { DataItem, PostStatusType } from "../types";

const fetchPosts = async (
  selectedPostStatus: PostStatusType
): Promise<DataItem[]> => {
  if (selectedPostStatus === "all") {
    const result = await axios.get<DataItem[]>("http://localhost:3000/posts");
    return result.data;
  } else {
    const result = await axios.get<DataItem[]>(
      `http://localhost:3000/posts?status=${selectedPostStatus}`
    );
    return result.data;
  }
};

const useGetPosts = (
  selectedPostStatus: PostStatusType
): UseQueryResult<DataItem[]> => {
  const query = useQuery({
    queryKey: ["posts", { selectedPostStatus }],
    queryFn: () => fetchPosts(selectedPostStatus),
    staleTime: 1000 * 10, // 10 seconds
  });
  return query;
};

export default useGetPosts;
