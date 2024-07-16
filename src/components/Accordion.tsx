import React, { useState } from "react";
import { ImageUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/watchlistSlice";
import { addedItem, CartState } from "../utils/watchedSlice";
import { RootState } from "../utils/appStore";
import { Modal } from "./Modal";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";

export interface Content {
  title: string;
  rating: number;
  count: string;
}
export interface ToggleContainer {
  toggleValue: boolean;
  indexState: any;
  decription: Content;
}
export const Accordion = (click: ToggleContainer) => {
  const [toggle, setToggle] = useState(false);
  const [closeModal, setCloseModal] = useState(false);

  const locateWatchListFromStore = useSelector(
    (store: RootState) => store.watchlist.items,
  );
  const locateWatchedFromStore = useSelector(
    (store: RootState) => store.watched.items,
  );

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
    <div className="">
      <div
        onClick={clickAction}
        className="cursor-pointer box-border border-spacing-1 border-y-8 shadow-lg border-x-8 h-[100px] w-9/12 ml-[10%] flex flex-row justify-between"
      >
        <h1 className="text-3xl pl-16 pt-2  items-center mb-[9%]">Items</h1>{" "}
        <span className="text-4xl justify-end pr-[3%]">⌄</span>
      </div>
      <Modal open={closeModal} stateValue={setCloseModal}></Modal>
      {toggle && click.toggleValue && (
        <div className="box-border border-spacing-1 border-y-8 shadow-lg border-x-8  w-9/12 ml-[10%] h-[230px]">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-xl font-bold pt-4 pl-16">
                {click.decription.title}
              </h1>
              <h1 className="text-xl font-bold pt-4 pl-16">
                {click.decription.count}
              </h1>
              <h1 className="text-xl font-bold pt-4 pl-16">
                {click.decription.rating}
              </h1>
              <div className="flex flex-row mb-[20%]">
                <div
                  onClick={() => addToWatchList(click.decription)}
                  className=" cursor-pointer text-center px-3 mx-6 mt-[5%] bg-gray-400 h-14 text-2xl font-bold text-wrap"
                >
                  <h1>Add to WatchList</h1>
                </div>
                <div
                  onClick={() => addToWatchedList(click.decription)}
                  className="cursor-pointer text-center px-3 mx-6 mt-[5%] bg-gray-400 h-14 text-2xl font-bold text-wrap"
                >
                  <h1>Already Watched</h1>
                </div>
              </div>
            </div>
            <img
              className="w-[200px] h-[150px] pr-12 pt-14"
              src={ImageUrl.DefaultPlaceholderImage}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};
