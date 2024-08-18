import React, { useState } from "react";
import { ImageUrl, Stylings } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/redux/watchlistSlice";
import { addedItem, CartState } from "../utils/redux/watchedSlice";
import { RootState } from "../utils/appStore";
import { Modal } from "./Modal";
import { PayloadAction } from "@reduxjs/toolkit";
import { useMobile } from "../hooks/useMobile";

export interface Content {
  title: string;
  rating: number;
  count: string;
  event?: any;
  id: string;
  description?: string;
  contentHeader?: string;
  image?: string;
}
export interface ToggleContainer {
  toggleValue: boolean;
  indexState: any;
  decription: any;
  title?: string;
}
export const Accordion = (click: ToggleContainer) => {
  const [toggle, setToggle] = useState(false); // toggle state for opening and closing the toggle
  const [closeModal, setCloseModal] = useState(false); // modal state for checking items already added to list

  const isMobile = useMobile();
  const locateWatchListFromStore = useSelector(
    (store: RootState) => store.watchlist.items,
  );
  const locateWatchedFromStore = useSelector(
    (store: RootState) => store.watched.items,
  );

  // fetching values from redux store
  const dispatch = useDispatch();
  const checkWhetherItemIsAlreadyInList = (
    item: Content,
    dispatchItem: PayloadAction<any, any>,
  ) => {
    if (
      locateWatchedFromStore.some((val) => val.title.includes(item.title)) ||
      locateWatchListFromStore.some((val) => val.title.includes(item.title))
    ) {
      setCloseModal(true);
    } else {
      dispatch(dispatchItem);
    }
  };
  const addToWatchList = (item: Content) => {
    checkWhetherItemIsAlreadyInList(item, addItem(item));
  };
  const addToWatchedList = (item: Content) => {
    checkWhetherItemIsAlreadyInList(item, addedItem(item));
  };
  const clickAction = () => {
    setToggle(!toggle);
    click.indexState();
  };

  return (
    <div onClick={clickAction} className="cursor-pointer">
      <div
        className={`cursor-pointer box-border border-spacing-1 border-y-2 shadow-lg border-x-2 ${Stylings.AccordionHeight} w-9/12 ml-[10%] flex flex-row justify-between`}
      >
        <h1
          className={`${Stylings.TextWidth} pl-16 pt-2  items-center mb-[9%]`}
        >
          {click.title}
        </h1>{" "}
        <span className={`${Stylings.TextWidth} justify-end pr-[3%]`}>⌄</span>
      </div>
      <Modal open={closeModal} stateValue={setCloseModal}></Modal>
      {toggle && click.toggleValue && (
        <div className="box-border border-spacing-1 border-y-2 shadow-lg border-x-2  w-9/12 ml-[10%] h-fit">
          <div className="flex flex-row justify-between">
            <div>
              {!isMobile && (
                <div>
                  {[
                    click.decription.title,
                    ["??", ""].some((value) =>
                      value.includes(click.decription.meta.episodes),
                    )
                      ? click.decription.latest_episode.metadata.number
                      : click.decription.meta.episodes,
                    click.decription.meta.score,
                  ].map((accordionValue, index) => {
                    return (
                      <h1
                        key={index}
                        className={`${Stylings.TextWidth} font-bold pt-4 pl-16`}
                      >
                        {index === 2 ? `⭐ ${accordionValue}` : accordionValue}
                      </h1>
                    );
                  })}
                </div>
              )}
              <div className="flex flex-row flex-wrap mb-[20%]">
                {[
                  {
                    title: "Add to WatchList",
                    stateValue: () => addToWatchList(click.decription),
                  },
                  {
                    title: "Already Watched",
                    stateValue: () => addToWatchedList(click.decription),
                  },
                ].map((accordionButtonValue, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => accordionButtonValue.stateValue()}
                      className={`cursor-pointer text-center px-3 mx-6 mt-[5%] bg-gray-400 h-fit rounded-lg hover:bg-gray-200 ${Stylings.TextWidth} font-bold text-wrap`}
                    >
                      <h1>{accordionButtonValue.title}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
            <img
              className={`w-4/12 min-h-fit`}
              src={`${ImageUrl.ImageConactUrl}` + click.decription.image}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};
