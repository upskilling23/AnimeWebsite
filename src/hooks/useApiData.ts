import { useQuery } from "@tanstack/react-query";
import { AnimeAPI, AnimeApiResponse, Movie } from "../utils/constants";

const fetchAnimeData = async (
  retries = 1,
): Promise<AnimeApiResponse | null> => {
  try {
    const response = await fetch(AnimeAPI);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying... (${retries} attempts left)`);
      return await fetchAnimeData(retries - 1);
    } else {
      console.error("Failed to fetch data after multiple attempts", error);
      // Handle default data here or return an error state
      return null;
    }
  }
};

export const useApiData = () => {
  return useQuery({
    queryKey: ["fetchedApiData"],
    queryFn: fetchAnimeData,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
