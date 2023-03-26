
export const VAR_STR_ARTISAN = "artisan"
export const VAR_STR_USER = "user"
export const VAR_STR_ADMIN = "admin"

///// Tab Names
export const VAR_STR_EXPERIENCE = "experience"

export const VAR_STR_RESERVATIONS = "reservation"
export const VAR_STR_TRANSACTION_HISTORY = "transaction-history"


export interface AuthInfo {
    firstname?: string;
    lastname?: string;
    email: string;
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

export interface AlertState {
    message: string;
    showAfterRedirect: boolean;
}

export interface localeState {
    locale: string;
}

export interface DropdownItem {
    name: string;
    link: string;
}
