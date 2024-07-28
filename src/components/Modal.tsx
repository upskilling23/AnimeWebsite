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
      <div
        id="modal"
        className={`bg-slate-200 fixed inset-0 ${Stylings.AnimeCardWidth} ${Stylings.ModalHeight} pt-4 pr-4 rounded-2xl`}
      >
        <div className="flex flex-col justify-items-start w-full">
          <div className="flex flex-row justify-between">
            <h1 className={`${Stylings.TextWidth} text-black font-bold`}>
              Unable to Add
            </h1>
            <h1 onClick={handleClick} className="cursor-pointer">
              ❌
            </h1>
          </div>
          <div className="">
            <button
              onClick={handleClick}
              className={`cursor-pointer rounded-lg bg-gray-400 w-4/12 ${Stylings.StyleInputBox} ${Stylings.TextWidth} font-bold`}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    )
  );
};
