import React from "react";
import { AnimeCard } from "../components/AnimeCards";
export const Home = () => {
  return (
    <div className="h-[800px] bg-gray-50">
      <div className="w-10/12 pl-[30%] pt-[100px] pb-[70px] align-middle">
        <h1 className="items-center text-4xl font-extrabold">
          Recently launched ANIME in Town!!!
        </h1>
      </div>
      <div className="w-full flex flex-row">
        <AnimeCard></AnimeCard>
        <AnimeCard></AnimeCard>
      </div>
    </div>
  );
};
