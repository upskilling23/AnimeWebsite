import React from "react";

interface Style {
  styleValue: string;
  content: string;
  event?: any;
}
export const ButtonComponent = (styles: Style) => {
  return (
    <button
      className={`${styles.styleValue}`}
      onClick={() => {
        console.log(styles.event);
      }}
    >
      {styles.content}
    </button>
  );
};
