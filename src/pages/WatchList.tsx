import React from "react";
import { AnimeCard } from "../components/AnimeCards";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "../components/Accordion";
import { RootState } from "../utils/appStore";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../components/ButtonComponent";
import { clearItem, removeItem } from "../utils/watchlistSlice";
import { clearedItem, removedItem } from "../utils/watchedSlice";
import { clearSurvey } from "../utils/answersSlice";

export const RemoveIcon = (cardValue: Content) => {
  return (
    <>
      <div className="flex flex-col items-end">
        <h1
          onClick={() => {
            cardValue.event();
          }}
          className="cursor-pointer absolute border border-spacing-1 border-black h-fit w-fit bg-gray-200 text-red-400"
        >
          X
        </h1>
        <AnimeCard
          title={cardValue.title}
          count={cardValue.count}
          rating={cardValue.rating}
        ></AnimeCard>
      </div>
    </>
  );
};
export const WatchList = () => {
  // clear cart , remove specific items, clearing survey, all items are handled from redux store
  const dispatch = useDispatch();
  const locateWatchListFromStore = useSelector(
    (store: RootState) => store.watchlist.items,
  );
  const locateWatchedFromStore = useSelector(
    (store: RootState) => store.watched.items,
  );

  return (
    <div className="text-center text-3xl w-full h-full">
      <div className=" w-full bg-slate-50  flex flex-row justify-between">
        <Link to="/home">
          <button className=" px-3 my-10 mx-6  bg-gray-400 h-[50px] text-2xl font-bold">
            Back
          </button>
        </Link>
        <ButtonComponent
          dispatch={true}
          event={() => {
            dispatch(clearSurvey());
          }}
          content={"Clear Survey"}
          styleValue="px-3 my-10 mx-6  bg-gray-400 h-[50px] text-2xl font-bold"
        ></ButtonComponent>
      </div>

      <h1 className="h-[3%] w-full bg-slate-50 pt-[5%] pb-[5%]">
        Yet to Watch
      </h1>
      <div className="h-[500px] w-full bg-slate-50 flex flex-row">
        <ButtonComponent
          dispatch={true}
          event={() => {
            dispatch(clearItem());
          }}
          content={"Clear Watch List"}
          styleValue="px-3 my-10 mx-6  bg-gray-400 h-[50px] text-2xl font-bold"
        ></ButtonComponent>
        {locateWatchListFromStore.map((cardValue: Content, index) => {
          return (
            <div key={index}>
              <RemoveIcon
                event={() => {
                  dispatch(removeItem(index));
                }}
                title={cardValue.title}
                count={cardValue.count}
                rating={cardValue.rating}
              ></RemoveIcon>
            </div>
          );
        })}
      </div>

      <h1 className="h-[3%] w-full bg-slate-100 pt-[5%] pb-[5%]">
        Already Watched
      </h1>
      <div className="h-[500px] w-full  bg-slate-100 flex flex-row">
        <ButtonComponent
          dispatch={true}
          event={() => {
            dispatch(clearedItem());
          }}
          content={"Clear Watched List"}
          styleValue="px-3 my-10 mx-6  bg-gray-400 h-[50px] text-2xl font-bold"
        ></ButtonComponent>
        {locateWatchedFromStore.map((cardValue: Content, index) => {
          return (
            <div key={index}>
              <RemoveIcon
                event={() => {
                  dispatch(removedItem(index));
                }}
                title={cardValue.title}
                count={cardValue.count}
                rating={cardValue.rating}
              ></RemoveIcon>
            </div>
          );
        })}
      </div>
    </div>
  );
};
