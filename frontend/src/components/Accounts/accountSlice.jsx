import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    accountUser: {},
    isLoggedIn: false
  },
  reducers: {
    showInfo: (state) => {
        console.log(...state.accountUser)
    },
    editProfile: (state, action) => {
      return {...state, ...action.payload}
    },
    linkAccount: () => {},
    delinkAccount: () => {},
    test: () => {
      console.log("Test")
    },
    setUser: (state, action) => {
      console.log("Setting User to..", action.payload)
      //state.accountUser = {...action.payload}
      return {...action.payload}
    },
    setLoginStatus: (state, action) => {
      console.log("In setLoginStatus, state is:",state.account)
      console.log("In setLoginStatus, isLoggedIn is:",state.account.isLoggedIn)
      return !state.isLoggedIn
    }
    // decrement: (state) => {
    //   state.value -= 1;
    // }
  }
});

export const { test, editProfile, linkAccount, delinkAccount, setUser, setLoginStatus, getLoginStatus } = accountSlice.actions;

// export const selectClientAccount = (state) => state.account.clients; //slice.name.valueHere
// export const selectEmployeeAccount = (state) => state.account.employees; //slice.name

export const selectUser = (state) => state.account.accountUser;
export const selectLoginStatus = (state) => state.account.isLoggedIn;

export default accountSlice.reducer;
