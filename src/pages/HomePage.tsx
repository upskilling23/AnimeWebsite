import React, { useState, useEffect } from "react";
import { AnimeCard } from "../components/AnimeCards";
import { ImageUrl, Movie, Stylings } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { LoadingContainer } from "../components/LoadingContainer";
import { useApiData } from "../hooks/useApiData";
import mockData from "../utils/mockdata.json";

export const Home = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const { data: fetchedApiData, error, isLoading } = useApiData();

  const [updateValue, setUpdateValue] = useState(null);
  const [updateMock, setUpdateMock] = useState(mockData.movies);
  const mockDataValue = mockData.movies;
  // redirecting to home if survey is completed
  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );

  // fetching answers from redux store to check user completed the survey or not
  useEffect(() => {
    if (locateAnswersFromStore.length === 0) {
      setShowSurvey(true);
    }
  }, []);
  useEffect(() => {
    if (locateAnswersFromStore.length === 4 && fetchedApiData) {
      return setUpdateValue(
        locateAnswersFromStore[3] === "Anime"
          ? fetchedApiData.tv.filter((val) =>
              val.genre.some((val1) => {
                const answer = locateAnswersFromStore[2];
                if (Array.isArray(answer)) {
                  return answer.some((val2) => val2.includes(val1.name));
                }
                return false;
              }),
            )
          : fetchedApiData.movies.filter((val) =>
              val.genre.some((val1) => {
                const answer = locateAnswersFromStore[2];
                if (Array.isArray(answer)) {
                  return answer.some((val2) => val2.includes(val1.name));
                }
                return false;
              }),
            ),
      );
    } else if (fetchedApiData) {
      return setUpdateValue(fetchedApiData.tv);
    } else {
      setUpdateValue(setUpdateMock(mockDataValue));
    }
  }, [fetchedApiData, locateAnswersFromStore]);

  if (updateValue === null) {
    return <LoadingContainer></LoadingContainer>;
  }
  return (
    <div className="relative w-full h-fit bg-gray-50">
      {showSurvey && (
        <div className="pt-[5%] bg-gray-50 ml-[40%]">
          <Link to="/survey-welcome">
            <div className="cursor-pointer inline-block hover:bg-slate-100 box-border rounded-lg items-center border-black h-fit border-spacing-2 border-y-2 shadow-lg border-x-2  w-5/12">
              <h1 className={`${Stylings.TextWidth} text-wrap text-center`}>
                Click to take survey
              </h1>
            </div>
          </Link>
        </div>
      )}
      <div className="w-10/12  align-middle">
        <h1
          className={`items-center pl-[20%] pt-[2%] ${Stylings.TextWidth} text-center font-extrabold`}
        >
          {`Recently launched ${locateAnswersFromStore.length === 0 ? "Content" : locateAnswersFromStore[3] === "Anime" ? "Anime" : "Movies"} in Town!!!`}
        </h1>
      </div>
      <div className="w-full h-fit pt-[2%] flex flex-row overflow-auto">
        {isLoading ? (
          <LoadingContainer />
        ) : updateValue ? (
          updateValue.map((card: Movie, index) => (
            <div key={index}>
              <Link to={`/home/${card.id}`}>
                <AnimeCard
                  id={card.id.toString()}
                  title={card.title}
                  count={
                    ["??", ""].includes(card.meta.episodes)
                      ? card.latest_episode.metadata.number.toString() ===
                        "false"
                        ? `Movie - ${card.meta.aired}`
                        : card.latest_episode.metadata.number.toString()
                      : card.meta.episodes.toString()
                  }
                  rating={card.meta.score}
                  image={`${ImageUrl.ImageConactUrl}${card.image}`}
                />
              </Link>
            </div>
          ))
        ) : (
          setUpdateValue(updateMock)
        )}
      </div>
    </div>
  );
};
