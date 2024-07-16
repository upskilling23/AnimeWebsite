import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./watchedSlice";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearItem: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = watchlistSlice.actions;
export default watchlistSlice.reducer;
