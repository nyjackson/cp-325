import {configureStore} from '@reduxjs/toolkit'
import accountReducer from './Accounts/accountSlice'
export default configureStore({
    reducer: {
        account: accountReducer,
    }
})