import React from "react";
import { ImageUrl } from "../utils/constants";
import { Content } from "./Accordion";

export const AnimeCard = (cardValue: Content) => {
  return (
    <div>
      <div className="border w-[250px] h-[400px] border-blue-950 mt-[40px] ml-[60px] cursor-pointer">
        <img
          className="w-fit h-fit"
          src={ImageUrl.DefaultPlaceholderImage}
        ></img>
        <h1 className="text-2xl font-extrabold text-blue-950 text-center pt-5 pb-3">
          {" "}
          {cardValue.title}
        </h1>
        <h1 className="text-2xl font-extrabold text-blue-950 text-center pt-5 pb-3">
          {`⭐ ${cardValue.rating}`}
        </h1>
        <h1 className="text-2xl font-extrabold text-blue-950 text-center pt-5 pb-3">
          {cardValue.count}
        </h1>
      </div>
    </div>
  );
};
