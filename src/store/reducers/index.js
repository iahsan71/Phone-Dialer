// Root Reducer

import { combineReducers } from "redux";
import dialerReducer from "./dailerReducer";
import authUserReducer from "./authUser";

export let rootReducer = combineReducers({
    authUser: authUserReducer,
    dailer: dialerReducer,
});

export default rootReducer;
