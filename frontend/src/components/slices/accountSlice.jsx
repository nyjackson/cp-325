import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    accountUser: {},
    isLoggedIn: false
  },
  reducers: {
    editProfile: (state, action) => {
      return {...state, ...action.payload} // need to test 
    },
    linkAccount: () => {}, // need to implement
    delinkAccount: () => {}, // need to implement
    setUser: (state, action) => {
     // console.log("Setting User to..", action.payload)
      state.accountUser = {...action.payload}
      return 
    },
    setLoginStatus: (state, action) => {
      // console.log("Setting the Login Status")
      // console.log(state)
      // console.log(action)
      state.isLoggedIn = action.payload
      return 
    }
    // decrement: (state) => {
    //   state.value -= 1;
    // }
  }
});

export const { editProfile, linkAccount, delinkAccount, setUser, setLoginStatus, getLoginStatus } = accountSlice.actions;

// export const selectClientAccount = (state) => state.account.clients; //slice.name.valueHere
// export const selectEmployeeAccount = (state) => state.account.employees; //slice.name

export const selectUser = (state) => state.account.accountUser;
export const selectLoginStatus = (state) => state.account.isLoggedIn;

export default accountSlice.reducer;
