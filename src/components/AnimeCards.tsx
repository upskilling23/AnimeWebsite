import React from "react";
import { ImageUrl } from "../utils/constants";

export const AnimeCard = () => {
  return (
    <div>
      <div className="border w-[250px] h-[400px] border-blue-950 mt-[40px] ml-[60px] cursor-pointer">
        <img
          className="w-fit h-fit"
          src={ImageUrl.DefaultPlaceholderImage}
        ></img>
        <h1 className="text-2xl font-extrabold text-blue-950 text-center pt-5 pb-3">
          {" "}
          Anime Name
        </h1>
        <h1 className="text-2xl font-extrabold text-blue-950 text-center pt-5 pb-3">
          ⭐ 4.9
        </h1>
        <h1 className="text-2xl font-extrabold text-blue-950 text-center pt-5 pb-3">
          Horror, Romance
        </h1>
      </div>
    </div>
  );
};
