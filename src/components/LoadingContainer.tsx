import React from "react";

export const LoadingContainer = () => {
  return (
    <div className="flex flex-row overflow-auto">
      {[1, 2, 3, 4].map((val, index) => (
        <div
          key={index}
          className={`border items-center h-[200px] w-[300px] border-blue-950 mr-[40px] cursor-pointer  flex flex-col justify-center`}
        >
          <div className="border rounded-[50%] w-[100px] h-[100px] border-t-[16px] border-solid border-teal-200 animate-spin"></div>
          <h1 className="text-xl font-bold">Loading</h1>
        </div>
      ))}
    </div>
  );
};

export const LoadingPage = () => {
  return (
    <div
      className={`border items-center h-[200px] w-[300px] border-blue-950 mr-[40px] cursor-pointer  flex flex-col justify-center`}
    >
      <div className="border rounded-[50%] w-[100px] h-[100px] border-t-[16px] border-solid border-teal-200 animate-spin"></div>
      <h1 className="text-xl font-bold">Loading</h1>
    </div>
  );
};
