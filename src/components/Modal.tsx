import React from "react";

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
        className="bg-slate-200 fixed inset-96 h-[350px] pt-4 pr-4 w-[800px] rounded-2xl"
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <h1 className="text-5xl text-black pb-44">Unable to Add</h1>
            <h1 onClick={handleClick} className="cursor-pointer">
              ❌
            </h1>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="cursor-pointer px-3 mx-6 bg-gray-400 w-2/12 h-12 text-4xl font-bold"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    )
  );
};
