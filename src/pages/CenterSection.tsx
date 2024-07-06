import React from "react";
import { ImageUrl } from "../utils/constants";
import { ButtonComponent } from "../components/ButtonComponent";
import { Link } from "react-router-dom";

export const CenterSection = () => {
  return (
    <>
      <img className="w-[100%] h-[100%]" src={ImageUrl.BgImage}></img>
      <div>
        <h1 className="text-white absolute bottom-[900px] text-9xl">
          Welcome to KYA
        </h1>
        <h2 className="text-white absolute bottom-[800px] text-5xl">
          {" "}
          Login to know the anime character which suits you and search for your
          favorite anime
        </h2>
        <Link to="/login">
          <ButtonComponent
            content={"Login"}
            styleValue={
              "bg-green box-border border-spacing-2 border-y-6  border-white text-white absolute bottom-[500px] text-[150px] px-[100px] mx-[1020px]"
            }
          ></ButtonComponent>
        </Link>
      </div>
    </>
  );
};
