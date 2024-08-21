import React, { useState, useEffect } from "react";
import { Accordion } from "./Accordion";
import { Stylings } from "../utils/constants";
import { useApiData } from "../hooks/useApiData";
import { LoadingContainer } from "./LoadingContainer";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

export const HomeCenterSection = () => {
  const [showindex, setShowindex] = useState(null);
  const { data: fetchedApiData, error, isLoading } = useApiData();
  const [updateValue, setUpdateValue] = useState();

  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );

  useEffect(() => {
    if (locateAnswersFromStore.length === 4 && fetchedApiData) {
      return setUpdateValue(
        locateAnswersFromStore[3] === "Anime"
          ? fetchedApiData.tv
          : fetchedApiData.movies,
      );
    } else if (fetchedApiData) {
      return setUpdateValue(fetchedApiData.tv);
    }
  }, [fetchedApiData, locateAnswersFromStore]);

  return (
    <div className={`w-full h-fit pt-[3%]`}>
      <div className="w-10/12 align-middle">
        <h1
          className={`items-center pl-[20%] pt-[1%] ${Stylings.TextWidth} text-center font-extrabold`}
        >
          Add items to your watchlist, top rated content in the world
        </h1>
      </div>
      <div className="mt-[3%]">
        {isLoading ? (
          <LoadingContainer />
        ) : updateValue ? (
          updateValue
            .filter((filterRating) => filterRating.meta.score > 8.5)
            .map((value, index) => {
              return (
                <div key={index}>
                  <Accordion
                    toggleValue={index === showindex ? true : false}
                    indexState={() => setShowindex(index)}
                    decription={value}
                    title={`Click to view`}
                  ></Accordion>
                </div>
              );
            })
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};
