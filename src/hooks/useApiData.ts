import { useQuery } from "@tanstack/react-query";
import { AnimeAPI, AnimeApiResponse, Movie } from "../utils/constants";

const fetchAnimeData = async () => {
  const response = await fetch(AnimeAPI);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const useApiData = () => {
  return useQuery({
    queryKey: ["fetchedApiData"],
    queryFn: fetchAnimeData,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
