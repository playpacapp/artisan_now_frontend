import { localeState } from '@/src/functions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const DEFAULT_LOCALE = 'en';

const initState: localeState = {
    locale: DEFAULT_LOCALE,
}

export const localeSlice = createSlice({
    name: "locales",
    initialState: initState,
    reducers: {
        "setLocale": (state, action:PayloadAction<string>) => {
            state.locale = action.payload;
        }
    }
})

export const {setLocale} = localeSlice.actions;
export default localeSlice.reducer
