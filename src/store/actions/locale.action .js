
export const localeActions = {
    setLocale
};

function setLocale(locale) {
    return dispatch => {
        return {type: `LOCALE_CHANGE_REQUEST`, payload: locale}
    };
}