import { useQuery } from "@tanstack/react-query";
import { GetData } from "@/Data/Fetches";

export const GetBlogDatas = () => {
  return useQuery({
    queryKey: ["blogsData"],
    queryFn: GetData,
  });
};
