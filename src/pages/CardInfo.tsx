import React from "react";
import { ImageUrl, Stylings } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import { useApiData } from "../hooks/useApiData";
import { LoadingPage } from "../components/LoadingContainer";

export const CardInfo = () => {
  const idValue = useParams();
  const fetchedApiData = useApiData();

  return fetchedApiData === null ? (
    <LoadingPage></LoadingPage>
  ) : (
    <>
      <div className="relative w-full h-screen bg-slate-50">
        <div className="bg-slate-100 h-fit">
          <Link to="/home">
            <button
              className={`px-3 rounded-lg hover:bg-gray-100 bg-gray-400 text-wrap ${Stylings.TextWidth} h-fit font-bold`}
            >
              {" "}
              ⬅️ Back
            </button>
          </Link>
        </div>

        <div className="flex flex-col pt-[5%] pl-[10%]">
          <div className="h-full pt-[4%]">
            {fetchedApiData.tv
              .filter((cardValue) => cardValue.id.toString() === idValue.id)
              .map((filteredCardValue, index) => {
                return (
                  <div key={index}>
                    <div className="border border-spacing-0 border-x-2 border-y-2 border-black h-fit w-2/12">
                      <img
                        className="w-fit h-fit"
                        src={
                          `${ImageUrl.ImageConactUrl}` + filteredCardValue.image
                        }
                      ></img>
                    </div>
                    <h1 className={`${Stylings.TextWidth} text-black pt-[1%]`}>
                      {filteredCardValue.title}
                      <br></br>
                      {filteredCardValue.meta.score}
                      <br></br>
                      {filteredCardValue.content}
                    </h1>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
