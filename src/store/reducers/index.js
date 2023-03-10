import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { registration } from './registeration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert
});

export default rootReducer;