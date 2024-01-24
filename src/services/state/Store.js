import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import contextReducer from "./slices/contextSlice"
import {qualityReducer} from "./slices/qualitySlice"
import { ordersReducer } from "./slices/ordersSlice"
import { opinionsReducer } from "./slices/opinionsSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        context: contextReducer,
        quality: qualityReducer,
        orders: ordersReducer,
        opinions: opinionsReducer,
    }
})

