import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    type: "",
    content: ""
  },
  reducers: {
    showWarning: (state, action) => {
        state.type = "?"
        state.content = action.payload
    },
    showError: (state,action) => {
        state.type = "!"
        state.content = action.payload
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // }
  }
});

export const { showWarning, showError } = errorSlice.actions;

// export const selectClientAccount = (state) => state.account.clients; //slice.name.valueHere
// export const selectEmployeeAccount = (state) => state.account.employees; //slice.name

export const selectType = (state) => state.error.type;
export const selectError = (state) => state.error.isLoggedIn;

export default errorSlice.reducer;
