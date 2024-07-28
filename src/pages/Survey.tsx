import React, { useEffect, useState } from "react";
import { mockQuestions, Stylings } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addedSurveyItem } from "../utils/redux/answersSlice";
import { RootState } from "../utils/appStore";
import { useNavigate } from "react-router-dom";

export const Survey = () => {
  const [quesIndex, setQuesIndex] = useState(0); // updating question index
  const [ansIndex, setAnsIndex] = useState(null); // updating answer index
  const [selectAnswer, setSelectAnswer] = useState(false); // checking whether answer is selected and to update the colour of the div
  const colour = "bg-green-300";
  const dispatch = useDispatch(); // for sending answers to redux store
  const navigate = useNavigate();
  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );

  // fetching answers from redux store

  useEffect(() => {
    if (locateAnswersFromStore.length === 3) {
      navigate("/home");
    } else {
      navigate("/survey");
    }
  }, [locateAnswersFromStore.length, navigate]);

  // On clicking answer, answer index will be updated and bg colour will be updated
  const handleAnswersClick = (index: number, id: number, val: string) => {
    setAnsIndex(index);
    if (index === ansIndex && quesIndex === id) {
      setSelectAnswer(!selectAnswer);
    } else {
      setSelectAnswer(false);
    }
  };

  // On submitting answer, answer index will be passed to redux store
  const handleClick = () => {
    const answer = window.localStorage.getItem(quesIndex.toString());
    dispatch(addedSurveyItem(answer ?? ""));
    if (quesIndex < mockQuestions.length - 1) {
      setQuesIndex(quesIndex + 1);
      setAnsIndex(null);
    } else {
      // Navigate to the home page
      navigate("/home");
    }
  };

  // on clicking back, redirecting to previous question
  const BackClick = () => {
    if (quesIndex !== 0 && quesIndex <= mockQuestions.length - 1) {
      setQuesIndex(quesIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-screen bg-gray-300">
      <div>
        <div className="h-fit grid grid-flow-col-dense items-center">
          {quesIndex > 0 && (
            <button
              onClick={BackClick}
              className={`px-3 my-10 mx-6 h-[50px] w-5/12 ${Stylings.TextWidth} font-bold hover:bg-gray-500`}
            >
              {" "}
              ⬅️ Back
            </button>
          )}

          <h1 className={`${Stylings.TextWidth}`}>
            {" "}
            {`${quesIndex + 1}. ${mockQuestions[quesIndex].question}`}
          </h1>
        </div>
      </div>
      <div>
        <div className="h-fit bg-gray-300 flex flex-col pl-[30%] overflow-auto">
          {mockQuestions[quesIndex].answer.map((val, index) => {
            return (
              <div
                key={index}
                className=" box-border m-3 hover:border-blue-800 border-spacing-1 border-y-4 shadow-sm  border-x-4 w-6/12 h-[60px]"
              >
                <div
                  onClick={() =>
                    handleAnswersClick(index, mockQuestions[quesIndex].id, val)
                  }
                  className={`cursor-pointer ${index === ansIndex ? colour : ""} h-full flex flex-row justify-between items-center`}
                >
                  <div>
                    <h1 className={`${Stylings.TextWidth} w-full`}>{val} </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="static w-full shadow-lg h-full bg-gray-300 flex flex-col items-center">
        <div
          onClick={handleClick}
          className={`my-10 hover:bg-gray-100 items-center h-[30px] ${Stylings.TextWidth} font-bold cursor-pointer`}
        >
          {quesIndex === mockQuestions.length - 1 ? "Submit" : "Continue"}
        </div>
      </div>
    </div>
  );
};
