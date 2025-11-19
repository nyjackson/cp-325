import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    value: {}
  },
  reducers: {
    // addInfo: (state) => {
    //   state.value += 1;
    // },
    test: (state) => {
        console.log(state.value)
    }
    // decrement: (state) => {
    //   state.value -= 1;
    // }
  }
});

export const { test } = accountSlice.actions;

export const selectAccount = (state) => state.account.value; //slice.name

export default accountSlice.reducer;
