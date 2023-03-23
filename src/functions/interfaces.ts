
export const VAR_STR_ARTISAN = "artisan"
export const VAR_STR_USER = "user"
export const VAR_STR_ADMIN = "admin"

export interface AuthInfo {
    firstname?: string;
    lastname?: string;
    username: string;
    password: string;
    permission: string | undefined;
    currentRole: string | undefined;
}

export interface userState {
    authentication: {
        loggingIn: boolean;
        loggedIn: boolean;
        user: any;
    };
}

export interface localeState {
    locale: string;
}

export interface DropdownItem {
    name: string;
    link: string;
}
