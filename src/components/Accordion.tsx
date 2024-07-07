import React, { useState } from "react";
import { ImageUrl } from "../utils/constants";

interface Content {
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
    setToggle(!click.toggleValue);
    click.indexState();
  };

  return (
    <div className="">
      <div
        onClick={clickAction}
        className="cursor-pointer box-border border-spacing-1 border-y-8 shadow-lg border-x-8 h-[250px] w-9/12 ml-[10%] flex flex-row justify-between"
      >
        <h1 className="text-6xl pl-16 pt-10 ">Items</h1>{" "}
        <span className="text-7xl justify-end pt-[3%] pr-[3%]">⌄</span>
      </div>

      {toggle && click.toggleValue && (
        <div className="box-border border-spacing-1 border-y-8 shadow-lg border-x-8  w-9/12 ml-[10%] h-[800px]">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-8xl font-bold pt-24 pl-44">
                {click.decription.title}
              </h1>
              <h1 className="text-8xl font-bold pt-24 pl-44">
                {click.decription.count}
              </h1>
              <h1 className="text-8xl font-bold pt-24 pl-44">
                {click.decription.rating}
              </h1>
            </div>
            <img
              className="w-[480px] h-[600px] pr-12 pt-14"
              src={ImageUrl.DefaultPlaceholderImage}
            ></img>
          </div>
          <div className="bg-slate-300 ml-[87.2%] mr-[13%] box-border top-8 border-spacing-1 border-y-8 shadow-lg border-x-8  w-[11.7%] h-[100px]">
            <h1 className="text-4xl pt-[3%] pl-[20%] font-extrabold">
              Click to Rate
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};
