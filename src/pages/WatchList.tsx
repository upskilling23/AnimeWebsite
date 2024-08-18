import React from "react";
import { AnimeCard } from "../components/AnimeCards";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "../components/Accordion";
import { RootState } from "../utils/appStore";
import { Link, useNavigate } from "react-router-dom";
import { ButtonComponent } from "../components/ButtonComponent";
import { clearItem, removeItem } from "../utils/redux/watchlistSlice";
import { clearedItem, removedItem } from "../utils/redux/watchedSlice";
import { clearSurvey } from "../utils/redux/answersSlice";
import { EmptyList } from "../components/EmptyList";
import { Stylings } from "../utils/constants";

export const RemoveIcon = (cardValue: Content) => {
  return (
    <>
      <div className="">
        <div className="relative">
          <h1
            onClick={() => {
              cardValue.event();
            }}
            className="cursor-pointer absolute border border-spacing-1 h-fit w-1/12 text-red-900"
          >
            X
          </h1>
          <Link to={`/home/${cardValue.id}`}>
            <AnimeCard
              title={cardValue.title}
              count={cardValue.count}
              rating={cardValue.rating}
              id={cardValue.id}
            ></AnimeCard>
          </Link>
        </div>
      </div>
    </>
  );
};

export const AddedValuesinWatchList = (
  WatchListContent: WatchListInterface,
) => {
  // clear cart , remove specific items, clearing survey, all items are handled from redux store

  return (
    <>
      {[
        {
          containerTitle: "Yet to Watch",
          containerButton: "Clear Watch List",
          event: () => {
            WatchListContent.dispatch(clearItem());
          },
          storeItem: WatchListContent.locateWatchListFromStore,
          removeEvent: (index) => {
            WatchListContent.dispatch(removeItem(index));
          },
        },
        {
          containerTitle: "Already Watched",
          containerButton: "Clear Watch List",
          event: () => {
            WatchListContent.dispatch(clearedItem());
          },
          storeItem: WatchListContent.locateWatchedFromStore,
          removeEvent: (index) => {
            WatchListContent.dispatch(removedItem(index));
          },
        },
      ].map((watchListPageValues, index) => {
        return (
          <div  key={index}>
            <h1
              className={`h-[3%] w-full bg-slate-50 pt-[5%] pb-[5%] ${Stylings.TextWidth} font-bold text-wrap`}
            >
              {watchListPageValues.containerTitle}
            </h1>
            <div className="h-fit w-full bg-slate-50 flex flex-row">
              <ButtonComponent
                dispatch={true}
                event={watchListPageValues.event}
                content={watchListPageValues.containerButton}
                styleValue={`px-3 my-10 mx-6 rounded-lg hover:bg-gray-100 bg-gray-400 text-wrap ${Stylings.TextWidth} h-fit font-bold`}
              ></ButtonComponent>
              <div className="w-full h-fit flex flex-row overflow-auto">
                {watchListPageValues.storeItem.map(
                  (cardValue: Content, index) => {
                    return (
                      <div key={index}>
                        <RemoveIcon
                          id={cardValue.id}
                          event={watchListPageValues.removeEvent}
                          title={cardValue.title}
                          count={cardValue.count}
                          rating={cardValue.rating}
                        ></RemoveIcon>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
interface WatchListInterface {
  dispatch: any;
  locateWatchListFromStore: Content[];
  locateWatchedFromStore: Content[];
}
export const WatchList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const locateWatchListFromStore = useSelector(
    (store: RootState) => store.watchlist.items,
  );
  const locateWatchedFromStore = useSelector(
    (store: RootState) => store.watched.items,
  );
  return (
    <div className="text-wrap text-center w-full h-full">
      <div className="w-full bg-slate-50  flex flex-row justify-between">
        {[
          { title: "Back", event: () => navigate("/home") },
          {
            title: "Clear All",
            event: () => {
              dispatch(clearItem());
              dispatch(clearedItem());
            },
          },
          {
            title: "Clear Survey",
            event: () => {
              dispatch(clearSurvey());
            },
          },
        ].map((buttonComponent, index) => {
          return (
            <div className="h-fit"  key={index}>
              <ButtonComponent
                dispatch={true}
                event={buttonComponent.event}
                content={buttonComponent.title}
                styleValue={`px-3 rounded-lg hover:bg-gray-100 bg-gray-400 text-wrap ${Stylings.TextWidth} h-fit font-bold`}
              ></ButtonComponent>
            </div>
          );
        })}
      </div>

      {locateWatchListFromStore.length === 0 &&
      locateWatchedFromStore.length === 0 ? (
        <EmptyList></EmptyList>
      ) : (
        <AddedValuesinWatchList
          dispatch={dispatch}
          locateWatchListFromStore={locateWatchListFromStore}
          locateWatchedFromStore={locateWatchedFromStore}
        ></AddedValuesinWatchList>
      )}
    </div>
  );
};
