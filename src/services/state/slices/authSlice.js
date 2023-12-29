import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
    currentAccount: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.currentAccount = action.payload.account
        },
        logout: (state) => {
            state=initialState
        },
        changeAccount: (state, action) => {
            state.currentAccount = action.payload.account
        }
    }
})

export const {login,
    logout,
    changeAccount} = authSlice.actions
export default authSlice.reducer