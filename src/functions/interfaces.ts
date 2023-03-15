
export interface AuthInfo {
    firstName?: string;
    lastName?: string;
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

export interface DropdownItem {
    name: string;
    link: string;
}