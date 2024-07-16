import React from "react";

interface Style {
  styleValue: string;
  content: string;
  event?: any;
  dispatch?: boolean;
}
export const ButtonComponent = (styles: Style) => {
  return (
    <button
      className={`${styles.styleValue}`}
      onClick={() => {
        styles.dispatch ? styles.event() : styles.event;
      }}
    >
      {styles.content}
    </button>
  );
};
