import { configureStore } from "@reduxjs/toolkit"
import contextReducer from "./slices/contextSlice"
import { authReducer } from "./slices/authSlice"
import { qualityReducer } from "./slices/qualitySlice"
import { ordersReducer } from "./slices/ordersSlice"
import { opinionsReducer } from "./slices/opinionsSlice"
import { productsRankingReducer } from "./slices/productsRankingSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        context: contextReducer,
        quality: qualityReducer,
        orders: ordersReducer,
        opinions: opinionsReducer,
        productsRanking: productsRankingReducer,
    }
})

