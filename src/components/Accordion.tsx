import React, { useState } from "react";
import { ImageUrl } from "../utils/constants";

export interface Content {
  title: string;
  rating: number;
  count: string;
}
interface ToggleContainer {
  toggleValue: boolean;
  indexState: any;
  decription: Content;
}
export const Accordion = (click: ToggleContainer) => {
  const [toggle, setToggle] = useState(false);

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
        <h1 className="text-3xl pl-16 pt-10 ">Items</h1>{" "}
        <span className="text-4xl justify-end pt-[3%] pr-[3%]">⌄</span>
      </div>

      {toggle && click.toggleValue && (
        <div className="box-border border-spacing-1 border-y-8 shadow-lg border-x-8  w-9/12 ml-[10%] h-[230px]">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-3xl font-bold pt-4 pl-44">
                {click.decription.title}
              </h1>
              <h1 className="text-3xl font-bold pt-4 pl-44">
                {click.decription.count}
              </h1>
              <h1 className="text-3xl font-bold pt-4 pl-44">
                {click.decription.rating}
              </h1>
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
