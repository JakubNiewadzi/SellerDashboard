import {createSlice} from "@reduxjs/toolkit";
import { getQualityRating } from "fakebackend/FakeBackend";

const SLICE_NAME = 'quality';

const UPDATE_T = "UPDATE_T";
const SET_LOADING_T = "SET_LOADING_T";
const CLEAR_T = "CLEAR_T";

const action_update = (response) => ({ type: SLICE_NAME+'/'+UPDATE_T, payload: response });
const action_setLoading = (isLoading) => ({ type: SLICE_NAME+'/'+SET_LOADING_T, payload: isLoading  });
const action_clear = () => ({ type: SLICE_NAME+'/'+CLEAR_T });

const initialState = {
    isPresent: false,
    isLoading: false,
    cumulativeGrade: null,
    worstAspects: null,
}

const qualitySlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        SET_LOADING_T: (state, action) => {
            state.isLoading = action.payload;
        },
        UPDATE_T: (state, action) => {
            state.isPresent = action.payload.isPresent;
            state.isLoading = false;
            state.cumulativeGrade = action.payload.cumulativeGrade;
            state.worstAspects = action.payload.worstAspects
        },
        CLEAR_T: (state) => {
            state.isPresent = initialState.isPresent;
            state.isLoading = initialState.isLoading;
            state.cumulativeGrade = initialState.cumulativeGrade;
            state.worstAspects = initialState.worstAspects
        },
    }
})

export const qualityReducer = qualitySlice.reducer;

export const updateQualityInfo = (username, account) => async (dispatch) => {
    dispatch(action_setLoading(true));
    try {
        dispatch(action_update(await getQualityRating(username, account)))
    } catch (error) {
        dispatch(action_clear());
    }
}

export const clearQualityInfo = action_clear;

