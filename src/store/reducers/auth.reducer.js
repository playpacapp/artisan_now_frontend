import { userConstants } from '../constants';

let user = undefined;
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {

    return {
        logStatus: action.type,
        user: action?.user 
    }
    
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                logStatus: action.type,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                logStatus: action.type,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                logStatus: action.type,
                user: null
            };
        case userConstants.LOGOUT:
            return {
                logStatus: action.type,
                user: null
            };
        default:
            return state
    }
}