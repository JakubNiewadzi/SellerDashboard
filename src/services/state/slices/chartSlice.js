import { createSlice } from "@reduxjs/toolkit";
import { getChartData, getProductRanking } from "fakebackend/FakeBackend";

const SLICE_NAME = 'chart';

const UPDATE_CURRENT_PERIOD_T = "UPDATE_CURRENT_PERIOD_T";
const UPDATE_PREVIOUS_PERIOD_T = "UPDATE_PREVIOUS_PERIOD_T";
const CLEAR_PREVIOUS_PERIOD_T = "CLEAR_PREVIOUS_PERIOD_T";
const SET_LOADING_T = "SET_LOADING_T";
const CLEAR_T = "CLEAR_T";

const action_updateCurrentPeriod = (response) => ({ type: SLICE_NAME + '/' + UPDATE_CURRENT_PERIOD_T, payload: response });
const action_updatePreviousPeriod = (response) => ({ type: SLICE_NAME + '/' + UPDATE_PREVIOUS_PERIOD_T, payload: response });
const action_clearPreviousPeriod = (response) => ({ type: SLICE_NAME + '/' + CLEAR_PREVIOUS_PERIOD_T, payload: response });
const action_setLoading = (isLoading) => ({ type: SLICE_NAME + '/' + SET_LOADING_T, payload: isLoading });
const action_clear = () => ({ type: SLICE_NAME + '/' + CLEAR_T });

const initialState = {
    isPresent: false,
    isLoading: false,
    periodType: null,
    currentPeriod: [],
    previousPeriod: [],
}

const chartSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        SET_LOADING_T: (state, action) => {
            state.isLoading = action.payload;
        },
        UPDATE_CURRENT_PERIOD_T: (state, action) => {
            state.isPresent = action.payload.isPresent;
            state.isLoading = false;
            state.periodType = action.payload.type;
            state.currentPeriod = action.payload.data;
            state.previousPeriod = initialState.previousPeriod;
        },
        UPDATE_PREVIOUS_PERIOD_T: (state, action) => {
            if (state.type !== null && state.type !== action.payload.type) {
                return;
            }
            state.isPresent = action.payload.isPresent;
            state.isLoading = false;
            state.previousPeriod = action.payload.data;
        },
        CLEAR_PREVIOUS_PERIOD_T: (state) => {
            state.previousPeriod = initialState.previousPeriod;
        },
        CLEAR_T: (state) => {
            state.isPresent = initialState.isPresent;
            state.isLoading = initialState.isLoading;
            state.periodType = initialState.periodType;
            state.currentPeriod = initialState.currentPeriod;
            state.previousPeriod = initialState.previousPeriod;
        },
    }
})

export const chartReducer = chartSlice.reducer;

export const updateCurrentPeriod = (username, account, period, type) => async (dispatch) => {
    dispatch(action_setLoading(true));
    try {
        dispatch(action_updateCurrentPeriod(await getChartData(username, account, period, type)))
    } catch (error) {
        dispatch(action_clear());
    }
}

export const updatePreviousPeriod = (username, account, period, type) => async (dispatch) => {
    dispatch(action_setLoading(true));
    try {
        dispatch(action_updatePreviousPeriod(await getChartData(username, account, period, type)))
    } catch (error) {
        dispatch(action_clear());
    }
}

export const clearPreviousPeriod = () => (dispatch) => {
    dispatch(action_clearPreviousPeriod());
}

export const clearChartInfo = () => (dispatch) => {
    dispatch(action_clear());
}
