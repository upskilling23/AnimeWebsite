import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { mockData } from "../utils/constants";

export const HomeCenterSection = () => {
  const [showindex, setShowindex] = useState(null);

  return (
    <div className={`w-full h-[${mockData.length * 100 + 500}px]`}>
      <div className="w-10/12 align-middle">
        <h1 className="items-center  pl-[20%] pt-[1%] text-4xl text-center font-extrabold">
          Add items to your watchlist
        </h1>
      </div>
      <div className="mt-[10%]">
        {mockData.map((value, index) => {
          return (
            <div key={index}>
              <Accordion
                toggleValue={index === showindex ? true : false}
                indexState={() => setShowindex(index)}
                decription={value}
              ></Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
};
