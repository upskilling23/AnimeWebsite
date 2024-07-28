import React, { useEffect, useState } from "react";
import { ImageUrl, mockData, Stylings } from "../utils/constants";
import { Link, useParams } from "react-router-dom";

export const CardInfo = () => {
  const idValue = useParams();
  const [filteredCard, setFilteredCard] = useState();
  useEffect(() => {
    const filter = mockData.filter((data) =>
      data.id?.includes(idValue.id ?? ""),
    );
    setFilteredCard(filter[0]);
  }, []);

  return (
    filteredCard && (
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
          <div className="border border-spacing-0 border-x-2 border-y-2 border-black h-fit w-2/12">
            <img
              className="w-fit h-fit"
              src={ImageUrl.DefaultPlaceholderImage}
            ></img>
          </div>
          <div className="h-full pt-[4%]">
            {[filteredCard.title, filteredCard.rating, filteredCard.count].map(
              (filteredCardValue, index) => {
                return (
                  <>
                    <h1 className={`${Stylings.TextWidth} text-black pt-[1%]`}>
                      {filteredCardValue}
                    </h1>
                  </>
                );
              },
            )}
            {filteredCard.description && (
              <div className=" overflow-scroll">
                <p className={`${Stylings.TextWidth} text-black`}>
                  {filteredCard.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};
