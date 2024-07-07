import React, { useEffect, useState } from "react";
import { mockQuestions } from "../utils/constants";
import { ButtonComponent } from "../components/ButtonComponent";
import { Link } from "react-router-dom";

export const Survey = () => {
  const [quesIndex, setQuesIndex] = useState(0);

  const handleClick = () => {
    if (quesIndex < mockQuestions.length - 1) {
      setQuesIndex(quesIndex + 1);
    }
  };
  const BackClick = () => {
    if (quesIndex !== 0 && quesIndex <= mockQuestions.length - 1) {
      setQuesIndex(quesIndex - 1);
    }
  };
  return (
    <>
      <div className="">
        <div className="h-[160px] bg-gray-300 flex flex-row justify-self-start items-center">
          {quesIndex > 0 && (
            <button
              onClick={BackClick}
              className=" px-3 my-10 mx-6 bg-gray-400 h-[50px] text-2xl font-bold"
            >
              {" "}
              ⬅️ Back
            </button>
          )}

          <h1 className="text-4xl">
            {" "}
            {`${quesIndex + 1}. ${mockQuestions[quesIndex].question}`}
          </h1>
        </div>
      </div>
      <div className="">
        <div className="h-[400px] bg-gray-400 flex flex-col items-center ">
          {mockQuestions[quesIndex].answer.map((val, index) => {
            return (
              <div className=" box-border border-spacing-1 border-y-8 shadow-sm border-x-8  w-6/12 h-[100px]">
                <div className="cursor-pointer flex flex-row justify-between items-center">
                  <div>
                    <h1 className="text-4xl w-full">{val} </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-fit bg-gray-300 flex flex-col items-center">
        {quesIndex === mockQuestions.length - 1 ? (
          <Link to="/home">
            <div
              onClick={handleClick}
              className=" px-3 my-10 mx-6 bg-gray-300 h-[90px] text-3xl font-bold cursor-pointer"
            >
              {"Submit"}
            </div>
          </Link>
        ) : (
          <div
            onClick={handleClick}
            className=" px-3 my-10 mx-6 bg-gray-300 h-[90px] text-3xl font-bold cursor-pointer"
          >
            {"Continue"}
          </div>
        )}
      </div>
    </>
  );
};
