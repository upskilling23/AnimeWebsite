import React, { useState, useEffect } from "react";
import { AnimeCard } from "../components/AnimeCards";
import { mockData } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { addedSurveyItem } from "../utils/answersSlice";

export const Home = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const dispatch = useDispatch();
  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );
  // const answer: string[] = []
  // answer.push(window.localStorage.getItem('00') || "{}")
  // answer.push(window.localStorage.getItem('10') || "{}")
  // answer.push(window.localStorage.getItem('20') || "{}")
  // answer.forEach((val)=>
  //   {
  //     dispatch(addedSurveyItem(val))
  //   })

  // const answer: string[] = []
  // answer.push(window.localStorage.getItem('00') || "{}")
  // answer.push(window.localStorage.getItem('10') || "{}")
  // answer.push(window.localStorage.getItem('20') || "{}")
  // answer.forEach((val)=>
  //   {
  //     dispatch(addedSurveyItem(val))
  //   })
  //   {console.log(answer)}

  useEffect(() => {
    console.log(locateAnswersFromStore);
    if (locateAnswersFromStore.every((val) => val.includes("{}")) === true) {
      setShowSurvey(true);
    }
  }, []);

  return (
    <div className="h-[800px] bg-gray-50">
      {showSurvey && (
        <div className="pt-[5%] bg-gray-50 ml-[40%]">
          <Link to="/survey">
            <div className="cursor-pointer inline-block hover:bg-slate-100 box-border rounded-lg items-center border-black h-fit border-spacing-2 border-y-2 shadow-lg border-x-2  w-3/12">
              <h1 className="text-3xl text-wrap text-center">
                Click to take survey
              </h1>
            </div>
          </Link>
        </div>
      )}
      <div className="w-10/12 pl-[30%] pt-[100px] pb-[70px] align-middle">
        <h1 className="items-center text-4xl font-extrabold">
          Recently launched ANIME in Town!!!
        </h1>
      </div>
      <div className="w-full flex flex-row">
        {mockData.map((card, index) => {
          return (
            <div key={index}>
              <AnimeCard
                title={card.title}
                count={card.count}
                rating={card.rating}
              ></AnimeCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
