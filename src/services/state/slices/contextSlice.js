import {languages} from "../../../fakebackend/FakeBackend";
import {createSlice} from "@reduxjs/toolkit";
import Polski from '../../../languages/Polski.json';

const initialState = {
    language: languages[0],
    isDark: false,
    translation: Polski
}

const contextSlice = createSlice({
    name: 'context',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.isDark = !state.isDark
        },
        setLanguage: (state, action) => {
            state.language = action.payload.language
            state.translation = action.payload.translation
        }
    }
})

export const {changeTheme,
    setLanguage} = contextSlice.actions
export default contextSlice.reducer
