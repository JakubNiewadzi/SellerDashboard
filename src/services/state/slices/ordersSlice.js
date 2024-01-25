import { createSlice } from "@reduxjs/toolkit";
import { getOrdersStatistics } from "fakebackend/FakeBackend";

const SLICE_NAME = 'orders';

const UPDATE_T = "UPDATE_T";
const SET_LOADING_T = "SET_LOADING_T";
const CLEAR_T = "CLEAR_T";

const action_update = (response) => ({ type: SLICE_NAME + '/' + UPDATE_T, payload: response });
const action_setLoading = (isLoading) => ({ type: SLICE_NAME + '/' + SET_LOADING_T, payload: isLoading });
const action_clear = () => ({ type: SLICE_NAME + '/' + CLEAR_T });

const initialState = {
    isPresent: false,
    isLoading: false,
    notPaid: null,
    notSent: null,
    returned: null,
}

const ordersSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        SET_LOADING_T: (state, action) => {
            state.isLoading = action.payload;
        },
        UPDATE_T: (state, action) => {
            state.isPresent = action.payload.isPresent;
            state.isLoading = false;
            state.notPaid = action.payload.notPaid;
            state.notSent = action.payload.notSent;
            state.returned = action.payload.returned;
        },
        CLEAR_T: (state) => {
            state.isPresent = initialState.isPresent;
            state.isLoading = initialState.isLoading;
            state.notPaid = initialState.notPaid;
            state.notSent = initialState.notSent;
            state.returned = initialState.returned;
        },
    }
})

export const ordersReducer = ordersSlice.reducer;

export const updateOrdersInfo = (username, account) => async (dispatch) => {
    dispatch(action_setLoading(true));
    try {
        dispatch(action_update(await getOrdersStatistics(username, account)))
    } catch (error) {
        dispatch(action_clear());
    }
}

export const clearOrdersInfo = action_clear;
