import React from "react";
import { ImageUrl } from "../utils/constants";
import { ButtonComponent } from "../components/ButtonComponent";
import { Link } from "react-router-dom";

export const CenterSection = () => {
  return (
    <div className="relative">
      <img className="w-full h-full" src={ImageUrl.BgImage}></img>
      <div className="absolute inset-0 items-center justify-center">
        <h1 className="text-white text-3xl">Welcome to KYA</h1>
      </div>
      <div className="absolute inset-10">
        <h2 className="text-white text-1xl">
          {" "}
          Login to know the anime character which suits you and search for your
          favorite anime
        </h2>
      </div>
    </div>
  );
};
