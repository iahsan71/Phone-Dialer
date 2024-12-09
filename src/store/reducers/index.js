// Root Reducer

import { combineReducers } from "redux";
import dialerReducer from "./dailerReducer";

export let rootReducer = combineReducers({
    dailer: dialerReducer,
});

export default rootReducer;
