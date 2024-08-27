import React, { useEffect } from "react";
import { Stylings } from "../utils/constants";

interface ModalOpen {
  open: boolean;
  stateValue: (value: boolean) => void;
}

export const Modal = ({ open, stateValue }: ModalOpen) => {
  const handleClick = () => {
    stateValue(false);
  };

  useEffect(() => {
    if (open) {
      const closeButton = document.getElementById("modal-close-button");
      if (closeButton) closeButton.focus();
    }
  }, [open]);
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
                role="button"
                tabIndex="0"
                type="button"
                onClick={handleClick}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick();
                  }
                }}
                id="modal-close-button"
                className="cursor-between hover:border hover:border-spacing-1 hover:bg-white"
              >
                ❌
              </h1>
            </div>
            <div className="pt-[25%] flex flex-row justify-center">
              <div
                role="button"
                tabIndex="0"
                type="button"
                onClick={handleClick}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick();
                  }
                }}
                className={`cursor-pointer rounded-lg bg-gray-400  w-3/12 ${Stylings.StyleInputBox} ${Stylings.TextWidth} font-bold `}
              >
                Ok
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
