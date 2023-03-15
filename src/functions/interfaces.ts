
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