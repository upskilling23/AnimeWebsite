import React from "react";
import { ImageUrl, Stylings } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const CenterSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <section className="absolute">
      <div className="relative min-h-screen flex flex-col">
        <img
          className="w-full min-h-screen"
          src={ImageUrl.BgImage}
          alt=""
        ></img>
        <footer className="absolute bottom-0  w-full">
          <Footer></Footer>
        </footer>
      </div>
      <div className=" absolute right-3/3 bottom-3/4 items-center justify-center">
        <h1 className={`text-white ${Stylings.TextWidth} font-bold italic`}>
          Welcome to SeriesHouse
        </h1>
      </div>
      <div className="absolute left-4/4 bottom-2/4 top-1/4 pt-[3%]">
        <h2
          className={`text-white w-6/12 ${Stylings.TextWidth} font-semibold italic`}
        >
          {" "}
          Login to know your preferences of watch type and search for your
          favorite content
        </h2>
      </div>
      <div className="absolute right-2/3 bottom-3/4 top-[50%] pt-[3%]">
        <div
          onClick={() => handleClick()}
          className="cursor-pointer border-transparent border-spacing-x-28 border-collapse hover:bg-slate-200"
        >
          <button
            className={`text-yellow-400 ${Stylings.TextWidth} font-bold italic`}
          >
            Click to Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
