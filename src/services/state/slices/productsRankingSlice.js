import {createSlice} from "@reduxjs/toolkit";
import { getProductRanking } from "fakebackend/FakeBackend";

const SLICE_NAME = 'productsRanking';

const UPDATE_T = "UPDATE_T";
const SET_LOADING_T = "SET_LOADING_T";
const CLEAR_T = "CLEAR_T";

const action_update = (response) => ({ type: SLICE_NAME+'/'+UPDATE_T, payload: response });
const action_setLoading = (isLoading) => ({ type: SLICE_NAME+'/'+SET_LOADING_T, payload: isLoading  });
const action_clear = () => ({ type: SLICE_NAME+'/'+CLEAR_T });

const initialState = {
    isPresent: false,
    isLoading: false,
    type: null,
    entries: null,
}

const productsRankingSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        SET_LOADING_T: (state, action) => {
            state.isLoading = action.payload;
        },
        UPDATE_T: (state, action) => {
            state.isPresent = action.payload.isPresent;
            state.isLoading = false;
            state.type = action.payload.type;
            state.entries = action.payload.entries;
        },
        CLEAR_T: (state) => {
            state.isPresent = initialState.isPresent;
            state.isLoading = initialState.isLoading;
            state.type = initialState.type;
            state.entries = initialState.entries;
        },
    }
})

export const productsRankingReducer = productsRankingSlice.reducer;

export const updateProductsRankingInfo = (username, account, type) => async (dispatch) => {
    dispatch(action_setLoading(true));
    try {
        dispatch(action_update(await getProductRanking(username, account, type)))
    } catch (error) {
        dispatch(action_clear());
    }
}

export const clearProductsRankingInfo = () => (dispatch) => {
    dispatch(action_clear());
}
