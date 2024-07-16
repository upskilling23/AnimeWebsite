import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { mockData } from "../utils/constants";

export const HomeCenterSection = () => {
  const [showindex, setShowindex] = useState(null);

  return (
    <div className="w-full h-[600px]">
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
