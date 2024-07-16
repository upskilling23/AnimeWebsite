import React, { useState, useEffect } from "react";
import { ImageUrl } from "../utils/constants";
import { ButtonComponent } from "./ButtonComponent";
import { Link } from "react-router-dom";
import { loggedin } from "../pages/Header";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

export const NavBar = (status: loggedin) => {
  const [statusValue, setStatusValue] = useState(false);
  const locatorFromStoreForWatchListItems = useSelector(
    (store: RootState) => store.watchlist.items,
  );
  useEffect(() => {
    if (status.statusOption === "loggedIn") {
      setStatusValue(true);
    } else {
      setStatusValue(false);
    }
  }, [status.statusOption]);
  return (
    <div className="static h-[150px] bg-orange-100 box-border border-spacing-1 border-y-4">
      <div className="comp flex justify-between">
        <div>
          <img className="w-[140px] h-[140px]" src={ImageUrl.Logo}></img>
        </div>
        {statusValue ? (
          <>
            <div className="items-center pt-8">
              <Link to="/watch-list">
                <h1 className="cursor-pointer text-4xl items-center">
                  WatchList{" "}
                  {locatorFromStoreForWatchListItems.length > 0 &&
                    (locatorFromStoreForWatchListItems.length > 1
                      ? `${locatorFromStoreForWatchListItems.length} items`
                      : `${locatorFromStoreForWatchListItems.length} item`)}
                </h1>
              </Link>
            </div>
            <h1 className="text-4xl px-20 my-1 pt-8">Hi {""}</h1>
          </>
        ) : (
          <div className="py-9 my-auto">
            <Link to="/login">
              {" "}
              <ButtonComponent
                content={"Login"}
                styleValue={"px-3 mx-6 bg-gray-400 h-12 text-4xl font-bold"}
              ></ButtonComponent>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
