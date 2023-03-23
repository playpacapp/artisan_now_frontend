import { userConstants } from '../constants';

var initialState = {
}
var user = {}

if (typeof window !== 'undefined' && window.localStorage) {
    user = JSON.parse(localStorage.getItem('user'));
    initialState = user ? { loggedIn: true, user } : {};
}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggedIn: false,
                loggingIn: false
            };
        case userConstants.LOGOUT:
            return {
                loggingIn: false,
                loggedIn: false,
            };
        default:
            return state
    }
}