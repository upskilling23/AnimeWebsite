import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { Stylings } from "../utils/constants";
import { useApiData } from "../hooks/useApiData";
import { LoadingContainer } from "./LoadingContainer";

export const HomeCenterSection = () => {
  const [showindex, setShowindex] = useState(null);
  const fetchedApiData = useApiData();

  return (
    <div className={`w-full h-fit pt-[3%]`}>
      <div className="w-10/12 align-middle">
        <h1
          className={`items-center pl-[20%] pt-[1%] ${Stylings.TextWidth} text-center font-extrabold`}
        >
          Add items to your watchlist, top rated content in the world
        </h1>
      </div>
      <div className="mt-[3%]">
        {fetchedApiData === null ? (
          <LoadingContainer></LoadingContainer>
        ) : (
          fetchedApiData.tv
            .filter((filterRating) => filterRating.meta.score > 8.5)
            .map((value, index) => {
              return (
                <div key={index}>
                  <Accordion
                    toggleValue={index === showindex ? true : false}
                    indexState={() => setShowindex(index)}
                    decription={value}
                    title={`Click to view`}
                  ></Accordion>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
};
