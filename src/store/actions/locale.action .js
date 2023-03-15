
export const localeActions = {
    setLocale
};

function setLocale(locale) {
    return dispatch => {
        return {locale: locale}
    };
}