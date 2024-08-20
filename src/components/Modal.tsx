import React from "react";
import { Stylings } from "../utils/constants";

interface ModalOpen {
  open: boolean;
  stateValue: (value: boolean) => void;
}

export const Modal = ({ open, stateValue }: ModalOpen) => {
  const handleClick = () => {
    stateValue(false);
  };

  return (
    open && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          id="modal"
          className={`bg-slate-200 z-50 fixed ${Stylings.AnimeCardWidth} ${Stylings.ModalHeight} pt-4 pr-4 rounded-2xl`}
        >
          <div className="flex flex-col justify-center w-full">
            <div className="flex flex-row justify-between">
              <h1 className={`${Stylings.TextWidth} text-black font-bold`}>
                Unable to Add
              </h1>
              <h1
                onClick={handleClick}
                className="cursor-between hover:border hover:border-spacing-1 hover:bg-white"
              >
                ❌
              </h1>
            </div>
            <div className="pt-[40%]">
              <button
                onClick={handleClick}
                className={`cursor-pointer rounded-lg bg-gray-400 w-4/12 ${Stylings.StyleInputBox} ${Stylings.TextWidth} font-bold `}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
