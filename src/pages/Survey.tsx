import React, { useEffect, useState } from "react";
import { mockQuestions, Stylings, SurveyContent } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addedSurveyItem } from "../utils/redux/answersSlice";
import { RootState } from "../utils/appStore";
import { useNavigate } from "react-router-dom";

export const Survey = () => {
  const [quesIndex, setQuesIndex] = useState(0); // updating question index
  const [ansIndex, setAnsIndex] = useState(null); // updating answer index
  const [selectAnswer, setSelectAnswer] = useState(false); // checking whether answer is selected and to update the colour of the div
  const colour = "bg-green-300";
  const [indexArray, setIndexArray] = useState([]);
  const dispatch = useDispatch(); // for sending answers to redux store
  const navigate = useNavigate();
  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );

  // fetching answers from redux store

  useEffect(() => {
    if (locateAnswersFromStore.length === 4) {
      navigate("/home");
    } else {
      navigate("/survey");
    }
  }, [locateAnswersFromStore.length, navigate]);

  // On clicking answer, answer index will be updated and bg colour will be updated
  // if question type is single, it selects only one, if multi it pushes in array
  const handleAnswersClick = (
    clickedAnswer: number,
    questionModel: SurveyContent,
    val: string,
  ) => {
    setAnsIndex(clickedAnswer);
    setSelectAnswer(true);
    if (questionModel.type === "multi") {
      indexArray.push(clickedAnswer);
    }
  };

  // On submitting answer, answer index will be passed to redux store
  const handleClick = (answerValue: string[]) => {
    dispatch(addedSurveyItem(answerValue));
    if (quesIndex < mockQuestions.length - 1) {
      setQuesIndex(quesIndex + 1);
      setAnsIndex(null);
    } else {
      // Navigate to the home page

      navigate("/home");
    }
  };

  return (
    <div className="h-[350px] bg-gray-300">
      <div className="relative w-full h-full bg-gray-300">
        <div>
          <div className="h-fit grid grid-flow-col-dense items-center">
            <h1 className={`${Stylings.TextWidth}`}>
              {" "}
              {`${quesIndex + 1}. ${mockQuestions[quesIndex].question}`}
            </h1>
          </div>
        </div>
        <div>
          <div className="h-fit bg-gray-300 flex flex-col pl-[30%] overflow-auto pt-[5%]">
            {mockQuestions[quesIndex].answer.map((val, answerIndexSelect) => {
              return (
                <div
                  key={answerIndexSelect}
                  className=" box-border m-3 hover:border-blue-800 border-spacing-1 border-y-4 shadow-sm  border-x-4 w-6/12 h-[60px]"
                >
                  <button
                    onClick={() => {
                      handleAnswersClick(
                        answerIndexSelect,
                        mockQuestions[quesIndex],
                        val,
                      );
                    }}
                    className={`cursor-pointer ${
                      mockQuestions[quesIndex].type === "multi"
                        ? indexArray.some((val) => val === answerIndexSelect)
                          ? colour
                          : ""
                        : ansIndex === answerIndexSelect
                          ? colour
                          : ""
                    } h-full flex w-full flex-row justify-between items-center`}
                  >
                    <div>
                      <h1 className={`${Stylings.TextWidth} w-full`}>{val} </h1>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="static w-full shadow-lg h-full bg-gray-300 flex flex-col items-center">
          {ansIndex !== null && (
            <button
              onClick={() =>
                handleClick(
                  mockQuestions[quesIndex].type === "multi"
                    ? indexArray.map(
                        (val) => mockQuestions[quesIndex].answer[val],
                      )
                    : mockQuestions[quesIndex].answer[ansIndex],
                )
              }
              className={`my-10 hover:bg-gray-100 items-center h-[30px] ${Stylings.TextWidth} font-bold cursor-pointer`}
            >
              {quesIndex === mockQuestions.length - 1 ? "Submit" : "Continue"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
