import React, { useEffect } from "react";
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
import { ImageUrl, Movie, Stylings } from "../utils/constants";

export const RemoveIcon = (cardValue: Content) => {
  return (
    <>
      <div className="">
        <div className="relative">
          <div
            role="button"
            tabIndex="0"
            type="button"
            onClick={() => {
              cardValue.event();
            }}
            className=" bg-slate-50 hover:bg-slate-500 cursor-pointer absolute border border-spacing-1 h-fit w-1/12 text-red-900"
          >
            X
          </div>
          <Link to={`/home/${cardValue.id}`}>
            <AnimeCard
              title={cardValue.title}
              count={cardValue.count}
              rating={cardValue.rating}
              id={cardValue.id}
              image={cardValue.image}
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
          <div key={index}>
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
                {watchListPageValues.storeItem.map((cardValue, index) => {
                  return (
                    <div key={index}>
                      <RemoveIcon
                        id={cardValue.id.toString()}
                        event={watchListPageValues.removeEvent}
                        title={cardValue.title}
                        count={
                          ["??", ""].includes(cardValue.meta.episodes)
                            ? cardValue.latest_episode.metadata.number.toString() ===
                              "false"
                              ? `Movie - ${cardValue.meta.aired}`
                              : cardValue.latest_episode.metadata.number.toString()
                            : cardValue.meta.episodes.toString()
                        }
                        rating={cardValue.meta.score.toString()}
                        image={`${ImageUrl.ImageConactUrl}${cardValue.image.includes("https") ? cardValue.image.split("https://anime-world.in")[1] : cardValue.image}`}
                      ></RemoveIcon>
                    </div>
                  );
                })}
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
  locateWatchListFromStore: Movie[];
  locateWatchedFromStore: Movie[];
}
export const WatchList = () => {
  const locateUsersFromStore = useSelector(
    (store: RootState) => store.user.items,
  );
  // fetching answers from redux store

  useEffect(() => {
    if (locateUsersFromStore.length === 0) {
      navigate("/login");
    }
  }, [locateUsersFromStore]);

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
              navigate("/home");
            },
          },
        ].map((buttonComponent, index) => {
          return (
            <div className="h-fit" key={index}>
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
