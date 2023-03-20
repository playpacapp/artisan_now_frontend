import { localeState } from '@/src/functions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// language files, containing translations for each message key
import enUSMessages from '@/message/en.json';
import esMessages from '@/message/es.json';

// A map of supported locales to their corresponding language files
const LOCALES_MAP = {
    'en': enUSMessages,
    'es': esMessages
  };

const DEFAULT_LOCALE = 'en';

const initState: localeState = {
    locale: DEFAULT_LOCALE,
    messages: LOCALES_MAP[DEFAULT_LOCALE]
}

export const localeSlice = createSlice({
    name: "locales",
    initialState: initState,
    reducers: {
        "setLocale": (state, action:PayloadAction<string>) => {
            console.log(action.payload)
            state.locale = "en" //action.payload;
            state.messages = LOCALES_MAP["en"]//(action.payload=="en")?LOCALES_MAP["en"]:LOCALES_MAP["es"];
        }
    }
})

export const {setLocale} = localeSlice.actions;
export default localeSlice.reducer
