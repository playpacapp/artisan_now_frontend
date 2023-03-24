import { configureStore } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import  alertReducer  from './alert.slice';
import  authReducer  from './auth.slice';
import  usersReducer  from './users.slice';
import  localeReduer from './locale.slice';
import  courseReducer from './course.slice';

export * from './alert.slice';
export * from './auth.slice';
export * from './users.slice';
export * from './locale.slice';
export * from './course.slice';


export const store = configureStore({
    reducer: {
        alertReducer,
        authReducer,
        usersReducer,
        localeReduer,
        courseReducer
    },
});