import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    message: {type: "",
    content: "",
  active:false}
  },
  reducers: {
    makeWarning: (state, action) => {
        state.message.type = "?"
        state.message.content = action.payload
        return 
    },
    makeError: (state,action) => {
      console.log("In make error, payload is", action.payload)
        state.message.type = "!"
        state.message.content = action.payload
        return
    },
    signupSuccess: (state,action) => {
      console.log("In make error, payload is", action.payload)
        state.message.type = "✓"
        state.message.content = action.payload
        return
    },
    setActive : (state, action) => {
      console.log("In setActive", action.payload)
      console.log("State", state.message.active)
      state.message.active = action.payload
      return state
    }
  }
});

export const { makeWarning, makeError, setActive, signupSuccess } = errorSlice.actions;

export const selectMessage = (state) => state.error.message; //slice.name.valueHere
export const displayMessageStatus = (state) => state.error.message.active;
export default errorSlice.reducer;
