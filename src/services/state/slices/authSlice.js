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
            state.user = action.payload.username;
            state.currentAccount = action.payload.account
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.currentAccount = null
        },
        changeAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const {login,
    logout,
    changeAccount} = authSlice.actions
export default authSlice.reducer