
export type menuItemType = {
    name: string;
    link: string;
}

export type courseInfo = {
    imageUrl: string;
    courseName: string;
    hostName: string;
    destination: string;
    episode?: number;
    duration?: number;
    categories?: string[];
    price?: string;
}

// Define interfaces that represent data in your app's state

export type PERMISSION_TYPE = 'user' | 'artisan' | 'admin' | "" | null;

export interface User {
    id?: string;
    firstname?: string;
    lastname?: string;
    email: string;
    password: string;
    permission?: string[];
}

export interface AuthState {
    user: User | null;
    token: string | null;
    loggingIn: boolean;
    loggedIn: boolean;
    registering: boolean;
    registered: boolean;
    role?: PERMISSION_TYPE
}

export interface AlertState {
    message: string | null;
    type: 'success' | 'error' | null;
}

export interface RootState {
    auth: AuthState;
    users: { [userId: string]: User };
    alert: AlertState | null;
}

// Define action types as constants to avoid typos or bugs
export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

// Define action interfaces and/or creators to enforce type safety in reducers/middleware
interface LoginRequestAction {
    type: typeof LOGIN_REQUEST;
    payload: { email: string; password: string };
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: { user: User; token: string };
}

interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    error: string;
}

export type AuthActionTypes =
    | LoginRequestAction
    | LoginSuccessAction
    | LoginFailureAction;
