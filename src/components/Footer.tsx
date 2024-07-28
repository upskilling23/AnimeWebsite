import React from "react";
import { Stylings } from "../utils/constants";

export const Footer = () => {
  return (
    <div className="static h-full bg-orange-100 box-border border-spacing-1 border-y-4 w-full pl-[30%] pt-[3%]">
      <div
        className={`text-wrap w-8/12 ${Stylings.TextWidth} font-bold  pb-[3%]`}
      >
        <h1>For all series and movie lovers 💗</h1>
      </div>
    </div>
  );
};
