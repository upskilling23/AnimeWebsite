import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonComponent } from "../components/ButtonComponent";
import { ImageUrl, Stylings } from "../utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

export const SurveyWelcome = () => {
  const navigate = useNavigate();
  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );

  useEffect(() => {
    if (locateAnswersFromStore.length !== 0) {
      navigate("/home");
    } else {
      navigate("/survey-welcome");
    }
  }, [locateAnswersFromStore.length, navigate]);

  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={ImageUrl.SurveyWelcomeScreen}
        alt="Background Image"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-md w-full mx-4">
          <h1 className={`${Stylings.TextWidth} font-bold italic pt-[2%]`}>
            Welcome to SeriesHouse
          </h1>
          <h2 className={`${Stylings.TextWidth} pt-[4%]`}>
            Take this survey to know about yourself
          </h2>
          <h3 className={`${Stylings.TextWidth} pt-[2%]`}>
            Your favorite anime will be listed
          </h3>
          {[
            { navigateLink: "/survey", content: "Get Started" },
            { navigateLink: "/home", content: "Skip for now" },
          ].map((welcomeScreenButton, index) => {
            return (
              <div className="pt-[10%]" key={index}>
                <ButtonComponent
                  dispatch={true}
                  event={() => {
                    navigate(welcomeScreenButton.navigateLink);
                  }}
                  content={welcomeScreenButton.content}
                  styleValue={`w-6/12 bg-gray-400 hover:bg-gray-50 ${Stylings.StyleInputBox} ${Stylings.TextWidth} font-bold rounded-md`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
