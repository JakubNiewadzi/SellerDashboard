import {languages} from "../../../fakebackend/FakeBackend";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    language: languages[0],
    isDark: false
}

const contextSlice = createSlice({
    name: 'context',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.isDark = !state.isDark
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const {changeTheme,
    setLanguage} = contextSlice.actions
export default contextSlice.reducer