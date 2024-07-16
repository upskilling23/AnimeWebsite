import React from "react";
import { ImageUrl } from "../utils/constants";
import { ButtonComponent } from "./ButtonComponent";
import { Link } from "react-router-dom";

export const EmptyList = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src={ImageUrl.WatchListScreen}
          alt="Background Image"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h1 className="text-2xl text-black pb-4 pt-2">
              Your Watchlist is empty
            </h1>
            <h1 className="text-2xl text-black pb-4 pt-2">
              {" "}
              Please add Something
            </h1>
            <Link to="/home">
              <ButtonComponent
                content={"Click to Add"}
                styleValue={"px-3 mx-6 bg-gray-400 h-12 text-2xl font-bold"}
              ></ButtonComponent>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
