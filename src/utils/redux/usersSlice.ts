import { createSlice } from "@reduxjs/toolkit";

export interface User {
  uid: string;
  displayName: string;
  email: string;
}

export interface UserState {
  items: User[];
}

export const initialState: UserState = {
  items: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Clear any existing users and add the new user
      state.items = [action.payload];
    },
    signOutUser: (state) => {
      // Clear the user list
      state.items = [];
    },
  },
});

export const { addUser, signOutUser } = usersSlice.actions;
export default usersSlice.reducer;
