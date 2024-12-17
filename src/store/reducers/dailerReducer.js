const initialState = {
    dialedNumber: "",
    calls: [],
    lastDocument: "",
    hasMoreDocument: true,
};

const dialerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DIALED_NUMBER":
            return {
                ...state,
                dialedNumber: action.payload,
            };
        case "DELETE_CALL":
            return {
                ...state,
                calls: state.calls.filter((call) => call.id !== action.payload),
            };
        case "FETCH_CALLS":
            return {
                ...state,
                calls: action.payload.data,
                lastDocument: action.payload.lastDocument,
                hasMoreDocument: action.payload.hasMoreDocument,
            };
        case "FETCH_CALLS_MORE":
            return {
                ...state,
                calls: [...state.calls, ...action.payload.data],
                lastDocument: action.payload.lastDocument,
                hasMoreDocument: action.payload.hasMoreDocument,
            };
        default:
            return state;
    }
};

export default dialerReducer;
