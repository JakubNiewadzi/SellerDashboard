import {createSlice} from "@reduxjs/toolkit";
import { getLatestOpinions } from "fakebackend/FakeBackend";

const SLICE_NAME = 'opinions';

const UPDATE_T = "UPDATE_T";
const SET_LOADING_T = "SET_LOADING_T";
const CLEAR_T = "CLEAR_T";

const action_update = (response) => ({ type: SLICE_NAME+'/'+UPDATE_T, payload: response });
const action_setLoading = (isLoading) => ({ type: SLICE_NAME+'/'+SET_LOADING_T, payload: isLoading  });
const action_clear = () => ({ type: SLICE_NAME+'/'+CLEAR_T });

const initialState = {
    isPresent: false,
    isLoading: false,
    opinions: [],
}

const opinionsSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        SET_LOADING_T: (state, action) => {
            state.isLoading = action.payload;
        },
        UPDATE_T: (state, action) => {
            state.isPresent = action.payload.isPresent;
            state.isLoading = false;
            state.opinions = action.payload.opinions;
        },
        CLEAR_T: (state) => {
            state.isPresent = initialState.isPresent;
            state.isLoading = initialState.isLoading;
            state.opinions = initialState.opinions;
        },
    }
})

export const opinionsReducer = opinionsSlice.reducer;

export const updateOpinionsInfo = (username, account, type) => async (dispatch) => {
    dispatch(action_setLoading(true));
    try {
        dispatch(action_update(await getLatestOpinions(username, account, type)))
    } catch (error) {
        dispatch(action_clear());
    }
}

export const clearOpinionsInfo = () => (dispatch) => {
    dispatch(action_clear());
}
