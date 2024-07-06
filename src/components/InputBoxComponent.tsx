import React from "react";

interface textItems {
  styleValue: string;
  passedText: string;
  placeholderText: string;
  stateValue: any;
}
export const InputBoxComponent = (style: textItems) => {
  return (
    <input
      value={style.passedText}
      onChange={(e) => {
        console.log(e);
        style.stateValue(e.target.value);
      }}
      placeholder={style.placeholderText}
      className={style.styleValue}
    ></input>
  );
};
