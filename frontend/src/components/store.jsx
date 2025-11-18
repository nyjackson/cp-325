import {configureStore} from '@reduxjs/toolkit'
import accountReducer from './Account/accountSlice'
export default configureStore({
    reducer: {
        account: accountReducer,
    }
})