import React, { useEffect, useState } from "react";
import { ImageUrl, mockData } from "../utils/constants";
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
        <div className="bg-slate-100 h-[12%]">
          <Link to="/home">
            <button className="px-3 my-4 mx-6 bg-gray-400 h-[50px] text-2xl font-bold">
              {" "}
              ⬅️ Back
            </button>
          </Link>
        </div>

        <div className="flex flex-col">
          <div className=" my-12 mx-12 border border-spacing-0 border-x-2 border-y-2 border-black h-[10%] w-2/12">
            <img
              className="w-fit h-fit"
              src={ImageUrl.DefaultPlaceholderImage}
            ></img>
          </div>
          <div className="my-12 mx-12">
            <h1 className="text-2xl font-bold">{filteredCard.title}</h1>
            <h1 className="text-2xl font-bold">{filteredCard.rating}</h1>
            <h1 className="text-2xl font-bold">{filteredCard.count}</h1>
            {filteredCard.description && (
              <p className=" text-wrap text-2xl font-bold overflow-auto">
                {filteredCard.description}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};
