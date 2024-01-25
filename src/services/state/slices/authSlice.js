import {createSlice} from "@reduxjs/toolkit";
import { performLogin } from "fakebackend/FakeBackend";

const SLICE_NAME = 'auth';

const LOGIN_T = "LOGIN_T";
const LOGOUT_T = "LOGOUT_T";
const CHANGE_ACCOUNT_T = "CHANGE_ACCOUNT_T";

const action_login = (user, accounts, currentAccount) => ({ type: SLICE_NAME+'/'+LOGIN_T, payload: {user: user, accounts: accounts, currentAccount: currentAccount} });
const action_logout = () => ({ type: SLICE_NAME+'/'+LOGOUT_T });
const action_changeAccount = (account) => ({ type: SLICE_NAME+'/'+CHANGE_ACCOUNT_T, payload: account });

const initialState = {
    isLoggedIn: false,
    user: null,
    accounts: null,
    currentAccount: null,
}

const authSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        LOGIN_T: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.accounts = action.payload.accounts;
            state.currentAccount = action.payload.currentAccount
        },
        LOGOUT_T: (state) => {
            state.isLoggedIn = initialState.isLoggedIn;
            state.user = initialState.user;
            state.accounts = initialState.accounts;
            state.currentAccount = initialState.currentAccount
        },
        CHANGE_ACCOUNT_T: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const authReducer = authSlice.reducer;

export const login = (user, password) => async (dispatch) => {
    try {
        const loginResult = await performLogin(user, password);
        if(loginResult.isLoginSuccessful) {
            dispatch(action_login(loginResult.user, loginResult.accounts, loginResult.accounts[0]))
        }
    } catch (error) {}
}

export const logout = action_logout;

export const changeAccount = (account) =>  {
    return action_changeAccount(account);
}
