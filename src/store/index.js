import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { toast } from 'react-toastify';

import  alertSlice  from './alert.slice';
import  authSlice  from './auth.slice';
import  usersSlice  from './users.slice';
import  localeSlice from './locale.slice';
import  courseSlice from './course.slice';

export * from './alert.slice';
export * from './auth.slice';
export * from './users.slice';
export * from './locale.slice';
export * from './course.slice';

const rootReducer = combineReducers({
    locales: localeSlice,
    course: courseSlice,
    alert: alertSlice,
    auth: authSlice,
    users: usersSlice,    
});

export const store = configureStore({
    reducer: rootReducer,
});