import { createSlice } from "@reduxjs/toolkit";
import { LANGUAGES } from "fakebackend/FakeBackend";

const initialState = {
    isDark: false,
    language: LANGUAGES[0].name,
    translation: LANGUAGES[0].messages
}

const contextSlice = createSlice({
    name: 'context',
    initialState,
    reducers: {
        switchTheme: (state) => {
            state.isDark = !state.isDark
        },
        setLanguage: (state, action) => {
            state.language = action.payload.name
            state.translation = action.payload.messages
        }
    }
})

export const { switchTheme, setLanguage } = contextSlice.actions
export default contextSlice.reducer
