import React, { useEffect } from "react";
import { ImageUrl, Stylings } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { addUser, signOutUser } from "../utils/redux/usersSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Retrieve user from the Redux store
  const locateUsersFromStore = useSelector(
    (store: RootState) => store.user.items,
  );
  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );
  const locatorFromStoreForWatchListItems = useSelector(
    (store: RootState) => store.watchlist.items,
  );
  // Listen for Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is logged in, update the Redux store with user details
        dispatch(
          addUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          }),
        );
      } else {
        // If the user is logged out, clear the user from the Redux store
        dispatch(signOutUser());
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [dispatch]);

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
        {locateUsersFromStore &&
          locateUsersFromStore.length > 0 &&
          locateAnswersFromStore && (
            <div className="items-center pt-8">
              <h1
                onClick={() => {
                  navigate("/watch-list");
                }}
                className={`cursor-pointer ${Stylings.TextWidth} items-center`}
              >
                WatchList{" "}
                {locatorFromStoreForWatchListItems.length > 0 &&
                  (locatorFromStoreForWatchListItems.length > 1
                    ? `${locatorFromStoreForWatchListItems.length} items`
                    : `${locatorFromStoreForWatchListItems.length} item`)}
              </h1>
            </div>
          )}
        {locateUsersFromStore && locateUsersFromStore.length > 0 ? (
          <div className="flex flex-col justify-between">
            <button
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    dispatch(signOutUser());
                    navigate("/");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
              className={`px-3 rounded-lg hover:bg-gray-100 bg-gray-400 text-wrap ${Stylings.TextWidth} h-fit font-bold`}
            >
              Sign Out
            </button>
            <h2
              className={`${Stylings.TextWidth} pr-[2%] my-1 pt-8 font-medium`}
            >
              Hi,{" "}
              <span className="font-extrabold">
                {locateUsersFromStore[0]?.displayName
                  .charAt(0)
                  .toLocaleUpperCase() +
                  locateUsersFromStore[0]?.displayName.slice(
                    1,
                    locateUsersFromStore[0]?.displayName.length,
                  ) || "User"}
              </span>
            </h2>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className={`w-2/12 cursor-pointer bg-black ${Stylings.StyleInputBox} ${Stylings.TextWidth} font-bold text-white rounded-md mr-[1%]`}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};
