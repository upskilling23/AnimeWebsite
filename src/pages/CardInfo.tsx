import React, { useState, useEffect } from "react";
import { ImageUrl, Stylings } from "../utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import { useApiData } from "../hooks/useApiData";
import { LoadingPage } from "../components/LoadingContainer";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import mockData from "../utils/mockdata.json";

export const CardInfo = () => {
  const idValue = useParams();
  const { data: fetchedApiData, error, isLoading } = useApiData();

  const locateAnswersFromStore = useSelector(
    (store: RootState) => store.surveyAnswers.items,
  );
  const [updateData, setUpdateData] = useState();
  useEffect(() => {
    if (fetchedApiData) {
      const fetchedData =
        locateAnswersFromStore.length === 0 && fetchedApiData
          ? fetchedApiData.tv
          : locateAnswersFromStore[3] === "Anime"
            ? fetchedApiData.tv
            : fetchedApiData.movies;
      setUpdateData(fetchedData);
    } else {
      setUpdateData(mockData.movies);
    }
  }, [fetchedApiData]);
  const navigate = useNavigate();

  return isLoading ? (
    <LoadingPage></LoadingPage>
  ) : (
    <>
      <div className="relative w-full h-fit bg-slate-50">
        <div className="bg-slate-100 h-fit">
          <button
            onClick={() => {
              navigate("/home");
            }}
            className={`px-3 rounded-lg hover:bg-gray-100 bg-gray-400 text-wrap ${Stylings.TextWidth} h-fit font-bold`}
          >
            {" "}
            ⬅️ Back
          </button>
        </div>

        <div className="flex flex-col pt-[5%] pl-[10%]">
          <div className="h-full pt-[4%]">
            {updateData ? (
              updateData
                .filter((cardValue) => cardValue.id.toString() === idValue.id)
                .map((filteredCardValue, index) => {
                  return (
                    <div key={index}>
                      <div className="border border-spacing-0 border-x-2 border-y-2 border-black h-fit w-2/12">
                        <img
                          className="w-fit h-fit"
                          src={
                            `${ImageUrl.ImageConactUrl}` +
                            filteredCardValue.image
                          }
                        ></img>
                      </div>
                      <h1
                        className={`${Stylings.TextWidth} text-black pt-[1%]`}
                      >
                        {filteredCardValue.title}
                        <br></br>
                        {filteredCardValue.meta.score}
                        <br></br>
                        {filteredCardValue.content}
                      </h1>
                    </div>
                  );
                })
            ) : (
              <div>No data available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
