import {createSlice} from "@reduxjs/toolkit";
import { getChartData, getProductRanking } from "fakebackend/FakeBackend";

const SLICE_NAME = 'chart';

const ADD_PERIOD_T = "ADD_PERIOD_T";
const SET_LOADING_T = "SET_LOADING_T";
const CLEAR_T = "CLEAR_T";

const action_addPeriod = (response) => ({ type: SLICE_NAME+'/'+ADD_PERIOD_T, payload: response });
const action_setLoading = (isLoading) => ({ type: SLICE_NAME+'/'+SET_LOADING_T, payload: isLoading  });
const action_clear = () => ({ type: SLICE_NAME+'/'+CLEAR_T });

const initialState = {
    isPresent: false,
    isLoading: false,
    type: null,
    periods: {},
}

const chartSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        SET_LOADING_T: (state, action) => {
            state.isLoading = action.payload;
        },
        ADD_PERIOD_T: (state, action) => {
            if(state.type !== null && state.type !== action.payload.type) {
                return;
            }
            state.isPresent = action.payload.isPresent;
            state.isLoading = false;
            state.type = action.payload.type;
            console.log(JSON.stringify(state.periods))
            console.log(JSON.stringify(action.payload))
            state.periods = addPeriod(state.periods, action.payload);
            console.log(JSON.stringify(state.periods))
        },
        CLEAR_T: (state) => {
            state.isPresent = initialState.isPresent;
            state.isLoading = initialState.isLoading;
            state.type = initialState.type;
            state.period = initialState.period;
            state.data = initialState.data;
        },
    }
})

export const chartReducer = chartSlice.reducer;

export const addPeriodToChart = (username, account, period, type) => async (dispatch) => {
    dispatch(action_setLoading(true));
    try {
        dispatch(action_addPeriod(await getChartData(username, account, period, type)))
    } catch (error) {
        dispatch(action_clear());
    }
}

export const clearChartInfo = () => (dispatch) => {
    dispatch(action_clear());
}

function addPeriod(originalPeriods, newPeriod) {
    const updatedPeriods = { ...originalPeriods };
    updatedPeriods[newPeriod.period] = { ...newPeriod.data };
    return updatedPeriods;
}

