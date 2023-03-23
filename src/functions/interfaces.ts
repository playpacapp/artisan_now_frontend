
export interface AuthInfo {
    firstname?: string;
    lastname?: string;
    username: string;
    password: string;
    permission: "user" | "artisan" | "admin" | undefined;
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
