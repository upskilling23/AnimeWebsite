import React from "react";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../components/ButtonComponent";
import { ImageUrl } from "../utils/constants";

export const SurveyWelcome = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={ImageUrl.SurveyWelcomeScreen}
        alt="Background Image"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-md w-full mx-4">
          <h1 className="text-4xl font-bold italic pt-[2%]">Welcome to KYA</h1>
          <h2 className="text-2xl pt-[4%]">
            Take this survey to know about yourself
          </h2>
          <h2 className="text-2xl pt-[2%]">
            Your favorite anime will be listed
          </h2>
          <div className="pt-[10%]">
            <Link to="/survey">
              <ButtonComponent
                event={""}
                content="Get Started"
                styleValue="px-6 py-3 bg-gray-400 h-12 text-xl font-bold rounded-md tex-wrap"
              />
            </Link>
          </div>
          <div className="pt-[10%]">
            <Link to="/home">
              <ButtonComponent
                event={""}
                content="Skip for now"
                styleValue="px-6 py-3 bg-gray-400 h-12 text-xl font-bold rounded-md text-wrap"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
