import {createSlice} from "@reduxjs/toolkit";
import { getQualityRating } from "fakebackend/FakeBackend2";

const NAME = 'quality';
const UPDATE_T = "update";
const LOADING_T = "loading";
const CLEAR_T = "clear";

const UPDATE_A = (response) => ({ type: NAME+'/'+UPDATE_T, payload: response });
const LOADING_A = () => ({ type: NAME+'/'+LOADING_T });
const CLEAR_A = () => ({ type: NAME+'/'+CLEAR_T });


const initialState = {
    isPresent: false,
    isLoading: false,
    cumulativeGrade: null,
    worstAspects: []
}

const qualitySlice = createSlice({
    name: NAME,
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true;
        },
        update: (state, action) => {
            console.log("UPDATE")
            console.log(action)
            state.isPresent = action.payload.isPresent;
            state.isLoading = false;
            state.cumulativeGrade = action.payload.cumulativeGrade;
            state.worstAspects = action.payload.worstAspects
        },
        clear: (state) => {
            console.log("CLEARING");
            state.isPresent = initialState.isPresent;
            state.isLoading = initialState.isLoading;
            state.cumulativeGrade = initialState.cumulativeGrade;
            state.worstAspects = initialState.worstAspects
        },
    }
})

export const qualityReducer = qualitySlice.reducer;

export const updateQualityInformation = (username, account) => async (dispatch) => {
    dispatch(LOADING_A());
    try {
        dispatch(UPDATE_A(await getQualityRating(username, account)))
    } catch (error) {
        dispatch(CLEAR_A());
    }
}

export const clearQualityInformation = () => (dispatch) => {
    dispatch(CLEAR_A());
}
