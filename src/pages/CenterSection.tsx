import React, { useState } from "react";
import { ImageUrl, Stylings } from "../utils/constants";
import { ButtonComponent } from "../components/ButtonComponent";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "../components/Footer";

export const CenterSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="absolute">
      <div className="relative min-h-screen flex flex-col">
        <img className="w-full min-h-screen" src={ImageUrl.BgImage}></img>
        <div className="absolute bottom-0  w-full">
          <Footer></Footer>
        </div>
      </div>
      <div className=" absolute left-2/4 bottom-3/4 items-center justify-center">
        <h1 className={`text-black ${Stylings.TextWidth} font-bold italic`}>
          Welcome to SeriesHouse
        </h1>
      </div>
      <div className="absolute left-2/4 bottom-3/4  top-1/4 pt-[3%]">
        <h2 className={`text-black ${Stylings.TextWidth} font-semibold italic`}>
          {" "}
          Login to know your preferences of watch type and search for your
          favorite content
        </h2>
      </div>
      <div className="absolute left-2/4 bottom-3/4 top-[50%] pt-[3%]">
        <div
          onClick={() => handleClick()}
          className="cursor-pointer border-transparent border-spacing-x-28 border-collapse hover:bg-slate-200"
        >
          <h1
            className={`text-amber-900 ${Stylings.TextWidth} font-bold italic`}
          >
            Click to Get Started
          </h1>
        </div>
      </div>
    </div>
  );
};
