import React from "react";
import { AnimeCard } from "../components/AnimeCards";
import { useSelector } from "react-redux";
import { Content } from "../components/Accordion";
import { RootState } from "../utils/appStore";
import { Link } from "react-router-dom";
export const WatchList = () => {
  const locateWatchListFromStore = useSelector(
    (store: RootState) => store.watchlist.items,
  );
  const locateWatchedFromStore = useSelector(
    (store: RootState) => store.watched.items,
  );

  return (
    <div className="text-center text-3xl w-full h-full">
      <div className=" w-full bg-slate-50  flex flex-row">
        <Link to="/home">
          <button className=" px-3 my-10 mx-6  bg-gray-400 h-[50px] text-2xl font-bold">
            Back
          </button>
        </Link>
      </div>

      <h1 className="h-[3%] w-full bg-slate-50 pt-[5%] pb-[5%]">
        Yet to Watch
      </h1>
      <div className="h-[500px] w-full bg-slate-50 flex flex-row">
        {locateWatchListFromStore.map((cardValue: Content, index) => {
          return (
            <div key={index}>
              <AnimeCard
                title={cardValue.title}
                count={cardValue.count}
                rating={cardValue.rating}
              ></AnimeCard>
            </div>
          );
        })}
      </div>

      <h1 className="h-[3%] w-full bg-slate-100 pt-[5%] pb-[5%]">
        Already Watched
      </h1>
      <div className="h-[500px] w-full  bg-slate-100 flex flex-row">
        {locateWatchedFromStore.map((cardValue: Content, index) => {
          return (
            <div key={index}>
              <AnimeCard
                title={cardValue.title}
                count={cardValue.count}
                rating={cardValue.rating}
              ></AnimeCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
