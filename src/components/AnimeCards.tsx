import React from "react";
import { ImageUrl, Movie, Stylings } from "../utils/constants";
import { Content } from "./Accordion";

export const AnimeCard = (cardValue: Content) => {
  return (
    <div>
      <div
        className={`border ${Stylings.AnimeCardWidth} ${Stylings.AnimeCardHeight} border-blue-950 mr-[40px] cursor-pointer`}
      >
        <img className="w-fit h-fit" src={cardValue.image}></img>
        {[cardValue.title, cardValue.rating, cardValue.count].map(
          (value, index) => {
            return (
              <div
                key={index}
                className={`font-extrabold text-wrap ${Stylings.TextWidth} text-blue-950 text-center pt-2 pb-2`}
              >
                {" "}
                {index === 1 ? `⭐ ${value}` : value}
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};
