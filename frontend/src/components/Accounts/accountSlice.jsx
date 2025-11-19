import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    clients: [],
    employees: [],
  },
  reducers: {
    // addInfo: (state) => {
    //   state.value += 1;
    // },
    test: (state) => {
        console.log(state.value)
    },
    addNewClient: (state, action) =>{
      return [...state, action.payload]
    }, 
    deleteClient: () => {},
    editClient: () => {},
    addNewEmployee: () => {},
    deleteEmployee: () => {},
    editEmployee: () => {},
    linkAccount: () => {},
    delinkAccount: () => {}
    // decrement: (state) => {
    //   state.value -= 1;
    // }
  }
});

export const { test } = accountSlice.actions;

export const selectClientAccount = (state) => state.account.clients; //slice.name.valueHere
export const selectEmployeeAccount = (state) => state.account.employees; //slice.name

export default accountSlice.reducer;
