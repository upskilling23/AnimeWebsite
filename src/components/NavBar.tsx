import React, { useState, useEffect } from "react";
import { ImageUrl, Stylings } from "../utils/constants";
import { ButtonComponent } from "./ButtonComponent";
import { Link, useParams } from "react-router-dom";
import { loggedin } from "../pages/Header";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

export const NavBar = (status: loggedin) => {
  const getUrl: string = useParams().toString();
  const [statusValue, setStatusValue] = useState(false); //checking state of user whether logged in or not
  const locatorFromStoreForWatchListItems = useSelector(
    (store: RootState) => store.watchlist.items,
  );
  // fetching items from redux to update the watchlist
  useEffect(() => {
    if (status.statusOption === "loggedIn") {
      setStatusValue(true);
    } else {
      setStatusValue(false);
    }
  }, [status.statusOption]);
  return (
    <nav
      className={`static h-full bg-orange-100 box-border border-spacing-1 border-y-4`}
    >
      <div className="comp flex justify-between">
        <div>
          <img
            className={`relative w-[100px] h-[100px]`}
            src={ImageUrl.Logo}
            alt="website logo"
          ></img>
        </div>
        {statusValue ? (
          <>
            <div className="items-center pt-8">
              <Link to="/watch-list">
                <h1
                  className={`cursor-pointer ${Stylings.TextWidth} items-center`}
                >
                  WatchList{" "}
                  {locatorFromStoreForWatchListItems.length > 0 &&
                    (locatorFromStoreForWatchListItems.length > 1
                      ? `${locatorFromStoreForWatchListItems.length} items`
                      : `${locatorFromStoreForWatchListItems.length} item`)}
                </h1>
              </Link>
            </div>
            <h2 className={`${Stylings.TextWidth} pr-[2%] my-1 pt-8`}>
              Hi {""}
            </h2>
          </>
        ) : (
          <div className="py-9 my-auto">
            <Link to="/sign-up">
              {" "}
              <ButtonComponent
                content={"Sign Up"}
                styleValue={"px-3 mx-6 bg-gray-400 h-12 text-4xl font-bold"}
              ></ButtonComponent>
            </Link>
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
    </nav>
  );
};
