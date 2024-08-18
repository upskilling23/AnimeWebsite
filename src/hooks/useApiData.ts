import { useState, useEffect } from "react";
import { AnimeAPI } from "../utils/constants";

export const useApiData = () => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(AnimeAPI);
    const json = await data.json();
    setApiData(json);
  };
  return apiData;
};
