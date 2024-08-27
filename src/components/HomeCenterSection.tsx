import React, { useState, useEffect } from "react";
import { Accordion } from "./Accordion";
import { Stylings } from "../utils/constants";
import { useApiData } from "../hooks/useApiData";
import { LoadingContainer } from "./LoadingContainer";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import mockData from "../utils/mockdata.json";

export const HomeCenterSection = () => {
  const [showindex, setShowindex] = useState(null);
  const { data: fetchedApiData, error, isLoading } = useApiData();
  const [updateValue, setUpdateValue] = useState();
  const [updateMock, setUpdateMock] = useState(mockData.movies);
  const mockDataValue = mockData;

  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );

  const locateUsersFromStore = useSelector(
    (store: RootState) => store.user.items,
  );
  useEffect(() => {
    if (locateAnswersFromStore.length === 4 && fetchedApiData) {
      setUpdateValue(
        locateAnswersFromStore[3] === "Anime"
          ? fetchedApiData.tv
          : fetchedApiData.movies,
      );
    } else if (fetchedApiData) {
      setUpdateValue(fetchedApiData.tv);
    } else if (locateAnswersFromStore.length === 4 && updateMock) {
      setUpdateValue(
        setUpdateMock(
          locateAnswersFromStore[3] === "Anime" ? mockData.tv : mockData.movies,
        ),
      );
    } else {
      setUpdateValue(setUpdateMock(mockDataValue.movies));
    }
  }, [fetchedApiData, locateAnswersFromStore]);

  return (
    locateUsersFromStore.length !== 0 && (
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
            setUpdateValue(updateMock)
          )}
        </div>
      </div>
    )
  );
};
