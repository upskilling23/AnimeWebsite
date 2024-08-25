import React, { useState, useEffect } from "react";
import { AnimeCard } from "../components/AnimeCards";
import { ImageUrl, Movie, Stylings } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { LoadingContainer } from "../components/LoadingContainer";
import { useApiData } from "../hooks/useApiData";
import mockData from "../utils/mockdata.json";
import { useSurveyAnswer } from "../hooks/useSurveyAnswer";
import { clearSurvey } from "../utils/redux/answersSlice";


export const Home = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const { data: fetchedApiData, error, isLoading } = useApiData();

  const [updateValue, setUpdateValue] = useState(null);
  const [updateMock, setUpdateMock] = useState(mockData.movies);
  const mockDataValue = mockData;
 const dispatch =useDispatch();
  // redirecting to home if survey is completed
  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );

  const locateUsersFromStore =useSelector(
    (store: RootState) => store.user.items,
  );
  // fetching answers from redux store to check user completed the survey or not
  useEffect(() => {
    if (locateAnswersFromStore.length === 0) {
      setShowSurvey(true);
    }
  }, []);
  useEffect(() => {
    if(locateUsersFromStore.length ===0)
      {
        dispatch(clearSurvey())
        console.log(locateAnswersFromStore)
        return setUpdateValue(setUpdateMock(mockDataValue.movies));
      }
    if (locateAnswersFromStore.length === 4 && fetchedApiData) {
      return setUpdateValue(
        useSurveyAnswer(locateAnswersFromStore,fetchedApiData)
      );
    } else if (fetchedApiData) {
      return setUpdateValue(fetchedApiData.tv);
    } else if(locateAnswersFromStore.length === 4 && updateMock){
      return setUpdateValue(setUpdateMock(useSurveyAnswer(locateAnswersFromStore,mockDataValue)));
    } 
    else{
      return setUpdateValue(setUpdateMock(mockDataValue.movies));
    }
  }, [fetchedApiData, locateAnswersFromStore]);

  if (updateValue === null) {
    return <LoadingContainer></LoadingContainer>;
  }
  return (
    <div className="relative w-full h-fit bg-gray-50">
      {locateAnswersFromStore&&  locateUsersFromStore.length >0 && showSurvey && (
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
                  image={`${ImageUrl.ImageConactUrl}${card.image.includes('https') ? card.image.split('https://anime-world.in')[1] : card.image}`}
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
