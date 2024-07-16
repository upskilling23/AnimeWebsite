import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  items: string[];
}
export const initialState: CartState = {
  items: [],
};
const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    addedSurveyItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addedSurveyItem } = answersSlice.actions;
export default answersSlice.reducer;
