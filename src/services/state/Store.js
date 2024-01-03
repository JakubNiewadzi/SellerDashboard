import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import contextReducer from "./slices/contextSlice"
export const store = configureStore({
    reducer: {
        auth: authReducer,
        context: contextReducer,
    }
})

