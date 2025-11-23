import {configureStore} from '@reduxjs/toolkit'
import accountReducer from './slices/accountSlice'
import errorReducer from './slices/errorSlice'
export default configureStore({
    reducer: {
        account: accountReducer,
        error: errorReducer
    }
})