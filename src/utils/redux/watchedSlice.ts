import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../constants";

export interface CartState {
  items: Movie[];
}
export const initialState: CartState = {
  items: [],
};
const watchedSlice = createSlice({
  name: "watched",
  initialState,
  reducers: {
    addedItem: (state, action) => {
      state.items.push(action.payload);
    },
    removedItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearedItem: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addedItem, removedItem, clearedItem } = watchedSlice.actions;
export default watchedSlice.reducer;
