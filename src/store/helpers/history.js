import { createBrowserHistory } from 'history';

export const history = (typeof window !== 'undefined' && window.localStorage)? createBrowserHistory() : undefined;