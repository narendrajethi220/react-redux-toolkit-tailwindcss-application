import { createSlice } from "@reduxjs/toolkit";
import { clearAllUser } from "../actions/index";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // deleteAllUser() {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(clearAllUser, () => {
      return [];
    });
  },
});
// console.log("userSlice", userSlice.actions);
export default userSlice.reducer;
export const { addUser, removeUser, deleteAllUser } = userSlice.actions;
// console.log(users.actions);
