import React, { useState, useEffect } from "react";
import { AnimeCard } from "../components/AnimeCards";
import { mockData, Stylings } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

export const Home = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  // redirecting to home if survey is completed
  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );
  // fetching answers from redux store to check user completedd the survey or not
  useEffect(() => {
    if (locateAnswersFromStore.length === 0) {
      setShowSurvey(true);
    }
  }, []);

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
          Recently launched ANIME in Town!!!
        </h1>
      </div>
      <div className="w-full h-fit pt-[2%] flex flex-row overflow-auto">
        {mockData.map((card, index) => {
          return (
            <div key={index}>
              <Link to={`/home/${card.id}`}>
                <AnimeCard
                  id={card.id}
                  title={card.title}
                  count={card.count}
                  rating={card.rating}
                ></AnimeCard>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
