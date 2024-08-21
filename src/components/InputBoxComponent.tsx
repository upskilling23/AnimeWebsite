import React from "react";

interface textItems {
  styleValue: string;
  passedText: string;
  placeholderText: string;
  stateValue: any;
  id: string;
}
export const InputBoxComponent = (style: textItems) => {
  return (
    <input
      id={style.passedText}
      value={style.passedText}
      onChange={(e) => {
        style.stateValue(e.target.value);
      }}
      placeholder={style.placeholderText}
      className={style.styleValue}
    ></input>
  );
};
