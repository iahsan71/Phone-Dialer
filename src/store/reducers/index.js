// Root Reducer

import { combineReducers } from "redux";
import authUserReducer from "./authUser";
import dialerReducer from "./dailerReducer";

export let rootReducer = combineReducers({
    authUser: authUserReducer,
    dailer: dialerReducer,
});

export default rootReducer;
