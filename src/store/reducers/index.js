import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { registration } from './registeration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import localeSlice from './locale.reducer';
import courseSlice from './course.reducer';
import {toast} from "react-toastify";

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    localeSlice,
    courseSlice,
    alert,
});

export default rootReducer;